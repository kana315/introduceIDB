import React, { useEffect } from "react";
import UserPage from "../components/User";

const init: any = [];

const UserContainer: React.FC = () => {
  // const [state, setUsers] = useState<User[]>(init);
  useEffect(() => {
    // db.findByTitle("Introduce").then(res => {
    //   console.log(res);
    // });
  }, []);
  return <UserPage {...init} />;
};

export default UserContainer;
