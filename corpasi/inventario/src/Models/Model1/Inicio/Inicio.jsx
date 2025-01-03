import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// Imports Modulos.
import NAVIGATION from "../../../Dashboard.jsx";

function DemoPageInicio({ pathname }) {
    const isAddPage = pathname === NAVIGATION.inventario.agregar;

    return (
        <Box
          sx={{
            py: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
            {isAddPage && (
        <>
          <Typography variant="h4" gutterBottom>
            Agregar Material al Inventario
          </Typography>
          <Box
            component="form"
            sx={{
              width: "100%",
              maxWidth: 600,
              mt: 2,
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField label="Nombre del material" required fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Descripción del material" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Condición" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Nivel educativo" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Color" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Proveedor" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Bodega" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Ubicación" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Cantidad" type="number" required fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Valor unitario"
                  type="number"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Guardar
                </Button>
              </Grid>
            </Grid>
          </Box>
        </>
      )}
        </Box>
    );
  }
  function SidebarFooter({ mini }) {
    return (
      <Typography
        variant="caption"
        sx={{ m: 1, whiteSpace: "nowrap", overflow: "hidden" }}
      >
        {mini
          ? "© MUI"
          : `© ${new Date().getFullYear()} Made with love by KAMT`}
      </Typography>
    );
  }
  
  SidebarFooter.propTypes = {
    mini: PropTypes.bool.isRequired,
  };
  DemoPageInicio.propTypes = {
    pathname: PropTypes.string.isRequired,
  };
  export default DemoPageInicio;
  
  