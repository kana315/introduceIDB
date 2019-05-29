import React, { useEffect, useState } from "react";
// import useReactRouter from "use-react-router";
// import { match as Match } from "react-router";
// import Client from "../api/client";
import DemoDB, { Introduce } from "../DB/db";
import Home from "../components/Home";

const init: Introduce = {
  title: "Introduce",
  subTitle: "自己紹介",
  userId: 1,
  name: "Kana",
  joiningYear: "2019年",
  lang: "使用言語：Ruby、JavaScript、TypeScript",
  description: "description"
};

const HomeContainer: React.FC = () => {
  // const { match } = useReactRouter<{ match: Match }>();
  const [state, setIntroduce] = useState<Introduce>(init);
  useEffect(() => {
    db.findIntroduce("Introduce").then(res => {
      res ? setIntroduce(res) : console.log(res);
    });
  }, [db]);
  return <Home {...state} />;
};

export default HomeContainer;
