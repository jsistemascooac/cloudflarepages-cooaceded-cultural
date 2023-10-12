import { error} from "@sveltejs/kit";
//import PocketBase from 'pocketbase';
//import { serializeNonPOJOs } from '$lib/utils';

const getSiguienteProceso = async(locals,id) => {
    try {
        //const proceso = serializeNonPOJOs(
            const proceso = await locals.pb.collection('proceso').getOne(id, {
            expand: 'siguiente'
          //  filter: `id="${params.id}"`,
        
        })
      //)
       console.log("PPasa por aqui SP ",proceso)
      return proceso
    } catch (err) {
        console.log('Error: ', err);
        throw error(err.status, err.message);
    }  
}


export const logDB = async (locals,id) => {

    try {
        // const body = await request;
     //   console.log("body:")
    //  console.log("SiX...",id)
       const hd =  await  locals.pb.collection('v_proceso_etapa_fase_proyecto_user').getFirstListItem("prID='"+id+"'", {
        })
        
     //s   console.log("PPasa por aqui ",hd)
          
   //     if(hd === undefined){
   //       console.log("PPasa por qui 000")
          const url  = await  getSiguienteProceso(locals,id)
          return {existe:0, siguiente: url.expand.siguiente.url}
     //   }else{

       //   console.log("PPasa por qui",proceso[0])
    //      return  {existe:1, siguiente: hd.siguiente+id}

      //  }

         // console.log("SiX...",hd)
            // return {
            //     hd
            // };
        
    } catch (err) {
        console.log("Error: ", err);
        throw error(err.status, err.message);
    }
//	console.log("Usuario:",locals.user.id)
//	getMovimientoProceso(locals,locals.user.id)

 //   throw redirect(303, "/pasos/");


};
