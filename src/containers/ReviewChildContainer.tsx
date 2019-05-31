import React, { useState, useEffect, useContext } from "react";

// Router
import useReactRouter from "use-react-router";

// components
import Child from "../components/ReviewChild";
import { ReviewChild } from "../components/Review";

// DB
import { DBContext as DB } from "../App";
import ReviewTable from "../DB/reviewTable";

const init: ReviewChild = {
  id: "",
  userId: "",
  title: "",
  date: "",
  content: ""
};

const ReviewChildContainer: React.FC = () => {
  const { match } = useReactRouter<{ id: string }>();
  const [state, setReview] = useState(init);
  const db = useContext(DB);
  useEffect(() => {
    ReviewTable.find(db.review, Number(match.params.id)).then(res =>
      setReview(res)
    );
  }, [db.review, match.params.id]);
  return <Child {...state} />;
};
export default ReviewChildContainer;
