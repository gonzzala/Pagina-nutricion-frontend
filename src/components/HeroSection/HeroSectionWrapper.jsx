import { Box } from "@mui/material";
import { styled } from "@mui/system";

const HeroSectionWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary[50],
  padding: theme.spacing(5, 2),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(10, 5),
  },
}));

export default HeroSectionWrapper;
