import React, { useEffect, useState } from "react";
import useReactRouter from "use-react-router";
import { match as Match } from "react-router";
import Client from "../api/client";
import Achievements, { Achieve } from "../components/Achievement";

const init: Achieve = {
  title: "",
  subTitle: "",
  achievements: []
};

const AchieveContainer: React.FC = () => {
  const { match } = useReactRouter<{ match: Match }>();
  const [state, setAchieve] = useState(init);
  useEffect(() => {
    Client<Achieve>(`${match.url}`).then(achievement => {
      setAchieve(achievement);
    });
  }, [match.url]);
  return <Achievements {...state} />;
};

export default AchieveContainer;
