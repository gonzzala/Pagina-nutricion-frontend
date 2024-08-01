import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const LogoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "left",
  justifyContent: "left",
  height: "100%",
}));

const Logo = ({ sx }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <LogoContainer sx={sx}>
      <img
        src="/Logo.webp"
        alt="Logo"
        style={{ height: "40px", cursor: "pointer" }}
        onClick={handleLogoClick}
      />
    </LogoContainer>
  );
};

export default Logo;
