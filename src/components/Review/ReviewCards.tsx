import React from "react";
import { Props as Review } from "./Review";

// Router
import { Link } from "react-router-dom";

// View
import { Card as SemanticCard } from "semantic-ui-react";
import styled from "styled-components";

// type
import { ReviewPage } from "./index";

// component
import ReviewImage from "./ReviewImage";

const ReviewCard: React.FC<Review> = ({
  id,
  title,
  imageUrl,
  date,
  content
}) => {
  return (
    <Card>
      <ReviewImage imageUrl={imageUrl} />
      <Card.Content>
        <Card.Header>
          <Link to={`/reviews/${id}`}>{title}</Link>
        </Card.Header>
        <Card.Meta>{date}</Card.Meta>
        <Card.Description>{content}</Card.Description>
      </Card.Content>
    </Card>
  );
};

const ReviewCards: React.FC<Pick<ReviewPage, "reviews">> = ({ reviews }) => {
  if (reviews === []) {
    return <div>NODATA</div>;
  } else {
    const elements = reviews.map((v, i) => {
      return <ReviewCard key={i} {...v} />;
    });
    return <>{elements}</>;
  }
};

const Card: any = styled(SemanticCard)`
  margin: 0 !important;
`;

export default ReviewCards;
