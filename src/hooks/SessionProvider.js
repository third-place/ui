import React, { useContext } from 'react';
import { useStorageState } from './useStorageState';

const AuthContext = React.createContext({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export function SessionProvider(props) {
  const [
    [
      isLoading,
      session,
    ],
    setSession,
  ] = useStorageState('session');

  return (
    <AuthContext.Provider
      value={{
        signIn: async (session) => {
          await setSession(session);
        },
        signOut: async () => {
          await setSession(null);
        },
        session,
        isLoading,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}
