import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface CarouselProps {
    items: { image: string; title: string; subtitle?: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
    return (
        <Box sx={{ width: "100%", py: 2 }}>
            <Swiper
                spaceBetween={12}
                slidesPerView={2}
                grabCursor
                style={{ direction: "rtl" }}
            >
                {items.map((it, idx) => (
                    <SwiperSlide key={idx}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                bgcolor: "background.paper",
                                borderRadius: 2,
                                p: 1.5,
                                height: 130,
                                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                                border: "1px solid rgba(0,0,0,0.06)",
                            }}
                        >
                            <Avatar
                                src={it.image}
                                alt={it.title}
                            />

                            <Box sx={{ flex: 1, overflow: "hidden" }}>
                                <Typography
                                    variant="body2"
                                    sx={{ fontWeight: 600, mb: 0.5, px: 2 ,color:'text.primary'}}
                                    noWrap
                                >
                                    {it.title}
                                </Typography>

                                {it.subtitle && (
                                    <Typography
                                        variant="caption"
                                        sx={{ color: "text.secondary", px: 2 }}
                                        noWrap
                                    >
                                        {it.subtitle}
                                    </Typography>
                                )}
                            </Box>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default Carousel;
