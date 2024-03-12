import { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthContextProvaider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [myShow, setMyShow] = useState(false);
  return (
    <>
      <AuthContext.Provider value={{ isAuth, setIsAuth, myShow, setMyShow }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
