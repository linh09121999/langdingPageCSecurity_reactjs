import { useState, useEffect } from "react";
import { useGlobalContext } from "../../context/contextGlobal";
import '../../assets/css/index.css';

const BackToTop = () => {
    const {icon} = useGlobalContext()

    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {

        const toggleVisibility = () => {
            if (window.pageYOffset > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Scroll lên đầu trang
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {isVisible && (
                <button className='back-to-top p-3 shadow-lg transition-all'
                    onClick={scrollToTop}>
                    {icon.iconBackToTop}
                </button>
            )}
        </>

    )
}

export default BackToTop;