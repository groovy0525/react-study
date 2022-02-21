import { useContext, useEffect } from "react";
import styled from "styled-components";
import { RiDeleteBinLine } from "react-icons/ri";
import { Comment, CommentContext } from "../contexts/CommentContext";
import { UserContext } from "../contexts/UserContext";

interface CommentProps {
  comment: Comment;
}

function CommentItem({ comment }: CommentProps) {
  const userState = useContext(UserContext);
  const commentsState = useContext(CommentContext);

  const user = userState?.user;
  const setComment = commentsState!.setComments;

  const onClick = () => {
    if (user !== comment.user) {
      return;
    }
    setComment(prev =>
      prev.filter(prevComment => prevComment.id !== comment.id)
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (comment.existTime >= 30) {
        setComment(prev =>
          prev.filter(prevComment => prevComment.id !== comment.id)
        );
      }
      setComment(prev =>
        prev.map(prevComment =>
          prevComment.id === comment.id
            ? { ...prevComment, existTime: prevComment.existTime + 1 }
            : prevComment
        )
      );
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [comment, setComment]);

  return (
    <CommentBox>
      <Author>{comment.user}</Author>
      <Summary>{comment.comment}</Summary>
      <DateInfo>{comment.date}</DateInfo>
      {user === comment.user && (
        <RemoveButton onClick={onClick}>
          <RiDeleteBinLine />
        </RemoveButton>
      )}
    </CommentBox>
  );
}

export default CommentItem;

const CommentBox = styled.li`
  position: relative;
  padding: 20px 30px;
  border-radius: 10px;
  background-color: #fff;

  & + & {
    margin-top: 10px;
  }
`;

const Author = styled.span`
  font-size: 22px;
  font-weight: 500;
`;

const Summary = styled.p`
  font-size: 18px;
`;

const DateInfo = styled.span`
  font-weight: 300;
  font-size: 12px;
  opacity: 0.8;
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 22px;

  svg {
    color: red;
  }
`;
