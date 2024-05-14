import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

const SelectCurrency = ({ sendCurrency }) => {
  const [value, setValue] = useState();
  const [inputValue, setInputValue] = useState("");
  const myCurrency = [
    {
      currency: "BLUR",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.20811525423728813,
      image: "/assets/images/BLUR.svg",
    },
    {
      currency: "bNEO",
      date: "2023-08-29T07:10:50.000Z",
      price: 7.1282679,
      image: "/assets/images/bNEO.svg",
    },
    {
      currency: "BUSD",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.9998782611186441,
      image: "/assets/images/BUSD.svg",
    },
    {
      currency: "USD",
      date: "2023-08-29T07:10:30.000Z",
      price: 1,
      image: "/assets/images/USD.svg",
    },
    {
      currency: "ETH",
      date: "2023-08-29T07:10:52.000Z",
      price: 1645.9337373737374,
      image: "/assets/images/ETH.svg",
    },
    {
      currency: "GMX",
      date: "2023-08-29T07:10:40.000Z",
      price: 36.345114372881355,
      image: "/assets/images/GMX.svg",
    },
    {
      currency: "STEVMOS",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.07276706779661017,
      image: "/assets/images/stEVMOS.svg",
    },
    {
      currency: "LUNA",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.40955638983050846,
      image: "/assets/images/LUNA.svg",
    },
    {
      currency: "RATOM",
      date: "2023-08-29T07:10:40.000Z",
      price: 10.250918915254237,
      image: "/assets/images/rATOM.svg",
    },
    {
      currency: "STRD",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.7386553389830508,
      image: "/assets/images/STRD.svg",
    },
    {
      currency: "EVMOS",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.06246181355932203,
      image: "/assets/images/EVMOS.svg",
    },
    {
      currency: "IBCX",
      date: "2023-08-29T07:10:40.000Z",
      price: 41.26811355932203,
      image: "/assets/images/IBCX.svg",
    },
    {
      currency: "IRIS",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.0177095593220339,
      image: "/assets/images/IRIS.svg",
    },
    {
      currency: "ampLUNA",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.49548589830508477,
      image: "/assets/images/ampLUNA.svg",
    },
    {
      currency: "KUJI",
      date: "2023-08-29T07:10:45.000Z",
      price: 0.675,
      image: "/assets/images/KUJI.svg",
    },
    {
      currency: "STOSMO",
      date: "2023-08-29T07:10:45.000Z",
      price: 0.431318,
      image: "/assets/images/stOSMO.svg",
    },
    {
      currency: "USDC",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.989832,
      image: "/assets/images/USDC.svg",
    },
    {
      currency: "axlUSDC",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.989832,
      image: "/assets/images/axlUSDC.svg",
    },
    {
      currency: "ATOM",
      date: "2023-08-29T07:10:50.000Z",
      price: 7.186657333333334,
      image: "/assets/images/ATOM.svg",
    },
    {
      currency: "STATOM",
      date: "2023-08-29T07:10:45.000Z",
      price: 8.512162050847458,
      image: "/assets/images/stATOM.svg",
    },
    {
      currency: "OSMO",
      date: "2023-08-29T07:10:50.000Z",
      price: 0.3772974333333333,
      image: "/assets/images/OSMO.svg",
    },
    {
      currency: "rSWTH",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.00408771,
      image: "/assets/images/rSWTH.svg",
    },
    {
      currency: "STLUNA",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.44232210169491526,
      image: "/assets/images/stLUNA.svg",
    },
    {
      currency: "LSI",
      date: "2023-08-29T07:10:50.000Z",
      price: 67.69661525423729,
      image: "/assets/images/LSI.svg",
    },
    {
      currency: "OKB",
      date: "2023-08-29T07:10:40.000Z",
      price: 42.97562059322034,
      image: "/assets/images/OKB.svg",
    },
    {
      currency: "OKT",
      date: "2023-08-29T07:10:40.000Z",
      price: 13.561577966101694,
      image: "/assets/images/OKT.svg",
    },
    {
      currency: "SWTH",
      date: "2023-08-29T07:10:45.000Z",
      price: 0.004039850455012084,
      image: "/assets/images/SWTH.svg",
    },
    {
      currency: "USC",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.994,
      image: "/assets/images/USC.svg",
    },
    {
      currency: "USDC",
      date: "2023-08-29T07:10:30.000Z",
      price: 1,
      image: "/assets/images/USDC.svg",
    },
    {
      currency: "WBTC",
      date: "2023-08-29T07:10:52.000Z",
      price: 26002.82202020202,
      image: "/assets/images/WBTC.svg",
    },
    {
      currency: "wstETH",
      date: "2023-08-29T07:10:40.000Z",
      price: 1872.2579742372882,
      image: "/assets/images/wstETH.svg",
    },
    {
      currency: "YieldUSD",
      date: "2023-08-29T07:10:40.000Z",
      price: 1.0290847966101695,
      image: "/assets/images/YieldUSD.svg",
    },
    {
      currency: "ZIL",
      date: "2023-08-29T07:10:50.000Z",
      price: 0.01651813559322034,
      image: "/assets/images/ZIL.svg",
    },
  ];

  return (
    <>
      <Autocomplete
        value={value}
        onChange={(e, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(e, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="currency-select"
        sx={{ width: 300 }}
        options={myCurrency}
        autoHighlight
        getOptionLabel={(option) => option.currency}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img
              src={`${option.image}`}
              srcSet={`${option.image} 2x`}
              loading="lazy"
              width="20"
              alt=""
            />
            {option.currency}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose currency"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password",
            }}
          />
        )}
      />
    </>
  );
};

export default SelectCurrency;
