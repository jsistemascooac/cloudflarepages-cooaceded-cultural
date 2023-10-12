import { error, invalid, redirect } from "@sveltejs/kit";
import { serializeNonPOJOs } from '$lib/utils';


/** @type {import('./$types').LayoutServerLoad} */
export async function load({ locals }) {
    
    if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/login');
	}


    

    const getPasos = async ()=>{
        
        try {
                // Debe haber una vista que imprima las Etapa y en cual esta el usuario,  con l atbal de MovProceso
               const etapas = serializeNonPOJOs(
                   await locals.pb.collection('v_proceso_etapa_fase_proyecto_user').getFullList(undefined, {
                       sort: "orden",
                   //    expand: "estado"
                   filter: `user.username="${locals.user.username}" || user=""`,
                   
                   })
                 )
        
                 return etapas
               } catch (err) {
                   console.log('Error: ', err);
                   throw error(err.status, err.message);
               }
      
    }

    
    return {
        pasos: getPasos(),     
          
    };

};