import React, { useEffect, useState, useContext } from "react";
// import useReactRouter from "use-react-router";
// import { match as Match } from "react-router";
// import Client from "../api/client";
// import DemoDB from "../DB/db";
import Home, { IntroducePage } from "../components/Home";
import { DBContext as DB } from "../App";
import IntroduceTable from "../DB/introduceTable";

const init: IntroducePage = {
  title: "",
  subTitle: "",
  userId: "",
  name: "",
  joiningYear: "",
  lang: "",
  description: ""
};

const HomeContainer: React.FC = () => {
  // const { match } = useReactRouter<{ match: Match }>();
  const [state, setIntroduce] = useState(init);
  const db = useContext(DB);
  useEffect(() => {
    IntroduceTable.createIntroducePage(db.introduce, db.user).then(res => {
      setIntroduce(res);
    });
  }, [db]);
  return <Home {...state} />;
};

export default HomeContainer;
