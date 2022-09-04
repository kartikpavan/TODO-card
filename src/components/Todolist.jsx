import React from "react";
import { useGlobalContext } from "../context/TaskContext";
import Card from "./Card";
const Todolist = () => {
	const { list } = useGlobalContext();
	return (
		<div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-10 ">
			{list &&
				list.map((todo, index) => {
					return <Card key={index} todo={todo} index={index} />;
				})}
		</div>
	);
};

export default Todolist;
