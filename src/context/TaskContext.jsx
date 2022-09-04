import React, { useContext, createContext } from "react";

const TaskContext = createContext();

const getLocalStorage = () => {
	let list = localStorage.getItem("list");
	if (list) {
		return JSON.parse(localStorage.getItem("list"));
	} else {
		return [];
	}
};

export const TaskContextProvider = ({ children }) => {
	const [taskName, setTaskName] = React.useState("");
	const [description, setDescription] = React.useState("");
	const [list, setList] = React.useState(getLocalStorage());

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
			let newItem = { id: new Date(), taskName, description };
			setList([...list, newItem]);
			setTaskName("");
			setDescription("");
		}
	}

	//REMOVE TASK
	function removeTask(id) {
		let newList = list.filter((item) => item.id !== id);
		localStorage.setItem("task", JSON.stringify(newList));
		setList(newList);
	}

	React.useEffect(() => {
		localStorage.setItem("task", JSON.stringify(list));
	}, [list]);
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
