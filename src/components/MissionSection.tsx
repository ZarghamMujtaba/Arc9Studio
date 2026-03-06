import { Box, Container, Typography, Grid, Card, CardContent, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import SecurityIcon from '@mui/icons-material/Security';

const values = [
    {
        icon: <VisibilityIcon sx={{ fontSize: 36, color: '#F5A623' }} />,
        title: 'Our Vision',
        desc: 'To be the leading creative marketing force that transforms brands into powerful market leaders through innovative digital strategies.',
    },
    {
        icon: <FavoriteIcon sx={{ fontSize: 36, color: '#F5A623' }} />,
        title: 'Passion',
        desc: 'We are passionate about what we do. Every project is an opportunity to create something extraordinary that makes a real difference.',
    },
    {
        icon: <EmojiObjectsIcon sx={{ fontSize: 36, color: '#F5A623' }} />,
        title: 'Innovation',
        desc: 'We stay ahead of trends and constantly evolve our strategies to keep your brand at the cutting edge of the digital world.',
    },
    {
        icon: <SecurityIcon sx={{ fontSize: 36, color: '#F5A623' }} />,
        title: 'Integrity',
        desc: 'Transparency and honesty are the foundation of everything we do. We build trust through consistent results and open communication.',
    },
];

const MissionSection = () => {
    const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

    return (
        <Box
            id="mission"
            ref={ref}
            sx={{
                py: { xs: 8, md: 14 },
                background: '#0D0D1A',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `radial-gradient(circle at 80% 50%, rgba(245,166,35,0.05) 0%, transparent 60%)`,
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
                            label="Mission & Values"
                            sx={{
                                background: 'rgba(245,166,35,0.15)',
                                color: '#F5A623',
                                fontWeight: 700,
                                border: '1px solid rgba(245,166,35,0.3)',
                                mb: 2,
                            }}
                        />
                        <Typography variant="h2" sx={{ color: '#fff', mb: 2, fontSize: { xs: '2rem', md: '2.8rem' } }}>
                            What Drives{' '}
                            <Box component="span" sx={{ color: '#F5A623' }}>Us</Box>
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.55)', maxWidth: 550, mx: 'auto' }}>
                            Our mission is to empower businesses with creative solutions that inspire, engage, and convert.
                        </Typography>
                    </Box>
                </motion.div>

                {/* Mission Statement Banner */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Box
                        sx={{
                            background: 'linear-gradient(135deg, rgba(245,166,35,0.15), rgba(255,204,68,0.05))',
                            border: '1px solid rgba(245,166,35,0.3)',
                            borderRadius: 4,
                            p: { xs: 3, md: 5 },
                            textAlign: 'center',
                            mb: 6,
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                top: -30,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: 300,
                                height: 100,
                                background: 'radial-gradient(ellipse, rgba(245,166,35,0.2) 0%, transparent 70%)',
                                pointerEvents: 'none',
                            }}
                        />
                        <Typography
                            variant="h4"
                            sx={{
                                color: '#fff',
                                fontStyle: 'italic',
                                fontWeight: 600,
                                fontSize: { xs: '1.2rem', md: '1.6rem' },
                                lineHeight: 1.6,
                            }}
                        >
                            "We transform brands through the power of creative strategy, data-driven insights,
                            and relentless innovation — making your vision our mission."
                        </Typography>
                    </Box>
                </motion.div>

                <Grid container spacing={3}>
                    {values.map((val, i) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
                                style={{ height: '100%', display: 'flex' }}
                                whileHover={{ y: -5 }}
                            >
                                <Card sx={{ height: '100%', width: '100%', p: 1, display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
                                    <CardContent sx={{ textAlign: 'center', p: 3 }}>
                                        <Box
                                            sx={{
                                                width: 70,
                                                height: 70,
                                                borderRadius: '50%',
                                                background: 'rgba(245,166,35,0.12)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                mx: 'auto',
                                                mb: 2,
                                                border: '1px solid rgba(245,166,35,0.2)',
                                            }}
                                        >
                                            {val.icon}
                                        </Box>
                                        <Typography variant="h6" sx={{ color: '#fff', mb: 1.5 }}>
                                            {val.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                                            {val.desc}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default MissionSection;
