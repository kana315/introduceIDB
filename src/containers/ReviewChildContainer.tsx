import React, { useState, useEffect } from "react";
import useReactRouter from "use-react-router";
import { match as Match } from "react-router";
import Client from "../api/client";
import Child from "../components/ReviewChild";
import { ReviewChild } from "../components/Review";

const init: ReviewChild = { id: "", title: "", date: "", description: "" };

const ReviewChildContainer: React.FC = () => {
  const { match } = useReactRouter<{ match: Match<{ id: string }> }>();
  const [state, setReview] = useState(init);
  useEffect(() => {
    Client<ReviewChild>(match.url).then(res => {
      setReview(res);
    });
  }, [match.url]);
  return <Child {...state} />;
};
export default ReviewChildContainer;
