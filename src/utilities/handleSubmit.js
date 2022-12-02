const handleEvent = (event) => {
	let data = {};
	const FormDataHere = new FormData(event.target);
	Array.from(FormDataHere.entries()).forEach((e) => {
		data[e[0]] = e[0].includes("[]")
			? FormDataHere.getAll(e[0])
			: FormDataHere.get(e[0]);
	});
	return data;
};

const handleSubmit = (event) => {
	event.preventDefault();
	return handleEvent(event);
};

export default handleSubmit;
