import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link as RouterLink } from 'react-router-dom';

const ThankYouSection = () => {
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

    return (
        <Box
            ref={ref}
            sx={{
                py: { xs: 10, md: 16 },
                background: '#0D0D1A', // Matched with How We Work section color
                position: 'relative',
                overflow: 'hidden',
                textAlign: 'center',
            }}
        >
            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <Box
                        sx={{
                            display: 'inline-block',
                            background: 'linear-gradient(135deg, rgba(245,166,35,0.1), rgba(255,204,68,0.05))',
                            border: '1px solid rgba(245,166,35,0.3)',
                            borderRadius: '50px',
                            px: 3,
                            py: 1,
                            mb: 4,
                        }}
                    >
                        <Typography
                            variant="overline"
                            sx={{ color: '#F5A623', letterSpacing: '0.15em', fontWeight: 700 }}
                        >
                            THANK YOU
                        </Typography>
                    </Box>

                    <Typography
                        variant="h3"
                        sx={{
                            color: '#fff',
                            fontWeight: 600,
                            lineHeight: 1.4,
                            fontSize: { xs: '1.8rem', md: '2.5rem' },
                            maxWidth: '800px',
                            mx: 'auto'
                        }}
                    >
                        “ Let’s grow your brand, enhance your
                        digital presence, and achieve
                        measurable results with{' '}
                        <Box component="span" sx={{
                            background: 'linear-gradient(135deg, #F5A623, #FFCC44)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 800
                        }}>
                            Arc9 Studio.
                        </Box>”
                    </Typography>

                    {/* CTA Banner Section Moved Here */}
                    <Box sx={{ pt: 10, position: 'relative' }}>
                        <Box
                            sx={{
                                background: 'linear-gradient(135deg, #16213E 0%, #0F3460 100%)',
                                borderRadius: 5,
                                p: { xs: 5, md: 8 },
                                textAlign: 'center',
                                position: 'relative',
                                overflow: 'hidden',
                                border: '1px solid rgba(245,166,35,0.2)',
                                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                            }}
                        >
                            <Typography
                                variant="overline"
                                sx={{ color: '#F5A623', letterSpacing: '0.2em', fontWeight: 700, mb: 2, display: 'block' }}
                            >
                                READY TO GROW?
                            </Typography>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: { xs: '2.5rem', md: '4rem' },
                                    fontWeight: 900,
                                    color: '#fff',
                                    mb: 3,
                                    textTransform: 'uppercase'
                                }}
                            >
                                Let's Work{' '}
                                <Box component="span" sx={{
                                    background: 'linear-gradient(135deg, #F5A623, #FFCC44)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}>
                                    Together
                                </Box>
                            </Typography>
                            <Button
                                component={RouterLink}
                                to="/contact"
                                variant="contained"
                                size="large"
                                endIcon={<ArrowForwardIcon />}
                                sx={{
                                    px: 5,
                                    py: 2,
                                    borderRadius: '30px',
                                    fontSize: '1.2rem',
                                    fontWeight: 600,
                                    background: 'linear-gradient(90deg, #F5A623, #FFCC44)',
                                    color: '#0D0D1A',
                                    boxShadow: '0 10px 30px rgba(245,166,35,0.3)',
                                    '&:hover': {
                                        transform: 'translateY(-3px)',
                                        boxShadow: '0 15px 40px rgba(245,166,35,0.4)',
                                    },
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                Get Started Now
                            </Button>
                        </Box>
                    </Box>
                </motion.div>
            </Container>

        </Box>
    );
};

export default ThankYouSection;
