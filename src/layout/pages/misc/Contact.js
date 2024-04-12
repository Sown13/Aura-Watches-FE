import { useEffect } from "react";

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <h3> Contact </h3>
    )
}