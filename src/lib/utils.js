const { randomBytes } = await import('node:crypto');

export const serializeNonPOJOs = (obj) => {
	return structuredClone(obj);
};


export const getImageURL = (collectionId, recordId, fileName, size ) => {
	return `http://181.204.14.21:3090/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`;
};

export const validateData = async (formData, schema) => {
	const body = Object.fromEntries(formData);
	console.log("body:",body)

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

export const getImageBLOB = async(array ) => {
	
	let arrayBufferView = new Uint8Array( array );
	let blob = new Blob( [ arrayBufferView ], { type: "image/jpeg" } );

	return new Promise(function (resolve) {
		let reader = new FileReader();
		reader.readAsDataURL(blob);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject('Error: ', error);
	});
};
