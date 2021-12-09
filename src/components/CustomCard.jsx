import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
	Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

function CustomCard({ applicant, type }) {
	const { applicants, setApplicants } = useContext(AppContext);

	const deleteApplicant = () => {
		const index1 = applicants.findIndex((element) => element.type === type);

		const index2 = applicants[index1].list.findIndex(
			(element) => element.id === applicant.id
		);

		applicants[index1].list.splice(index2, 1);
	};

	return (
		<Card
			sx={{
				height: "100%",
				display: "flex",
				flexDirection: "row",
			}}
		>
			<Box sx={{ display: "flex" }}>
				<CardMedia
					component="img"
					sx={{
						width: 151,
						pt: "10%",
					}}
					image={
						applicant.image ||
						"https://img.freepik.com/free-icon/important-person_318-10744.jpg?size=338&ext=jpg"
					}
					alt="image"
				/>
			</Box>
			<Box sx={{ display: "flex", flexDirection: "column" }}>
				<CardContent sx={{ flexGrow: 1 }}>
					<Typography gutterBottom variant="h5" component="h2" sx={{ mb: 4 }}>
						{applicant.name}
					</Typography>
					<Typography align="left">{applicant.education}</Typography>
					<Typography align="left">
						{applicant.experience} years of experience
					</Typography>
					<Typography align="left">{applicant.email}</Typography>
				</CardContent>
				<CardActions sx={{ justifyContent: "flex-end" }}>
					<Button size="small">
						<DeleteIcon onClick={deleteApplicant} />
					</Button>
					<Button size="small">
						<EditIcon /> {// onclick: popup dialog to edit}
					</Button>
					<Button size="small">
						<ArrowRightAltIcon /> {/* onclick: popup dialog to move forward with applicant*/}
					</Button>
				</CardActions>
			</Box>
		</Card>
	);
}

export default CustomCard;
