import React from "react";
import { Header, Segment, Icon, Container } from "semantic-ui-react";
import styled from "styled-components";
import { User } from "../DB/db";

const UserPage: React.FC<User[]> = users => {
  return (
    <Container>
      <Title>
        <Header as="h1" icon>
          <Icon name="chess pawn" />
          User
          <Header.Subheader>---UserPage---</Header.Subheader>
        </Header>
      </Title>
      <Segment>
        <Header as="h2">Name</Header>
        <p>users...</p>
      </Segment>
    </Container>
  );
};

const Title = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export default UserPage;
