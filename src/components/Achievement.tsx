import React from "react";
import useReactRouter from "use-react-router";
import {
  Card as SemanticCard,
  Header,
  Image,
  Icon,
  Button
} from "semantic-ui-react";
import styled from "styled-components";

export type AchieveChild = {
  id: string | number;
  title: string;
  date: string;
  imageUrl?: string;
  description: string;
};

export type Achieve = {
  title: string;
  subTitle: string;
  achievements: AchieveChild[];
};

const DefaultImage = () => (
  <Image
    src="https://react.semantic-ui.com/images/wireframe/image.png"
    size="medium"
    disabled
  />
);

export const AchieveImage: React.FC<Pick<AchieveChild, "imageUrl">> = ({
  imageUrl
}) =>
  typeof imageUrl !== "undefined" ? (
    <Image src={imageUrl} size="medium" />
  ) : (
    <DefaultImage />
  );

const CardComp: React.FC<AchieveChild> = ({ title, imageUrl, date, id }) => {
  const { history } = useReactRouter();
  return (
    <Card>
      <AchieveImage imageUrl={imageUrl} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>{date}</Card.Meta>
        <Card.Description>
          <Button onClick={() => history.push(`achievements/${id}`)}>
            詳細
          </Button>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

const Achievement: React.FC<Achieve> = ({ title, subTitle, achievements }) => {
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
        <Wrapper>
          {achievements.map((v, i) => {
            return <CardComp key={i} {...v} />;
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

const Card: any = styled(SemanticCard)`
  margin: 10px !important;
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

export default Achievement;
