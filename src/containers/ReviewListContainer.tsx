import React, { useState, useEffect } from "react";

// component
import Review from "../components/Review";

// types
import { Props as ReviewType } from "../components/Review/Review";
import { ReviewPage } from "../components/Review";

// DB
import { useDb } from "../contexts/Db";
import ReviewTable from "../DB/reviewTable";

const init: ReviewType = {
  id: "",
  userId: "",
  title: "",
  content: "",
  date: ""
};

const pageInit: Omit<ReviewPage, "setIsSave"> = {
  title: "",
  subTitle: "",
  reviews: [init]
};

export const ReviewContainer: React.FC = () => {
  const [page, setReviewPage] = useState(pageInit);
  const [save, setIsSave] = useState(true);
  const db = useDb();
  useEffect(() => {
    if (save) {
      ReviewTable.createPage(db.page, db.review).then(res => {
        setReviewPage(res);
        setIsSave(false);
      });
    }
  }, [db, save]);
  return <Review {...page} setIsSave={setIsSave} />;
};

export default ReviewContainer;
