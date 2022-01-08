import React, { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import FormInput from "./Checkout/CustomTextField";
import { commerce } from "../../lib/commerce";
import { useForm, FormProvider } from "react-hook-form";
const AddressForm = ({ checkoutToken }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");
  const methods = useForm();

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    console.log("Countries are", countries);
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));

  console.log(countries);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit="">
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="First name:" />
            <FormInput required name="lastName" label="Last name:" />
            <FormInput required name="address1" label="Address:" />
            <FormInput required name="email" label="Email:" />
            <FormInput required name="City" label="City:" />
            <FormInput required name="ZIP" label="ZIP/POSTAL-CODE:" />
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select
                value={shippingCountry}
                fullWidth
                onChange={(e) => setShippingCountry(e.target.value)}
              >
                //Countries are not showing, material ui out of range error
                {countries.map((country) => {
                  <MenuItem key={country.id} value={country.id}>
                    {country.label}
                  </MenuItem>;
                })}
              </Select>
            </Grid>
            {/* 
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select value={assd} fullWidth onChange="">
                <MenuItem key={ddd} value={asdasd}>
                  Select Me
                </MenuItem>
              </Select>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select value={asdasd} fullWidth onChange="">
                <MenuItem key={ddd} value={asdasd}>
                  Select Me
                </MenuItem>
              </Select>
            </Grid>*/}
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
