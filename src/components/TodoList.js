import React from "react";
import { AiFillDelete } from "react-icons/ai";

const TodoList = ({ tasks, removeTask }) => {
	return (
		<>
			<div
				style={{
					maxWidth: "450px",
					margin: "10px auto",
				}}
			>
				{tasks?.map?.((task, index) => (
					<Task
						key={index}
						index={index}
						task={task}
						onDelete={removeTask}
					/>
				))}
			</div>
		</>
	);
};

const Task = ({ index, task, onDelete }) => {
	return (
		<div
			className="neumorph-box"
			style={{
				padding: "10px",
				marginBottom: "10px",
			}}
		>
			<p
				style={{
					display: "flex",
					alignItems: "flex-start",
					justifyContent: "space-between",
					fontWeight: "bold",
					marginBottom: "10px",
				}}
			>
				<span
					style={{
						flex: 1,
					}}
				>
					{task.title || "Untitled"}
				</span>{" "}
				<AiFillDelete
					style={{
						color: "#e10000",
						fontSize: "20px",
						cursor: "pointer",
					}}
					onClick={() => onDelete(index)}
				/>
			</p>
			<p
				style={{
					fontSize: "0.8em",
				}}
			>
				{task.description || ""}
			</p>
		</div>
	);
};

export default TodoList;
