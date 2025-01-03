//imports iniciales.
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// globales.

// import * as React { useState } from "react";
import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { createTheme } from "@mui/material/styles";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SearchIcon from "@mui/icons-material/Search";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout, ThemeSwitcher } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import CottageIcon from "@mui/icons-material/Cottage";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import DataSaverOnIcon from "@mui/icons-material/DataSaverOn";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import BarChartIcon from "@mui/icons-material/BarChart";
import HorizontalSplitIcon from "@mui/icons-material/HorizontalSplit";
// import ViewWeekIcon from "@mui/icons-material/ViewWeek";
import QrCodeIcon from "@mui/icons-material/QrCode";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
// import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
// Imports Modulos.
// import Inicio from "./Models/Model1/Inicio/Inicio";
import DemoPageAgregar from "./Models/inventario/invAgregar/inv_agregar copy";
// import {
//   Account,
//   AccountPreview,
//   AccountPopoverFooter,
//   SignOutButton,
// } from "@toolpad/core/Account";

const NAVIGATION = [
  { kind: "header", title: "Menu" },
  { segment: "dashboard", title: "Inicio", icon: <CottageIcon /> },
  {
    segment: "inventario",
    title: "Inventario",
    icon: <Inventory2Icon />,
    children: [
      { segment: "agregar", title: "Agregar", icon: <DataSaverOnIcon /> },
      { segment: "retirar", title: "Retirar", icon: <HighlightOffIcon /> },
    ],
  },
  { kind: "divider" },
  { kind: "header", title: "Análisis" },
  {
    segment: "reportes",
    title: "Reportes",
    icon: <BarChartIcon />,
    children: [
      {
        segment: "informacion-material",
        title: "Información del Material",
        icon: <HorizontalSplitIcon />,
      },
      {
        segment: "generar-codigo",
        title: "Generar Código",
        icon: <QrCodeIcon />,
      },
    ],
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  const isAgregarPage = pathname === "/inventario/agregar";
  const isWithdrawPage = pathname === "/inventario/retirar";
  const isMaterialInfoPage = pathname === "/reportes/informacion-material";
  const isGenerateCodePage = pathname === "/reportes/generar-codigo";

  const [isOpen, setIsOpen] = useState(false); // Definir estado isOpen

  const toggleOpen = () => {
    setIsOpen((prev) => !prev); // Alterna el valor de isOpen
  };
  const handleNavClick = (segment) => {
    if (segment === "agregar") {
      toggleOpen(); // Si se hace clic en "Agregar", cambia el estado de apertura
    }
    console.log(`Navegando a: ${segment}`);
  };
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
      {NAVIGATION.flatMap(item =>
  item.children?.map(child => (
    <Button
      key={child.segment}
      onClick={() => handleNavClick(child.segment)}
      variant="outlined"
      sx={{ margin: "5px" }}
    >
      {child.title}
    </Button>
  )) || []
)}

{/* Mostrar el componente de agregar solo si estamos en la página "agregar" */}
{isAgregarPage && <div>Formulario de Agregar (isOpen: {isOpen ? "Sí" : "No"})</div>}
      {isAgregarPage && <DemoPageAgregar isOpen={isOpen} />}
      {isWithdrawPage && (
        <>
          <Typography variant="h4" gutterBottom>
            Retirar Material del Inventario
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
                <TextField
                  label="Cantidad a retirar"
                  type="number"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Motivo del retiro"
                  multiline
                  rows={4}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Responsable del retiro" required fullWidth />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Registrar Retiro
                </Button>
              </Grid>
            </Grid>
          </Box>
        </>
      )}
      {isMaterialInfoPage && (
        <>
          <Typography variant="h4" gutterBottom>
            Información del Material
          </Typography>
          <Box
            sx={{
              width: "100%",
              maxWidth: 600,
              mt: 2,
            }}
          >
            <TextField
              label="Buscar Material"
              fullWidth
              InputProps={{
                startAdornment: (
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                ),
              }}
              sx={{ mb: 3 }}
            />
            <Typography variant="body1">
              Aquí aparecerá toda la información del material seleccionado.
            </Typography>
          </Box>
        </>
      )}
      {isGenerateCodePage && (
        <>
          <Typography variant="h4" gutterBottom>
            Generar Código de Barras o QR
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
                <FormControl fullWidth>
                  <InputLabel id="tipo-codigo-label">Tipo de Código</InputLabel>
                  <Select
                    labelId="tipo-codigo-label"
                    id="tipo-codigo"
                    required
                    defaultValue=""
                    label="Tipo de Código"
                  >
                    <MenuItem value="Barras">Código de Barras</MenuItem>
                    <MenuItem value="QR">Código QR</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Generar Código
                </Button>
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function ToolbarActionsSearch() {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Tooltip title="Search" enterDelay={1000}>
        <div>
          <IconButton type="button" aria-label="search">
            <SearchIcon />
          </IconButton>
        </div>
      </Tooltip>
      <ThemeSwitcher />
    </Stack>
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

function CustomAppTitle() {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <CloudCircleIcon fontSize="large" color="primary" />
      <Typography variant="h6">INVENTARIO</Typography>
      <Tooltip title="Connected to production">
        <CheckCircleIcon color="success" fontSize="small" />
      </Tooltip>
    </Stack>
  );
}

function UserProfile() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleOpen} sx={{ ml: 2 }}>
        <Avatar alt="User Name" src="/path/to/avatar.jpg" />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Mi perfil</MenuItem>
        <MenuItem onClick={handleClose}>Configuración</MenuItem>
        <MenuItem onClick={handleClose}>Cerrar sesión</MenuItem>
      </Menu>
    </>
  );
}

function DashboardLayoutSlots(props) {
  const { window } = props;

  const router = useDemoRouter("/dashboard");

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout
        slots={{
          appTitle: CustomAppTitle,
          toolbarActions: ToolbarActionsSearch,
          toolbarAccount: UserProfile,
          sidebarFooter: SidebarFooter,
        }}
      >
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}

DashboardLayoutSlots.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayoutSlots;