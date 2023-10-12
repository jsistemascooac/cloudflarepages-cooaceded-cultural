import { error, fail , redirect } from "@sveltejs/kit";
import { validateData } from "$lib/utils";
import { loginUserSchema } from "$lib/schemas";

export const actions = {
	login: async ({ request, locals }) => {
		const { formData, errors } = await validateData(
			await request.formData(),
			loginUserSchema,
		);

		if (errors) {
			return fail (400, {
				data: formData,
				errors: errors.fieldErrors,
			});
		}

		try {
			// const body = await request;
			// console.log("body:",body)
			// console.log("SiX...",formData,formData.email)
			await locals.pb
				.collection("users")
				.authWithPassword(formData.email, formData.password);
			if (!locals.pb?.authStore?.model?.verified) {
				locals.pb.authStore.clear();
				return {
					notVerified: true,
				};
			}
		} catch (err) {
			console.log("Error: ", err);
			throw error(err.status, err.message);
		}
	//	console.log("Usuario:",locals.user.id)
	//	getMovimientoProceso(locals,locals.user.id)

		throw redirect(303, "/pasos/");
	},
};


