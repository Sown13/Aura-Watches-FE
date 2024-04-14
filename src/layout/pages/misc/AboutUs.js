import { useEffect } from "react";

export default function AboutUs() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <h3> About Us</h3>
    )
}