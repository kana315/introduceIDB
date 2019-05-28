import React, { useEffect, useState } from "react";
import useReactRouter from "use-react-router";
import { match as Match } from "react-router";
import Client from "../api/client";
import { AchieveChild } from "../components/Achievement";
import Achievement from "../components/AchieveChild";

const init: AchieveChild = { id: "", title: "", date: "", description: "" };

const AchieveChildContainer: React.FC = () => {
  const { match } = useReactRouter<{ match: Match }>();
  const [achieve, setAchieve] = useState(init);
  useEffect(() => {
    Client<AchieveChild>(`${match.url}`).then(res => {
      setAchieve(res);
    });
  }, [match.url]);
  return <Achievement {...achieve} />;
};

export default AchieveChildContainer;
