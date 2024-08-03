import React, {useState, useEffect} from "react";

const AuthContext = React.createContext(
    {
        isLoggedIn: false,
        onLogout: ()=>{},
        onLogin: (email, password)=>{}
    }
)

export const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginHandler = (email, password) => {
      // We should of course check email and password
      // But it's just a dummy/ demo anyways
      // localStorage
      localStorage.setItem('onLogin', '1')
      setIsLoggedIn(true);
    };
  
    useEffect(()=>{
      if(localStorage['onLogin']==='1'){
        setIsLoggedIn(true)
      }
    },[])
  
    const logoutHandler = () => {
      localStorage.setItem('onLogin', '0')
      setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
            onLogin: loginHandler
          }}>{props.children}</AuthContext.Provider>
    )
}

export default AuthContext