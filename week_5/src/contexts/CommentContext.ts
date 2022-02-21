import { createContext } from "react";

export interface Comment {
  id: number;
  comment: string;
  date: string;
  user: string;
}

interface ICommentContext {
  comments: Comment[];
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
}

export const CommentContext = createContext<ICommentContext | null>(null);
