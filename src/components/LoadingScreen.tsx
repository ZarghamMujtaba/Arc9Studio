import { useEffect, useState } from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
    const [progress, setProgress] = useState(0);
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => {
                        setShow(false);
                        onComplete();
                    }, 400);
                    return 100;
                }
                return prev + 2;
            });
        }, 40);
        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 9999,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(135deg, #0D0D1A 0%, #16213E 50%, #0D0D1A 100%)',
                    }}
                >
                    {/* Ring & Logo centered perfectly together */}
                    <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 150, height: 150 }}>
                        {/* Rotating ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                            style={{
                                width: '100%',
                                height: '100%',
                                border: '3px solid transparent',
                                borderTopColor: '#F5A623',
                                borderRightColor: '#FFCC44',
                                borderRadius: '50%',
                                position: 'absolute',
                            }}
                        />
                        {/* Logo */}
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, ease: 'backOut' }}
                            style={{ textAlign: 'center', zIndex: 1, position: 'relative' }}
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                    fontFamily: '"Montserrat", sans-serif',
                                    fontWeight: 900,
                                    background: 'linear-gradient(135deg, #F5A623, #FFCC44)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    letterSpacing: '0.1em',
                                    lineHeight: 1,
                                }}
                            >
                                ARC9
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontFamily: '"Montserrat", sans-serif',
                                    fontWeight: 700,
                                    color: 'rgba(255,255,255,0.8)',
                                    letterSpacing: '0.4em',
                                    fontSize: '0.8rem',
                                    mt: 0.5,
                                }}
                            >
                                STUDIO
                            </Typography>
                        </motion.div>
                    </Box>

                    {/* Progress bar */}
                    <Box sx={{ width: '220px', mt: 2, position: 'relative' }}>
                        <LinearProgress
                            variant="determinate"
                            value={progress}
                            sx={{
                                height: 3,
                                borderRadius: 2,
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                '& .MuiLinearProgress-bar': {
                                    background: 'linear-gradient(90deg, #F5A623, #FFCC44)',
                                    borderRadius: 2,
                                },
                            }}
                        />
                        <Typography
                            variant="caption"
                            sx={{ color: 'rgba(255,255,255,0.4)', mt: 1, display: 'block', textAlign: 'center' }}
                        >
                            {progress}%
                        </Typography>
                    </Box>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
