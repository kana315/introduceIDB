import React from "react";

// View
import { Header, Icon } from "semantic-ui-react";
import styled from "styled-components";

// components
import AchieveForm from "./AchieveForm";
import AchievementCards from "./AchievementCards";

// types
import { Achievement } from "./Achievement";

export type AchievePage = {
  title: string;
  subTitle: string;
  achievements: Achievement[];
  setIsSave: (v: boolean) => void;
};

const AchievementList: React.FC<AchievePage> = ({
  title,
  subTitle,
  achievements,
  setIsSave
}) => {
  return (
    <>
      <Title>
        <Header as="h1" icon>
          <Icon name="chess knight" />
          {title}
          <Header.Subheader>---{subTitle}---</Header.Subheader>
        </Header>
      </Title>
      <Container>
        <AchieveForm setIsSave={setIsSave} />
      </Container>
      <Container>
        <Wrapper>
          {achievements.map((v, i) => {
            return <AchievementCards key={i} {...v} />;
          })}
        </Wrapper>
      </Container>
    </>
  );
};

const Title = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 930px;
`;

export default AchievementList;
