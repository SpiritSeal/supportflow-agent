import { useEffect } from "react";
import Logout from "../components/auth/Logout";
import Center from "../components/utils/Center";
import {db} from "../config/firebase";
import { collection, doc, setDoc } from "firebase/firestore";

import { onSnapshot } from "firebase/firestore";
import RenderStore from "../components/RenderStore";



const Home = (props) => {
  useEffect(() => {}, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Center>
      <RenderStore/>
    </Center>
  );
};

export default Home;
