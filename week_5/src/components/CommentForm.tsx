import { useContext, useState } from "react";
import styled from "styled-components";
import { CommentContext, Comment } from "../contexts/CommentContext";
import { UserContext } from "../contexts/UserContext";
import Button from "./Button";
import Layout from "./Layout";

function CommentForm() {
  const [text, setText] = useState<string>("");

  const userState = useContext(UserContext);
  const commentState = useContext(CommentContext);

  const user = userState!.user;
  const setComment = commentState!.setComments;

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const date = new Date();
    const comment: Comment = {
      user,
      id: Date.now(),
      comment: text,
      date: `${date.getFullYear()}. ${date.getMonth()}. ${date.getDate()}`,
    };
    setComment(prev => [...prev, comment]);
    setText("");
  };

  return (
    <Layout>
      <Base>
        <Form onSubmit={onSubmit}>
          <TextArea
            disabled={!user ? true : false}
            value={text}
            onChange={onChange}
          />
          <Button htmlType="submit" disabled={!user ? true : false}>
            Tweet
          </Button>
        </Form>
      </Base>
    </Layout>
  );
}

export default CommentForm;

const Base = styled.div`
  width: 70%;
  margin: 40px auto;
`;

const Form = styled.form`
  display: flex;
  padding: 30px;
  border-radius: 10px;
  background-color: #757575;
`;

const TextArea = styled.textarea`
  flex: 1;
  resize: none;
`;
