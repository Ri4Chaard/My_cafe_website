import { useEffect, useState } from "react";

export const useWindowSize = (measure) => {
    let chooser;
    if (measure == window.innerWidth) chooser = 1;
    if (measure == window.innerHeight) chooser = 2;

    const [windowSize, setWindowSize] = useState(0);
    useEffect(() => {
        function handleWindowResize() {
            if (chooser == 1) setWindowSize(window.innerWidth);
            if (chooser == 2) setWindowSize(window.innerHeight);
        }
        window.addEventListener("resize", handleWindowResize);
        handleWindowResize();
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return [windowSize];
};
