import React, { useState, useEffect, useContext } from "react";
import Review, {
  ReviewChild as TReview,
  ReviewPage
} from "../components/Review";
import { DBContext as DB } from "../App";
import ReviewTable from "../DB/reviewTable";

const init: TReview = { id: "", userId: "", title: "", content: "", date: "" };
const pageInit: ReviewPage = { title: "", subTitle: "", reviews: [init] };

const inputInit = { title: "", content: "" };

export const InputContext = React.createContext({ title: "", content: "" });

export const ReviewContainer: React.FC = () => {
  const [page, setReview] = useState(pageInit);
  const db = useContext(DB);
  useEffect(() => {
    ReviewTable.createPage(db.page, db.review).then(res => {
      setReview(res);
    });
  }, [db]);
  return (
    <InputContext.Provider value={inputInit}>
      <Review {...page} />
    </InputContext.Provider>
  );
};

export default ReviewContainer;
