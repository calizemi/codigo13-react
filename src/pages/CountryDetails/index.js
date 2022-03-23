import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  Box,
  Container,
  Dialog,
  DialogContent,
  Grid,
  Slider,
} from "@mui/material";
import { getCountryDetail } from "../../service/flags";

const CountryDetails = () => {
  const { name } = useParams();

  const [country, setCountry] = useState({});

  const fetchDetailCountry = async () => {
    const response = await getCountryDetail(name);
    // cuando hacemos la peticion podemos llenar a values usando setValues
    setCountry({
      ...response,
    });
  };

  useEffect(() => {
    fetchDetailCountry();
  }, []);

  return (
    <div>
      <Container
      sx={{

        maxwidth: 100,
        height: 25,
        fontsize: 3,
      
      }}
    />

    <h3><b>Where in the World?</b></h3><br/>

      <Box
      sx={{

        maxwidth: '100vh',
        height: 2,
      
        bgcolor: 'text.disabled', 
        opacity: [0.9, 0.8, 0.7],
        
      }}
    />
      {country[0] !== undefined && (
        //  <h2 className="name-pokemon">{country["0"].name.official}</h2>
        <Grid container spacing={3} mt={10}>
          <Grid item md={6} className="center">
            <img width={500} src={country["0"].flags.svg} alt="" />
          </Grid>
          <Grid item md={6}>
            <h1> {country[0].name.common}</h1>
            <Grid container spacing={2}>
              <Grid item md={6}>
                <b>Native Name: </b>
                {Object.keys(country[0].name.nativeName).map((nativeName,item) => (
                  
                  item===0 &&(
                  <span>{country[0].name.nativeName[nativeName].official}</span>)
                ))}<br/>
                  <b>Population: </b>
                  {country["0"].population}<br/>
                  <b mt={2}>Región: </b>
                  {country["0"].region}<br/>
                  <b>Sub Región: </b>
                  {country["0"].subregion}<br/>
                  <b>Capital: </b>
                  {country["0"].capital}<br/>
              </Grid>
              <Grid item md={6}>
              <b>Top Level Domain: </b>
                  {country["0"].tld[0]}<br/>
                  <b>Currencies: </b>
                {Object.keys(country[0].currencies).map((currencito) => (
                  <span>{country[0].currencies[currencito].name}</span>
                ))}<br/>
                <b>Languages: </b>
                {Object.keys(country[0].languages).map((languageito) => (
                  <span>{`${country[0].languages[languageito]}, `}</span>
                ))}<br/>
              </Grid>
            </Grid>

            {/* <Chip
                    label={country["0"].population}
                    color="success"
                    sx={{ marginRight: 2 }}
                  /> */}
          </Grid>
        </Grid>
      )}
   

    //

    //     </div>
    //     )};

    // </div>
  );
};

export default CountryDetails;
