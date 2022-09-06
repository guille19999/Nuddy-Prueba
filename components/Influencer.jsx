import {
  Box,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  Button,
  useMediaQuery,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import React, { useState } from "react";
import axios from "axios";

const Influencer = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: " ",
    instagram: "",
  });
  const { username, email, instagram } = formState;
  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({ ...formState, [name]: value });
    console.log({ name, value });
  };
  const isDesktop = useMediaQuery("(min-width:600px)");

  const onSubmit = async () => {
    console.log(username, email, instagram);
    const { data } = await axios.post("/api/users/influencer", {
      username,
      email,
      instagram,
    });
    console.log(data);
    try {
    } catch (error) {}
  };
  return (
    <div>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          textAlign: "left",
          flexDirection: isDesktop ? "row" : "column",
          paddingRight: isDesktop ? "70px" : "0",
          paddingLeft: isDesktop ? "70px" : "0",
          paddingTop: isDesktop ? "10px" : "15px",
          paddingBottom: isDesktop ? "10px" : "15px",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <Box>
          <Typography>
            <LockOutlinedIcon />
            Compra certificada y 100% segura{"  "}
          </Typography>
        </Box>

        <Box>
          <Typography>
            <LocalShippingIcon />
            {"  "}
            Envios a todo el pais, 3-5 dias habiles{"  "}
          </Typography>
        </Box>

        <Box>
          <Typography>
            <CreditCardIcon />
            Multiples modos de pago
          </Typography>
        </Box>
      </Box>

      <Container sx={{ backgroundColor: "white" }}>
        <Grid container paddingTop={10}>
          <Grid
            item
            md={6}
            display="flex"
            width="100%"
            justifyContent={"center"}
          >
            <div style={{ width: "100%" }}>
              <List>
                <ListItem justifyContent={"center"} className="title">
                  <Typography
                    variant="h1"
                    component="h1"
                    align="center"
                    sx={{ alignItems: "center", fontWeight: "bold" }}
                  >
                    Nuddy Influencer{" "}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography
                    align="center"
                    sx={{
                      alignItems: "center",
                      fontWeight: "bold",
                      justifyContent: "start",
                      textAlign: "left",
                    }}
                  >
                    lorem ipsum dolor sit amet, consectetur adipislorem ipsum
                    dolor sit amet, consectetur adipislorem ipsum dolor sit
                    amet, consectetur adipislorem ipsum dolor
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography
                    align="center"
                    sx={{
                      alignItems: "center",
                      fontWeight: "bold",
                      justifyContent: "start",
                      textAlign: "left",
                    }}
                  >
                    Recuerda dejar tu cuenta publica unos dias para poder
                    observar tu perfil
                  </Typography>
                </ListItem>

                <ListItem>
                  <input
                    onChange={onInputChange}
                    value={username}
                    className="form-control"
                    name="username"
                    type="text"
                    placeholder="Nombres y Apellidos"
                    style={{ width: "100%" }}
                  ></input>
                </ListItem>
                <ListItem>
                  <input
                    onChange={onInputChange}
                    className="form-control"
                    value={email}
                    name="email"
                    type="email"
                    placeholder="Correo electronico"
                    style={{ width: "100%" }}
                  ></input>
                </ListItem>
                <ListItem>
                  <input
                    onChange={onInputChange}
                    className="form-control"
                    value={instagram}
                    name="instagram"
                    type="text"
                    placeholder="Perfil instagram"
                    style={{ width: "100%" }}
                  ></input>
                </ListItem>

                <ListItem>
                  <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    onClick={onSubmit}
                    sx={{
                      color: "white",
                      backgroundColor: "black",
                      "&:hover": {
                        transform: "scale(1, 1.1)",
                        backgroundColor: "black",
                      },
                    }}
                  >
                    Aplicar
                  </Button>
                </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item md={6}>
            <Grid container spacing={2} margin={"auto"}>
              <Grid item>
                <img
                  style={{ width: "260px", height: "390px" }}
                  src="http://d3ugyf2ht6aenh.cloudfront.net/stores/953/334/products/its-not-that-serious-21-d660f7f2c3a1d6f0ba16320788939446-640-0.png"
                ></img>
              </Grid>
              <Grid item>
                <img
                  style={{ width: "260px", height: "390px" }}
                  src="http://d3ugyf2ht6aenh.cloudfront.net/stores/953/334/products/its-not-that-serious-21-d660f7f2c3a1d6f0ba16320788939446-640-0.png"
                ></img>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Influencer;