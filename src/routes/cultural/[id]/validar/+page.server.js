import { error, redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals,params }) {
    // //const padre = await parent();
    // //console.log("Padre:",padre.parametros.proyecto.id)
    const getEvento = async () => {
      try {
        const evento = serializeNonPOJOs(
            await locals.pb.collection('movimientoEvento').getFullList(undefined, {             
            filter:'cedula="'+params.id+'"'
            
            })
           
          );
          console.log("Eventoxxx:", evento,"MIra ID XXX:",params.id)
          if(evento.lenght>0){
           
            return evento
          }else{
            return  getAsociado()
          }    
          
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }

    }


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


    const getLugar = async () => {
        try {
          const lugar = serializeNonPOJOs(
              await locals.pb.collection('lugar').getFullList(undefined, {
                filter: `estado="ibaqeglq7cygd3u"`,
              })
             
            );
         //   console.log("Lugarxxx:", lugar)
            return lugar
          } catch (err) {
              console.log('Error: ', err);
              throw error(err.status, err.message);
          }

  
      }

    return {evento: await getEvento(),
      
            lugar: await getLugar()
            };
};

  