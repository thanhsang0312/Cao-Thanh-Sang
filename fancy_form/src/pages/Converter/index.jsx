import React, { useEffect } from "react";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import {
  Button,
  CircularProgress,
  IconButton,
  MenuItem,
  TextField,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { set, useForm } from "react-hook-form";

import { useState } from "react";
import { regex } from "../../constant/regex";
import useDebounce from "../../hooks/useDebounce";
import { convertCurrency } from "../../util/convertCurrency";

const Converter = () => {
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
  ]; // List currency

  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);
  const [fromCurrency, setFromCurrency] = useState({
    currency: "",
    price: 0,
  });
  const [fromError, setFromError] = useState(false);
  const [toCurrency, setToCurrency] = useState({
    currency: "",
    price: 0,
  });
  const [toError, setToError] = useState(false);
  const [loading, setLoading] = useState(false);
  const debounceResult = useDebounce(result, 800);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFromCurrencyChange = (e) => {
    const selectedCurrency = myCurrency.find(
      (currency) => currency.price === e.target.value
    );
    const newCurrency = {
      currency: e.target.value,
      price: e.target.value,
    };
    setFromCurrency({ ...newCurrency, name: selectedCurrency.currency });
    setFromError(e.target.value === "");
  };

  const handleToCurrencyChange = (e) => {
    const selectedCurrency = myCurrency.find(
      (currency) => currency.price === e.target.value
    );
    const newCurrency = {
      currency: e.target.value,
      price: e.target.value,
    };
    setToCurrency({ ...newCurrency, name: selectedCurrency.currency });
    setToError(e.target.value === "");
  };

  const _onSubmit = (e) => {
    setAmount(e.amount);
    setFromError(fromCurrency.currency === "");
    setToError(toCurrency.currency === "");
    if (fromCurrency.currency !== "" && toCurrency.currency !== "") {
      console.log("Converted");
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  };

  useEffect(() => {
    const result = convertCurrency(
      amount,
      fromCurrency.price,
      toCurrency.price
    );
    setResult(result);
  }, [amount, fromCurrency.price, toCurrency.price]);
  return (
    <div className="container mx-auto px-4 ">
      <div className="wrapper rounded-lg shadow-lg p-6 w-2/4 bg-white">
        <div className="heading text-2xl font-semibold mb-5">
          Convert Currency
        </div>
        <FormControl className="flex flex-col gap-5 w-full">
          <FormGroup className="form-group">
            <InputLabel
              error={errors.amount ? true : false}
              htmlFor="outlined-adornment-amount"
            >
              Amount
            </InputLabel>
            <OutlinedInput
              error={errors.amount ? true : false}
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Amount"
              {...register("amount", {
                required: "Please enter amount!",
                pattern: {
                  value: regex.decimal,
                  message: "Please enter a valid amount!",
                },
              })}
            />
            {errors.amount && (
              <p className="text-[#d32f2f] font-normal text-xs tracking-[.03333em]">
                {errors.amount.message}
              </p>
            )}
          </FormGroup>
          <FormGroup className="form-group">
            <TextField
              id="fromCurrency"
              select
              fullWidth
              label="From"
              InputLabelProps={{ shrink: true }}
              margin="normal"
              value={fromCurrency.currency}
              onChange={handleFromCurrencyChange}
              error={fromError}
              helperText={fromError ? "Please select a currency" : ""}
            >
              {myCurrency.map((option, index) => (
                <MenuItem key={index} value={option.price}>
                  <img
                    src={`${option.image}`}
                    srcSet={`${option.image} 2x`}
                    loading="lazy"
                    width="20"
                    alt=""
                    className="mr-0.5"
                  />
                  {option.currency}
                </MenuItem>
              ))}
            </TextField>
          </FormGroup>
          <IconButton
            aria-label="delete"
            className="button-swap inline-block border border-solid border-[#DDDDDD] w-fit p-4 rounded-full"
          >
            <SwapVertIcon />
          </IconButton>
          <FormGroup className="form-group">
            <TextField
              id="fromCurrency"
              select
              fullWidth
              label="To"
              InputLabelProps={{ shrink: true }}
              margin="normal"
              value={toCurrency.currency}
              onChange={handleToCurrencyChange}
              error={toError}
              helperText={toError ? "Please select a currency" : ""}
            >
              {myCurrency.map((option, index) => (
                <MenuItem key={index} value={option.price}>
                  <img
                    src={`${option.image}`}
                    srcSet={`${option.image} 2x`}
                    loading="lazy"
                    width="20"
                    alt=""
                  />
                  {option.currency}
                </MenuItem>
              ))}
            </TextField>
          </FormGroup>
          <div className="result">
            <div className="current-amount font-semibold text-sm text-[#5C667B]">
              {amount} {fromCurrency?.name} =
            </div>
            {loading ? (
              <CircularProgress />
            ) : (
              <div className="result-amount font-semibold text-3xl">
                {debounceResult} {toCurrency?.name}
              </div>
            )}
          </div>
          <Button
            variant="contained"
            className="font-semibold"
            onClick={handleSubmit(_onSubmit)}
          >
            Convert
          </Button>
        </FormControl>
      </div>
    </div>
  );
};

export default Converter;
