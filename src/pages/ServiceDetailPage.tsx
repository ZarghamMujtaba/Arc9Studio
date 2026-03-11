import { useState, cloneElement, type ReactElement } from 'react';
import { Box, Container, Typography, Chip, Button, Collapse, IconButton, Grid } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate, Link as RouterLink } from 'react-router-dom';
import { services } from '../data/services';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BuildIcon from '@mui/icons-material/Build';

const ServiceDetailPage = () => {
    const { servicePath } = useParams<{ servicePath: string }>();
    const navigate = useNavigate();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const service = services.find(s => s.path === servicePath);
    const serviceIndex = services.findIndex(s => s.path === servicePath);
    const prevService = serviceIndex > 0 ? services[serviceIndex - 1] : null;
    const nextService = serviceIndex < services.length - 1 ? services[serviceIndex + 1] : null;

    if (!service) {
        return (
            <Box sx={{ py: 20, textAlign: 'center', background: '#121223', minHeight: '100vh' }}>
                <Container maxWidth="md">
                    <Typography variant="h3" sx={{ color: '#fff', mb: 3 }}>Service Not Found</Typography>
                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.55)', mb: 4 }}>
                        The service you're looking for doesn't exist.
                    </Typography>
                    <Button
                        component={RouterLink}
                        to="/services"
                        variant="contained"
                        color="primary"
                    >
                        View All Services
                    </Button>
                </Container>
            </Box>
        );
    }

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const scaledIcon = cloneElement(service.icon as ReactElement<{ sx?: object }>, {
        sx: { fontSize: { xs: 64, md: 80 } }
    });

    return (
        <Box sx={{ background: '#121223', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
            {/* ===== HERO SECTION — full width ===== */}
            <Box
                sx={{
                    position: 'relative',
                    pt: { xs: 10, md: 20 },
                    pb: { xs: 8, md: 12 },
                    overflow: 'hidden',
                }}
            >
                {/* Gradient background wash */}
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        background: `linear-gradient(160deg, ${service.color}18 0%, transparent 50%, ${service.color}08 100%)`,
                        pointerEvents: 'none',
                    }}
                />
                {/* Large radial glow top-right */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: '-20%',
                        right: '-10%',
                        width: { xs: 350, md: 700 },
                        height: { xs: 350, md: 700 },
                        background: `radial-gradient(circle, ${service.color}14 0%, transparent 70%)`,
                        borderRadius: '50%',
                        pointerEvents: 'none',
                    }}
                />
                {/* Smaller radial glow bottom-left */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: '-15%',
                        left: '-8%',
                        width: { xs: 250, md: 500 },
                        height: { xs: 250, md: 500 },
                        background: `radial-gradient(circle, ${service.color}0C 0%, transparent 70%)`,
                        borderRadius: '50%',
                        pointerEvents: 'none',
                    }}
                />
                {/* Animated gradient line at bottom */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 2,
                        background: `linear-gradient(90deg, transparent, ${service.color}60, transparent)`,
                        backgroundSize: '200% 100%',
                        animation: 'gradient-shift 4s ease infinite',
                    }}
                />

                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            gap: { xs: 5, md: 8 },
                            alignItems: 'center',
                        }}
                    >
                        {/* Left — Icon */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8, type: 'spring', stiffness: 90 }}
                            style={{ flexShrink: 0 }}
                        >
                            <Box
                                sx={{
                                    width: { xs: 150, sm: 180, md: 220 },
                                    height: { xs: 150, sm: 180, md: 220 },
                                    borderRadius: 6,
                                    background: `${service.color}12`,
                                    border: `2px solid ${service.color}25`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: service.color,
                                    position: 'relative',
                                    overflow: 'hidden',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        inset: 0,
                                        background: service.gradient,
                                        opacity: 0.06,
                                        transition: 'opacity 0.5s ease',
                                    },
                                    '&:hover::before': { opacity: 0.18 },
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        inset: -4,
                                        borderRadius: 6,
                                        background: service.gradient,
                                        opacity: 0,
                                        zIndex: -1,
                                        transition: 'opacity 0.5s ease',
                                        filter: 'blur(28px)',
                                    },
                                    '&:hover::after': { opacity: 0.35 },
                                    animation: 'float 6s ease-in-out infinite',
                                }}
                            >
                                {scaledIcon}
                            </Box>
                        </motion.div>

                        {/* Right — Text content */}
                        <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.15 }}
                            >
                                <Chip
                                    label={`${String(serviceIndex + 1).padStart(2, '0')} / ${services.length}`}
                                    sx={{
                                        background: `${service.color}20`,
                                        color: service.color,
                                        fontWeight: 700,
                                        border: `1px solid ${service.color}40`,
                                        mb: 2.5,
                                        fontSize: '0.85rem',
                                    }}
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.25 }}
                            >
                                <Typography
                                    variant="h1"
                                    sx={{
                                        color: '#fff',
                                        mb: 3,
                                        fontSize: { xs: '2rem', sm: '2.6rem', md: '3.4rem', lg: '3.8rem' },
                                        lineHeight: 1.15,
                                    }}
                                >
                                    {service.title.split(' ').slice(0, -1).join(' ')}{' '}
                                    <Box
                                        component="span"
                                        sx={{
                                            background: service.gradient,
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                        }}
                                    >
                                        {service.title.split(' ').slice(-1)}
                                    </Box>
                                </Typography>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 25 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.35 }}
                            >
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: 'rgba(255,255,255,0.6)',
                                        maxWidth: { md: 640 },
                                        fontSize: { xs: '1rem', md: '1.1rem' },
                                        lineHeight: 1.85,
                                        mb: 4,
                                    }}
                                >
                                    {service.description}
                                </Typography>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.45 }}
                            >
                                <Button
                                    component={RouterLink}
                                    to="/contact"
                                    state={{ selectedService: service.title }}
                                    variant="contained"
                                    sx={{
                                        background: service.gradient,
                                        color: '#fff',
                                        px: 5,
                                        py: 1.6,
                                        fontWeight: 700,
                                        fontSize: '1rem',
                                        '&:hover': {
                                            boxShadow: `0 14px 44px ${service.color}50`,
                                        },
                                    }}
                                >
                                    Let's Connect
                                </Button>
                            </motion.div>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* ===== REST OF PAGE ===== */}
            <Container maxWidth="lg" sx={{ pt: { xs: 6, md: 8 }, pb: { xs: 8, md: 12 }, position: 'relative', zIndex: 1 }}>
                {/* Decorative radial for body */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: '10%',
                        left: '-10%',
                        width: { xs: 200, md: 400 },
                        height: { xs: 200, md: 400 },
                        background: `radial-gradient(circle, ${service.color}06 0%, transparent 70%)`,
                        borderRadius: '50%',
                        pointerEvents: 'none',
                    }}
                />

                {/* ===== WHY THIS SERVICE ===== */}
                <Box sx={{ mb: { xs: 8, md: 12 } }}>
                    {/* Two-column: Overview text + Benefits grid */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', lg: 'row' },
                            gap: { xs: 5, lg: 8 },
                        }}
                    >
                        {/* Left — Overview narrative */}
                        <Box sx={{ flex: 1.1 }}>
                            <motion.div
                                initial={{ opacity: 0, y: 25 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <Typography
                                    variant="h4"
                                    sx={{
                                        color: '#fff',
                                        mb: 4,
                                        fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.9rem' },
                                        lineHeight: 1.25,
                                        textAlign: { xs: 'center', lg: 'left' },
                                    }}
                                >
                                    Why{' '}
                                    <Box
                                        component="span"
                                        sx={{
                                            background: service.gradient,
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                        }}
                                    >
                                        {service.title}
                                    </Box>
                                    ?
                                </Typography>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 25 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: 'rgba(255,255,255,0.58)',
                                        fontSize: { xs: '0.95rem', md: '1.02rem' },
                                        lineHeight: 2,
                                        textAlign: { xs: 'justify', lg: 'left' },
                                        width: { xs: '85%', lg: '100%' },
                                        mx: { xs: 'auto', lg: 0 },
                                    }}
                                >
                                    {service.overview}
                                </Typography>
                            </motion.div>
                        </Box>

                        {/* Right — Benefits cards */}
                        <Box sx={{ flex: 1 }}>
                            <Grid container spacing={2.5}>
                                {service.benefits.map((benefit, idx) => (
                                    <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.45 + idx * 0.1 }}
                                            style={{ height: '100%' }}
                                        >
                                            <Box
                                                sx={{
                                                    height: '100%',
                                                    p: { xs: 2.5, md: 3 },
                                                    borderRadius: 4,
                                                    background: 'rgba(22,33,62,0.45)',
                                                    border: '1px solid rgba(245,166,35,0.08)',
                                                    position: 'relative',
                                                    overflow: 'hidden',
                                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                                    '&::before': {
                                                        content: '""',
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        width: 3,
                                                        height: '100%',
                                                        background: service.gradient,
                                                        opacity: 0,
                                                        transition: 'opacity 0.3s ease',
                                                    },
                                                    '&:hover': {
                                                        border: `1px solid ${service.color}35`,
                                                        background: `${service.color}08`,
                                                        transform: 'translateY(-4px)',
                                                        boxShadow: `0 12px 32px ${service.color}12`,
                                                        '&::before': { opacity: 1 },
                                                    },
                                                }}
                                            >
                                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', sm: 'flex-start' }, gap: 1.2, mb: 1.5 }}>
                                                    <CheckCircleOutlineIcon
                                                        sx={{
                                                            color: service.color,
                                                            fontSize: 20,
                                                        }}
                                                    />
                                                    <Typography
                                                        sx={{
                                                            color: '#fff',
                                                            fontWeight: 700,
                                                            fontSize: { xs: '0.9rem', md: '0.95rem' },
                                                            fontFamily: '"Montserrat", sans-serif',
                                                        }}
                                                    >
                                                        {benefit.title}
                                                    </Typography>
                                                </Box>
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: 'rgba(255,255,255,0.5)',
                                                        fontSize: '0.82rem',
                                                        lineHeight: 1.75,
                                                        textAlign: { xs: 'center', sm: 'left' },
                                                    }}
                                                >
                                                    {benefit.description}
                                                </Typography>
                                            </Box>
                                        </motion.div>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>
                </Box>

                {/* ===== DIVIDER before What's Included ===== */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    style={{ transformOrigin: 'left' }}
                >
                    <Box
                        sx={{
                            height: 1,
                            background: `linear-gradient(90deg, ${service.color}40, transparent)`,
                            mb: { xs: 4, md: 6 },
                        }}
                    />
                </motion.div>

                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            color: '#fff',
                            mb: { xs: 3, md: 5 },
                            fontSize: { xs: '1.2rem', md: '1.5rem' },
                            textAlign: { xs: 'center', md: 'left' },
                        }}
                    >
                        What's{' '}
                        <Box component="span" sx={{ color: service.color }}>Included</Box>
                    </Typography>
                </motion.div>

                {/* Dropdown points - two column layout with icon sidebar */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', lg: 'row' },
                        gap: { xs: 4, lg: 6 },
                        alignItems: { lg: 'stretch' },
                    }}
                >
                    {/* Dropdown accordion list */}
                    <Box sx={{ flex: 1 }}>
                        {service.points.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                            >
                                <Box
                                    sx={{
                                        mb: 2,
                                        borderRadius: 3,
                                        overflow: 'hidden',
                                        background: openIndex === index ? `${service.color}10` : 'rgba(22,33,62,0.6)',
                                        border: `1px solid ${openIndex === index ? `${service.color}40` : 'rgba(245,166,35,0.08)'}`,
                                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        '&:hover': {
                                            border: `1px solid ${service.color}30`,
                                            background: `${service.color}08`,
                                        },
                                    }}
                                >
                                    {/* Accordion header */}
                                    <Box
                                        onClick={() => handleToggle(index)}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            px: { xs: 2.5, md: 3.5 },
                                            py: { xs: 2, md: 2.5 },
                                            cursor: 'pointer',
                                            gap: 2,
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
                                            <Typography
                                                sx={{
                                                    color: service.color,
                                                    fontWeight: 700,
                                                    fontSize: '0.85rem',
                                                    fontFamily: '"Montserrat", sans-serif',
                                                    opacity: 0.7,
                                                    minWidth: 28,
                                                }}
                                            >
                                                {String(index + 1).padStart(2, '0')}
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    color: openIndex === index ? '#fff' : 'rgba(255,255,255,0.85)',
                                                    fontWeight: 600,
                                                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.05rem' },
                                                    transition: 'color 0.3s ease',
                                                    lineHeight: 1.4,
                                                }}
                                            >
                                                {point.title}
                                            </Typography>
                                        </Box>
                                        <IconButton
                                            size="small"
                                            sx={{
                                                color: service.color,
                                                transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                                                transition: 'transform 0.3s ease',
                                                flexShrink: 0,
                                            }}
                                        >
                                            <ExpandMoreIcon />
                                        </IconButton>
                                    </Box>

                                    {/* Accordion content */}
                                    <Collapse in={openIndex === index} timeout={400}>
                                        <AnimatePresence>
                                            {openIndex === index && (
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <Box
                                                        sx={{
                                                            px: { xs: 2.5, md: 3.5 },
                                                            pb: { xs: 2, md: 3 },
                                                            pl: { xs: 5.5, md: 7 },
                                                        }}
                                                    >
                                                        <Box
                                                            sx={{
                                                                width: 40,
                                                                height: 2,
                                                                background: service.gradient,
                                                                borderRadius: 1,
                                                                mb: 2,
                                                            }}
                                                        />
                                                        <Typography
                                                            variant="body2"
                                                            sx={{
                                                                color: 'rgba(255,255,255,0.55)',
                                                                lineHeight: 1.8,
                                                                fontSize: { xs: '0.85rem', md: '0.9rem' },
                                                            }}
                                                        >
                                                            {point.detail}
                                                        </Typography>
                                                    </Box>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </Collapse>
                                </Box>
                            </motion.div>
                        ))}
                    </Box>

                    {/* Side icon card - visible on larger screens, stretches to match accordion height */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.8 }}
                        style={{ flexShrink: 0, display: 'flex' }}
                    >
                        <Box
                            sx={{
                                display: { xs: 'none', lg: 'flex' },
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 300,
                                height: '100%',
                                borderRadius: 5,
                                background: 'rgba(22,33,62,0.4)',
                                border: `1px solid ${service.color}20`,
                                gap: 3,
                                p: 4,
                                transition: 'all 0.5s ease',
                                '&:hover': {
                                    border: `1px solid ${service.color}50`,
                                    boxShadow: `0 20px 60px ${service.color}15`,
                                    '& .side-icon': {
                                        transform: 'scale(1.1) rotate(5deg)',
                                    },
                                },
                            }}
                        >
                            <Box
                                className="side-icon"
                                sx={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: 4,
                                    background: `${service.color}15`,
                                    border: `1px solid ${service.color}30`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: service.color,
                                    transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                    mb: 1,
                                }}
                            >
                                {cloneElement(service.icon as ReactElement<{ sx?: object }>, { sx: { fontSize: 48 } })}
                            </Box>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#fff',
                                    textAlign: 'center',
                                    fontWeight: 700,
                                    fontSize: '1.1rem',
                                }}
                            >
                                {service.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'rgba(255,255,255,0.45)',
                                    textAlign: 'center',
                                    fontSize: '0.82rem',
                                }}
                            >
                                {service.points.length} services included
                            </Typography>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: 3,
                                    borderRadius: 2,
                                    background: `${service.color}15`,
                                    overflow: 'hidden',
                                    mt: 'auto',
                                }}
                            >
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 1.5, delay: 1, ease: 'easeOut' }}
                                    style={{
                                        height: '100%',
                                        background: service.gradient,
                                        borderRadius: 8,
                                    }}
                                />
                            </Box>
                            <Button
                                component={RouterLink}
                                to="/contact"
                                state={{ selectedService: service.title }}
                                variant="outlined"
                                fullWidth
                                sx={{
                                    color: service.color,
                                    borderColor: `${service.color}50`,
                                    fontWeight: 600,
                                    '&:hover': {
                                        borderColor: service.color,
                                        background: `${service.color}10`,
                                        boxShadow: `0 8px 24px ${service.color}20`,
                                    },
                                }}
                            >
                                Let's Connect
                            </Button>
                        </Box>
                    </motion.div>
                </Box>

                {/* Mobile CTA */}
                <Box
                    sx={{
                        display: { xs: 'block', lg: 'none' },
                        mt: 4,
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <Button
                            component={RouterLink}
                            to="/contact"
                            state={{ selectedService: service.title }}
                            variant="contained"
                            fullWidth
                            sx={{
                                background: service.gradient,
                                color: '#fff',
                                py: 1.8,
                                fontWeight: 700,
                                fontSize: '1rem',
                                '&:hover': {
                                    boxShadow: `0 12px 40px ${service.color}50`,
                                },
                            }}
                        >
                            Let's Connect
                        </Button>
                    </motion.div>
                </Box>

                {/* Tools We Use Section */}
                <Box sx={{ mt: { xs: 6, md: 10 } }}>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        style={{ transformOrigin: 'left' }}
                    >
                        <Box
                            sx={{
                                height: 1,
                                background: `linear-gradient(90deg, ${service.color}40, transparent)`,
                                mb: { xs: 4, md: 6 },
                            }}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, gap: 1.5, mb: { xs: 3, md: 5 } }}>
                            <BuildIcon sx={{ color: service.color, fontSize: 22, opacity: 0.7 }} />
                            <Typography
                                variant="h5"
                                sx={{
                                    color: '#fff',
                                    fontSize: { xs: '1.2rem', md: '1.5rem' },
                                }}
                            >
                                Tools We{' '}
                                <Box component="span" sx={{ color: service.color }}>Use</Box>
                            </Typography>
                        </Box>
                    </motion.div>

                    <Grid container spacing={2}>
                        {service.tools.map((tool, index) => (
                            <Grid size={{ xs: 6, sm: 4, md: 3 }} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.4, delay: 1.1 + index * 0.06 }}
                                    style={{ height: '100%' }}
                                >
                                    <Box
                                        sx={{
                                            height: '100%',
                                            p: { xs: 2, md: 2.5 },
                                            borderRadius: 3,
                                            background: 'rgba(22,33,62,0.5)',
                                            border: '1px solid rgba(245,166,35,0.08)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: { xs: 'center', md: 'flex-start' },
                                            gap: 0.8,
                                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                            cursor: 'default',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                height: 2,
                                                background: service.gradient,
                                                opacity: 0,
                                                transition: 'opacity 0.3s ease',
                                            },
                                            '&:hover': {
                                                border: `1px solid ${service.color}40`,
                                                background: `${service.color}0A`,
                                                transform: 'translateY(-4px)',
                                                boxShadow: `0 8px 24px ${service.color}15`,
                                                '&::before': {
                                                    opacity: 1,
                                                },
                                            },
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: '#fff',
                                                fontWeight: 600,
                                                fontSize: { xs: '0.82rem', md: '0.92rem' },
                                                lineHeight: 1.3,
                                                textAlign: { xs: 'center', md: 'left' },
                                            }}
                                        >
                                            {tool.name}
                                        </Typography>
                                        <Chip
                                            label={tool.category}
                                            size="small"
                                            sx={{
                                                alignSelf: { xs: 'center', md: 'flex-start' },
                                                background: `${service.color}15`,
                                                color: service.color,
                                                fontWeight: 600,
                                                fontSize: '0.68rem',
                                                height: 22,
                                                border: `1px solid ${service.color}25`,
                                            }}
                                        />
                                    </Box>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Navigation between services */}
                <Box
                    sx={{
                        mt: { xs: 6, md: 10 },
                        pt: { xs: 4, md: 6 },
                        borderTop: '1px solid rgba(245,166,35,0.1)',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: 2,
                        }}
                    >
                        {prevService ? (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 1 }}
                            >
                                <Button
                                    onClick={() => {
                                        setOpenIndex(null);
                                        navigate(`/services/${prevService.path}`);
                                    }}
                                    startIcon={<ArrowBackIcon />}
                                    sx={{
                                        color: 'rgba(255,255,255,0.6)',
                                        textTransform: 'none',
                                        '&:hover': {
                                            color: prevService.color,
                                            background: `${prevService.color}10`,
                                        },
                                    }}
                                >
                                    <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
                                        {prevService.title}
                                    </Box>
                                    <Box component="span" sx={{ display: { xs: 'inline', sm: 'none' } }}>
                                        Previous
                                    </Box>
                                </Button>
                            </motion.div>
                        ) : (
                            <Box />
                        )}

                        {nextService ? (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 1 }}
                            >
                                <Button
                                    onClick={() => {
                                        setOpenIndex(null);
                                        navigate(`/services/${nextService.path}`);
                                    }}
                                    endIcon={<ArrowForwardIcon />}
                                    sx={{
                                        color: 'rgba(255,255,255,0.6)',
                                        textTransform: 'none',
                                        '&:hover': {
                                            color: nextService.color,
                                            background: `${nextService.color}10`,
                                        },
                                    }}
                                >
                                    <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
                                        {nextService.title}
                                    </Box>
                                    <Box component="span" sx={{ display: { xs: 'inline', sm: 'none' } }}>
                                        Next
                                    </Box>
                                </Button>
                            </motion.div>
                        ) : (
                            <Box />
                        )}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default ServiceDetailPage;
