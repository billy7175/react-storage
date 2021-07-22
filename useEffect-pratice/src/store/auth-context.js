import React from 'react';

const AuthContext = React.createContext({
  // default value 를 설정해두면 ctx. 을 통해 속성을 보여주니 용이하다.
  // auto completion
  isLoggedIn:false,
  onLogout : () => {}
});

export default AuthContext