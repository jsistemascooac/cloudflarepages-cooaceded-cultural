/** @type {import('./$types').PageServerLoad} */
export async function load({ locals,params }) {

    if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/login');
	}
}