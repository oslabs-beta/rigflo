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
      status: 'unauthenticated',
    };
  });

  const setAuthInfo = ({ token, userInfo }) => {
    console.log('setting auth info');

    console.log({ userInfo });

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
  };

  const isAuthenticated = () => {
    if (!authState.token || !authState.expiresAt) return false;

    return new Date().getTime() / 1000 < authState.expiresAt;
  };

  return (
    <Provider
      value={{
        authState,
        setAuthState: (authInfo) => setAuthInfo(authInfo),
        isAuthenticated,
        logout,
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
