import React, { useEffect, useState } from "react";
import useReactRouter from "use-react-router";

// component, type
import Achievement, {
  Achievement as AchievementType
} from "../components/Achievement/Achievement";

// DB
import { useDb } from "../contexts/Db";
import AchieveTable from "../DB/achieveTable";

const init: AchievementType = {
  id: "",
  userId: "",
  title: "",
  date: "",
  description: ""
};

const AchieveContainer: React.FC = () => {
  const [achieve, setAchieve] = useState(init);
  const db = useDb();

  // RouteからID取得
  const { match } = useReactRouter<{ id: string }>();
  const paramsId = Number(match.params.id);

  useEffect(() => {
    AchieveTable.find(db.achievement, paramsId).then(
      (res): void => {
        const achieveChild = res as AchievementType;
        setAchieve(achieveChild);
      }
    );
  }, [db.achievement, paramsId]);
  return <Achievement {...achieve} />;
};

export default AchieveContainer;
