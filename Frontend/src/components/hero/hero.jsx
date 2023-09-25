import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./slider.css";
import IconsSection from "./IconsSection";
const slyder = [
  { text: "MEN", link: "src/img222.jpg" },

  { text: "WOMEN", link: "src/spider.jpg" },
];
const Hero = () => {
  const theme = useTheme();
  return (
    <Container
      
    >
    <Box sx={{  pt:3, mt: "20px", display: "flex", alignItems: "center", gap: 2 }} >
        <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {slyder.map((item) => {
            return (
              <SwiperSlide key={item.link} className="sliderss">
                <img src={item.link} alt="" />
                <Box
                  className=" typs "
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      position: "absolute",
      
                      top: "30%",
                      left: "10%",
                      textAlign: "left",
                    },
                  }}
                >
                  <Stack>
                    <Typography variant="h5" sx={{ color: "black" }}>
                      LIFESTYLE COLLECTION
                    </Typography>
                  </Stack>
      
                  <Typography
                    variant="h3"
                    sx={{
                      color: "black",
                      fontSize: "50px",
                      my: 1,
                      fontWeight: 600,
                    }}
                  >
                    {item.text}
                  </Typography>
      
                  <Stack
                    sx={{ justifyContent: { xs: "center", sm: "left" } }}
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <Typography color={"black"} mr={1} variant="h5">
                      SALE UP TO
                    </Typography>
      
                    <Typography color={"#D23F57"} variant="h5">
                      30% OFF
                    </Typography>
                  </Stack>
      
                  <Typography
                    variant="h5"
                    sx={{ color: "black", fontSize: "15px" }}
                  >
                    Get Free Shipping on orders over $99.00
                  </Typography>
      
                  <Button
                    sx={{
                      px: 5,
                      fontWeight: 600,
                      py: 1,
                      mt: 2,
                      backgroundColor: "white",
                      boxShadow: "0px 4px 16px rgb(43,52,69,0.1)",
                      borderRadius: "1px",
                      "&:hover": {
                        bgcolor: "151515",
                        boxShadow: "0px 4px 16px rgb(43,52,69,0.1)",
                      },
                    }}
                    variant="contained"
                  >
                    shop now
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      
        <Box sx={{ display: { xs: "none", md: "block", width: "43%" } }}>
          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src="src\img111.jpg" alt="" />
      
            <Stack
              sx={{
                ml: "30px",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%) ",
              }}
            >
              <Typography
                variant="caption"
                sx={{ fontSize: "18px", fontWeight: 200 }}
              >
                NEW ARIVEL
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: "30px", lineHeight: "30px", fontWeight: 600 }}
              >
                Summer sale 20% OFF
              </Typography>
      
              <Typography>
                <Link
                  sx={{
                    mt: "10px",
                    cursor: "pointer",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    transition: "0.2s",
                    "&:hover": { color: "#d23f57" },
                  }}
                  href="#"
                  underline="none"
                >
                  shop now
                  <ArrowForwardIosIcon sx={{ fontSize: "15px" }} />
                </Link>
              </Typography>
            </Stack>
          </Box>
          <Box sx={{ position: "relative" }} flexGrow={1}>
            <img width={"100%"} src="src\img111.jpg" alt="" />
            <Stack
              sx={{
                ml: "30px",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%) ",
              }}
            >
              <Typography
                variant="caption"
                sx={{ fontSize: "18px", fontWeight: 200 }}
              >
                GAMING 4K
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: "25px", lineHeight: "30px", fontWeight: 600 }}
              >
                DESCKTOPS & LAPTOPS
              </Typography>
      
              <Typography>
                <Link
                  sx={{
                    mt: "10px",
                    cursor: "pointer",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    transition: "0.2s",
                    "&:hover": { color: "#d23f57" },
                  }}
                  href="#"
                  underline="none"
                >
                  shop now
                  <ArrowForwardIosIcon sx={{ fontSize: "15px" }} />
                </Link>
              </Typography>
            </Stack>
          </Box>
        </Box>
    </Box>

      <IconsSection />
    </Container>
  );
};

export default Hero;
