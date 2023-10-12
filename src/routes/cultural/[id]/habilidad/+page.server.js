import { error, redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals,params }) {
    // //const padre = await parent();
    // //console.log("Padre:",padre.parametros.proyecto.id)

    const getProceso = async (id) => {
      try {
        const proceso = serializeNonPOJOs(
            await locals.pb.collection('proceso').getFirstListItem('id="'+id+'"', {             
            
            
            })
           
          );
       //   console.log("Procesoxxx:", proceso,"MIra ID XXX:",id)
          return proceso
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }

    }

    
    const getAsociado = async () => {
        try {
          const asociado = serializeNonPOJOs(
              await locals.pb.collection('movimientoProceso').getFirstListItem('log="'+params.id+'"', {
                  expand:  `-created`,
                  sort: `-created`,
              
              
              })
              
            );
         //    console.log("Asociadosxxx:", asociado,"MIra ID:",params.id)
            const proceso = await getProceso(asociado.siguiente)
         
            return {asociado,proceso}
          } catch (err) {
              console.log('Error: ', err);
              throw error(err.status, err.message);
          }

  
      }
      
            
        return {asociado: await getAsociado(),}
   };




  