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

      const getActividad = async () => {
        try {
          const lugar = serializeNonPOJOs(
              await locals.pb.collection('actividades').getFullList(undefined, {
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
      
            lugar: await getLugar(),

            actividades: await getActividad()
            };
};

  
/** @type {import('./$types').Actions} */
export const actions = {
	habilidad: async ({ locals, request }) => {
        const data = await request.formData();
	    	const movimientoProceso = data.get('movimientoProceso');
        const lugar = data.get('lugar');
        const estado = data.get('estado');
        const cedula = data.get('cedula');
        const actividades = data.get('actividades');
           console.log("Default",data)
        const registro = {
            movimientoProceso,
            lugar,
            cedula,
            estado,
            actividades
        }
        console.log("registro",registro)
        try {


            const result = await locals.pb.collection('movimientoEvento').create(registro);
            console.log('Result:', result);
            // deberia enrutarlo al siguiente proceso
           } catch (err) {
            
                /*
                Pilas


                Creo que es mejor buscar en la BD siempre el estado y registrarlo, cuando este habil dejarlo 
                de buscar mas.

                NOSE -> Cuando se repita la cedula, se manda a otro proceso anulacion, y el campo "datos", 
                se registra la fecha del  movimiento 
                
                           
               if(err.data.data.log.code==='validation_not_unique')
                 throw redirect(303,"/cultural/"+cedula+"/habilidad");
               else {
                console.log('Error: ',err);  
                throw error(err.status, err.message);
               }
               */
               console.log('Error: ',err);  
                throw error(err.status, err.message);
           }
       

           throw redirect(303,"/cultural/"+cedula+"/final");
        // return { success: true }; 
        
   


	}
};