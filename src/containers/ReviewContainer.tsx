import React, { useState, useEffect, useContext } from "react";
// import useReactRouter from "use-react-router";.
// import { match as Match } from "react-router";
import Review, { Review as TReview, ReviewPage } from "../components/Review";
import { DBContext as DB } from "../App";
import ReviewTable from "../DB/reviewTable";

const init: TReview = { id: "", title: "", content: "" };
const pageInit: ReviewPage = { title: "", subTitle: "", reviews: [init] };

export const InputContext = React.createContext({ title: "", content: "" });

export const ReviewContainer: React.FC = () => {
  // const { match } = useReactRouter<{ match: Match }>();
  const [page, setReview] = useState(pageInit);
  const db = useContext(DB);
  useEffect(() => {
    ReviewTable.createPage(db.page, db.review).then(res => {
      setReview(res);
    });
  }, [db]);
  return (
    <InputContext.Provider value={init}>
      <Review {...page} />
    </InputContext.Provider>
  );
};

export default ReviewContainer;
