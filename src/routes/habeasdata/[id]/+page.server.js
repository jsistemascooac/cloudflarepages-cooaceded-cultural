import { Redirect_1, error, invalid, redirect } from "@sveltejs/kit";
import { serializeNonPOJOs } from '$lib/utils';
import { logDB } from "../../../lib/logdb";
import { clientB } from "../../../lib/graphql"
//import { PERSONA_ASOCIADO } from "./schemasGQ";

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals,params,parent }) {

    if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/login');
	}

    const padre = await parent();
    //console.log("Padre:",padre.parametros.proyecto[0].valor)

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
    
/*
Pilas la idea es que se busque los datos almacenas si esta en este proceso y devuelva los datos almacenados para continuar 
Sino debe almacenar el nuevo registro y pasar al siguiente proceso
*/

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
        
              console.log("PPasa por aqui ",proceso[0])
          
              if(proceso[0] === undefined){
         //       console.log("PPasa por qui 000")
                const url  = await  getSiguienteProceso()
                return {existe:0, siguiente: url.expand.siguiente.url}
              }else{

             //   console.log("PPasa por qui",proceso[0])
                return  {existe:1, siguiente: proceso[0].siguiente+params.id}

              }


             
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }
    }
   
    

    const getHabeasDataContrato = async ()=>{
         try {
            const lbd =   serializeNonPOJOs(await logDB(locals,params.id))
         //   console.log("LBD:....",lbd)
            const hbc= serializeNonPOJOs(
                await locals.pb.collection('habeasDataContrato').getFirstListItem("proyecto='"+padre.parametros.proyecto[0].valor+"'", {
                   })
            )
       //     console.log("LBD:....",hbc)

            return {habeasDataContrato:hbc,logDB:lbd}           
        } catch (err) {
            console.log('Error: ', err);
             throw error(err.status, err.message);
        }
             
   
    }

    
    return {
      
        habeasDataContrato:  await getHabeasDataContrato() ,
        proceso: params.id
        //proceso: getMovimientoProceso(locals.user.id)
          
    };

};



export const actions = {
    
  

    create: async({ request, locals}) => {
  
   

        const body = await request.formData();
        const formData = Object.fromEntries(body);
        console.log("form:",formData)
      //  const siguienteProceso = await getSiguienteProceso(locals, formData.proceso)
//        console.log("Test:", siguienteProceso.expand.siguiente)
  
  
  
  
        try {


            await locals.pb.collection('habeasData').create(formData);

            // deberia enrutarlo al siguiente proceso
           } catch (err) {
               console.log('Error: ', err);
               throw error(err.status, err.message);
           }
       

           throw redirect(303,formData.siguiente);
        // return { success: true }; 
        
    },


    }

