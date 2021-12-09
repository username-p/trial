import { useState, useContext } from "react";

import { AppContext } from "../context/AppContext";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog() {
	const [open, setOpen] = useState(false);
	const [name, setName] = useState("");
	const [education, setEducation] = useState("");
	const [experience, setExperience] = useState(0);
	const [email, setEmail] = useState("");

	const { applicants, setApplicants } = useContext(AppContext);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleSubmit = () => {
		const index = applicants[0].list.length - 1;
		const id = applicants[0].list[index].id + 1;

		const applicant = {
			id: id,
			image: "",
			education: education,
			experience: experience,
			email: email,
		};

		applicants[0].list.push(applicant);

		setName("");
		setEducation("");
		setExperience(0);
		setEmail("");
		handleClose();
	};

	return (
		<div>
			<Button variant="outlined" onClick={handleClickOpen}>
				ADD
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Add Applicant</DialogTitle>
				<DialogContent>
					<DialogContentText>
						To add an applicant, please enter the following information:
					</DialogContentText>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Name"
						type="text"
						fullWidth
						variant="standard"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<TextField
						autoFocus
						margin="dense"
						id="education"
						label="Education"
						type="text"
						fullWidth
						variant="standard"
						value={education}
						onChange={(e) => setEducation(e.target.value)}
					/>
					<TextField
						autoFocus
						margin="dense"
						id="experince"
						label="Work Experince (in years)"
						InputProps={{
							inputProps: {
								min: 0,
							},
						}}
						type="number"
						fullWidth
						variant="standard"
						value={experience}
						onChange={(e) => setExperience(e.target.value)}
					/>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Email Address"
						type="email"
						fullWidth
						variant="standard"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleSubmit}>Add</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
