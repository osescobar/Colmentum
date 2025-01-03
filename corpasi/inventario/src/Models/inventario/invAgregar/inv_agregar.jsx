import { useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";

const submitFormData = async (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Datos enviados:", formData);
      resolve("Datos guardados exitosamente");
    }, 2000); // Simulando una llamada a una API que demora 2 segundos
  });
};

const DemoPageAgregar = ({ isOpen }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    cantidad: "",
    valorUnitario: "",
  });

  const [loading, setLoading] = useState(false);

  // Maneja el cambio de valores en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Maneja el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await submitFormData(formData);
      alert(response);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    } finally {
      setLoading(false);
    }
  };

  // Si el formulario no debe abrirse, no se renderiza nada
  if (!isOpen) {
    return null;
  }

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
      <Typography variant="h4" gutterBottom>
        Agregar Material al Inventario
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: "100%",
          maxWidth: 600,
          mt: 2,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nombre del material"
              required
              fullWidth
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Descripción del material"
              fullWidth
              name="descripcion"
              value={formData.descripcion}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Cantidad"
              type="number"
              required
              fullWidth
              name="cantidad"
              value={formData.cantidad}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Valor Unitario"
              type="number"
              required
              fullWidth
              name="valorUnitario"
              value={formData.valorUnitario}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              disabled={loading}
            >
              {loading ? "Guardando..." : "Guardar"}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

DemoPageAgregar.propTypes = {
    isOpen: PropTypes.bool.isRequired, // Asegurarte de definir la prop como requerida
  };

export default DemoPageAgregar;
