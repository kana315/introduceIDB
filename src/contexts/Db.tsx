import React from "react";
import MyDB from "../DB/db";

export const DBContext = React.createContext((null as unknown) as MyDB);

const Provider = ({ db, children }: { db: MyDB; children: JSX.Element }) => {
  return <DBContext.Provider value={db}>{children}</DBContext.Provider>;
};
export default Provider;

export const useDb = () => React.useContext(DBContext);
