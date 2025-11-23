import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeToggleButton from './ThemeToggleButton';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <AppBar
            position="sticky"
            elevation={scrolled ? 0 : 3}
            sx={{
                transition: "all 0.3s",
                bgcolor: scrolled ? "rgba(255,255,255,0.35)" : "background.paper",
                color: 'text.primary',
                backdropFilter: scrolled ? "blur(12px)" : "none",
            }}
        >
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>

                <Typography
                    variant="h6"
                    sx={{
                        flexGrow: 1,
                        color: "text.primary"
                    }}
                >
                    News
                </Typography>
                <ThemeToggleButton />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
