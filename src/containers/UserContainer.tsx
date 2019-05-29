import React, { useEffect } from "react";
import UserPage from "../components/User";

const init: User[] = [];

const UserContainer: React.FC = () => {
  // const [state, setUsers] = useState<User[]>(init);
  useEffect(() => {
    // db.findByTitle("Introduce").then(res => {
    //   console.log(res);
    // });
  }, [db]);
  return <UserPage {...init} />;
};

export default UserContainer;
