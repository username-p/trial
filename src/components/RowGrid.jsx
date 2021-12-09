import { Box, Container, Grid } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

import ColumnGrid from "./ColumnGrid";

function RowGrid() {
	const { applicants } = useContext(AppContext);

	return (
		<Container maxWidth="xl">
			<Box mb={5}>
				<Grid container direction="row" spacing={10}>
					{applicants.map((applicantList) => (
						<ColumnGrid key={applicantList.type} applicants={applicantList} />
					))}
				</Grid>
			</Box>
		</Container>
	);
}

export default RowGrid;
