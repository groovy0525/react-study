import { useState } from "react";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";
import Header from "./components/Header";
import { Comment, CommentContext } from "./contexts/CommentContext";
import { UserContext } from "./contexts/UserContext";

function App() {
  const [user, setUser] = useState<string>(
    () => localStorage.getItem("USER") || ""
  );
  const [comments, setComments] = useState<Comment[]>([]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      <Header />
      <CommentContext.Provider
        value={{
          comments,
          setComments,
        }}
      >
        <CommentForm />
        <CommentList />
      </CommentContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
