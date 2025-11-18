import  {useEffect } from 'react';
import '../../assets/css/index.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useGlobalContext } from "../../context/contextGlobal";
import { styled, Stack, Badge, Avatar, Box, CardMedia, Rating, TextField } from '@mui/material'
import "react-multi-carousel/lib/styles.css";
import Marquee from "react-fast-marquee";

const StyledBadge = styled(Badge)(({ theme }) => ({
    width: '80px',
    height: '80px',
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

const home = () => {
    const anchorOrigin = { vertical: 'bottom', horizontal: 'right' }
    const sxBox = {
        position: "relative",
        width: '80px',
        height: '80px',
        "&:hover .overlay": { opacity: 1 },
        borderRadius: "50%",
        overflow: "hidden",
        cursor: "pointer",

        border: "3px solid var(--primary-light)"
    }

    const sxFormControl = {
        minWidth: 150,
        margin: '0px !important',
        '& .MuiFormControl-root': {
            margin: '0px !important',
        }
    }

    const sxText = {
        '& .MuiOutlinedInput-root': {
            borderRadius: "15px",
            background: "rgba(255, 255, 255, 0.9)",
            padding: '10.5px 14px',
            transition: 'all 0.3s',
            fontSize: '1rem',
            border: 'none',
        },

        '&:hover .MuiOutlinedInput-notchedOutline': {
            outline: 'none',
            background: 'white',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
            border: 'none'
        },

        '& .MuiOutlinedInput-input': {
            padding: 0
        },

        '& .MuiInputBase-input': {
            color: 'white',
            paddingLeft: '14px',
        }
    }

    const sxTextMultiline = {
        '& .MuiOutlinedInput-root': {
            borderRadius: "15px",
            background: "rgba(255, 255, 255, 0.9)",
            transition: 'all 0.3s',
            padding: '10.5px 14px',
            border: 'none',
            fontSize: '1rem',
        },
        '& .MuiOutlinedInput-input': {
            textAlign: "justify",
            padding: 0
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            outline: 'none',
            background: 'white',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
            border: 'none'
        },
        '& .MuiInputBase-input': {
            color: 'white',
            paddingLeft: '14px',
        }
    }

    const sxAvata = { width: "100%", height: "100%" }
    const sxCardMedia = {
        padding: '16px',
        width: '150px',
        filter: 'grayscale(100%)',
        transition: 'filter 0.3s ease-in-out',
        '&:hover': {
            filter: 'grayscale(0%)',
        },
    }

    const {
        pages,
        offset,
        refs,
        setSelectNav,
        language,
        homeContent,
        scrollTo,
        highlightsContent,
        featuresContent,
        productsContent,
        trustedBy,
        testimonialsContent,
        contactContent
    } = useGlobalContext()

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            pages[language].forEach((page, index) => {
                const el = refs[page.id]?.current;
                if (!el) return;

                const offsetTop = el.offsetTop;
                const offsetHeight = el.offsetHeight;

                if (
                    scrollY >= offsetTop - offset &&
                    scrollY < offsetTop + offsetHeight - offset
                ) {
                    setSelectNav(index);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [pages, refs, setSelectNav, language]);

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: false,
            mirror: true,
        });

    }, []);

    const handleClickContact = () => {
        setSelectNav(6)
        scrollTo('contact')
    }

    const handleClickProduct = () => {
        setSelectNav(2)
        scrollTo('products')
    }

    return (
        <>
            {/* hero */}
            {homeContent[language].map(text => (
                <section
                    className='hero'
                    ref={refs[text.id]}
                    key={text.id}
                >
                    <div className="container"
                        data-aos="fade-down"
                        data-aos-delay="0">
                        <div className="hero-content" data-aos="fade-right">

                            <div className="hero-text">
                                <h1>{text.title}</h1>
                                <p>{text.text}</p>
                                <div className="hero-buttons">
                                    <div className="btn btn-white"
                                        onClick={handleClickContact}
                                    ><span>{text.btnContext}</span></div>
                                    <div className="btn btn-outline"
                                        onClick={handleClickProduct}
                                    >{text.btnProduct}</div>
                                </div>
                            </div>
                            <div className="hero-image" data-aos="slide-left">
                                <img src={text.image}
                                    alt={text.title} />
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Features Section */}
            {featuresContent[language].map((item) => (
                <section className='features'
                    ref={refs[item.id]}
                    data-aos="fade-up"
                    key={item.id}
                >
                    <div className="container"
                        data-aos="fade-up"
                        data-aos-delay="100">

                        <div className='section-title'>
                            <h2>{item.label}</h2>
                            <p>{item.desc}</p>
                        </div>

                        <div className="features-grid">
                            {item.content.map((feature, index) => (
                                <div

                                    className="feature-card"
                                    data-aos={feature.dataAos}
                                    data-aos-delay={feature.dataAosDelay}
                                >
                                    <div className="feature-icon">
                                        {feature.icon}
                                    </div>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/*  Products Section */}
            {productsContent[language].map(product => (
                <section
                    className='products'
                    ref={refs[product.id]}
                    key={product.id}
                    data-aos="fade-up"
                >
                    <div className="container">

                        <div className='section-title'>
                            <h2>{product.label}</h2>
                            <p>{product.desc}</p>
                        </div>
                        <div className="products-grid">
                            {product.content.map((item, index) => (
                                <div
                                    key={index}
                                    className="product-card"
                                    data-aos={item.dataAos}
                                    data-aos-delay={item.dataAosDelay}>
                                    <div className="product-image">
                                        <img src={item.image}
                                            alt={item.title} />
                                    </div>
                                    <div className="product-info">
                                        <h3>{item.title}</h3>
                                        <div className="product-price">{item.price}</div>
                                        <ul className="product-features">
                                            {item.listFeature.map((list, indexList) => (
                                                <li key={indexList} className='flex gap-2'>{product.icon}{list}</li>
                                            ))}
                                        </ul>
                                        <button onClick={handleClickContact} className="btn">Đăng ký ngay</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* highlights */}
            {highlightsContent[language].map((item) => (
                <section
                    className='highlights'
                    ref={refs[item.id]}
                    data-aos="fade-up"
                    key={item.id}
                    data-aos-delay="100"
                >
                    <div className="container">
                        <div className='section-title'>
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                        </div>
                        <div className="highlights-grid">

                            {item.content.map((content, index) => (
                                <div
                                    className="highlight-card"
                                    key={index}
                                    data-aos={content.dataAos}
                                    data-aos-delay={content.dataAosDelay}
                                >
                                    <div className="highlight-icon">
                                        {content.icon}
                                    </div>
                                    <h3>{content.title}</h3>
                                    <p>{content.content}</p>
                                </div>
                            ))}

                        </div>
                    </div>
                </section>
            ))}

            {/* trusted */}
            {trustedBy[language].map((item) => (
                <section
                    className="trusted-by"
                    ref={refs[pages[language][4].id]}
                    // data-aos="fade-up"
                    key={item.id}
                >
                    <div className="container"
                        data-aos="fade-up">
                        <div className="partners-container">

                            <div className="partners-header" data-aos="fade-right">
                                <h2><span>{item.heightlight}</span>{item.label}</h2>
                                <p className="partners-description">{item.desc}</p>
                                <div className='btn btn-parters'
                                    onClick={handleClickContact}
                                >{item.btn}</div>
                            </div>
                            {/* <img alt='logoWhite' data-aos="fade-up" className='logoWhite' src={isName.logoWhite}></img> */}

                            <Marquee speed={50} gradient={false} >
                                {item.content.map((img) => (
                                    <CardMedia sx={sxCardMedia}
                                        component="img"
                                        image={img.logo}
                                        alt={img.name}
                                    />
                                ))}
                            </Marquee>

                        </div>
                    </div>
                </section>
            ))}

            {/* Testimonials */}
            {testimonialsContent[language].map(testimonials => (
                <section
                    className='testimonials'
                    ref={refs[testimonials.id]}
                    key={testimonials.id}
                    data-aos="fade-up"
                >
                    <div className="container"
                        data-aos="fade-up">
                        <h2>{testimonials.label}</h2>
                        <p>{testimonials.desc}</p>
                        <div className="testimonials-grid ">
                            {testimonials.content.map((item, index) => (
                                <div
                                    key={index}
                                    className="testimonial-card grid"
                                    data-aos={item.dataAos}
                                    data-aos-delay={item.dataAosDelay}
                                >
                                    <div className="testimonial-content">
                                        <p>{item.review}</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Stack direction="row" spacing={2}>
                                            <StyledBadge
                                                overlap="circular"
                                                anchorOrigin={anchorOrigin}
                                                variant="dot"
                                            >
                                                <Box
                                                    sx={sxBox}
                                                >
                                                    <Avatar
                                                        src={item.avata}
                                                        alt={item.name}
                                                        sx={sxAvata}
                                                    />
                                                </Box>
                                            </StyledBadge>
                                        </Stack>
                                        <div className="author-info grid gap-2">
                                            <h4>{item.name}</h4>
                                            <p>{item.position}</p>
                                            <Stack spacing={1}>
                                                <Rating name="half-rating-read" defaultValue={item.rate} precision={0.5} readOnly />
                                            </Stack>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div >
                </section>
            ))}

            {/* Contact */}
            {contactContent[language].map(contact => (
                <section
                    className='contact'
                    ref={refs[contact.id]}
                    key={contact.id}
                    data-aos="fade-up"
                >
                    <div className="container"
                        data-aos="fade-up">
                        <h2>{contact.label}</h2>
                        <p>{contact.desc}</p>
                        <div className="contact-container">
                            <div className="contact-info" data-aos="fade-right">
                                <h3>{contact.contactInfo}</h3>
                                <p>{contact.contactDesc}</p>
                                <ul className="contact-details">
                                    {contact.contactDetail.map((detail, index) => (
                                        <li key={index} className='flex gap-4 items-center'>
                                            <div className="contact-details-icon">
                                                {detail.icon}
                                            </div>

                                            <span className='grid gap-4'>
                                                <h4>{detail.title}</h4>
                                                <p>{detail.content}</p>
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="contact-form" data-aos="fade-left">
                                <h3>{contact.formTitle}</h3>
                                <form className='grid gap-10'>
                                    <div className="form-group">
                                        <Box className="w-full" sx={sxFormControl} size="small">
                                            <TextField required className="w-full"
                                                label={contact.formName}
                                                aria-label="input hoten"
                                                name="name"
                                                variant="standard"
                                                sx={sxText} />
                                        </Box>
                                    </div>
                                    <div className="form-group">
                                        <Box className="w-full" sx={sxFormControl} size="small">
                                            <TextField required className="w-full"
                                                label={contact.formEmail}
                                                aria-label="input email"
                                                name="email"
                                                variant="standard"
                                                sx={sxText} />
                                        </Box>
                                    </div>
                                    <div className="form-group">
                                        <Box className="w-full" sx={sxFormControl} size="small">
                                            <TextField required className="w-full"
                                                label={contact.formPhone}
                                                aria-label="input phone"
                                                name="phone"
                                                variant="standard"
                                                sx={sxText} />
                                        </Box>
                                    </div>
                                    <div className="form-group">
                                        <Box className="w-full" sx={sxFormControl} size="small">
                                            <TextField required className="w-full"
                                                label={contact.formMessage}
                                                aria-label="input message"
                                                name="message"
                                                maxRows={Infinity}
                                                multiline
                                                variant="standard"
                                                sx={sxTextMultiline} />
                                        </Box>
                                    </div>

                                    <button type="submit" className="btn btn-white"><span>{contact.formsubmit}</span></button>
                                </form>
                            </div>
                        </div>
                    </div >
                </section >
            ))}
        </>
    )
}

export default home;