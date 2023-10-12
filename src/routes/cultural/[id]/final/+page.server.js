import { error, redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals,params }) {
    const getEvento = async () => {
        try {
          const evento = serializeNonPOJOs(
              await locals.pb.collection('movimientoEvento').getFirstListItem('cedula="'+params.id+'"', {             
             // filter:'cedula="'+params.id+'"',
              expand: 'movimientoProceso,lugar,actividades'
              })
             
            );
            //console.log("Eventoxxx:", evento,"MIra ID XXX:",params.id)
            return evento
            
          } catch (err) {
              console.log('Error: ', err);
              throw error(err.status, err.message);
          }
  
      }
    return {evento:await getEvento()};
};