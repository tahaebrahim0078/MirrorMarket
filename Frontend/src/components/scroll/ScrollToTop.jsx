import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, Zoom, useScrollTrigger } from "@mui/material";

const ScrollToTop = () => {
  return (
    <Zoom in={useScrollTrigger()}>
      <Fab
      onClick={() => {
        window.scrollTo(0,0);
      }}
        sx={{ position: "fixed", bottom: 33, right: 33 }}
        size="small"
        color="primary"
        aria-label="add"
      >
        <KeyboardArrowUp fontSize="medium" />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;
