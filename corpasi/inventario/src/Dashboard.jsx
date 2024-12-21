import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
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
import ViewWeekIcon from "@mui/icons-material/ViewWeek";
import {
  Account,
  AccountPreview,
  AccountPopoverFooter,
  SignOutButton,
} from "@toolpad/core/Account";

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
  { kind: "header", title: "Analisis" },
  {
    segment: "reportes",
    title: "Reportes",
    icon: <BarChartIcon />,
    children: [
      {
        segment: "articulos",
        title: "Artículos",
        icon: <HorizontalSplitIcon />,
      },
      {
        segment: "generar-codigo",
        title: "Generar código",
        icon: <ViewWeekIcon />,
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
      <Typography>Dashboard content for {pathname}</Typography>
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
