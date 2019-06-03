import React, { useEffect, useState } from "react";
import Home, { IntroducePage } from "../components/Home";
import IntroduceTable from "../DB/introduceTable";
import { useDb } from "../contexts/Db";

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
  const [state, setIntroduce] = useState(init);
  const db = useDb();
  useEffect(() => {
    IntroduceTable.createIntroducePage(db.introduce, db.user).then(res => {
      setIntroduce(res);
    });
  }, [db]);
  return <Home {...state} />;
};

export default HomeContainer;
