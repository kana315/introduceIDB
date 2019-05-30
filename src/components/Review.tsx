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
// import { Link } from "react-router-dom";

// DB操作
import { DBContext as DB } from "../App";
import ReviewTable from "../DB/table";

export type ReviewChild = {
  id: number | string;
  title: string;
  imageUrl?: string;
  date: string;
  description: string;
};

export type Review = {
  id: number | string;
  title: string;
  content: string;
};

export type ReviewPage = {
  title: string;
  subTitle: string;
  reviews: Review[];
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

// const ReviewCard: React.FC<ReviewChild> = ({
//   id,
//   title,
//   imageUrl,
//   date,
//   description
// }) => {
//   return (
//     <Card>
//       <ReviewImage imageUrl={imageUrl} />
//       <Card.Content>
//         <Card.Header>
//           <Link to={`/reviews/${id}`}>{title}</Link>
//         </Card.Header>
//         <Card.Meta>{date}</Card.Meta>
//         <Card.Description>{description}</Card.Description>
//       </Card.Content>
//     </Card>
//   );
// };

const ReviewCard: React.FC<Review> = ({ id, title, content }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
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
  const db = useContext(DB);
  console.log("aaaa", reviews);
  return (
    <>
      <Title>
        <Header as="h1" icon>
          <Icon name="chess rook" />
          {title}
          <Header.Subheader>---{subTitle}---</Header.Subheader>
        </Header>
      </Title>
      <FormArea>
        <Form>
          <Form.Field>
            <label>Title</label>
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
            <label>Content</label>
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
          <Button
            onClick={() => {
              ReviewTable.create(db.review, {
                title: inputTitle,
                content: inputContent
              });
              // TODO
              setContent("");
              setTitle("");
            }}
          >
            保存
          </Button>
        </Form>
      </FormArea>
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

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 290px 290px 290px;
  column-gap: 20px;
  row-gap: 20px;
  grid-template-columns: repeat(auto-fill, 290px);
  justify-content: center;
`;

export default Review;
