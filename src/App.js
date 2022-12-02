import React from "react";
import { AiFillFileAdd } from "react-icons/ai";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";

function App() {
	const [openCreate, setOpenCreate] = React.useState(false);
	const handleOpenCreate = () => setOpenCreate((openCreate) => !openCreate);

	const [tasks, setTasks] = React.useState(
		localStorage.getItem("tasks")
			? JSON.parse(localStorage.getItem("tasks")).tasks
			: []
	);
	const createTask = (data) => {
		localStorage.setItem(
			"tasks",
			JSON.stringify({
				tasks: [...tasks, data],
			})
		);
		setTasks(
			localStorage.getItem("tasks")
				? JSON.parse(localStorage.getItem("tasks")).tasks
				: []
		);
	};

	const removeTask = (index) => {
		tasks?.splice(index, 1);
		localStorage.setItem(
			"tasks",
			JSON.stringify({
				tasks: tasks,
			})
		);
		setTasks(
			localStorage.getItem("tasks")
				? JSON.parse(localStorage.getItem("tasks")).tasks
				: []
		);
	};

	return (
		<>
			{openCreate && <InputTodo createTask={createTask} />}
			{openCreate && !!tasks?.length && (
				<>
					<hr />
				</>
			)}
			<TodoList
				tasks={tasks || []}
				removeTask={removeTask}
			/>
			<button
				className="dark-btn"
				style={{
					position: "fixed",
					bottom: "20px",
					right: "20px",
					fontSize: "30px",
					borderRadius: "60px",
					width: "55px",
					height: "55px",
				}}
				onClick={handleOpenCreate}
			>
				<AiFillFileAdd />
			</button>
		</>
	);
}

export default App;
