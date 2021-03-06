import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  Chip,
  Container,
  Dialog,
  DialogContent,
  Grid,
  Slider,
} from "@mui/material";
import getCountryDetail from "../../service/flags";



const CountryDetails = () => {
    const { name } = useParams();
  

  const [country, setCountry] = useState({});

  const fetchDetailCountry = async () => {
    const response = await getCountryDetail(name);
    // cuando hacemos la peticion podemos llenar a values usando setValues
    setValues({
      ...response,
    });
  };

  useEffect(() => {
    fetchDetailCountry();
  }, []);


  return (
    <Container>
      
      
          {/* Esto extrar los keys de un objeto */}
          {Object.keys(pokemonData).length > 0 && (
            <div>
              <h2 className="name-pokemon">{props.nombre}</h2>
              <Grid container>
                <Grid item md={6}>
                  <h4>Habilidades</h4>
                  {pokemonData.abilities.map((abilitie) => (
                    <Chip
                      label={abilitie.ability.name}
                      color="primary"
                      sx={{ marginRight: 2 }}
                    />
                  ))}
                   <h4>Datos</h4>
                  {pokemonData.types.map((type) => (
                    <Chip
                      label={type.type.name}
                      color="warning"
                      sx={{ marginRight: 2 }}
                    />
                  ))}
                  <Chip
                    label={`${pokemonData.height / 10} m`}
                    color="success"
                    sx={{ marginRight: 2 }}
                  />
                  <Chip
                    label={`${pokemonData.weight / 10} kg`}
                    color="success"
                    sx={{ marginRight: 2 }}
                  />
                  <h4>Puntos de base</h4>
                  {pokemonData.stats.map((stat) => (
                    <div>
                      <h5>{stat.stat.name}</h5>
                      <Slider
                        defaultValue={+stat.base_stat}
                        aria-label="Always visible"
                        valueLabelDisplay="on"
                        disabled
                      />
                    </div>
                  ))}
                </Grid>
                <Grid item md={6} className="center">
                  <img
                    width={350}
                    src={
                      pokemonData.sprites.other["official-artwork"]
                        .front_default
                    }
                    alt=""
                  />
                   <Grid container className="center">
                    <Grid item sm={6}>
                      <img
                        src={
                          pokemonData.sprites.versions["generation-iii"]
                            .emerald["front_shiny"]
                        }
                        alt="img"
                        width={100}
                      />

                    </Grid>
                    <Grid item sm={6}>
                      <img
                        src={
                          pokemonData.sprites.versions["generation-iii"]
                          ["firered-leafgreen"]["back_shiny"]
                        }
                        alt="img"
                        width={100}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          )}
          <Button onClick={handleOpenDialog}>Cerrar</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PokemonDetail;