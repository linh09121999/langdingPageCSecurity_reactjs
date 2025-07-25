import { createContext, useContext, useState, useRef } from "react";
import { useMediaQuery } from "@mui/material"

import {
    FaAngleDoubleUp,
    FaMedal,
    FaHeadset,
    FaBuilding,
    FaShieldAlt,
    FaLock,
    FaBell,
    FaCloud,
    FaUserShield,
    FaChartLine,
    FaCheck,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaClock,
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaYoutube,
    FaHome,
    FaStarHalfAlt,
    FaHandshake,
    FaMailBulk
} from "react-icons/fa";
import {
    IoShieldCheckmark,
    IoClose
} from "react-icons/io5";
import {
    TbPackages,
    TbMessageCircleStar
} from "react-icons/tb";
import { CgMenu } from "react-icons/cg";

import logo from "../assets/svg/logo.svg"
import logoWhite from "../assets/svg/logo-white.svg"
import vnFlag from '../assets/svg/language/flag-vn.svg';
import usFlag from '../assets/svg/language/flag-us.svg';

import imageHero from "../assets/svg/image.svg"

import img1 from "../assets/image/image_product/img1.avif"
import img2 from "../assets/image/image_product/img2.avif"
import img3 from "../assets/image/image_product/img3.avif"

