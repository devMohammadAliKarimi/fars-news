import React from 'react';
import {
    Avatar,
    CircularProgress,
    Container,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography
} from '@mui/material';
import { useShowcaseItems } from '../hooks/usePosts';
import Carousel from './Carousel';

const NewsList: React.FC = () => {

    const { data, isLoading, isError, error, refetch } = useShowcaseItems(12);

    if (isLoading) {
        return (
            <Container sx={{ py: 8, textAlign: 'center', bgcolor: 'background.paper' }}>
                <CircularProgress />
            </Container>
        );
    }

    if (isError) {
        return (
            <Container sx={{ py: 8, textAlign: 'center' }}>
                <Typography variant="h6">
                    خطا در بارگذاری: {error?.message}
                </Typography>
                <Typography
                    sx={{ mt: 2, cursor: 'pointer', color: 'primary.main' }}
                    onClick={() => refetch()}
                >
                    تلاش مجدد
                </Typography>
            </Container>
        );
    }

    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper', px: 2 }}>
            {data!.map((item, index) => (
                <React.Fragment key={item.id}>
                    <ListItem alignItems="flex-start" sx={{ color: 'text.primary' }}>
                        <ListItemAvatar>
                            <Avatar alt={item.title} src={item.image} />
                        </ListItemAvatar>

                        <ListItemText
                            primary={item.title}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        sx={{ color: 'text.primary', display: 'inline' }}
                                    >
                                        {item.body.substring(0, 40)}
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                    </ListItem>

                    {index === 5 && (
                        <Carousel
                            items={data!.slice(3, 7).map(d => ({
                                image: d.image,
                                title: d.title,
                                subtitle: d.body.substring(0, 40),
                            }))}
                        />
                    )}

                    {index < data!.length - 1 && (
                        <Divider variant="inset" component="li" />
                    )}
                </React.Fragment>
            ))}
        </List>
    );
};

export default NewsList;
