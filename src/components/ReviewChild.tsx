import React from "react";
import { Header, Segment } from "semantic-ui-react";
import styled from "styled-components";
import { ReviewImage, ReviewChild } from "./Review";

const Child: React.FC<ReviewChild> = ({
  title,
  date,
  imageUrl,
  description
}) => {
  return (
    <>
      <Container>
        <Header as="h1">
          {title}
          <Header.Subheader>{date}</Header.Subheader>
        </Header>
        <ReviewImage imageUrl={imageUrl} />
        <Segment padded>{description}</Segment>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 20px;
`;

export default Child;
