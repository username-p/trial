import { Grid, Typography } from "@mui/material";
import CustomCard from "./CustomCard";
import FormDialog from "./FormDialog";

function ColumnGrid({ applicants }) {
	const { type, list } = applicants;

	return (
		<Grid container direction="column" item spacing={4} xs={12} sm={6} md={4}>
			<Grid item key={"title"}>
				<Typography variant="h5" component="h2" sx={{ mt: 5 }}>
					{type}
				</Typography>
			</Grid>

			{list.map((applicant) => (
				<Grid item key={applicant.id}>
					<CustomCard applicant={applicant} type={type} />
				</Grid>
			))}
			{type === "Applicants" && (
				<Grid item key={"add"}>
					<FormDialog />
				</Grid>
			)}
		</Grid>
	);
}

export default ColumnGrid;
