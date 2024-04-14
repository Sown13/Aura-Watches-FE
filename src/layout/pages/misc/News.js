import { useEffect } from "react";

export default function News() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <h3> News  </h3>
    )
}