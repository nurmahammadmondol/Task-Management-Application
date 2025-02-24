import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase';

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const provider = new GoogleAuthProvider();

  const LoginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const LogOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, carrentUser => {
      setUser(carrentUser);
      setLoading(false);

      console.log('Your account created successfully', carrentUser);
    });

    return () => {
      return unSubscribe();
    };
  }, []);

  const [openAddFrom, setOpenAddFrom] = useState(false);

  const authInfo = {
    LoginWithGoogle,
    LogOutUser,
    user,
    loading,
    openAddFrom,
    setOpenAddFrom,
  };

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
