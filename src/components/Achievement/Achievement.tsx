import React from "react";

// view
import { Header, Segment } from "semantic-ui-react";
import styled from "styled-components";

// components
import { AchieveImage } from "./AchievementCards";

export type Achievement = {
  id: string | number;
  userId: string | number;
  title: string;
  date: string;
  imageUrl?: string;
  description: string;
};

const Achievement: React.FC<Achievement> = ({
  title,
  date,
  imageUrl,
  description
}) => {
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  });
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

export default Achievement;
