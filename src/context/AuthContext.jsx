import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(() => {
    const token = localStorage.getItem('token');
    const userInfo = localStorage.getItem('userInfo');
    return {
      token,
      userInfo: userInfo ? JSON.parse(userInfo) : {},
    };
  });

  const setAuthInfo = ({ token, userInfo }) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userInfo', JSON.stringify(userInfo));

    setAuthState({
      token,
      userInfo,
    });
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    setAuthState({ token: undefined, userInfo: {} });
  };

  return (
    <Provider
      value={{
        authState,
        setAuthState: (authInfo) => setAuthInfo(authInfo),
        logout,
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
