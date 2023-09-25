import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  
} from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
const IconsSection = () => {
    const theme= useTheme();
  return (
    <Container sx={{  mt:3 , bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff" }}>
      <Stack
        divider={
          useMediaQuery("(min-width:600px)") ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
        flexWrap={"wrap"}
        direction={"row"}
        alignItems={"center"}
      >
        <Myicon
          icon={<ElectricBoltIcon sx={{ fontSize: "30px" }} />}
          title={"Fast Delivery"}
          subtitle={"Start from $10"}
        />
        <Myicon
          icon={<WorkspacePremiumIcon sx={{ fontSize: "30px" }} />}
          title={"Money Guarantee"}
          subtitle={"7 Days Back"}
        />
        <Myicon
          icon={<AccessAlarmIcon sx={{ fontSize: "30px" }} />}
          title={"365 Days"}
          subtitle={"For Free Return"}
        />
        <Myicon
          icon={<CreditScoreIcon sx={{ fontSize: "30px" }} />}
          title={"Payment"}
          subtitle={"Secure System"}
        />
      </Stack>
    </Container>
  );
};

export default IconsSection;

// eslint-disable-next-line react/prop-types
const Myicon = ({ icon, title, subtitle }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
        gap: 3,

        py: 1.6,
        justifyContent: useMediaQuery("(min-width:600px)") ? "center" : "left",
      }}
    >
      {icon}
      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};
