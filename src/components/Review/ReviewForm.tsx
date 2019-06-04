import React, { useState } from "react";

// View
import { Button, Form } from "semantic-ui-react";
import styled from "styled-components";

// DB操作
import { useDb } from "../../contexts/Db";
import ReviewTable from "../../DB/reviewTable";

// types
import { ReviewPage } from "./index";

const ReviewForm: React.FC<Pick<ReviewPage, "setIsSave">> = ({ setIsSave }) => {
  const [inputTitle, setTitle] = useState("");
  const [inputContent, setContent] = useState("");
  const [inputImageUrl, setImageUrl] = useState("");
  const [inputDate, setDate] = useState("");
  const db = useDb();
  return (
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
              userId: 1,
              title: inputTitle,
              content: inputContent,
              imageUrl: inputImageUrl,
              date: inputDate
            }).then(res => res && setIsSave(true));
          }}
        >
          保存
        </Button>
      </Form>
    </FormArea>
  );
};

const FormArea = styled.div`
  display: flex;
  justify-content: center;
`;

export default ReviewForm;
