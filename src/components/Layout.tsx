import React from 'react';
import { Box, Grid } from '@mui/material';
import Header from './Header';
import NewsList from './NewsList';
import HeroSection from './HeroSection';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';

const Layout: React.FC = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container>
                <Grid size="grow">
                    <RightSidebar />
                </Grid>
                <Grid size={6}>
                    <Header />
                    <HeroSection />
                    <NewsList />
                </Grid>
                <Grid size="grow">
                    <LeftSidebar />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Layout;