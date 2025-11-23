import React from 'react';
import {
    Box,
    TextField,
    Typography,
    List,
    ListItem,
    ListItemText,
    Divider,
    Container,
    CircularProgress,
    InputAdornment,
    ListItemAvatar,
    Avatar
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import NoteIcon from '@mui/icons-material/Note';
import { useShowcaseItems } from '../hooks/usePosts';

const LeftSidebar: React.FC = () => {

    const { data, isLoading, isError, error } = useShowcaseItems(12);

    if (isLoading) {
        return (
            <Container sx={{ py: 8, textAlign: 'center', bgcolor: 'background.paper', height: '100vh' }}>
                <CircularProgress />
            </Container>
        );
    }

    if (isError) {
        return (
            <Container sx={{ py: 8, textAlign: 'center', bgcolor: 'background.paper', height: '100vh' }}>
                <Typography sx={{ p: 2, color: "error.main" }}>
                    خطا در بارگذاری — {error?.message}
                </Typography>
            </Container>
        );
    }

    return (
        <Box
            sx={{
                p: 2,
                position: 'sticky',
                top: 0,
                height: '100vh',
                overflowY: 'auto',
                overflowX: 'hidden',
                bgcolor: 'background.paper'
            }}
        >
            <Box sx={{ mb: 2 }}>
                <TextField
                    fullWidth
                    placeholder="جستجو در فارس"
                    size="small"
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        },
                    }}
                />
            </Box>

            <Box sx={{ bgcolor: 'background.paper', borderRadius: 1, p: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <StarIcon sx={{ fontSize: 18, ml: 1, color: 'primary.main' }} />
                    <Typography variant="subtitle1" sx={{ px: 2, color: 'text.primary' }}>
                        اخبار برگزیده
                    </Typography>
                </Box>
                <Divider />
                <List component="ul" dense sx={{ pl: 2, listStyleType: 'disc' }}>
                    {data?.slice(0, 8).map(item => (
                        <ListItem
                            key={item.id}
                            component="li"
                            sx={{
                                py: 0.6,
                                display: 'list-item',
                                listStyleType: 'disc',
                                color: 'text.primary',
                                transition: '0.2s',
                                '&:hover': {
                                    bgcolor: 'action.hover',
                                    cursor: 'pointer'
                                }
                            }}
                        >
                            <ListItemText
                                primaryTypographyProps={{
                                    variant: 'body2',
                                    sx: { lineHeight: 1.4 }
                                }}
                                primary={item.title}
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>

            <Box sx={{ bgcolor: 'background.paper', borderRadius: 1, p: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <NoteIcon sx={{ fontSize: 18, ml: 1, color: 'primary.main' }} />
                    <Typography variant="subtitle1" sx={{ px: 2, color: 'text.primary' }}>
                        یادداشت‌ها
                    </Typography>
                </Box>


                <Divider />

                <List sx={{ width: '100%', mt: 1 }}>
                    {data?.slice(0, 8).map(item => (
                        <ListItem
                            key={item.id}
                            sx={{
                                transition: '0.2s',
                                color: 'text.primary',
                                '&:hover': {
                                    bgcolor: 'action.hover',
                                    cursor: 'pointer'
                                }
                            }}
                        >
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32 }}>
                                    {item.title.charAt(0)}
                                </Avatar>
                            </ListItemAvatar>

                            <ListItemText
                                primary={item.title}
                                primaryTypographyProps={{
                                    variant: 'body2',
                                    sx: { lineHeight: 1.4 }
                                }}
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>

        </Box>
    );
};

export default LeftSidebar;
