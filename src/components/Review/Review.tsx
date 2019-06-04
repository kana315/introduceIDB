import React from "react";

// view
import { Header, Segment } from "semantic-ui-react";
import styled from "styled-components";

// component
import { ReviewImage } from "./ReviewImage";

export type Props = {
  id: number | string;
  userId?: number | string;
  title: string;
  imageUrl?: string;
  date: string;
  content: string;
};

const Child: React.FC<Props> = ({ title, date, imageUrl, content }) => {
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  });
  return (
    <>
      <Container>
        <Header as="h1">
          {title}
          <Header.Subheader>{date}</Header.Subheader>
        </Header>
        <ReviewImage imageUrl={imageUrl} />
        <Segment padded>{content}</Segment>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 20px;
`;

export default Child;
