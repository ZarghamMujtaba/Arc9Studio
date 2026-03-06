import { Box, Container, Typography, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const AboutPage = () => {
    return (
        <Box
            sx={{ pt: { xs: 12, md: 16 }, pb: { xs: 8, md: 10 }, background: '#121223', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}
        >
            {/* Background accent */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: -100,
                    width: 400,
                    height: 400,
                    background: 'radial-gradient(circle, rgba(245,166,35,0.06) 0%, transparent 70%)',
                    borderRadius: '50%',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                }}
            />

            <Container maxWidth="xl">
                <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
                    {/* Text side */}
                    <Grid size={{ xs: 12, md: 12 }}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            style={{ textAlign: 'center' }}
                        >
                            <Chip
                                label="About Us"
                                sx={{
                                    background: 'rgba(245,166,35,0.15)',
                                    color: '#F5A623',
                                    fontWeight: 700,
                                    letterSpacing: '0.05em',
                                    mb: 3,
                                    border: '1px solid rgba(245,166,35,0.3)',
                                }}
                            />
                            <Typography
                                variant="h2"
                                sx={{ color: '#fff', mb: 3, fontSize: { xs: '2rem', md: '2.8rem' } }}
                            >
                                Who We{' '}
                                <Box component="span" sx={{ color: '#F5A623' }}>
                                    Are
                                </Box>
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.65)', mb: 3, maxWidth: '800px', mx: 'auto' }}>
                                ARC9 Studio is a comprehensive digital and creative marketing agency dedicated to
                                elevating brands in the modern landscape. We combine data-driven strategies with
                                artistic creativity to deliver measurable results.
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.65)', mb: 4, maxWidth: '800px', mx: 'auto' }}>
                                Our team of passionate experts crafts tailored marketing solutions that connect
                                brands with their target audiences, driving growth and building lasting relationships.
                            </Typography>

                            <Box sx={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
                                {['Results-driven marketing strategies', 'Creative + data fusion approach', 'Dedicated account management', 'Transparent reporting & analytics'].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                                            <CheckCircleOutlineIcon sx={{ color: '#F5A623', fontSize: 20 }} />
                                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>
                                                {item}
                                            </Typography>
                                        </Box>
                                    </motion.div>
                                ))}
                            </Box>
                        </motion.div>
                    </Grid>

                    {/* Visual side */}
                    <Grid size={{ xs: 12, md: 12 }}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                        >
                            {/* Main card — full width */}
                            <Box
                                sx={{
                                    width: '100%',
                                    maxWidth: '800px',
                                    background: 'linear-gradient(135deg, #16213E 0%, #0F3460 60%, #16213E 100%)',
                                    borderRadius: 4,
                                    p: { xs: 4, md: 6 },
                                    border: '1px solid rgba(245,166,35,0.25)',
                                    textAlign: 'center',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    boxShadow: '0 24px 80px rgba(245,166,35,0.08)',
                                }}
                            >
                                {/* Glow accents */}
                                <Box sx={{
                                    position: 'absolute', top: -80, right: -80,
                                    width: 280, height: 280,
                                    background: 'radial-gradient(circle, rgba(245,166,35,0.18) 0%, transparent 70%)',
                                    borderRadius: '50%', pointerEvents: 'none',
                                }} />
                                <Box sx={{
                                    position: 'absolute', bottom: -60, left: -60,
                                    width: 200, height: 200,
                                    background: 'radial-gradient(circle, rgba(15,52,96,0.8) 0%, transparent 70%)',
                                    borderRadius: '50%', pointerEvents: 'none',
                                }} />

                                {/* Brand name */}
                                <Typography
                                    variant="h1"
                                    sx={{
                                        fontSize: { xs: '5rem', sm: '7rem', md: '8rem' },
                                        fontWeight: 900,
                                        background: 'linear-gradient(135deg, #F5A623, #FFCC44)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        lineHeight: 1,
                                        letterSpacing: '-0.02em',
                                    }}
                                >
                                    ARC9
                                </Typography>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        color: 'rgba(255,255,255,0.55)',
                                        letterSpacing: '0.55em',
                                        mt: 1,
                                        mb: 1,
                                        fontWeight: 700,
                                        fontSize: { xs: '1rem', md: '1.2rem' },
                                    }}
                                >
                                    STUDIO
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.35)', fontStyle: 'italic', mb: 4 }}>
                                    arcanebuild.com
                                </Typography>

                                {/* Divider line */}
                                <Box sx={{
                                    width: '60%', mx: 'auto', height: '1px',
                                    background: 'linear-gradient(90deg, transparent, rgba(245,166,35,0.4), transparent)',
                                    mb: 4,
                                }} />

                                {/* Stats — 4 across on md, 2x2 on xs */}
                                <Grid container spacing={3} justifyContent="center">
                                    {[
                                        { num: '500+', label: 'Campaigns' },
                                        { num: '200+', label: 'Clients' },
                                        { num: '7+', label: 'Years' },
                                        { num: '15+', label: 'Awards' },
                                    ].map((s, i) => (
                                        <Grid size={{ xs: 6, sm: 3 }} key={i}>
                                            <Box
                                                sx={{
                                                    background: 'rgba(245,166,35,0.07)',
                                                    borderRadius: 3,
                                                    py: 2.5,
                                                    px: 1,
                                                    border: '1px solid rgba(245,166,35,0.15)',
                                                    transition: 'all 0.3s ease',
                                                    cursor: 'pointer',
                                                    '&:hover': {
                                                        background: 'rgba(245,166,35,0.14)',
                                                        border: '1px solid rgba(245,166,35,0.35)',
                                                        transform: 'translateY(-4px)',
                                                    },
                                                }}
                                            >
                                                <Typography
                                                    variant="h4"
                                                    sx={{ color: '#F5A623', fontWeight: 900, lineHeight: 1, mb: 0.5 }}
                                                >
                                                    {s.num}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}
                                                >
                                                    {s.label}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AboutPage;
