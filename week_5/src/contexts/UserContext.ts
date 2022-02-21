import { createContext } from "react";

interface IUserContext {
  user: string;
  setUser: (name: string) => void;
}

export const UserContext = createContext<IUserContext | null>(null);
