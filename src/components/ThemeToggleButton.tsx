import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import { useThemeMode } from '../context/themeContext';

const ThemeToggleButton = () => {
    const { toggleMode } = useThemeMode();
    const theme = useTheme();

    return (
        <IconButton color="inherit" onClick={toggleMode}>
            {theme.palette.mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
    );
};

export default ThemeToggleButton;
