import React from 'react';
import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SearchIcon from '@mui/icons-material/Search';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AddIcon from '@mui/icons-material/Add';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import DescriptionIcon from '@mui/icons-material/Description';

const drawerWidth = 400;

const menuItems = [
    { text: 'پیشخوان', icon: <HomeIcon /> },
    { text: 'فارس من', icon: <VolumeDownIcon /> },
    { text: 'فارس TV', icon: <LiveTvIcon /> },
    { text: 'فارس زندگی', icon: <PeopleOutlineIcon /> },
    { text: 'فارس پلاس', icon: <AddIcon /> },
    { text: 'فارس نوجوان', icon: <ChildCareIcon /> },
    { text: 'انتشارات', icon: <MenuBookIcon /> },
    { text: 'توانا', icon: <DescriptionIcon /> },
    { text: 'جستجو', icon: <SearchIcon /> },
];

const RightSidebar: React.FC = () => {
    const drawer = (
        <div>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    py: 2,
                    px: 2
                }}
            >
                <Box
                    component="img"
                    src="/logoFarsNews.png"
                    alt="Hero"
                    sx={{
                        width: "40px",
                        height: "auto",
                    }}
                />
                <Typography variant="h6" component="div" sx={{ px: 2 }}>
                    Fars News
                </Typography>
            </Box>

            <Divider />

            <List>
                {menuItems.map(item => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );


    return (
        <Drawer
            variant="permanent"
            sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
        >
            {drawer}
        </Drawer>
    )
};

export default RightSidebar;
