import { Box, Button, Stack, Typography } from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
const ProductsDetails = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 3,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box display={"flex"}>
        <img
        
          width={300}
          src="https://i.pinimg.com/564x/dd/86/2d/dd862d27a2a1cb7f7212160e154ddd71.jpg"
          alt=""
        />
      </Box>

      <Box sx={{textAlign:{xs:"center", sm:"left"}}}>
        <Typography variant="h5"> WOMEN`S FASHION</Typography>
        <Typography variant="body1" my={0.4} fontSize={22} color={"crimson"}>
          $12.99
        </Typography>
        <Typography variant="body1">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <Stack sx={{justifyContent:{xs:"center" , sm:"left"}}} direction={"row"} gap={1} my={2}>
          {["src/shirty.jpg", "src/shirty.jpg", "src/shirty.jpg"].map(
            (item) => {
              return (
                <img
                  style={{ borderRadius: 5 }}
                  height={120}
                  width={90}
                  key={item}
                  src={item}
                  alt=""
                />
              );
            }
          )}
        </Stack>

        <Button  variant="contained" sx={{mb:{xs:1.5,sm:0}, textTransform: "capitalize" }}>
          <AddShoppingCartOutlinedIcon sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductsDetails;
