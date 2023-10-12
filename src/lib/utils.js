

export const serializeNonPOJOs = (obj) => {
	return structuredClone(obj);
};



export const getImageURL = (collectionId, recordId, fileName, size ) => {
	return `http://181.204.14.21:3090/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`;
};

export const validateData = async (formData, schema) => {
	const body = Object.fromEntries(formData);

	try {
		const data = schema.parse(body);
		return {
			formData: data,
			errors: null
		};
	} catch (err) {
		console.log('Error: ', err);
		const errors = err.flatten();
		return {
			formData: body,
			errors
		};
	}
};