import React, { useEffect, useState } from "react";
import useReactRouter from "use-react-router";
import { match as Match } from "react-router";
import Client from "../api/client";
import Review, { ReviewPage } from "../components/Review";

const init: ReviewPage = { title: "", subTitle: "", reviews: [] };

const ReviewContainer: React.FC = () => {
  const { match } = useReactRouter<{ match: Match }>();
  const [state, setReview] = useState(init);
  useEffect(() => {
    Client<ReviewPage>(`${match.url}`).then(review => {
      setReview(review);
    });
  }, [match.url]);
  return <Review {...state} />;
};

export default ReviewContainer;
