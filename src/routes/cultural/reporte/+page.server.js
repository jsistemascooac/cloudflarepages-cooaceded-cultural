import { error, redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals,params }) {

    
    const getAsociado = async () => {
        try {
          const asociado = serializeNonPOJOs(
              await locals.pb.collection('movimientoEvento').getFullList(undefined, {
                  expand:  `movimientoProceso,lugar,actividades`,
                  sort: `-created`,
              
              
              })
             
            );
            return asociado
          } catch (err) {
              console.log('Error: ', err);
              throw error(err.status, err.message);
          }

  
      }
      
            
        return {asociados: await getAsociado(),}
   };




  