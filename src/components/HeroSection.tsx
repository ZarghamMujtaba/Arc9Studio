import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const HeroSection = () => {

    return (
        <Box
            id="hero"
            sx={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                background: '#0D0D1A',
                pt: { xs: 12, md: 0 },
            }}
        >
            {/* Grid Pattern Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.15,
                    backgroundImage: `
                        linear-gradient(rgba(245, 166, 35, 0.2) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(245, 166, 35, 0.2) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                    pointerEvents: 'none',
                }}
            />

            {/* Animated Floating Orbs using inline styles */}
            <motion.div
                animate={{
                    y: [0, -30, 0],
                    x: [0, 20, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    top: '15%',
                    left: '10%',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(245, 166, 35, 0.15) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            />

            <motion.div
                animate={{
                    y: [0, 40, 0],
                    x: [0, -30, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                }}
                style={{
                    position: 'absolute',
                    bottom: '15%',
                    right: '5%',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(15, 52, 96, 0.8) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
                <Grid container spacing={4} justifyContent="center" alignItems="center">
                    <Grid size={{ xs: 12, md: 10 }} textAlign="center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <Typography
                                variant="overline"
                                sx={{
                                    color: '#F5A623',
                                    letterSpacing: '0.2rem',
                                    fontWeight: 700,
                                    display: 'block',
                                    mb: 2,
                                }}
                            >
                                DIGITAL & CREATIVE MARKETING AGENCY
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        >
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: { xs: '3.5rem', sm: '5rem', md: '7rem' },
                                    fontWeight: 900,
                                    lineHeight: 1.1,
                                    mb: 3,
                                    textTransform: 'uppercase',
                                    color: '#fff',
                                }}
                            >
                                Elevate Your <br />
                                <Box
                                    component="span"
                                    sx={{
                                        background: 'linear-gradient(135deg, #F5A623, #FFCC44)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        display: 'inline-block',
                                    }}
                                >
                                    Digital Presence
                                </Box>
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'rgba(255, 255, 255, 0.7)',
                                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                                    maxWidth: '800px',
                                    mx: 'auto',
                                    mb: { xs: 2, md: 5 },
                                    lineHeight: 1.6,
                                }}
                            >
                                We transform brands through the power of creative strategy,
                                data-driven insights, and relentless innovation — making your vision our mission.
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                        >
                            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                                <Button
                                    component={RouterLink}
                                    to="/contact"
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    sx={{
                                        px: 4,
                                        py: 1.5,
                                        fontWeight: 700,
                                        fontSize: '1rem',
                                        background: 'linear-gradient(135deg, #F5A623, #FFCC44)',
                                        color: '#0D0D1A',
                                        '&:hover': {
                                            background: 'linear-gradient(135deg, #FFCC44, #F5A623)',
                                            boxShadow: '0 8px 25px rgba(245, 166, 35, 0.4)',
                                        }
                                    }}
                                >
                                    Get Started
                                </Button>

                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HeroSection;
