import AppBar from "@mui/material/AppBar";
import PersonIcon from "@mui/icons-material/Person";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import RowGrid from "../components/RowGrid";

const theme = createTheme();

function IndexPage() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppBar position="relative" sx={{ alignItems: "center" }}>
				<Toolbar>
					<PersonIcon sx={{ mr: 2 }} />
					<Typography variant="h6" color="inherit" noWrap>
						Application Tracking System
					</Typography>
				</Toolbar>
			</AppBar>
			<main>
				<RowGrid />
			</main>
		</ThemeProvider>
	);
}

export default IndexPage;
