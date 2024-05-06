import { useContext, createContext } from 'react';
import { useStorageState } from './useStorageState';

const AuthContext = createContext({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production' && !value) {
    throw new Error('useSession must be wrapped in a <SessionProvider />');
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
