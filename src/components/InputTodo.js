import React from "react";
import handleSubmit from "../utilities/handleSubmit";

const InputTodo = ({ createTask }) => {
	return (
		<form
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				rowGap: "10px",
				maxWidth: "450px",
				margin: "10px auto",
			}}
			onSubmit={(e) => {
				let data = handleSubmit(e);
				// console.log(data);
				createTask(data);
				e.target.reset();
			}}
		>
			<input
				className="neumorph-box-inner"
				style={{
					width: "100%",
				}}
				placeholder={"Write you title.."}
				name={"title"}
				required
			/>
			<textarea
				className="neumorph-box-inner"
				style={{
					width: "100%",
					minHeight: "200px",
				}}
				placeholder={"Aa.."}
				name={"description"}
				required
			/>
			<button
				type={"submit"}
				className={"neumorph-btn dark-btn"}
				style={{
					width: "100%",
				}}
			>
				Create Task
			</button>
		</form>
	);
};

export default InputTodo;
