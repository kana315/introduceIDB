import React, { useContext } from "react";
import { Header, Icon, Image, Button, Form } from "semantic-ui-react";
import styled from "styled-components";
// import { Link } from "react-router-dom";

export type ReviewChild = {
  id: string | number;
  title: string;
  imageUrl?: string;
  date: string;
  description: string;
};

export type ReviewPage = {
  title: string;
  subTitle: string;
  reviews: ReviewChild[];
};

// TODO
type Review = {
  title: string;
  content: string;
};

const DefaultImage = () => (
  <Image
    src="https://react.semantic-ui.com/images/wireframe/image.png"
    size="medium"
    disabled
  />
);

// export const ReviewImage: React.FC<Pick<ReviewChild, "imageUrl">> = ({
//   imageUrl
// }) =>
//   typeof imageUrl !== "undefined" ? (
//     <Image src={imageUrl} size="medium" />
//   ) : (
//     <DefaultImage />
//   );

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


const InputContext = React.createContext<Review>({ title: "", content: "" });

const Review: React.FC<ReviewPage> = ({ title, subTitle }) => {
  
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
            <input value={state.title} />
          </Form.Field>
          <Form.Field>
            <label>Content</label>
            <input value={state.content} />
          </Form.Field>
          <Button onClick={() => }>保存</Button>
        </Form>
      </FormArea>
      {/* <Wrapper>
        {reviews.map((v, i) => (
          <ReviewCard key={i} {...v} />
        ))}
      </Wrapper> */}
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

// const Card: any = styled(SemanticCard)`
//   margin: 0 !important;
// `;

// const Wrapper = styled.div`
//   display: grid;
//   grid-template-columns: 290px 290px 290px;
//   column-gap: 20px;
//   row-gap: 20px;
//   grid-template-columns: repeat(auto-fill, 290px);
//   justify-content: center;
// `;

export default Review;
