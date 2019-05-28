import React, { useEffect } from "react";
// import useReactRouter from "use-react-router";
// import { match as Match } from "react-router";
// import Client from "../api/client";
import DemoDB from "../db";
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
  // const { match } = useReactRouter<{ match: Match }>();
  // const [state, setIntroduce] = useState("init");
  const db = new DemoDB("myDb");
  useEffect(() => {
    db.find(42);
    db.update(1, { title: "New Title" });
    db.deleteRecord(20);
    db.userCreate({ name: "TAMA" });
    db.create({ title: "Title", content: "conconcon", userId: 1 });
    db.loadIntroduce(1);

    // Client<IntroducePage>(`${match.url}`).then(res => {
    //   setIntroduce(res);
    // });
  }, [db]);
  return <Home {...init} />;
};

export default HomeContainer;
