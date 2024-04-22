import React, { useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

export const UserContext = React.createContext();


// export const UserProvider = ({ children }) => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [cookies, setCookie, removeCookie] = useCookies(['user']);

//     const handleLogout = () => {
//         removeCookie('user');
//         setIsLoggedIn(false);
//     };

//     const handleLogin = (user) => {
//         setCookie('user', user, { expires: new Date(Date.now() + 3600000) });
//         setIsLoggedIn(1);
//         console.log("login?:" + isLoggedIn);
//     }

//     return (
//         <UserContext.Provider
//             value={{ handleLogout, handleLogin, cookies, setCookie, removeCookie, isLoggedIn, setIsLoggedIn }}
//         >
//             {children}
//         </UserContext.Provider>
//     );
// };