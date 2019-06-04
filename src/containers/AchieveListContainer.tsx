import React, { useState, useEffect } from "react";
import AchievementList, { AchievePage } from "../components/Achievement";
import AchieveTable from "../DB/achieveTable";
import { useDb } from "../contexts/Db";

const init: Omit<AchievePage, "setIsSave"> = {
  title: "",
  subTitle: "",
  achievements: []
};

const AchieveListContainer: React.FC = () => {
  const [page, setAchieve] = useState(init);
  const [isSave, setIsSave] = useState(true);
  const db = useDb();
  useEffect(() => {
    if (isSave) {
      AchieveTable.createPage(db.page, db.achievement).then(res => {
        setAchieve(res);
        setIsSave(false);
      });
    }
  }, [isSave, db.page, db.achievement]);

  return <AchievementList {...page} setIsSave={setIsSave} />;
};

export default AchieveListContainer;
