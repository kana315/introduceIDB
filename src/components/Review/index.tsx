import React from "react";
import { Props as Review } from "./Review";

// View
import { Header, Icon } from "semantic-ui-react";
import styled from "styled-components";

// components
import ReviewForm from "./ReviewForm";
import ReviewCards from "./ReviewCards";

export type ReviewPage = {
  title: string;
  subTitle: string;
  reviews: Review[];
  setIsSave: (v: boolean) => void;
};

const ReviewList: React.FC<ReviewPage> = ({
  title,
  subTitle,
  reviews,
  setIsSave
}) => {
  return (
    <>
      <Title>
        <Header as="h1" icon>
          <Icon name="chess rook" />
          {title}
          <Header.Subheader>---{subTitle}---</Header.Subheader>
        </Header>
      </Title>
      <Container>
        <ReviewForm setIsSave={setIsSave} />
      </Container>
      <Wrapper>
        <ReviewCards reviews={reviews} />
      </Wrapper>
    </>
  );
};

const Title = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const Container = styled.div`
  padding: 20px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 290px 290px 290px;
  column-gap: 20px;
  row-gap: 20px;
  grid-template-columns: repeat(auto-fill, 290px);
  justify-content: center;
`;

export default ReviewList;
