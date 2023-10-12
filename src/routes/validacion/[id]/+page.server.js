import { Redirect_1, error, invalid, redirect } from "@sveltejs/kit";
import { serializeNonPOJOs } from '$lib/utils';
import { clientB } from "../../../lib/graphql"
import { PERSONA_ASOCIADO } from "./schemasGQ";

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals,params }) {

    if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/login');
	}


    const getSiguienteProceso = async() => {
        try {
            const proceso = serializeNonPOJOs(
            await locals.pb.collection('proceso').getOne(params.id, {
                expand: 'siguiente'
              //  filter: `id="${params.id}"`,
            
            })
          )
       //    console.log("PPasa por aqui SP ",proceso)
          return proceso
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }  
    }
    
   

    const getMovimientoProceso = async() => {
        try {
      //      console.log("UN:",locals.user.username)
            const proceso = serializeNonPOJOs(
                await locals.pb.collection('v_proceso_etapa_fase_proyecto_user').getFullList(undefined, {
                    sort: "orden",
                    expand: "user",
                    filter: `user.username="${locals.user.username}" && prID="${params.id}"`,
                
                })
              )
        
            //  console.log("PPasa por aqui ",proceso[0])
          
              if(proceso[0] === undefined){
         //       console.log("PPasa por qui 000")
                const url  = await  getSiguienteProceso()
                return {existe:0, siguiente: url.expand.siguiente.url + url.expand.siguiente.id,asociado: await getAsociado(locals.user.username)}
              }else{

             //   console.log("PPasa por qui",proceso[0])
                return  {existe:1, siguiente: proceso[0].datos.siguiente, asociado: proceso[0].datos.asociado}

              }


             
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }
    }
   
    

    const getAsociado = async (identificacion)=>{
 //           console.log("Si pasa 1000")
        try {
            const asociado= serializeNonPOJOs(
                await clientB.request(PERSONA_ASOCIADO, {id:identificacion.toString()}) 
            )

            return asociado           
        } catch (err) {
            console.log('Error: ', err);
             throw error(err.status, err.message);
        }
             
      //      console.log("GQ:",delegado)
        //  delegado = serializeNonPOJOs(delegado)
             
   
    }

    
    return {
      
        asociado:  await getMovimientoProceso() ,
        proceso: params.id
        //proceso: getMovimientoProceso(locals.user.id)
          
    };

};



export const actions = {
    
  

    validacion: async({ request, locals}) => {
  
   

        const body = await request.formData();
        const formData = Object.fromEntries(body);
        console.log("form:",formData)
      //  const siguienteProceso = await getSiguienteProceso(locals, formData.proceso)
//        console.log("Test:", siguienteProceso.expand.siguiente)
  
  
  
  
        try {


            await locals.pb.collection('movimientoProceso').create(formData);

            // deberia enrutarlo al siguiente proceso
           } catch (err) {
               console.log('Error: ', err);
               throw error(err.status, err.message);
           }
       

           throw redirect(303,formData.siguiente);
        // return { success: true }; 
        
    },


    }

