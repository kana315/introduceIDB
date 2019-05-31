import React, { useEffect, useState, useContext, createContext } from "react";
import Achievements, { Achieve } from "../components/Achievement";
import { DBContext as DB } from "../App";
import AchieveTable from "../DB/achieveTable";

const init: Achieve = {
  title: "",
  subTitle: "",
  achievements: []
};

const inputInit = {
  title: ""
};

const Input = createContext({ title: "" });

const AchieveContainer: React.FC = () => {
  const db = useContext(DB);
  const [state, setAchieve] = useState(init);
  useEffect(() => {
    AchieveTable.createPage(db.page, db.achievement).then(res =>
      setAchieve(res)
    );
  }, [db]);

  return (
    <Input.Provider value={inputInit}>
      <Achievements {...state} />
    </Input.Provider>
  );
};

export default AchieveContainer;
