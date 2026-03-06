import { useState, useEffect } from 'react';
import {
    AppBar, Toolbar, Typography, Button, Box, IconButton,
    Drawer, List, ListItem, ListItemButton, ListItemText, useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
];

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = useNavigate();
    const location = useLocation();

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href?: string) => {
        setDrawerOpen(false);
        if (!href) return;

        if (href.startsWith('/#')) {
            const targetId = href.substring(2);
            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else {
                document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate(href);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <>
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            >
                <AppBar
                    position="fixed"
                    elevation={0}
                    sx={{
                        background: scrolled
                            ? 'rgba(13, 13, 26, 0.85)'
                            : 'transparent',
                        backdropFilter: scrolled ? 'blur(20px)' : 'none',
                        transition: 'all 0.4s ease',
                    }}
                >
                    <Toolbar sx={{ width: '85%', mx: 'auto', justifyContent: 'space-between', px: { xs: 2, md: 6 }, py: 1 }}>
                        {/* Logo */}
                        <Box
                            onClick={() => handleNavClick('/')}
                            sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 0.5 }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    fontFamily: '"Montserrat", sans-serif',
                                    fontWeight: 900,
                                    background: 'linear-gradient(135deg, #F5A623, #FFCC44)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    letterSpacing: '0.05em',
                                }}
                            >
                                ARC9
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontFamily: '"Montserrat", sans-serif',
                                    fontWeight: 700,
                                    color: 'rgba(255,255,255,0.7)',
                                    letterSpacing: '0.3em',
                                    fontSize: '0.65rem',
                                    mt: 0.5,
                                }}
                            >
                                STUDIO
                            </Typography>
                        </Box>

                        {/* Desktop Links */}
                        {!isMobile && (
                            <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
                                {navLinks.map((link) => (
                                    <Button
                                        key={link.label}
                                        onClick={() => handleNavClick(link.href)}
                                        sx={{
                                            color: 'rgba(255,255,255,0.8)',
                                            fontSize: '0.85rem',
                                            fontWeight: 600,
                                            px: 2,
                                            py: 1,
                                            borderRadius: '50px',
                                            '&:hover': {
                                                color: '#F5A623',
                                                background: 'rgba(245, 166, 35, 0.1)',
                                                transform: 'translateY(-1px)',
                                            },
                                            transition: 'all 0.2s ease',
                                        }}
                                    >
                                        {link.label}
                                    </Button>
                                ))}
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleNavClick('/contact')}
                                    sx={{ ml: 1, py: 1, px: 2.5, fontSize: '0.85rem' }}
                                >
                                    Get Started
                                </Button>
                            </Box>
                        )}

                        {/* Mobile Hamburger */}
                        {isMobile && (
                            <IconButton
                                onClick={() => setDrawerOpen(true)}
                                sx={{ color: '#F5A623' }}
                            >
                                <MenuIcon />
                            </IconButton>
                        )}
                    </Toolbar>
                </AppBar>
            </motion.div>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                PaperProps={{
                    sx: {
                        width: 280,
                        background: '#16213E',
                        borderLeft: '1px solid rgba(245,166,35,0.2)',
                        px: 2,
                    },
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2 }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontFamily: '"Montserrat", sans-serif',
                            fontWeight: 900,
                            background: 'linear-gradient(135deg, #F5A623, #FFCC44)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        ARC9 STUDIO
                    </Typography>
                    <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'rgba(255,255,255,0.6)' }}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <List>
                    {navLinks.map((link, i) => (
                        <motion.div
                            key={link.label}
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.08, duration: 0.3 }}
                        >
                            <ListItem disablePadding sx={{ mb: 0.5 }}>
                                <ListItemButton
                                    onClick={() => handleNavClick(link.href)}
                                    sx={{
                                        borderRadius: 2,
                                        '&:hover': {
                                            background: 'rgba(245, 166, 35, 0.1)',
                                            '& span': { color: '#F5A623' },
                                        },
                                    }}
                                >
                                    <ListItemText
                                        primary={link.label}
                                        primaryTypographyProps={{
                                            fontWeight: 600,
                                            color: 'rgba(255,255,255,0.8)',
                                            component: 'span',
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        </motion.div>
                    ))}
                </List>
                <Box sx={{ mt: 'auto', p: 2 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={() => handleNavClick('/contact')}
                    >
                        Get Started
                    </Button>
                </Box>
            </Drawer>
        </>
    );
};

export default Navbar;
