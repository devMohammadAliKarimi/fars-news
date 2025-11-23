import React from 'react'
import { Box, Container } from '@mui/material';

const HeroSection: React.FC = () => {
    return (
        <Container
            maxWidth="md"
            sx={{
                py: 6,
                textAlign: "center",
                bgcolor: 'background.paper'
            }}
        >
            <Box
                component="img"
                src="/Imam.png"
                alt="Hero"
                sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 2,
                    mb: 3,
                }}
            />
            <Box
                component="img"
                src="/basijGif.gif"
                alt="Hero Animation"
                sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 2,
                }}
            />
        </Container>
    );
}

export default HeroSection