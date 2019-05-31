import React, { useEffect, useState, useContext } from "react";
import useReactRouter from "use-react-router";
import { AchieveChild } from "../components/Achievement";
import Achievement from "../components/AchieveChild";

// DB
import { DBContext as DB } from "../App";
import AchieveTable from "../DB/achieveTable";

const init: AchieveChild = {
  id: "",
  userId: "",
  title: "",
  date: "",
  description: ""
};

const AchieveChildContainer: React.FC = () => {
  const { match } = useReactRouter<{ id: string }>();
  const [achieve, setAchieve] = useState(init);
  const db = useContext(DB);
  const paramsId = Number(match.params.id);
  useEffect(() => {
    AchieveTable.find(db.achievement, paramsId).then(res => setAchieve(res));
  }, [db.achievement, paramsId]);
  return <Achievement {...achieve} />;
};

export default AchieveChildContainer;
