import React from "react";
import { Header, Segment, Icon, Container } from "semantic-ui-react";
import styled from "styled-components";
// import { Introduce as IntroducePage } from "../DB/db";

// export type IntroducePage = {
//   title: string;
//   subTitle: string;
//   name: string;
//   joiningYear: string;
//   lang: string;
//   description: string;
// };

const IntroduceImage = () => (
  <Icon circular color="teal" size="huge" name="paw" />
);

const Home: React.FC<IntroducePage> = ({
  title,
  subTitle,
  name,
  joiningYear,
  lang,
  description
}) => {
  return (
    <Container>
      <Title>
        <Header as="h1" icon>
          <Icon name="chess pawn" />
          {title}
          <Header.Subheader>---{subTitle}---</Header.Subheader>
        </Header>
      </Title>
      <Segment>
        <Header as="h2">
          <IntroduceImage />
          {name}
        </Header>
        <p>{joiningYear}</p>
        <p>{lang}</p>
        <p>{description}</p>
      </Segment>
    </Container>
  );
};

const Title = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export default Home;
