import React from "react";
import { Header, Segment } from "semantic-ui-react";
import styled from "styled-components";
import { AchieveImage, AchieveChild } from "./Achievement";

const Child: React.FC<AchieveChild> = ({
  title,
  date,
  imageUrl,
  description
}) => {
  return (
    <Container>
      <Header as="h1">
        {title}
        <Header.Subheader>{date}</Header.Subheader>
      </Header>
      <AchieveImage imageUrl={imageUrl} />
      <Segment padded>{description}</Segment>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

export default Child;
