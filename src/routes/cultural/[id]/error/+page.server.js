/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
    return {cedula:params.id};
};