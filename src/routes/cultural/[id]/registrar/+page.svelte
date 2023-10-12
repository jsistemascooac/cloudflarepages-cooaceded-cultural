<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log("cultural-habilidad-data:",data)
    let idEstado = (data.evento.asociado.datos.estadoPersonaDelegado.ACTIVO) ?'ibaqeglq7cygd3u':'s1gbuwsr7dc6x1m'
  //  // let idEstado = data.evento.datos.estadoPersonaDelegado.ACTIVO
</script>


 
<div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">{data.evento.asociado.datos.estadoPersonaDelegado.NOMBRE}</h2>
    <p>cedula: {data.evento.asociado.datos.estadoPersonaDelegado.IDENTIFICACION}</p>    
    <p>celular: {data.evento.asociado.datos.estadoPersonaDelegado.CELULAR}</p>
    <p>email: {data.evento.asociado.datos.estadoPersonaDelegado.EMAIL}</p> 
   

{#if data.evento.asociado.datos.estadoPersonaDelegado.ACTIVO}

    <form action="?/habilidad" method="post">
      <input type="text" class="hidden" name="cedula" bind:value={data.evento.asociado.datos.estadoPersonaDelegado.IDENTIFICACION}>
      <input type="text" class="hidden" name="estado" bind:value={idEstado}>
      <input type="text" name="siguiente" bind:value={data.evento.asociado.id} hidden> 
      <input type="text" name="movimientoProceso" bind:value={data.evento.asociado.id} hidden> 
      
      
          <select name = "lugar" class="select select-accent w-full max-w-xs" >
              {#each data.lugar as m}
                  <option value={m.id}>{m.lugar}</option>
              {/each}
            </select> 
            <select name = "actividades" class="select select-accent w-full max-w-xs" >
              <!-- <option value="true" selected>Si</option>
              <option value="false" >No</option>               -->
              {#each data.actividades as a}
               <option  value={a.id}  selected ={a.id=='rb573c3b49ede0b'}>{a.descripcion}</option>
              {/each}
        
            </select>
            <button  class="btn btn-primary">Entrada</button>
            <a class="btn btn-secondary" href="/cultural">Regresar</a>
    </form>
   
    <p>AUTORIZO de manera libre, expresa, voluntaria e irrevocable a COOACEDED o a quien represente sus derechos, a: 1. Verificar la información aquí suministrada a través de cualquier medio que considere conveniente. 2. Recolectar, recaudar, almacenar, usar, circular, actualizar, consultar, procesar, compilar, intercambiar, suministrar, grabar, solicitar y disponer de mis datos personales que han sido suministrados para el desarrollo del Objeto Social de COOACEDED y para cumplir las finalidades mencionadas. 3. Divulgar la información de carácter personal y/o financiera ante CIFIN, Operador, Central de Riesgo, bases de información o cualquier otra entidad que maneje o administre base de datos con los mismos fines, toda la información derivada de cualquier tipo de operación que celebre con COOACEDED, con fines estadísticos, de control, de supervisión, actualización o verificación de mi información, de conformidad con lo preceptuado en la Ley de Habeas Data y de Protección de Datos Personales. Lo anterior implica que el cumplimiento o incumplimiento de mis obligaciones se reflejará en las mencionadas Bases de Datos en donde se consignan de manera completa toda mi información financiera pasada, actual y futura de acuerdo con las Normas Legales Vigentes.

      De igual forma en cumplimiento de las disposiciones e instrucciones dadas por las Circulares Externas N° 006 de 2014, N°15 de 2015, la N° 004 de 2017 y la N°14 de 2018, expedidas por la Superintendencia de Economía Solidaria, los datos registrados en la presente Solicitud son recogidos para ser consultados y verificados, teniendo en cuenta también los Estándares Internacionales para Prevenir y Controlar el Lavado de Activos, Financiación del Terrorismo y Riesgo de Corrupción. 1. Que conforme con lo dispuesto en este documento declaro que los recursos con los cuales se manejan mis Productos, Servicios, Activos o Pasivos, Aportes Sociales y Solicitudes de Crédito con COOACEDED son de origen lícito y no provienen o apoyan la financiación de actividades terroristas ni fomento la Corrupción. 2. Que con los recursos que obtenga de COOACEDED, producto de los créditos y servicios no serán utilizados para Lavar Activos, Financiar el Terrorismo ni cometer actos de Corrupción.
      
      </p>
{:else}
    <div class="alert alert-error">
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>No puede inscribirse, consulte al area de credito y cartera.</span>
    </div>
    <a class="btn btn-secondary" href="/cultural">Regresar</a>
{/if}



</div>
</div>
 

