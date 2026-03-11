import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Typography, Grid, IconButton, Link, Divider, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { services } from '../data/services';

const FooterSection = () => {
    const { ref: footerRef, inView: footerInView } = useInView({ threshold: 0.2, triggerOnce: true });

    return (
        <Box sx={{ background: '#121223', position: 'relative', overflow: 'hidden' }}>
            {/* Main Footer Content */}
            <Box ref={footerRef} sx={{ pt: 8, pb: 4, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <Container maxWidth={false} sx={{ width: { xs: '90%', md: '82%' }, mx: 'auto' }}>
                    <Grid container spacing={8} sx={{ justifyContent: 'space-between' }}>
                        {/* Company Info */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={footerInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5 }}
                            >
                                <Typography variant="h4" sx={{
                                    fontWeight: 900, mb: 2, letterSpacing: '-0.02em',
                                    background: 'linear-gradient(135deg, #F5A623, #FFCC44)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    textAlign: { xs: 'center', md: 'left' }
                                }}>
                                    ARC9
                                    <Box component="span" sx={{
                                        color: 'rgba(245, 166, 35, 0.8)',
                                        fontWeight: 700,
                                        fontSize: '1rem',
                                        letterSpacing: '0.2em',
                                        ml: 1,
                                        WebkitTextFillColor: 'initial', // Override parent gradient for the span
                                    }}>
                                        STUDIO
                                    </Box>
                                </Typography>
                                <Typography variant="body2" sx={{
                                    color: 'rgba(255,255,255,0.6)',
                                    mb: 3,
                                    lineHeight: 1.8,
                                    width: { xs: '100%', md: '60%' },
                                    mx: { xs: 'auto', md: '0' },
                                    textAlign: { xs: 'center', md: 'left' }
                                }}>
                                    A premier digital and creative marketing agency dedicated to transforming brands through innovative strategy and data-driven results.
                                </Typography>
                                <Box sx={{ display: 'flex', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                    {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon].map((Icon, i) => (
                                        <IconButton
                                            key={i}
                                            sx={{
                                                color: 'rgba(255,255,255,0.6)',
                                                background: 'rgba(255,255,255,0.05)',
                                                '&:hover': {
                                                    background: '#F5A623',
                                                    color: '#0D0D1A',
                                                    transform: 'translateY(-3px)',
                                                },
                                                transition: 'all 0.3s ease',
                                            }}
                                        >
                                            <Icon fontSize="small" />
                                        </IconButton>
                                    ))}
                                </Box>
                            </motion.div>
                        </Grid>

                        {/* Mobile Accordions & Desktop Grids */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            {/* Mobile View */}
                            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                                {/* Services Accordion */}
                                <Accordion sx={{ background: 'transparent', boxShadow: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#F5A623' }} />}>
                                        <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700 }}>Our Services</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, alignItems: 'center' }}>
                                            {services.map((service, i) => (
                                                <Link
                                                    key={i}
                                                    component={RouterLink}
                                                    to="/contact"
                                                    state={{ selectedService: service.title }}
                                                    underline="none"
                                                    sx={{
                                                        color: 'rgba(255,255,255,0.6)',
                                                        typography: 'body2',
                                                        '&:hover': { color: '#F5A623', transform: 'translateX(5px)' },
                                                        transition: 'all 0.3s ease',
                                                    }}
                                                >
                                                    {service.title}
                                                </Link>
                                            ))}
                                        </Box>
                                    </AccordionDetails>
                                </Accordion>

                                {/* Contact Accordion */}
                                <Accordion sx={{ background: 'transparent', boxShadow: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', '&:before': { display: 'none' } }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#F5A623' }} />}>
                                        <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700 }}>Contact Us</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ pt: 2 }}>
                                        <Box component={RouterLink as any} to="/contact" sx={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', cursor: 'pointer', '&:hover': { opacity: 0.8 } }}>
                                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 1 }}>
                                                <LocationOnIcon sx={{ color: '#F5A623', fontSize: 20 }} />
                                                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                                                    123 Creative Boulevard<br />
                                                    Innovation District<br />
                                                    New York, NY 10001
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                                                <PhoneIcon sx={{ color: '#F5A623', fontSize: 20 }} />
                                                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                                                    +1 (555) 123-4567
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                                                <EmailIcon sx={{ color: '#F5A623', fontSize: 20 }} />
                                                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                                                    hello@arcanebuild.com
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>

                            {/* Desktop View */}
                            <Grid container spacing={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
                                {/* Services Links */}
                                <Grid size={{ xs: 12, sm: 6, md: 6 }} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={footerInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 0.1 }}
                                    >
                                        <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700, mb: 3 }}>
                                            Our Services
                                        </Typography>
                                        <Box sx={{
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(2, 1fr)',
                                            gap: 1.5,
                                            minWidth: '450px'
                                        }}>
                                            {services.map((service, i) => (
                                                <Link
                                                    key={i}
                                                    component={RouterLink}
                                                    to="/contact"
                                                    state={{ selectedService: service.title }}
                                                    underline="none"
                                                    sx={{
                                                        color: 'rgba(255,255,255,0.6)',
                                                        typography: 'body2',
                                                        '&:hover': { color: '#F5A623', transform: 'translateX(5px)' },
                                                        transition: 'all 0.3s ease',
                                                        display: 'inline-block',
                                                        width: 'fit-content'
                                                    }}
                                                >
                                                    {service.title}
                                                </Link>
                                            ))}
                                        </Box>
                                    </motion.div>
                                </Grid>

                                {/* Contact Info */}
                                <Grid size={{ xs: 12, sm: 6, md: 6 }} sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={footerInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    >
                                        <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700, mb: 3 }}>
                                            Contact Us
                                        </Typography>
                                        <Box component={RouterLink as any} to="/contact" sx={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 2, cursor: 'pointer', '&:hover': { opacity: 0.8 } }}>
                                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                                <LocationOnIcon sx={{ color: '#F5A623', fontSize: 20, mt: 0.5 }} />
                                                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                                                    123 Creative Boulevard<br />
                                                    Innovation District<br />
                                                    New York, NY 10001
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                <PhoneIcon sx={{ color: '#F5A623', fontSize: 20 }} />
                                                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                                                    +1 (555) 123-4567
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                <EmailIcon sx={{ color: '#F5A623', fontSize: 20 }} />
                                                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                                                    hello@arcanebuild.com
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </motion.div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Divider sx={{ borderColor: 'rgba(255,255,255,0.05)', my: 4 }} />

                    {/* Bottom Bar */}
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.4)', textAlign: { xs: 'center', sm: 'left' } }}>
                            &copy; {new Date().getFullYear()} ARC9 Studio. All rights reserved.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 3 }}>
                            {['Privacy Policy', 'Terms of Service'].map((item, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    underline="none"
                                    sx={{
                                        color: 'rgba(255,255,255,0.4)',
                                        typography: 'body2',
                                        '&:hover': { color: '#fff' }
                                    }}
                                >
                                    {item}
                                </Link>
                            ))}
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default FooterSection;
