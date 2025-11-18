import { useState } from 'react';
import '../assets/css/index.css';
import { useGlobalContext } from "../context/contextGlobal";
import {
    Box,
    Menu,
    MenuItem,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton,
    Divider
} from '@mui/material';

const Nav = () => {

    const PaperProps = {
        sx: {
            transform: 'translateX(0%)',
            borderRadius: 2,
            boxShadow: 'var(--shadow-lg)',
            padding: '20px',
            width: '240px',
            transition: 'all 0.3s ease'
        },
    }

    const MenuListProps = {
        sx: {
            paddingY: 0.5,
        },
    }

    const sxMenuItem = {
        display: 'flex !important',
        alignItems: 'center',
        gap: '12px',
        transform: 'all 0.2s',
        padding: '10px 15px',
        borderRadius: '8px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgba(34, 211, 238, 0.08)',
            // color: 'white',
        },
    }

    const sxPaperPropsDrawer = {
        sx: {
            background: 'var(--gradient)',
            color: 'white',
        }
    }

    const sxBox1Drawer = {
        width: 200
    }

    const sxBox2Drawer = {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '12px 16px',
        cursor: 'pointer'
    }

    const sxIconButton = {
        color: 'white',
        fontSize: '2.5rem'
    }

    const sxDivider = {
        backgroundColor: 'rgba(0, 0, 0, 0.12)'

    }

    const sxListItemDrawer = {
        padding: '12px 24px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)'
        },
        '& .MuiListItemIcon-root': {
            color: 'inherit',
            minWidth: '40px'
        }
    }

    const sxListItemIcon ={
        fontSize: '1.5rem'
    }

    const sxPrimaryTypographyProps = {
        fontSize: '1.1rem',
        fontWeight: 'medium',
        transition: 'all 0.3s ease',
    }

    const {
        isName,
        pages,
        scrollTo,
        selectNav,
        setSelectNav,
        language,
        selectLanguage,
        changeLanguage,
        isDrawer,
        icon
    } = useGlobalContext()

    const [anchorElLanguage, setAnchorElLanguage] = useState(null);
    const handleClickLanguage = (event) => {
        setAnchorElLanguage(event.currentTarget);
    };

    const handleCloseLanguage = () => {
        setAnchorElLanguage(null);
    };

    const [open, setOpen] = useState(false);

    const toggleDrawer = (state) => () => {
        setOpen(state);
    };

    return (
        <div className="container">
            <nav>
                {isDrawer == true && (
                    <>
                        <button className="menu-icon"
                            onClick={toggleDrawer(true)}
                        >{icon.iconMenu}</button>
                        <Drawer
                            anchor="left"
                            open={open}
                            onClose={toggleDrawer(false)}
                            PaperProps={sxPaperPropsDrawer}
                        >
                            <Box sx={sxBox1Drawer}>
                                <Box sx={sxBox2Drawer}>
                                    <IconButton onClick={toggleDrawer(false)} sx={sxIconButton}>
                                        {icon.iconClose}
                                    </IconButton>
                                </Box>

                                <Divider sx={sxDivider} />

                                <List>
                                    {pages[language].map((page, index) => (
                                        <ListItem
                                            button
                                            key={index}
                                            onClick={() => {
                                                setSelectNav(index)
                                                scrollTo(page.id)
                                                setOpen(false)
                                            }}
                                            sx={sxListItemDrawer}
                                        >
                                            <ListItemIcon sx={sxListItemIcon}>{page.icon}</ListItemIcon>
                                            <ListItemText
                                                primary={page.label}
                                                primaryTypographyProps={sxPrimaryTypographyProps}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Drawer>
                    </>
                )}
                <div className="logo-div flex gap-2">
                    <img alt='logo' className='logo' src={isName.logo}></img>
                    <span>{isName.name}</span>
                </div>
                {isDrawer == false && (
                    <ul className="nav-links">
                        {pages[language].map((page, index) => (
                            <li key={page.id}>
                                <a
                                    onClick={() => {
                                        setSelectNav(index)
                                        scrollTo(page.id)
                                    }}
                                    className={`${selectNav === index ? 'active' : ''} `}
                                >{page.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}

                <button className='flex items-center justify-center gap-2 btn-language'
                    onClick={handleClickLanguage}
                >
                    <img src={selectLanguage[language].img} className='language-flag' />
                    <span>{selectLanguage[language].label}</span>
                </button>
                <Menu
                    anchorEl={anchorElLanguage}
                    open={Boolean(anchorElLanguage)}
                    onClose={handleCloseLanguage}
                    PaperProps={PaperProps}
                    MenuListProps={MenuListProps}
                >
                    <h4 className='title-language'>{selectLanguage[language].title}</h4>
                    {selectLanguage[language].option.map((item, index) => (
                        <MenuItem
                            key={item.value}
                            sx={sxMenuItem}
                            onClick={() => {
                                changeLanguage(item.value)
                                handleCloseLanguage()
                            }}
                        >
                            <img src={item.img} className='language-flag' alt={item.text} />
                            {item.text}

                        </MenuItem>
                    ))}
                </Menu>
            </nav>
        </div>
    )
}

export default Nav;