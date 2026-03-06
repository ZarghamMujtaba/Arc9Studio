import { Box, Container, Typography, Grid, TextField, Button, Chip, FormLabel, Select, MenuItem, FormControl } from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { services } from '../data/services';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ContactPage = () => {
    const location = useLocation();
    const [service, setService] = useState(location.state?.selectedService || '');

    useEffect(() => {
        if (location.state?.selectedService) {
            setService(location.state.selectedService);
        }
    }, [location.state?.selectedService]);

    return (
        <Box sx={{ py: { xs: 12, md: 16 }, background: '#121223', minHeight: '100vh' }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <Chip
                            label="Get In Touch"
                            sx={{
                                background: 'rgba(245, 166, 35, 0.15)',
                                color: '#F5A623',
                                fontWeight: 700,
                                mb: 2,
                                border: '1px solid rgba(245, 166, 35, 0.3)',
                            }}
                        />
                        <Typography variant="h2" sx={{ color: '#fff', mb: 2, fontWeight: 900, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
                            Contact <Box component="span" sx={{ color: '#F5A623' }}>Us</Box>
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </Typography>
                    </motion.div>
                </Box>

                <Grid container spacing={6}>
                    <Grid size={{ xs: 12, md: 5 }} sx={{ order: { xs: 2, md: 1 } }}>
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} style={{ height: '100%' }}>
                            <Box sx={{
                                background: '#1a1a2e',
                                p: { xs: 4, md: 6 },
                                borderRadius: 4,
                                border: '1px solid rgba(255,255,255,0.05)',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 4
                            }}>
                                <Typography variant="h4" sx={{ color: '#fff', fontWeight: 700 }}>
                                    Contact Information
                                </Typography>

                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                        <Box sx={{ background: 'rgba(245, 166, 35, 0.1)', p: 1.5, borderRadius: 2 }}>
                                            <LocationOnIcon sx={{ color: '#F5A623', fontSize: 24 }} />
                                        </Box>
                                        <Box>
                                            <Typography variant="h6" sx={{ color: '#fff', fontSize: '1.1rem', mb: 0.5 }}>Our Location</Typography>
                                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                                                123 Creative Boulevard<br />
                                                Innovation District<br />
                                                New York, NY 10001
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                        <Box sx={{ background: 'rgba(245, 166, 35, 0.1)', p: 1.5, borderRadius: 2 }}>
                                            <PhoneIcon sx={{ color: '#F5A623', fontSize: 24 }} />
                                        </Box>
                                        <Box>
                                            <Typography variant="h6" sx={{ color: '#fff', fontSize: '1.1rem', mb: 0.5 }}>Phone Number</Typography>
                                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                                                +1 (555) 123-4567
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                        <Box sx={{ background: 'rgba(245, 166, 35, 0.1)', p: 1.5, borderRadius: 2 }}>
                                            <EmailIcon sx={{ color: '#F5A623', fontSize: 24 }} />
                                        </Box>
                                        <Box>
                                            <Typography variant="h6" sx={{ color: '#fff', fontSize: '1.1rem', mb: 0.5 }}>Email Address</Typography>
                                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                                                hello@arcanebuild.com
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>

                                <Box sx={{ mt: 'auto', borderRadius: 3, overflow: 'hidden', height: 250, position: 'relative' }}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1682449002237!5m2!1sen!2sus"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Google Map"
                                    />
                                </Box>
                            </Box>
                        </motion.div>
                    </Grid>

                    <Grid size={{ xs: 12, md: 7 }} sx={{ order: { xs: 1, md: 2 } }}>
                        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} style={{ height: '100%' }}>
                            <Box component="form" sx={{
                                background: '#1a1a2e',
                                p: { xs: 4, md: 6 },
                                borderRadius: 4,
                                border: '1px solid rgba(255,255,255,0.05)',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                                height: '100%'
                            }}>
                                <Grid container spacing={3}>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <FormLabel sx={{ color: 'rgba(255,255,255,0.8)', mb: 1, display: 'block' }}>Name *</FormLabel>
                                        <TextField
                                            fullWidth
                                            required
                                            variant="outlined"
                                            placeholder="John Doe"
                                            sx={{ input: { color: '#fff' }, fieldset: { borderColor: 'rgba(255,255,255,0.1)' }, '& .MuiOutlinedInput-root:hover fieldset': { borderColor: 'rgba(255,255,255,0.3)' }, '& .MuiOutlinedInput-root.Mui-focused fieldset': { borderColor: '#F5A623' } }}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <FormLabel sx={{ color: 'rgba(255,255,255,0.8)', mb: 1, display: 'block' }}>Email *</FormLabel>
                                        <TextField
                                            fullWidth
                                            required
                                            type="email"
                                            variant="outlined"
                                            placeholder="john@example.com"
                                            sx={{ input: { color: '#fff' }, fieldset: { borderColor: 'rgba(255,255,255,0.1)' }, '& .MuiOutlinedInput-root:hover fieldset': { borderColor: 'rgba(255,255,255,0.3)' }, '& .MuiOutlinedInput-root.Mui-focused fieldset': { borderColor: '#F5A623' } }}
                                        />
                                    </Grid>

                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <FormLabel sx={{ color: 'rgba(255,255,255,0.8)', mb: 1, display: 'block' }}>Mobile Number *</FormLabel>
                                        <TextField
                                            fullWidth
                                            required
                                            variant="outlined"
                                            placeholder="+1 234 567 890"
                                            sx={{ input: { color: '#fff' }, fieldset: { borderColor: 'rgba(255,255,255,0.1)' }, '& .MuiOutlinedInput-root:hover fieldset': { borderColor: 'rgba(255,255,255,0.3)' }, '& .MuiOutlinedInput-root.Mui-focused fieldset': { borderColor: '#F5A623' } }}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <FormLabel sx={{ color: 'rgba(255,255,255,0.8)', mb: 1, display: 'block' }}>Company Name (Optional)</FormLabel>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            placeholder="Your Company"
                                            sx={{ input: { color: '#fff' }, fieldset: { borderColor: 'rgba(255,255,255,0.1)' }, '& .MuiOutlinedInput-root:hover fieldset': { borderColor: 'rgba(255,255,255,0.3)' }, '& .MuiOutlinedInput-root.Mui-focused fieldset': { borderColor: '#F5A623' } }}
                                        />
                                    </Grid>

                                    <Grid size={{ xs: 12 }}>
                                        <FormControl fullWidth required>
                                            <FormLabel sx={{ color: 'rgba(255,255,255,0.8)', mb: 1, display: 'block' }}>Service Interested In *</FormLabel>
                                            <Select
                                                value={service}
                                                onChange={(e) => setService(e.target.value)}
                                                displayEmpty
                                                sx={{
                                                    color: '#fff',
                                                    '.MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.1)' },
                                                    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.3)' },
                                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#F5A623' },
                                                    '.MuiSvgIcon-root ': { fill: "white !important" }
                                                }}
                                                MenuProps={{
                                                    PaperProps: {
                                                        sx: {
                                                            bgcolor: '#16213E',
                                                            color: 'white',
                                                            '& .MuiMenuItem-root:hover': { bgcolor: 'rgba(245, 166, 35, 0.2)' },
                                                            '& .Mui-selected': { bgcolor: 'rgba(245, 166, 35, 0.4) !important' }
                                                        }
                                                    }
                                                }}
                                            >
                                                <MenuItem value="" disabled sx={{ color: 'rgba(255,255,255,0.5)' }}>
                                                    Select a service
                                                </MenuItem>
                                                {services.map((s, idx) => (
                                                    <MenuItem key={idx} value={s.title}>{s.title}</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    <Grid size={{ xs: 12 }}>
                                        <FormLabel sx={{ color: 'rgba(255,255,255,0.8)', mb: 1, display: 'block' }}>Message *</FormLabel>
                                        <TextField
                                            fullWidth
                                            required
                                            multiline
                                            rows={4}
                                            variant="outlined"
                                            placeholder="How can we help you?"
                                            sx={{ textarea: { color: '#fff' }, fieldset: { borderColor: 'rgba(255,255,255,0.1)' }, '& .MuiOutlinedInput-root:hover fieldset': { borderColor: 'rgba(255,255,255,0.3)' }, '& .MuiOutlinedInput-root.Mui-focused fieldset': { borderColor: '#F5A623' } }}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            size="large"
                                            fullWidth
                                            sx={{
                                                mt: 2,
                                                py: 1.5,
                                                background: 'linear-gradient(135deg, #F5A623, #FFCC44)',
                                                color: '#0D0D1A',
                                                fontWeight: 700,
                                                fontSize: '1.1rem',
                                                '&:hover': {
                                                    background: 'linear-gradient(135deg, #FFCC44, #F5A623)',
                                                    boxShadow: '0 8px 25px rgba(245, 166, 35, 0.4)'
                                                }
                                            }}
                                        >
                                            Send Message
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ContactPage;
