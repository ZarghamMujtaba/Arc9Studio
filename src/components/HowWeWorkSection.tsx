import { Box, Container, Typography, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';

const steps = [
    {
        title: 'Discovery',
        desc: 'Analyze your brand, goals, and target audience',
    },
    {
        title: 'Strategy',
        desc: 'Create a tailored marketing and creative plan',
    },
    {
        title: 'Execution',
        desc: 'Launch campaigns and implement product creatives',
    },
    {
        title: 'Monitoring',
        desc: 'Track performance and optimize continuously',
    },
];

const HowWeWorkSection = () => {
    const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

    return (
        <Box
            id="process"
            ref={ref}
            sx={{
                py: { xs: 8, md: 14 },
                background: '#0D0D1A',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
                        <Chip
                            label="Our Process"
                            sx={{
                                background: 'rgba(245,166,35,0.15)',
                                color: '#F5A623',
                                fontWeight: 700,
                                border: '1px solid rgba(245,166,35,0.3)',
                                mb: 2,
                            }}
                        />
                        <Typography variant="h2" sx={{ color: '#fff', mb: 2, fontSize: { xs: '2rem', md: '2.8rem' } }}>
                            How We{' '}
                            <Box component="span" sx={{ color: '#F5A623' }}>Work</Box>
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.55)', maxWidth: 500, mx: 'auto' }}>
                            Our proven 4-step process ensures every campaign delivers maximum impact and measurable results.
                        </Typography>
                    </Box>
                </motion.div>

                {/* Flow Container */}
                <Box sx={{ position: 'relative', maxWidth: 1000, mx: 'auto' }}>

                    {/* Feedback Loop Line (Desktop) */}
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                            transition={{ duration: 1, delay: 1 }}
                            style={{
                                position: 'absolute',
                                bottom: -50,
                                left: '37.5%',
                                right: '12.5%',
                                height: 50,
                                zIndex: 0,
                            }}
                        >
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    borderBottom: '3px solid rgba(245,166,35,0.2)',
                                    borderLeft: '3px solid rgba(245,166,35,0.2)',
                                    borderRight: '3px solid rgba(245,166,35,0.2)',
                                    borderBottomLeftRadius: 16,
                                    borderBottomRightRadius: 16,
                                    position: 'relative',
                                }}
                            >
                                {/* Fluid Flow Overlay for Border */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 0, bottom: -3, left: -3, right: -3,
                                        borderBottom: '3px solid transparent',
                                        borderLeft: '3px solid transparent',
                                        borderRight: '3px solid transparent',
                                        borderBottomLeftRadius: 16,
                                        borderBottomRightRadius: 16,
                                        background: 'linear-gradient(90deg, rgba(245,166,35,0) 0%, #FFCC44 50%, rgba(245,166,35,0) 100%) border-box',
                                        WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                                        WebkitMaskComposite: 'destination-out',
                                        maskComposite: 'exclude',
                                        backgroundSize: '200% 100%',
                                        animation: 'flowAnimation 8s linear infinite reverse', // reverse for right-to-left
                                    }}
                                />

                                {/* Arrow head pointing up at the left side of the U-shape */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: -3,
                                        left: -8.5,
                                        width: 0,
                                        height: 0,
                                        borderLeft: '7px solid transparent',
                                        borderRight: '7px solid transparent',
                                        borderBottom: '12px solid #F5A623',
                                        filter: 'drop-shadow(0px -3px 4px rgba(245,166,35,0.4))',
                                    }}
                                />
                            </Box>
                        </motion.div>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'stretch',
                            gap: { xs: 2, md: 1 },
                            position: 'relative',
                            zIndex: 1,
                        }}
                    >
                        {steps.map((step, i) => (
                            <React.Fragment key={i}>
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.6, delay: i * 0.2 }}
                                    style={{ flex: 1, display: 'flex' }}
                                >
                                    <Box
                                        sx={{
                                            background: 'linear-gradient(135deg, #F5A623 0%, #FFCC44 100%)',
                                            borderRadius: 2,
                                            p: { xs: 3, md: 2.5 },
                                            width: '100%',
                                            boxShadow: '0 10px 30px rgba(245,166,35,0.2)',
                                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                            textAlign: 'center',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            '&:hover': {
                                                transform: 'translateY(-10px)',
                                                boxShadow: '0 15px 40px rgba(245,166,35,0.5)',
                                            }
                                        }}
                                    >
                                        <Typography variant="h6" sx={{ color: '#0D0D1A', fontWeight: 800, mb: 1, fontSize: { xs: '1.2rem', md: '1.1rem' } }}>
                                            {step.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'rgba(13,13,26,0.9)', fontWeight: 600, lineHeight: 1.5, fontSize: { xs: '0.95rem', md: '0.85rem' } }}>
                                            {step.desc}
                                        </Typography>
                                    </Box>
                                </motion.div>

                                {/* Flow arrow after each card */}
                                {i < steps.length - 1 && (
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            transform: { xs: 'rotate(90deg)', md: 'none' },
                                            my: { xs: -1, md: 0 },
                                            width: { xs: '100%', md: 'auto' },
                                            opacity: inView ? 1 : 0,
                                            transition: 'opacity 0.6s ease',
                                            transitionDelay: `${(i * 0.2) + 0.1}s`,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 40,
                                                height: 24,
                                                background: 'linear-gradient(90deg, rgba(245,166,35,0.3) 0%, #FFCC44 50%, rgba(245,166,35,0.3) 100%)',
                                                backgroundSize: '200% 100%',
                                                animation: 'flowAnimation 6s linear infinite',
                                                '@keyframes flowAnimation': {
                                                    '0%': { backgroundPosition: '200% 0' },
                                                    '100%': { backgroundPosition: '-200% 0' },
                                                },
                                                maskImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'24\' viewBox=\'0 0 40 24\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 10H30V4L40 12L30 20V14H0V10Z\' fill=\'black\' /%3E%3C/svg%3E")',
                                                maskSize: 'contain',
                                                maskRepeat: 'no-repeat',
                                                WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'24\' viewBox=\'0 0 40 24\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 10H30V4L40 12L30 20V14H0V10Z\' fill=\'black\' /%3E%3C/svg%3E")',
                                                WebkitMaskSize: 'contain',
                                                WebkitMaskRepeat: 'no-repeat',
                                                flexShrink: 0,
                                            }}
                                        />
                                    </Box>
                                )}
                            </React.Fragment>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default HowWeWorkSection;
