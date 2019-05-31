import React, { useState, useContext } from "react";

// View
import {
  Card as SemanticCard,
  Header,
  Icon,
  Image,
  Button,
  Form
} from "semantic-ui-react";
import styled from "styled-components";

// Router
import { Link } from "react-router-dom";

// DB操作
import { DBContext as DB } from "../App";
import ReviewTable from "../DB/reviewTable";

export type ReviewChild = {
  id: number | string;
  userId?: number | string;
  title: string;
  imageUrl?: string;
  date: string;
  content: string;
};

export type ReviewPage = {
  title: string;
  subTitle: string;
  reviews: ReviewChild[];
};

const DefaultImage = () => (
  <Image
    src="https://react.semantic-ui.com/images/wireframe/image.png"
    size="medium"
    disabled
  />
);

export const ReviewImage: React.FC<Pick<ReviewChild, "imageUrl">> = ({
  imageUrl
}) =>
  typeof imageUrl !== "undefined" ? (
    <Image src={imageUrl} size="medium" />
  ) : (
    <DefaultImage />
  );

const ReviewCard: React.FC<ReviewChild> = ({
  id,
  title,
  imageUrl,
  date,
  content
}) => {
  return (
    <Card>
      <ReviewImage imageUrl={imageUrl} />
      <Card.Content>
        <Card.Header>
          <Link to={`/reviews/${id}`}>{title}</Link>
        </Card.Header>
        <Card.Meta>{date}</Card.Meta>
        <Card.Description>{content}</Card.Description>
      </Card.Content>
    </Card>
  );
};

const ReviewCards: React.FC<Pick<ReviewPage, "reviews">> = ({ reviews }) => {
  if (reviews === []) {
    return <div>NODATA</div>;
  } else {
    const elements = reviews.map((v, i) => {
      return <ReviewCard key={i} {...v} />;
    });
    return <>{elements}</>;
  }
};

const Review: React.FC<ReviewPage> = ({ title, subTitle, reviews }) => {
  const [inputTitle, setTitle] = useState("");
  const [inputContent, setContent] = useState("");
  const [inputImageUrl, setImageUrl] = useState("");
  const [inputDate, setDate] = useState("");
  const db = useContext(DB);
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
              <label>レビュー</label>
              <input
                type="text"
                name="content"
                value={inputContent}
                maxLength={400}
                onChange={e => {
                  setContent(e.target.value);
                }}
              />
            </Form.Field>
            <Form.Field>
              <label>イメージ画像</label>
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
                ReviewTable.create(db.review, {
                  pageId: 1,
                  userId: 1,
                  title: inputTitle,
                  content: inputContent,
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

const FormArea = styled.div`
  display: flex;
  justify-content: center;
`;

const Card: any = styled(SemanticCard)`
  margin: 0 !important;
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

export default Review;
