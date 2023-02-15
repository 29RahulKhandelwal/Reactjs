import { createContext, useCallback, useEffect, useState } from "react";

let logoutTimer;

const AuthContext=createContext({
    token:'',
    isLoggedIn: false,
    login:(token)=>{},
    logout:()=>{}
});

const calculateRemainingTime=(expirationTime)=>{
    const currentTime=new Date().getTime();
    const adjExpirationTime=new Date(expirationTime).getTime();
    const remainingDuration=adjExpirationTime-currentTime;

    return remainingDuration;
}

const retrieveStorageToken=()=>{
    const storedToken=localStorage.getItem("token");
    const storedExpirationDate=localStorage.getItem("expirationTime");

    const remainingTime=calculateRemainingTime(storedExpirationDate);

    if(remainingTime<=60000){
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        return null;
    }

    return {
        token:storedToken,
        duration:remainingTime
    };
}

export const AuthContextProvider=(props)=>{
    const tokenData=retrieveStorageToken();
    let initialToken;
    if(tokenData){
        initialToken=tokenData.token;
    }
    const [token,setToken]=useState(initialToken);
    const isUserLoggedIn=!!token;

    const logoutHandler=useCallback(()=>{
        setToken(null);
        localStorage.removeItem("token");
        localStorage.removeItem("expirationTime");
        if(logoutTimer){
            clearTimeout(logoutTimer);
        }
    },[]);

    const loginHandler=(token, expiration)=>{
        setToken(token);
        localStorage.setItem("token",token);
        localStorage.setItem('expirationTime',expiration);
        const remainingTime=calculateRemainingTime(expiration);

        logoutTimer=setTimeout(logoutHandler,remainingTime);
    };

    useEffect(()=>{
        if(tokenData){
            logoutTimer=setTimeout(logoutHandler,tokenData.duration);
        }
    },[tokenData, logoutHandler]);

    const contextValue={
        token:token,
        isLoggedIn:isUserLoggedIn,
        login:loginHandler,
        logout:logoutHandler
    }


    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;