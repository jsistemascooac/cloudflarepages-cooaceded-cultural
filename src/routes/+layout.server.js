import { serializeNonPOJOs } from '$lib/utils';
import { error, redirect } from '@sveltejs/kit';
export async function load({ locals }) {
	
	// if (!locals.pb.authStore.isValid) {
	// 	throw redirect(303, '/login');
	// }

	const getProyecto = async (id) => {
			
		try {             
			//console.log("GetProyecto:",id)
			const proyecto = serializeNonPOJOs(			
				await locals.pb.collection('proyectos').getOne(id)           			
			)		   	
			
			 return proyecto;
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	};

	const getParametrosDefault = async () => {
			
		try {             
			const defaults = serializeNonPOJOs(
				 await locals.pb.collection('parametros').getFullList(undefined,{
					filter:'default=true'
				})             				
			)		   
			const p = await defaults.filter(item => item.item === 'proyecto') 
		//	console.log("Proyecto:",p[0].valor)
		
			
			 return {proyecto: await getProyecto(p[0].valor),
					 parametros:defaults
					};
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	};

	return {
		parametros: getParametrosDefault(),
		user: locals.user
	};


};