import { error, redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';
import { clientB } from "../../lib/graphql"
import { ESTADO_PERSONA_ASOCIADO } from "../../lib/schemasGraphql/schemasGQ";

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals,parent }) {
    const padre = await parent();
  //  console.log("Padre:",padre.parametros.proyecto.id)



  
    const getProceso = async () => {
      try {
        const proceso = serializeNonPOJOs(
            await locals.pb.collection('proceso').getFullList(undefined, {
                sort: "orden",
                expand: "etapa",
                filter: `etapa.fase.proyecto="${padre.parametros.proyecto.id}"`,
            
            
            })
           
          );
     //    console.log("Procesoxxx:", proceso)
          return proceso
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }
    
   //   
 //   return 

    }

    
  //   const getAsociado = async () => {
  //       try {
  //         const proceso = serializeNonPOJOs(
  //             await locals.pb.collection('movimientoProceso').getFullList(undefined, {
                
  //                 filter: `log="${padre.parametros.proyecto.id}"`,
              
              
  //             })
             
  //           );
  //      //     console.log("Procesoxxx:", proceso)
  //           return proceso
  //         } catch (err) {
  //             console.log('Error: ', err);
  //             throw error(err.status, err.message);
  //         }
      
  //    //   
  //  //   return 
  
  //     }

    return {proceso: await getProceso()};
};



const getAsociado = async (identificacion)=>{
    //           console.log("Si pasa 1000")
           try {
               const asociado= serializeNonPOJOs(
                   await clientB.request(ESTADO_PERSONA_ASOCIADO, {id:identificacion.toString()}) 
               )
             //  console.log("GQ:",asociado)
               return asociado           
           } catch (err) {
               console.log('Error: ', err);
                throw error(err.status, err.message);
           }
                
              
           //  delegado = serializeNonPOJOs(delegado)
                
      
       }
   
/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ locals, request }) => {
        const data = await request.formData();
		    const cedula = data.get('cedula');
        const proceso = data.get('proceso');
        const siguiente = data.get('siguiente');
        const datos = await getAsociado(cedula)
       // console.log("Default",email)
        const registro = {
            proceso,
            datos,
            log:cedula,
            estado:true,
            siguiente
        }

        
        let evento

        try {
           evento =  await locals.pb.collection('movimientoEvento').getFullList(undefined, {             
            filter:'cedula="'+cedula+'"'
            
            })

             await locals.pb.collection('movimientoProceso').create(registro);
            
          
             
          
        //    console.log('Result:', result);
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
             
           if(evento.length>0){
            throw redirect(303,"/cultural/"+cedula+"/final");
          }

           if (datos.estadoPersonaDelegado) {
              throw redirect(303,"/cultural/"+cedula+"/habilidad");
           } else {
             throw redirect(303,"/cultural/"+cedula+"/error");
           }

          // throw redirect(303,"/cultural/"+cedula+"/habilidad");
        // return { success: true }; 
        
   


	}
};