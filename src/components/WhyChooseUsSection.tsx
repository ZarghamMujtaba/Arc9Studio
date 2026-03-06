import { Box, Container, Typography, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SpeedIcon from '@mui/icons-material/Speed';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

const reasons = [
    {
        icon: <AutoGraphIcon sx={{ fontSize: 32 }} />,
        title: 'Proven Results',
        desc: '500+ successful campaigns with measurable ROI. We let our numbers speak for themselves.',
    },
    {
        icon: <PeopleAltIcon sx={{ fontSize: 32 }} />,
        title: 'Expert Team',
        desc: 'A dedicated team of creative strategists, designers, and data analysts working for your growth.',
    },
    {
        icon: <SpeedIcon sx={{ fontSize: 32 }} />,
        title: 'Fast Execution',
        desc: 'We move at the speed of business. Fast turnarounds without ever compromising on quality.',
    },
    {
        icon: <SupportAgentIcon sx={{ fontSize: 32 }} />,
        title: '24/7 Support',
        desc: 'Your dedicated account manager is always available to keep you informed and in control.',
    },
    {
        icon: <WorkspacePremiumIcon sx={{ fontSize: 32 }} />,
        title: 'Transparent Reporting',
        desc: 'Real-time dashboards and monthly reports. No hidden costs, no surprises — ever.',
    },
    {
        icon: <IntegrationInstructionsIcon sx={{ fontSize: 32 }} />,
        title: 'Tailored Strategy',
        desc: 'No one-size-fits-all. Every strategy is custom-built around your unique business goals.',
    },
];

const WhyChooseUsSection = () => {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <Box
            id="why"
            ref={ref}
            sx={{ py: { xs: 8, md: 14 }, background: '#121223', position: 'relative', overflow: 'hidden' }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '80%',
                    height: 400,
                    background: 'radial-gradient(ellipse, rgba(245,166,35,0.05) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            />

            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Chip
                            label="Why Choose Us"
                            sx={{
                                background: 'rgba(245,166,35,0.15)',
                                color: '#F5A623',
                                fontWeight: 700,
                                border: '1px solid rgba(245,166,35,0.3)',
                                mb: 2,
                            }}
                        />
                        <Typography variant="h2" sx={{ color: '#fff', mb: 2, fontSize: { xs: '2rem', md: '2.8rem' } }}>
                            The ARC9{' '}
                            <Box component="span" sx={{ color: '#F5A623' }}>Difference</Box>
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.55)', maxWidth: 500, mx: 'auto' }}>
                            We're not just another agency. We're a growth partner committed to your long-term success.
                        </Typography>
                    </Box>
                </motion.div>

                <Grid container spacing={3}>
                    {reasons.map((reason, i) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                whileHover={{ y: -6 }}
                            >
                                <Box
                                    sx={{
                                        p: 3.5,
                                        borderRadius: 4,
                                        border: '1px solid rgba(245,166,35,0.1)',
                                        background: 'rgba(22, 33, 62, 0.5)',
                                        height: '100%',
                                        transition: 'all 0.35s ease',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            border: '1px solid rgba(245,166,35,0.4)',
                                            background: 'rgba(22, 33, 62, 0.9)',
                                            boxShadow: '0 16px 48px rgba(245,166,35,0.1)',
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 60,
                                            height: 60,
                                            borderRadius: 3,
                                            background: 'rgba(245,166,35,0.12)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#F5A623',
                                            mb: 2.5,
                                            border: '1px solid rgba(245,166,35,0.2)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                background: 'rgba(245,166,35,0.25)',
                                                boxShadow: '0 0 20px rgba(245,166,35,0.3)',
                                            },
                                        }}
                                    >
                                        {reason.icon}
                                    </Box>
                                    <Typography variant="h6" sx={{ color: '#fff', mb: 1.5, fontWeight: 700 }}>
                                        {reason.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                                        {reason.desc}
                                    </Typography>
                                </Box>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default WhyChooseUsSection;
