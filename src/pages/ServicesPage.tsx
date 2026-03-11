import { Box, Container, Typography, Grid, Card, CardContent, Chip, List, ListItem, ListItemText, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ServicesPage = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ py: { xs: 12, md: 16 }, background: '#121223', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '10%',
                    right: -100,
                    width: 500,
                    height: 500,
                    background: 'radial-gradient(circle, rgba(245,166,35,0.04) 0%, transparent 70%)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                }}
            />

            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Chip
                            label="All Services"
                            sx={{
                                background: 'rgba(245,166,35,0.15)',
                                color: '#F5A623',
                                fontWeight: 700,
                                border: '1px solid rgba(245,166,35,0.3)',
                                mb: 2,
                            }}
                        />
                        <Typography variant="h2" sx={{ color: '#fff', mb: 2, fontSize: { xs: '2rem', md: '2.8rem' } }}>
                            What We{' '}
                            <Box component="span" sx={{ color: '#F5A623' }}>Offer</Box>
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.55)', maxWidth: 550, mx: 'auto' }}>
                            Explore our comprehensive digital marketing services designed to grow your brand, drive traffic, and boost revenue.
                        </Typography>
                    </Box>
                </motion.div>

                <Grid container spacing={3}>
                    {services.map((service, i) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                style={{ height: '100%' }}
                            >
                                <Card
                                    sx={{
                                        height: '100%',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        cursor: 'default',
                                        transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: `0 16px 40px ${service.color}20`,
                                            '&::before': { opacity: 1 },
                                            '& .explore-btn': {
                                                opacity: 1,
                                                transform: 'translateY(0)',
                                            },
                                            '& .service-icon-box': {
                                                background: service.gradient,
                                                color: '#fff',
                                                transform: 'scale(1.05)',
                                            },
                                        },
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: '3px',
                                            background: service.gradient,
                                            opacity: 0,
                                            transition: 'opacity 0.3s ease',
                                            zIndex: 3,
                                        },
                                    }}
                                >
                                    <CardContent sx={{ p: 3.5, position: 'relative', zIndex: 2, pb: '80px !important' }}>
                                        <Box
                                            className="service-icon-box"
                                            sx={{
                                                width: 60,
                                                height: 60,
                                                borderRadius: 3,
                                                background: `${service.color}20`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                mb: 2,
                                                color: service.color,
                                                border: `1px solid ${service.color}30`,
                                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                            }}
                                        >
                                            {service.icon}
                                        </Box>

                                        <Typography variant="h6" sx={{ color: '#fff', mb: 2, fontWeight: 700 }}>
                                            {service.title}
                                        </Typography>

                                        <List dense disablePadding>
                                            {service.points.map((pt, j) => (
                                                <ListItem key={j} disableGutters sx={{ py: 0.3, alignItems: 'flex-start' }}>
                                                    <Box
                                                        component="span"
                                                        sx={{
                                                            width: 6,
                                                            height: 6,
                                                            borderRadius: '50%',
                                                            background: service.gradient,
                                                            mt: 1,
                                                            mr: 1.5,
                                                            flexShrink: 0,
                                                        }}
                                                    />
                                                    <ListItemText
                                                        primary={pt.title}
                                                        primaryTypographyProps={{
                                                            variant: 'body2',
                                                            sx: { color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem' },
                                                        }}
                                                    />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </CardContent>

                                    {/* Hover explore button */}
                                    <Box
                                        className="explore-btn"
                                        sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            p: 2,
                                            pt: 3,
                                            background: `linear-gradient(transparent, #16213E 30%)`,
                                            opacity: 0,
                                            transform: 'translateY(10px)',
                                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                            zIndex: 3,
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Button
                                            onClick={() => navigate(`/services/${service.path}`)}
                                            endIcon={<ArrowForwardIcon sx={{ fontSize: '18px !important' }} />}
                                            sx={{
                                                background: service.gradient,
                                                color: '#fff',
                                                fontWeight: 700,
                                                fontSize: '0.85rem',
                                                px: 3,
                                                py: 1,
                                                borderRadius: '50px',
                                                textTransform: 'none',
                                                '&:hover': {
                                                    boxShadow: `0 8px 24px ${service.color}50`,
                                                    transform: 'translateY(-2px)',
                                                },
                                            }}
                                        >
                                            Explore Service
                                        </Button>
                                    </Box>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default ServicesPage;
