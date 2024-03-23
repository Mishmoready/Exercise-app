import { Box, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color={"#FF2625"} fontWeight={"600"} fontSize={"26px"}>
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "24px", xs: "18px" } }}
        mb={"23px"}
        mt={"30px"}
      >
        Sweat, Smile <br /> and play with it
      </Typography>
      <Typography fontSize={"22px"} lineHeight={"25px"} mb={3}>
        Get Ready
      </Typography>
      <Button>
        <a
          href="#exercises"
          style={{
            marginTop: "45px",
            textDecoration: "none",
            width: "200px",
            textAlign: "center",
            background: "#FF2625",
            padding: "10px",
            fontSize: "22px",
            textTransform: "none",
            color: "white",
            borderRadius: "4px",
          }}
        >
          Explore Exercises
        </a>
      </Button>
      <Typography
        fontWeight={600}
        color={"#ff2625"}
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-image" />
    </Box>
  );
};

export default HeroBanner;
