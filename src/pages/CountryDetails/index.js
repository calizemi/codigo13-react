import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

const CountryDetails = () => {
  const { name } = useParams();
  const URL1 = "https://restcountries.com/v3.1/name";
  const URL2 = "https://restcountries.com/v3.1/alpha";

  const [country, setCountry] = useState({});
  const [countryBorder, setCountryBorder] = useState([]);

  const navigation = useNavigate();

  const fetchDetailCountry = async () => {
    const response = await getCountryDetail(URL1, name);
    // cuando hacemos la peticion podemos llenar a values usando setValues
    setCountry({
      ...response,
    });
    fetchNameCountryBorder(response[0].borders)

  };
  const fetchNameCountryBorder = async (nameArrayBorder) => {
    let i=0;
    let nameCountryBorder=[];

    setCountryBorder("");
    
     for(i=0;i<nameArrayBorder.length;i++){
       const nameBorder=nameArrayBorder[i];
       const response =  await getCountryDetail(URL2, nameBorder);
       const data = await response;
       
       nameCountryBorder = [...nameCountryBorder,data[0].name.common];
       console.log(11,countryBorder,nameCountryBorder,i)
       setCountryBorder(nameCountryBorder);
       
     
 
     
   };
   
     // cuando hacemos la peticion podemos llenar a values usando setValues
   };


  useEffect(() => {
    fetchDetailCountry();
    
  }, []);
 
  //fetchNameCountryBorder(country[0]?.borders);
  console.log("5",countryBorder)
   

  return (
    <div>
      <Container
        sx={{
          maxwidth: 100,
          height: 10,
          fontsize: 3,
        }}
      />

      <h3>
        <b style={{ padding: 10 }}>Where in the World?</b>
      </h3>
      <br />

      <Box
        sx={{
          maxwidth: "100vh",
          height: 2,
          bgcolor: "text.disabled",
        }}
      />
      <Grid container m={3}>
        <Grid item md={12}>
          <Button
            sx={{ alignItems: "center" }}
            variant="contained"
            onClick={() => {
              navigation(-1);
            }}
          >
            <ArrowBackRoundedIcon />
            Back
          </Button>
        </Grid>
      </Grid>
      {country[0] !== undefined && (
        //  <h2 className="name-pokemon">{country["0"].name.official}</h2>
        <Grid container spacing={3} mt={3}>
          <Grid item md={5} border={1} className="center">
            <img
              border={1}
              height="400vh"
              width="600vw"
              src={country["0"].flags.svg}
              alt=""
            />
          </Grid>
          <Grid item md={7}>
            <h1> {country[0].name.common}</h1>
            <Grid container spacing={2}>
              <Grid item md={6} sx={{ height: "30vh" }}>
                <b>Native Name: </b>
                {Object.keys(country[0].name.nativeName).map(
                  (nativeName, item) =>
                    item ===
                      Object.keys(country[0].name.nativeName).length - 1 && (
                      <span>
                        {country[0].name.nativeName[nativeName].common}
                      </span>
                    )
                )}
                <br />
                <br />
                <b>Population: </b>

                {Intl.NumberFormat("en-EN").format(country["0"].population)}
                <br />
                <br />
                <b mt={2}>Región: </b>
                {country["0"].region}
                <br />
                <br />
                <b>Sub Región: </b>
                {country["0"].subregion}
                <br />
                <br />
                <b>Capital: </b>
                {country["0"].capital}
                <br />
                <br />
              </Grid>
              <Grid item md={6} sx={{ height: "30vh" }}>
                <b>Top Level Domain: </b>
                {country["0"].tld[0]}
                <br />
                <br />
                <b>Currencies: </b>
                {Object.keys(country[0].currencies).map((currencito) => (
                  <span>{country[0].currencies[currencito].name}</span>
                ))}
                <br />
                <br />
                <b>Languages: </b>
                {Object.keys(country[0].languages).map((languageito, item) =>
                  item === Object.keys(country[0].languages).length - 1 ? (
                    <span>{`${country[0].languages[languageito]} `}</span>
                  ) : (
                    <span>{`${country[0].languages[languageito]}, `}</span>
                  )
                )}
                <br />
                <br />
              </Grid>
              <Grid item md={12} sx={{ height: "10vh" }} border={1}>
                <b>Borders: </b>
                {countryBorder}
                <br />
                <br />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default CountryDetails;
