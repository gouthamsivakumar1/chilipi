import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {EKeyAsyncStorage} from './src/constants/Types';

type Context = {
  isInitialized: boolean;
  isSignedIn: boolean;
  isIntro: boolean;
  signIn: () => void;
  signOut: () => void;
};

export const AuthContext = React.createContext<Context>({
  isInitialized: false,
  isSignedIn: false,
  isIntro: false,
  signIn: () => {},
  signOut: () => {},
});

export const AuthProvider: React.FC = ({children}) => {
  const [isInitialized, setInitialized] = React.useState(false);
  const [isSignedIn, setSignedIn] = React.useState(false);
  const [isIntro, setIsIntro] = React.useState(false);

  //const auth = firebase.auth();

  React.useEffect(() => {
    const Unsubscribe = () => {
      AsyncStorage.getItem(EKeyAsyncStorage.email).then(res => {
        setInitialized(true);
        setSignedIn(true);
      });
    };
    return () => Unsubscribe();
  }, []);

  const signIn = React.useCallback(async () => {
    const isIntro = await AsyncStorage.getItem(EKeyAsyncStorage.email);

    setIsIntro(true);

    setSignedIn(true);
  }, []);

  const signOut = React.useCallback(() => {
    AsyncStorage.clear();
    setSignedIn(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{isInitialized, isSignedIn, isIntro, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};
