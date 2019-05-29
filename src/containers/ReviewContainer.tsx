import React, { useEffect, useContext } from "react";
// import useReactRouter from "use-react-router";.
// import { match as Match } from "react-router";
import Review, { ReviewPage } from "../components/Review";

const init: ReviewPage = { title: "Review", subTitle: "レビュー" };

const ReviewContainer: React.FC = () => {
  // const { match } = useReactRouter<{ match: Match }>();
  // const [state, setReview] = useState(init);
  useEffect(() => {
    db.findReview("Review").then(v => {
      console.log(v);
    });
  }, [db]);
  return <Review {...init} />;
};

export default ReviewContainer;
