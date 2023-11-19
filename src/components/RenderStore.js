import React, {useState, useEffect} from "react";
import {db} from "../config/firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import EndpointSite from "./EndpointSite";

// Create a new state called handoffs. It is an array of objects.
// Each object is a handoff.


const RenderStore = () => {
    const defaultHandoff = {"message_history": [{"content": "Hello, how can I help you?"}]}
    const [handoffs, setHandoffs] = useState(defaultHandoff);
    const [ellipsis, setEllipsis] = useState(1);
    const [url, setUrl] = useState("");

    const unsub = onSnapshot(doc(db, "handoffs", "conversation"), (doc) => {
        // console.log("Current data: ", doc.data());
        // set handoffs to the data from the database if they are not equal using JSON.stringify
        if (JSON.stringify(handoffs) !== JSON.stringify(doc.data())) {
            setHandoffs(doc.data());
        }
    });

    // useEffect to launch the endpoint site
    useEffect(() => {
        if(url !== "")
        // window.open(url, "_self");
        window.location.href = url;
    }, [url]);

    // Update the ellipsis every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setEllipsis(ellipsis => ellipsis + 1);
            if (ellipsis > 2) {
                setEllipsis(1);
            }
        }, 500);
        return () => clearInterval(interval);
    });

    const [initialHandoff, setInitialHandoff] = useState(undefined);
    // useEffect handoffs
    useEffect(() => {
        if (JSON.stringify(handoffs) === JSON.stringify(defaultHandoff)) {

        }
        else if (initialHandoff === undefined || JSON.stringify(initialHandoff) === JSON.stringify(handoffs)) {
            console.log("Initial handoff");
            console.log(handoffs);
            setInitialHandoff(handoffs);
        }
        else {
            console.log("Handoffs updated");
            console.log(handoffs);
            // Build URL
            // https://supportflow-agent-ui.vercel.app/?history={{test_history}}&summary={{test_summary}}&customer_name={{test_name}}&customer_id={{test_id}}&customer_email={{test_email}}&escalation_reason={{test_reason}}&best_solution={{test_best_solution}}&other_solutions={{test_other_solutions}}
            // If the parameter is in handoffs, add it to the URL
            let url = "https://supportflow-agent-ui.vercel.app/?";

            // stringified message history is every element in the message history array, separated by double newlines
            let stringified_message_history = "";
            for (let i = 0; i < handoffs["message_history"].length; i++) {
                stringified_message_history += handoffs["message_history"][i]["content"] + "\n\n";
            }
            if (handoffs["message_history"]) {
                url += "history=" + stringified_message_history;
            }
            if (handoffs["summary"]) {
                url += "&summary=" + handoffs["summary"];
            }
            if (handoffs["customer_name"]) {
                url += "&customer_name=" + handoffs["customer_name"];
            }
            if (handoffs["customer_id"]) {
                url += "&customer_id=" + handoffs["customer_id"];
            }
            if (handoffs["customer_email"]) {
                url += "&customer_email=" + handoffs["customer_email"];
            }
            if (handoffs["escalation_reason"]) {
                url += "&escalation_reason=" + handoffs["escalation_reason"];
            }
            if (handoffs["best_solution"]) {
                url += "&best_solution=" + handoffs["best_solution"];
            }
            if (handoffs["other_solutions"]) {
                url += "&other_solutions=" + handoffs["other_solutions"];
            }
            setUrl(encodeURI(url));
        }
    }, [handoffs]);
    return (
        <div>
            <h1>{"Waiting for customer in need of support" + ".".repeat(ellipsis)}</h1>
            {/* {JSON.stringify(handoffs["message_history"][0]["content"])} */}
            {/* Map each message content to a p tag */}
            {/* {handoffs && handoffs["message_history"].map((message) => (
                <p>{"> "+message["content"]}</p>
            ))} */}
            {/* <EndpointSite/> */}
        </div>
    )
}

export default RenderStore;