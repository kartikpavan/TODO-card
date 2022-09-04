import React from "react";
import { BiTrash } from "react-icons/bi";
import { useGlobalContext } from "../context/TaskContext";
import moment from "moment";

const Card = ({ todo, index }) => {
	const { removeTask } = useGlobalContext();
	const colors = [
		{
			primaryColor: "#5D93E1",
			secondaryColor: "#ECF3FC",
		},
		{
			primaryColor: "#F9D288",
			secondaryColor: "#FEFAF1",
		},
		{
			primaryColor: "#5DC250",
			secondaryColor: "#F2FAF1",
		},
		{
			primaryColor: "#F48687",
			secondaryColor: "#FDF1F1",
		},
		{
			primaryColor: "#B964F7",
			secondaryColor: "#F3F0FD",
		},
	];

	return (
		<div>
			<div
				className="w-62 md:w-72 flex flex-col gap-4 shadow-2xl py-4 px-4 hover:scale-105 transition-all ease-out"
				style={{
					borderTop: `5px solid ${colors[index % 5].primaryColor}`,
					height: "fit-content",
				}}
			>
				<span
					className="px-4 py-2 rounded-full fit-content font-medium"
					style={{
						backgroundColor: `${colors[index % 5].secondaryColor}`,
						width: "fit-content",
					}}
				>
					{todo.taskName}
				</span>
				<p className="text flex-1 px-2">{todo.description}</p>
				<div className="flex justify-between ">
					<p className="text-sm font-medium text-gray-500 italic">
						{moment(todo.id).format("MMM Do YY, h:mm:ss a")}
					</p>
					<button onClick={() => removeTask(todo.id)}>
						<BiTrash
							size={26}
							className="hover:scale-125 duration-100"
							color={colors[index % 5].primaryColor}
						/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