import agribank from "../assets/image/logo_bank/logo_agribank.png"
import BIDV from "../assets/image/logo_bank/logo-BIDV.webp"
import epay from "../assets/image/logo_bank/Logo-epay.webp"
import gtelPay from "../assets/image/logo_bank/logo-gtelpay.png"
import ncb from "../assets/image/logo_bank/logo-NCB.png"
import pvcombank from "../assets/image/logo_bank/logo-pvcombank.png"
import techcombank from "../assets/image/logo_bank/logo-techcombank.png"
import TPBank from "../assets/image/logo_bank/logo-TPBank.webp"
import Vietcombank from "../assets/image/logo_bank/logo-Vietcombank.webp"
import VietinBank from "../assets/image/logo_bank/Logo-VietinBank.webp"
import momo from "../assets/image/logo_bank/loo-momo.svg"

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    // kiem tra kich thuoc man mobile
    const isMobile = useMediaQuery("(max-width:768px)");

    const isDrawer = useMediaQuery("(max-width:992px)");
    // kiem cha la thie bi mobile
    const isMobileDevice = /iPhone|Android|iPad|iPod/i.test(navigator.userAgent);

    const [isName, setIsName] = useState({
        name: 'CSecurity',
        logo: logo,
        logoWhite: logoWhite,
    });

    const icon = {
        iconBackToTop: <FaAngleDoubleUp />,
        iconMenu: <CgMenu className="svg-icon" />,
        iconClose: <IoClose />
    }

    const [language, setLanguage] = useState("vi");

    const selectLanguage = {
        vi: {
            title: "Chọn ngôn ngữ",
            img: vnFlag,
            label: "Tiếng Việt",
            option: [
                {
                    text: "Tiếng Việt",
                    img: vnFlag,
                    value: "vi",
                },
                {
                    text: "Tiếng Anh",
                    img: usFlag,
                    value: "en",
                }
            ]
        },
        en: {
            title: "Select Language",
            img: usFlag,
            label: "English",
            option: [
                {
                    text: "Vietnamese",
                    img: vnFlag,
                    value: "vi",
                },
                {
                    text: "English",
                    img: usFlag,
                    value: "en",
                }]
        }
    }

    const changeLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem("lang", lang);
    };

    const pages = {
        vi: [
            {
                id: 'home',
                label: 'Trang chủ',
                icon: <FaHome />
            },
            {
                id: 'features',
                label: 'Tính năng',
                icon: <IoShieldCheckmark />
            },
            {
                id: 'products',
                label: 'Sản phẩm',
                icon: <TbPackages />
            },
            {
                id: 'highlights',
                label: 'Nổi bật',
                icon: <FaStarHalfAlt />
            },
            {
                id: 'trusted',
                label: 'Đối tác',
                icon: <FaHandshake />
            },
            {
                id: 'testimonials',
                label: 'Đánh giá',
                icon: <TbMessageCircleStar />
            },
            {
                id: 'contact',
                label: 'Liên hệ',
                icon: <FaMailBulk />
            },
        ],
        en: [
            {
                id: 'home',
                label: 'Home',
                icon: <FaHome />
            },
            {
                id: 'features',
                label: 'Features',
                icon: <IoShieldCheckmark />
            },
            {
                id: 'products',
                label: 'Products',
                icon: <TbPackages />
            },
            {
                id: 'highlights',
                label: 'Highlights',
                icon: <FaStarHalfAlt />
            },
            {
                id: 'trusted',
                label: 'Partners',
                icon: <FaHandshake />
            },
            {
                id: 'testimonials',
                label: 'Testimonials',
                icon: <TbMessageCircleStar />
            },
            {
                id: 'contact',
                label: 'Contact',
                icon: <FaMailBulk />
            },
        ]
    }

    const [selectNav, setSelectNav] = useState(0);

    const refs = {
        home: useRef(null),
        highlights: useRef(null),
        features: useRef(null),
        products: useRef(null),
        trusted: useRef(null),
        testimonials: useRef(null),
        contact: useRef(null),
    };

    const offset = 150;

    const scrollTo = (id) => {
        const element = refs[id]?.current;
        if (element) {
            const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    // home
    const homeContent = {
        vi: [{
            id: 'home',
            title: "Giải Pháp Bảo Mật Toàn Diện Cho Doanh Nghiệp",
            text: "Công Ty CSecurity cung cấp các giải pháp bảo mật công nghệ cao giúp bảo vệ dữ liệu và hệ thống của bạn khỏi các mối đe dọa an ninh mạng.",
            btnContext: "Liên hệ ngay",
            btnProduct: "Xem sản phẩm",
            image: imageHero
        }],
        en: [{
            id: 'home',
            title: "Comprehensive Security Solutions for Businesses",
            text: "Company CSecurity provides high-tech security solutions to protect your data and systems from cybersecurity threats.",
            btnContext: "Contact Now",
            btnProduct: "View Products",
            image: imageHero
        }]
    }

    const highlightsContent = {
        vi:
            [
                {
                    id: 'highlights',
                    title: 'Điểm Nổi Bật Của Chúng Tôi',
                    text: 'Chúng tôi cung cấp các giải pháp bảo mật toàn diện, giúp doanh nghiệp bảo vệ dữ liệu và hệ thống khỏi các mối đe dọa an ninh mạng.',
                    content:
                        [
                            {
                                icon: <FaMedal className="svg-icon" />,
                                title: "Top 1 Bảo Mật",
                                content: "Được vinh danh là giải pháp bảo mật tốt nhất Việt Nam 2023",
                                dataAos: "slide-up",
                                dataAosDelay: "300"
                            },
                            {
                                icon: <IoShieldCheckmark className="svg-icon" />,
                                title: "100% An Toàn",
                                content: "Cam kết không có sự cố bảo mật với hệ thống của chúng tôi",
                                dataAos: "slide-up",
                                dataAosDelay: "500"
                            },
                            {
                                icon: <FaHeadset className="svg-icon" />,
                                title: "Hỗ Trợ 24/7",
                                content: "Đội ngũ chuyên gia sẵn sàng hỗ trợ bất cứ lúc nào",
                                dataAos: "slide-up",
                                dataAosDelay: "700"
                            },
                            {
                                icon: <FaBuilding className="svg-icon" />,
                                title: "500+ Doanh Nghiệp",
                                content: "Hơn 500 doanh nghiệp đã tin tưởng sử dụng dịch vụ",
                                dataAos: "slide-up",
                                dataAosDelay: "900"
                            },
                        ]
                }

            ],
        en:
            [
                {
                    id: 'highlights',
                    title: 'Our Key Highlights',
                    text: 'We provide comprehensive cybersecurity solutions that help businesses protect their data and systems from potential cyber threats.',
                    content: [
                        {
                            icon: <FaMedal className="svg-icon" />,
                            title: "Top 1 Security",
                            content: "Awarded as the best security solution in Vietnam 2023",
                            dataAos: "slide-up",
                            dataAosDelay: "300"
                        },
                        {
                            icon: <IoShieldCheckmark className="svg-icon" />,
                            title: "100% Safety",
                            content: "Guaranteed zero security incidents with our system",
                            dataAos: "slide-up",
                            dataAosDelay: "500"
                        },
                        {
                            icon: <FaHeadset className="svg-icon" />,
                            title: "24/7 Support",
                            content: "Our expert team is ready to assist you anytime",
                            dataAos: "slide-up",
                            dataAosDelay: "700"
                        },
                        {
                            icon: <FaBuilding className="svg-icon" />,
                            title: "500+ Businesses",
                            content: "Trusted by over 500 businesses nationwide",
                            dataAos: "slide-up",
                            dataAosDelay: "900"
                        }
                    ]
                }

            ]
    }

    const featuresContent = {
        vi:
            [{
                id: "features",
                label: "Tính Năng Nổi Bật",
                desc: "Các tính năng bảo mật hàng đầu giúp bảo vệ dữ liệu và hệ thống một cách toàn diện.",
                content: [
                    {
                        icon: <FaShieldAlt className="svg-icon" />,
                        title: "Bảo Mật Đa Lớp",
                        content: "Hệ thống bảo mật nhiều lớp giúp ngăn chặn mọi hình thức tấn công từ bên ngoài vào hệ thống của bạn.",
                        dataAos: "slide-left",
                        dataAosDelay: "250"
                    },
                    {
                        icon: <FaLock className="svg-icon" />,
                        title: "Mã Hóa Dữ Liệu",
                        content: "Tất cả dữ liệu được mã hóa end-to-end đảm bảo an toàn tuyệt đối trong quá trình lưu trữ và truyền tải.",
                        dataAos: "slide-up",
                        dataAosDelay: "400"
                    },
                    {
                        icon: <FaBell className="svg-icon" />,
                        title: "Cảnh Báo Tức Thì",
                        content: "Hệ thống giám sát 24/7 và cảnh báo ngay lập tức khi phát hiện các hoạt động đáng ngờ.",
                        dataAos: "slide-up",
                        dataAosDelay: "550"
                    },
                    {
                        icon: <FaCloud className="svg-icon" />,
                        title: "Bảo Mật Đám Mây",
                        content: "Giải pháp bảo mật đám mây tiên tiến giúp bảo vệ dữ liệu của bạn trên mọi nền tảng.",
                        dataAos: "slide-left",
                        dataAosDelay: "700"
                    },
                    {
                        icon: <FaUserShield className="svg-icon" />,
                        title: "Xác Thực Mạnh",
                        content: "Hệ thống xác thực đa yếu tố (MFA) giúp ngăn chặn truy cập trái phép vào tài khoản.",
                        dataAos: "slide-up",
                        dataAosDelay: "850"
                    },
                    {
                        icon: <FaChartLine className="svg-icon" />,
                        title: "Báo Cáo Chi Tiết",
                        content: "Cung cấp báo cáo chi tiết về các hoạt động bảo mật và đề xuất cải thiện hệ thống.",
                        dataAos: "slide-right",
                        dataAosDelay: "1000"
                    }
                ]
            }],
        en:
            [{
                id: "features",
                label: "Key Features",
                desc: "Top-tier security features for comprehensive protection of data and systems.",
                content: [
                    {
                        icon: <FaShieldAlt className="svg-icon" />,
                        title: "Multi-layer Security",
                        content:
                            "A multi-layer security system prevents all types of external attacks on your infrastructure.",
                        dataAos: "slide-left",
                        dataAosDelay: "250",
                    },
                    {
                        icon: <FaLock className="svg-icon" />,
                        title: "Data Encryption",
                        content:
                            "All data is encrypted end-to-end, ensuring complete safety during storage and transmission.",
                        dataAos: "slide-up",
                        dataAosDelay: "400",
                    },
                    {
                        icon: <FaBell className="svg-icon" />,
                        title: "Instant Alerts",
                        content:
                            "24/7 monitoring system that instantly notifies you of any suspicious activity.",
                        dataAos: "slide-up",
                        dataAosDelay: "550",
                    },
                    {
                        icon: <FaCloud className="svg-icon" />,
                        title: "Cloud Security",
                        content:
                            "Advanced cloud security solutions to protect your data across all platforms.",
                        dataAos: "slide-left",
                        dataAosDelay: "700",
                    },
                    {
                        icon: <FaUserShield className="svg-icon" />,
                        title: "Strong Authentication",
                        content:
                            "Multi-factor authentication (MFA) system prevents unauthorized access to your accounts.",
                        dataAos: "slide-up",
                        dataAosDelay: "850",
                    },
                    {
                        icon: <FaChartLine className="svg-icon" />,
                        title: "Detailed Reports",
                        content:
                            "Provides detailed security activity reports with system improvement recommendations.",
                        dataAos: "slide-right",
                        dataAosDelay: "1000",
                    },
                ],
            }]

    }

    const productsContent = {
        vi: [{
            id: 'products',
            label: "Sản Phẩm Của Chúng Tôi",
            icon: <FaCheck className="svg-icon" />,
            desc: "Danh sách các gói dịch vụ bảo mật chuyên biệt phù hợp với nhiều mô hình doanh nghiệp.",
            content: [
                {
                    image: img1,
                    title: "Security Suite Pro",
                    price: "15.000.000đ/tháng",
                    listFeature: [
                        "Bảo mật đa lớp",
                        "Mã hóa dữ liệu AES-256",
                        "Giám sát 24/7",
                        "Bảo vệ chống ransomware",
                        "Hỗ trợ 24/7"
                    ],
                    dataAos: "slide-righy",
                    dataAosDelay: "300",
                    btn: "Đăng ký ngay"
                },
                {
                    image: img2,
                    title: "Cloud Shield",
                    price: "10.000.000đ/tháng",
                    listFeature: [
                        "Bảo mật đám mây",
                        "Sao lưu tự động",
                        "Kiểm soát truy cập",
                        "Mã hóa end-to-end",
                        "Hỗ trợ 24/7"
                    ],
                    dataAos: "slide-up",
                    dataAosDelay: "500",
                    btn: "Đăng ký ngay"
                },
                {
                    image: img3,
                    title: "Network Guardian",
                    price: "20.000.000đ/tháng",
                    listFeature: [
                        "Bảo vệ mạng doanh nghiệp",
                        "Phát hiện xâm nhập",
                        "Tường lửa thế hệ mới",
                        "Phân tích lưu lượng",
                        "Hỗ trợ 24/7"
                    ],
                    dataAos: "slide-up",
                    dataAosDelay: "700",
                    btn: "Đăng ký ngay"
                }
            ]
        }],
        en: [{
            id: 'products',
            label: "Our Products",
            icon: <FaCheck className="svg-icon" />,
            desc: "A curated selection of security service packages tailored for various business models.",
            content: [
                {
                    image: img1,
                    title: "Security Suite Pro",
                    price: "573$/month",
                    listFeature: [
                        "Multi-layer security",
                        "AES-256 data encryption",
                        "24/7 monitoring",
                        "Ransomware protection",
                        "24/7 support"
                    ],
                    dataAos: "slide-right",
                    dataAosDelay: "300",
                    btn: "Sign Up Now"
                },
                {
                    image: img2,
                    title: "Cloud Shield",
                    price: "382$/month",
                    listFeature: [
                        "Cloud security",
                        "Automatic backup",
                        "Access control",
                        "End-to-end encryption",
                        "24/7 support"
                    ],
                    dataAos: "slide-up",
                    dataAosDelay: "500",
                    btn: "Sign Up Now"
                },
                {
                    image: img3,
                    title: "Network Guardian",
                    price: "764$/month",
                    listFeature: [
                        "Enterprise network protection",
                        "Intrusion detection",
                        "Next-gen firewall",
                        "Traffic analysis",
                        "24/7 support"
                    ],
                    dataAos: "slide-up",
                    dataAosDelay: "700",
                    btn: "Sign Up Now"
                }
            ]
        }]

    }

    const trustedBy = {
        vi:
            [
                {
                    id: "trusted",
                    heightlight: "650,774+ ",
                    label: "Đối Tác Chiến Lược",
                    desc: "Các đối tác lớn và uy tín đã lựa chọn và đồng hành cùng chúng tôi.",
                    btn: "Trải nghiệm ngay",
                    content: [
                        {
                            name: "agribank",
                            logo: agribank
                        },
                        {
                            name: "BIDV",
                            logo: BIDV
                        },
                        {
                            name: "epay",
                            logo: epay
                        },
                        {
                            name: "gtelPay",
                            logo: gtelPay
                        },
                        {
                            name: "ncb",
                            logo: ncb
                        },
                        {
                            name: "pvcombank",
                            logo: pvcombank
                        },
                        {
                            name: "techcombank",
                            logo: techcombank
                        },
                        {
                            name: "TPBank",
                            logo: TPBank
                        },
                        {
                            name: "Vietcombank",
                            logo: Vietcombank
                        },
                        {
                            name: "VietinBank",
                            logo: VietinBank
                        },
                        {
                            name: "momo",
                            logo: momo
                        }
                    ]
                }],
        en:
            [
                {
                    id: "trusted",
                    heightlight: "650,774+",
                    label: "Strategic Partners",
                    desc: "Trusted by reputable partners and leading enterprises.",
                    btn: 'Experience now',
                    content: [
                        {
                            name: "agribank",
                            logo: agribank
                        },
                        {
                            name: "BIDV",
                            logo: BIDV
                        },
                        {
                            name: "epay",
                            logo: epay
                        },
                        {
                            name: "gtelPay",
                            logo: gtelPay
                        },
                        {
                            name: "ncb",
                            logo: ncb
                        },
                        {
                            name: "pvcombank",
                            logo: pvcombank
                        },
                        {
                            name: "techcombank",
                            logo: techcombank
                        },
                        {
                            name: "TPBank",
                            logo: TPBank
                        },
                        {
                            name: "Vietcombank",
                            logo: Vietcombank
                        },
                        {
                            name: "VietinBank",
                            logo: VietinBank
                        },
                        {
                            name: "momo",
                            logo: momo
                        }
                    ]
                }
            ]
    }

    const testimonialsContent = {
        vi: [{
            id: 'testimonials',
            label: "Khách Hàng Nói Về Chúng Tôi",
            desc: "Hàng trăm doanh nghiệp đã tin tưởng lựa chọn giải pháp của chúng tôi.",
            content: [
                {
                    review: "Tôi rất hài lòng với dịch vụ của Công Ty CSecurity. Hệ thống bảo mật của họ đã giúp chúng tôi ngăn chặn nhiều cuộc tấn công mạng tiềm ẩn.",
                    name: "Nguyễn Văn A",
                    position: "Giám đốc Công Ty X",
                    avata: "https://randomuser.me/api/portraits/men/32.jpg",
                    rate: 5,
                    dataAos: "slide-up",
                    dataAosDelay: "300",
                },
                {
                    review: "Giải pháp bảo mật đám mây của Công Ty CSecurity đã giúp chúng tôi yên tâm lưu trữ dữ liệu quan trọng. Dịch vụ hỗ trợ rất chuyên nghiệp.",
                    name: "Trần Thị B",
                    position: "Giám đốc Công Ty Y",
                    avata: "https://randomuser.me/api/portraits/women/44.jpg",
                    rate: 4.5,
                    dataAos: "slide-up",
                    dataAosDelay: "500",
                },
                {
                    review: "Sau khi triển khai hệ thống của Công Ty CSecurity, chúng tôi không còn lo lắng về các mối đe dọa an ninh mạng. Đầu tư xứng đáng cho bảo mật.",
                    name: "Lê Văn C",
                    position: "Trưởng phòng IT Công Ty Z",
                    avata: "https://randomuser.me/api/portraits/men/75.jpg",
                    rate: 5,
                    dataAos: "slide-up",
                    dataAosDelay: "700",
                }
            ]
        }],
        en: [
            {
                id: 'testimonials',
                label: "What Our Clients Say",
                desc: "Hundreds of businesses have trusted our security solutions.",
                content: [
                    {
                        review:
                            "I am very satisfied with Company  CSecurity service. Their security system has helped us prevent numerous potential cyber attacks.",
                        name: "Nguyen Van A",
                        position: "CEO of Company X",
                        avata: "https://randomuser.me/api/portraits/men/32.jpg",
                        rate: 5,
                        dataAos: "slide-up",
                        dataAosDelay: "300"
                    },
                    {
                        review:
                            "Company  CSecurity cloud security solution has given us peace of mind in storing critical data. Their support service is very professional.",
                        name: "Tran Thi B",
                        position: "CEO of Company Y",
                        avata: "https://randomuser.me/api/portraits/women/44.jpg",
                        rate: 4.5,
                        dataAos: "slide-up",
                        dataAosDelay: "500"
                    },
                    {
                        review:
                            "Since implementing Company  CSecurity system, we no longer worry about cybersecurity threats. A worthwhile investment for protection.",
                        name: "Le Van C",
                        position: "IT Manager at Company Z",
                        avata: "https://randomuser.me/api/portraits/men/75.jpg",
                        rate: 5,
                        dataAos: "slide-up",
                        dataAosDelay: "700"
                    }
                ]
            }
        ]
    }

    const contactContent = {
        vi:
            [
                {
                    id: 'contact',
                    label: "Liên Hệ Với Chúng Tôi",
                    desc: "Để lại thông tin, chúng tôi sẽ liên hệ tư vấn giải pháp phù hợp nhất cho bạn",
                    contactInfo: "Thông Tin Liên Hệ",
                    contactDesc: "Chúng tôi luôn sẵn sàng hỗ trợ và giải đáp mọi thắc mắc của bạn về sản phẩm và dịch vụ.",
                    contactDetail: [
                        {
                            icon: <FaMapMarkerAlt />,
                            title: "Địa chỉ",
                            content: "Tòa nhà C, 123 Đường ABC, Phường Cầu Giấy, Hà Nội",
                        },
                        {
                            icon: <FaPhoneAlt />,
                            title: "Điện thoại",
                            content: "(028) 1234 5678",
                        },
                        {
                            icon: <FaEnvelope />,
                            title: "Email",
                            content: "contact@CSecurity.com",
                        },
                        {
                            icon: <FaClock />,
                            title: "Giờ làm việc",
                            content: "Thứ 2 - Thứ 6: 8:00 - 17:00",
                        }
                    ],
                    formTitle: "Gửi Tin Nhắn",
                    formName: "Họ và tên",
                    formEmail: "Email",
                    formPhone: "Số điện thoại",
                    formMessage: "Nội dung",
                    formsubmit: "Gửi liên hệ",
                    formDuccess: "Gửi thông tin thành công!",
                    formError: "Đã xảy ra lỗi. Vui lòng thử lại sau."
                }
            ],
        en: [
            {
                id: 'contact',
                label: "Contact Us",
                desc: "Leave your information and we will reach out to provide the most suitable security solution for your business.",
                contactInfo: "Contact Information",
                contactDesc: "We’re always ready to support and answer any questions you may have about our products and services.",
                contactDetail: [
                    {
                        icon: <FaMapMarkerAlt />,
                        title: "Address",
                        content: "C Building, 123 ABC Street, Cau Giay Ward, Hanoi"
                    },
                    {
                        icon: <FaPhoneAlt />,
                        title: "Phone",
                        content: "(028) 1234 5678"
                    },
                    {
                        icon: <FaEnvelope />,
                        title: "Email",
                        content: "contact@CSecurity.com"
                    },
                    {
                        icon: <FaClock />,
                        title: "Working Hours",
                        content: "Monday - Friday: 8:00 AM - 5:00 PM"
                    }
                ],
                formTitle: "Send a Message",
                formName: "Full Name",
                formEmail: "Email",
                formPhone: "Phone Number",
                formMessage: "Message",
                formsubmit: "Submit",
                formDuccess: "Your message has been sent successfully!",
                formError: "Something went wrong. Please try again later."
            }
        ]
    }


    const footerContent = {
        vi:
            [
                {
                    footer: "Công Ty CSecurity. Tất cả quyền được bảo lưu.",
                    info: [{
                        name: "Công Ty CSecurity",
                        desc: "Đơn vị hàng đầu cung cấp giải pháp bảo mật công nghệ cao cho doanh nghiệp tại Việt Nam.",
                        iconInfo:
                            [
                                {
                                    link: "",
                                    icon: <FaFacebookF />,
                                },
                                {
                                    link: "",
                                    icon: <FaTwitter />
                                },
                                {
                                    link: "",
                                    icon: <FaLinkedinIn />
                                },
                                {
                                    link: "",
                                    icon: <FaYoutube />
                                }
                            ]
                    }],
                    link: "Liên kết",
                    product: [{
                        name: "Sản phẩm",
                        content: [
                            "Security Suite Pro",
                            "Cloud Shield",
                            "Network Guardian",
                            "Tất cả sản phẩm"
                        ]
                    }],
                    support:
                        [
                            {
                                name: "Hỗ trợ",
                                content:
                                    [
                                        "Câu hỏi thường gặp",
                                        "Chính sách bảo mật",
                                        "Điều khoản dịch vụ",
                                        "Hướng dẫn sử dụng"
                                    ],
                            }
                        ]
                }
            ],
        en: [
            {
                footer: "CSecurity Co. All rights reserved.",
                info: [
                    {
                        name: "CSecurity Company",
                        desc: "A leading provider of high-tech cybersecurity solutions for businesses in Vietnam.",
                        iconInfo:
                            [
                                {
                                    link: "",
                                    icon: <FaFacebookF />,
                                },
                                {
                                    link: "",
                                    icon: <FaTwitter />
                                },
                                {
                                    link: "",
                                    icon: <FaLinkedinIn />
                                },
                                {
                                    link: "",
                                    icon: <FaYoutube />
                                }
                            ]
                    }
                ],
                product: [
                    {
                        name: "Products",
                        content: [
                            "Security Suite Pro",
                            "Cloud Shield",
                            "Network Guardian",
                            "All Products"
                        ]
                    }
                ],

                link: "Links",
                support:
                    [
                        {
                            name: "Support",
                            content:
                                [
                                    "Frequently Asked Questions",
                                    "Privacy Policy",
                                    "Terms of Service",
                                    "User Guide"
                                ]
                        }
                    ]
            }
        ]
    }

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 4, //so slider hien thi
            slidesToSlide: 1
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 1,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 1,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    const year = new Date().getFullYear();


    const value = {
        isMobile,
        isMobileDevice,
        isName,
        setIsName,
        language,
        changeLanguage,
        selectLanguage,
        pages,
        refs,
        offset,
        selectNav,
        setSelectNav,
        scrollTo,
        icon,
        homeContent,
        highlightsContent,
        featuresContent,
        productsContent,
        trustedBy,
        testimonialsContent,
        contactContent,
        footerContent,
        responsive,
        year,
        isDrawer
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
}

export const useGlobalContext = () => useContext(GlobalContext);