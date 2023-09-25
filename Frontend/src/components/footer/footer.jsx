import { Box, Button, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: 2,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          color: "HighlightText",
          fontSize: 18,
        }}
      >
        Designed and devoloped by
        <Button
          variant="text"
          color="primary"
          sx={{
            mx: 0.5,
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#ff7790",
          }}
        >
          taha ebrahim{" "}
        </Button>{" "}
        @2023
      </Typography>
    </Box>
  );
};

export default Footer;
