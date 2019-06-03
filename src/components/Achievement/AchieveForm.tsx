import React, { useState } from "react";

// View
import { Form, Button } from "semantic-ui-react";
import styled from "styled-components";

// DB
import AchieveTable from "../../DB/achieveTable";
import { useDb } from "../../contexts/Db";

// types
import { AchievePage } from "./index";

const AchieveForm: React.FC<Pick<AchievePage, "setIsSave">> = ({
  setIsSave
}) => {
  const [inputTitle, setTitle] = useState("");
  const [inputDescription, setDescription] = useState("");
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

export default AchieveForm;
