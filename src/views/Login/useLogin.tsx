import {createContext, ReactNode, useContext, useMemo, useState} from "react";

export enum LoginState {
  LOGIN,
  REGISTER,
  RESET_PASSWORD,
  MOBILE,
  QR_CODE,
}

interface LoginStateContextType {
  loginState: LoginState
  setLoginState: (loginState: LoginState) => void
  backToLogin: () => void
}

const LoginStateContext = createContext<LoginStateContextType>({
  loginState: LoginState.LOGIN,
  setLoginState: () => {
  },
  backToLogin: () => {
  },
});

export const useLoginStateContext = () => {
  return useContext(LoginStateContext)
}

export const LoginStateProvider = (props: { children: ReactNode }): React.JSX.Element => {
  const {children} = props;
  const [loginState, setLoginState] = useState(LoginState.LOGIN);

  const backToLogin = () => {
    setLoginState(LoginState.LOGIN);
  }

  const value: LoginStateContextType = useMemo(
    () => ({
      loginState,
      setLoginState,
      backToLogin
    }),
    [loginState],
  );
  return (
    <LoginStateContext.Provider value={value}>
      {children}
    </LoginStateContext.Provider>
  )
}
