import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

export default function UserDetail() {
    const { cookies, setCookie, isLoggedIn, setIsLoggedIn } = useContext(UserContext);

    return (
        <div>
            {isLoggedIn ? <h1 style={{ color: 'white' }}> Welcome, {cookies.user.Fullname}!</h1> : null}
        </div>
    )
}