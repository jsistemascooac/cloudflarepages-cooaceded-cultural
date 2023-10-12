<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log("cultural-habilidad-data:",data)
    let idEstado = (data.asociado.asociado.datos.estadoPersonaDelegado.ACTIVO) ?'ibaqeglq7cygd3u':'s1gbuwsr7dc6x1m'
   // let idEstado = data.asociado.datos.estadoPersonaDelegado.ACTIVO
</script>





<div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">{data.asociado.asociado.datos.estadoPersonaDelegado.NOMBRE}</h2>
    <p>cedula: {data.asociado.asociado.datos.estadoPersonaDelegado.IDENTIFICACION}</p>    
    <p>celular: {data.asociado.asociado.datos.estadoPersonaDelegado.CELULAR}</p>
    <p>email: {data.asociado.asociado.datos.estadoPersonaDelegado.EMAIL}</p> 
   
 
{#if data.asociado.asociado.datos.estadoPersonaDelegado.ACTIVO}
    <div class="alert alert-success">
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>Habil para inscribirse en el evento cultural</span>
    </div>
    <a class="btn btn-secondary" href="/cultural/{data.asociado.asociado.datos.estadoPersonaDelegado.IDENTIFICACION}/registrar">Continuar</a>
   
{:else}
    <div class="alert alert-error">
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>No puede inscribirse, consulte al area de credito y cartera.</span>
    </div>
    <a class="btn btn-secondary" href="/cultural">Regresar</a>
{/if}

</div>
</div>
 


