import React, { useContext, createContext } from "react";

const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
	const [taskName, setTaskName] = React.useState("");
	const [description, setDescription] = React.useState("");
	const [list, setList] = React.useState([]);

	React.useEffect(() => {
		let arr = localStorage.getItem("task");
		if (arr) {
			let obj = JSON.parse(arr);
			setList(obj);
		}
	}, []);

	// ADD TASK
	function submitHandler(e) {
		e.preventDefault();
		if (!taskName || !description) {
			alert("All field are mandatory");
		} else {
			let newItem = { id: new Date().getTime().toString(), taskName, description };
			setList([...list, newItem]);
			setTaskName("");
			setDescription("");
			localStorage.setItem("task", JSON.stringify(list));
		}
	}

	//REMOVE TASK
	function removeTask(id) {
		let newList = list.filter((item) => item.id !== id);
		localStorage.setItem("task", JSON.stringify(newList));
		setList(newList);
	}

	return (
		<TaskContext.Provider
			value={{
				taskName,
				description,
				setTaskName,
				setDescription,
				submitHandler,
				list,
				removeTask,
			}}
		>
			{children}
		</TaskContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(TaskContext);
};
