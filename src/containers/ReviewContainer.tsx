import React, { useEffect } from "react";
// import useReactRouter from "use-react-router";.
// import { match as Match } from "react-router";
import Review, { ReviewPage } from "../components/Review";
import DemoDB from "../DB/db";
import reviewTable from "../DB/reviewTable";

const init: ReviewPage = { title: "Review", subTitle: "init" };

const ReviewContainer: React.FC = () => {
  // const { match } = useReactRouter<{ match: Match }>();
  // const [state, setReview] = useState(init);
  const db = new DemoDB("myDb");
  useEffect(() => {}, [db]);
  return <Review {...init} />;
};

export default ReviewContainer;
