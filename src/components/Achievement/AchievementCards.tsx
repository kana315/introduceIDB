import React from "react";
import useReactRouter from "use-react-router";

// View
import { Card as SemanticCard, Image, Button } from "semantic-ui-react";
import styled from "styled-components";

// types
import { Achievement } from "./Achievement";

const DefaultImage = () => (
  <Image
    src="https://react.semantic-ui.com/images/wireframe/image.png"
    size="medium"
    disabled
  />
);

export const AchieveImage: React.FC<Pick<Achievement, "imageUrl">> = ({
  imageUrl
}) =>
  typeof imageUrl !== "undefined" ? (
    <Image src={imageUrl} size="medium" />
  ) : (
    <DefaultImage />
  );

const AchievementCards: React.FC<Achievement> = ({
  title,
  imageUrl,
  date,
  id
}) => {
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

const Card: any = styled(SemanticCard)`
  margin: 10px !important;
`;

export default AchievementCards;
