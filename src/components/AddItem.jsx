import React from "react";
import { useGlobalContext } from "../context/TaskContext";

const AddItem = () => {
	const { taskName, setTaskName, description, setDescription, submitHandler } =
		useGlobalContext();

	return (
		<>
			<input type="checkbox" id="my-modal-3" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box ">
					<h3 className="text-lg font-bold mb-2">Create Task</h3>
					<form onSubmit={submitHandler} className="flex flex-col gap-4">
						<input
							type="text"
							name="taskName"
							placeholder="Task Name"
							value={taskName}
							onChange={(e) => setTaskName(e.target.value)}
							className="input input-secondary font-medium text-lg"
						/>
						<textarea
							name="description"
							cols="30"
							rows="5"
							placeholder="Description..."
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							className="textarea textarea-secondary text-lg"
						></textarea>
						<div className="flex gap-3 justify-end">
							<button
								type="submit"
								className="btn btn-secondary text-lg"
								onClick={() =>
									(document.getElementById("my-modal-3").checked = true)
								}
							>
								Add Task
							</button>
							<label htmlFor="my-modal-3" className="btn btn-ghost  text-lg">
								Cancle
							</label>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default AddItem;
