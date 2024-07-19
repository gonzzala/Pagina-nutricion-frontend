import React from "react";
import {
  FormControl,
  RadioGroup,
  Grid,
  FormControlLabel,
  Radio,
  Box,
  Typography,
} from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { SiMercadopago } from "react-icons/si";

const PaymentMethod = ({ paymentMethod, handlePaymentMethodChange }) => {
  return (
    <FormControl component="fieldset" fullWidth>
      <RadioGroup
        row
        aria-label="payment-method"
        name="payment-method"
        value={paymentMethod}
        onChange={handlePaymentMethodChange}
      >
        <Grid item xs={12}>
          <Box
            sx={{
              borderRadius: 1,
              border: "1px solid rgba(0, 0, 0, 0.23)",
              padding: 2,
              marginTop: 2,
            }}
          >
            <FormControlLabel
              value="mercadoPago"
              control={<Radio />}
              label={
                <Box display="flex" alignItems="center">
                  <SiMercadopago size={30} />
                  <Typography sx={{ marginLeft: 2 }}>Mercado Pago</Typography>
                </Box>
              }
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              borderRadius: 1,
              border: "1px solid rgba(0, 0, 0, 0.23)",
              padding: 2,
              marginBottom: 2,
            }}
          >
            <FormControlLabel
              value="bankTransfer"
              control={<Radio />}
              disabled
              label={
                <Box display="flex" alignItems="center">
                  <AccountBalanceIcon style={{ fontSize: "30px" }} />
                  <Typography sx={{ marginLeft: 2 }}>
                    Transferencia bancaria
                  </Typography>
                </Box>
              }
            />
          </Box>
        </Grid>
      </RadioGroup>
    </FormControl>
  );
};

export default PaymentMethod;
