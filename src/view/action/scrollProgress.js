import  { useEffect, useState } from "react";
import { LinearProgress, Box } from "@mui/material"

const ScrollProgress = () => {
    const sxBox = {
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1200,
        margin: '0px !important',
        '& .MuiFormControl-root': {
            margin: '0px !important',
        }
    }

    const sxProgress = {
        height: '5px',
        background: "transparent",
        boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
        ".MuiLinearProgress-bar": {
            background: "var(--gradient)",
            transition: "width 1.5s ease"
        },
    }

    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (scrollTop / docHeight) * 100;
        setScrollProgress(scrolled);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Box sx={sxBox}>
            <LinearProgress sx={sxProgress} variant="determinate" value={scrollProgress} />
        </Box>
    );
}

export default ScrollProgress;