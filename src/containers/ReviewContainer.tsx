import React, { useState, useEffect } from "react";

// Router
import useReactRouter from "use-react-router";

// components
import Review from "../components/Review/Review";
import { Props as ReviewType } from "../components/Review/Review";

// DB
import { useDb } from "../contexts/Db";
import ReviewTable from "../DB/reviewTable";

const init: ReviewType = {
  id: "",
  userId: "",
  title: "",
  date: "",
  content: ""
};

const ReviewContainer: React.FC = () => {
  const [state, setReview] = useState(init);
  const { match } = useReactRouter<{ id: string }>();
  const db = useDb();
  useEffect(() => {
    ReviewTable.find(db.review, Number(match.params.id)).then(res => {
      setReview(res as ReviewType);
    });
  }, [db, match.params.id]);
  return <Review {...state} />;
};
export default ReviewContainer;
