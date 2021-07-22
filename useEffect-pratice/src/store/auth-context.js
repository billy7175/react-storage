import React,{useState,useEffect} from "react";

const AuthContext = React.createContext({
  // default value 를 설정해두면 ctx. 을 통해 속성을 보여주니 용이하다.
  // auto completion
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    const storedIsLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedIsLoggedInInformation) {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  

  return (
    <AuthContext.Provider
      value={{ 
        isLoggedIn: isLoggedIn, 
        onLogout: logoutHandler,
        onLogin: loginHandler
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;