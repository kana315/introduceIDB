import React, { useContext, useState } from "react";
import useReactRouter from "use-react-router";
import {
  Card as SemanticCard,
  Header,
  Image,
  Icon,
  Form,
  Button
} from "semantic-ui-react";
import styled from "styled-components";

import { DBContext as DB } from "../App";
import AchieveTable from "../DB/achieveTable";

export type AchieveChild = {
  id: string | number;
  userId: string | number;
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
  const [inputTitle, setTitle] = useState("");
  const [inputDescription, setDescription] = useState("");
  const [inputImageUrl, setImageUrl] = useState("");
  const [inputDate, setDate] = useState("");
  const db = useContext(DB);
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
        <FormArea>
          <Form>
            <Form.Field>
              <label>タイトル</label>
              <input
                type="text"
                name="title"
                value={inputTitle}
                maxLength={50}
                onChange={e => {
                  setTitle(e.target.value);
                }}
              />
            </Form.Field>
            <Form.Field>
              <label>説明</label>
              <input
                type="text"
                name="description"
                onChange={e => setDescription(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>画像URL</label>
              <input
                type="text"
                name="imageUrl"
                onChange={e => setImageUrl(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>日付</label>
              <input
                type="text"
                name="date"
                onChange={e => setDate(e.target.value)}
              />
            </Form.Field>
            <Button
              onClick={() => {
                AchieveTable.create(db.achievement, {
                  userId: 1,
                  title: inputTitle,
                  description: inputDescription,
                  imageUrl: inputImageUrl,
                  date: inputDate
                });
                window.location.reload();
              }}
            >
              保存
            </Button>
          </Form>
        </FormArea>
      </Container>
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

const FormArea = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 930px;
`;

export default Achievement;
