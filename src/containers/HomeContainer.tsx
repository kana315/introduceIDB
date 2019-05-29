import React, { useEffect, useState, useContext } from "react";
// import useReactRouter from "use-react-router";
// import { match as Match } from "react-router";
// import Client from "../api/client";
// import DemoDB from "../DB/db";
import Home from "../components/Home";
import { Context as DB } from "../App";
import IntroduceTable from "../DB/introduceTable";

const init = {
  title: "Introduce",
  subTitle: "Init",
  userId: 1,
  name: "Kana",
  joiningYear: "2019年",
  lang: "使用言語：Ruby、JavaScript、TypeScript",
  description: "description"
};

const HomeContainer: React.FC = () => {
  // const { match } = useReactRouter<{ match: Match }>();
  const [state, setIntroduce] = useState(init);
  const db = useContext(DB);
  useEffect(() => {
    IntroduceTable.create(db.introduce, {
      title: "Introduce",
      subTitle: "自己紹介"
    });
    IntroduceTable.find(db.introduce, "Introduce").then(res =>
      setIntroduce(res)
    );
  }, [db]);
  return <Home {...state} />;
};

export default HomeContainer;
