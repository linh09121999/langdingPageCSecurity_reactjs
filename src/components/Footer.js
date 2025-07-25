import React, { useState, useContext, useRef } from 'react';
import '../assets/css/index.css';
import { useGlobalContext } from "../context/contextGlobal";

const Footer = () => {
    const {
        footerContent,
        pages,
        scrollTo,
        selectNav,
        setSelectNav,
        language,
        year
    } = useGlobalContext()

    const handleClickProduct = () => {
        setSelectNav(2)
        scrollTo('products')
    }

    return (
        <footer >
            {footerContent[language].map((footer, index) => (
                <div key={index} className="container" data-aos="fade-up">
                    <div className="footer-grid">
                        {footer.info.map((info, id) => (
                            <div key={id} className="footer-col" data-aos="slide-up" data-aos-delay="300">
                                <h3>{info.name}</h3>
                                <p>{info.desc}</p>
                                <div className="social-links">
                                    {info.iconInfo.map((icon, id) => (
                                        <a key={id} href={icon.link} target="_blank">{icon.icon}</a>
                                    ))}
                                </div>
                            </div>
                        ))}
                        {footer.product.map((product, id) => (
                            <div key={id} className="footer-col" data-aos="slide-up" data-aos-delay="500">
                                <h3>{product.name}</h3>
                                <ul className="footer-links">
                                    {product.content.map((content, id) => (
                                        <li><div className='footer-text'
                                            onClick={handleClickProduct}
                                        >{content}</div></li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <div className="footer-col" data-aos="slide-up" data-aos-delay="700">
                            <h3>{footer.link}</h3>
                            <ul className="footer-links grid grid-cols-1 md:grid-cols-2 gap-x-4">
                                {pages[language].map((page, index) => (
                                    <li key={page.id}>
                                        <a
                                            onClick={() => {
                                                setSelectNav(index)
                                                scrollTo(page.id)
                                            }}
                                        >{page.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {footer.support.map((support, id) => (
                            <div key={id} className="footer-col" data-aos="slide-up" data-aos-delay="900">
                                <h3>{support.name}</h3>
                                <ul className="footer-links">
                                    {support.content.map((content, id)=>(
                                        <li key={id}><a href='/' target="_blank">{content}</a></li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                    </div>
                    <div className="copyright">
                        <p>&copy; {year}{' '} {footer.footer}</p>
                    </div> 
                </div>
            ))}
        </footer>
    )
}

export default Footer;