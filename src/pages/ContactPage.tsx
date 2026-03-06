import { Box, Container, Typography, Grid, TextField, Button, Chip, FormLabel, Select, MenuItem, FormControl } from '@mui/material';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const ContactPage = () => {
    const location = useLocation();
    const [service, setService] = useState(location.state?.selectedService || '');

    return (
        <Box sx={{ py: { xs: 12, md: 16 }, background: '#121223', minHeight: '100vh' }}>
            <Container maxWidth="md">
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

                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                    <Box component="form" sx={{
                        background: '#1a1a2e',
                        p: { xs: 4, md: 6 },
                        borderRadius: 4,
                        border: '1px solid rgba(255,255,255,0.05)',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
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
            </Container>
        </Box>
    );
};

export default ContactPage;
