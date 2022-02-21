import { useContext } from "react";
import styled from "styled-components";
import { CommentContext } from "../contexts/CommentContext";
import CommentItem from "./CommentItem";
import Layout from "./Layout";

function CommentList() {
  const commentState = useContext(CommentContext);

  const comments = commentState?.comments;

  return (
    <Layout>
      {comments && comments.length > 0 && (
        <Base>
          {comments.map(comment => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </Base>
      )}
    </Layout>
  );
}

export default CommentList;

const Base = styled.ul`
  list-style: none;
  width: 70%;
  margin: auto;
  padding: 30px;
  border-radius: 10px;
  background-color: #a3cbff;
`;
