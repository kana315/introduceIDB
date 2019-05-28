import React, { useEffect, useState } from "react";
import useReactRouter from "use-react-router";
import { match as Match } from "react-router";
import Client from "../api/client";
import Home, { IntroducePage } from "../components/Home";

const init: IntroducePage = {
  title: "",
  subTitle: "",
  name: "",
  joiningYear: "",
  lang: "",
  description: ""
};

const HomeContainer: React.FC = () => {
  const { match } = useReactRouter<{ match: Match }>();
  const [state, setIntroduce] = useState<IntroducePage>(init);
  useEffect(() => {
    Client<IntroducePage>(`${match.url}`).then(res => {
      setIntroduce(res);
    });
  }, [match.url]);
  return <Home {...state} />;
};

export default HomeContainer;
