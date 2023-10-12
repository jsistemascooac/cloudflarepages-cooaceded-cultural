<script>
    /** @type {import('./$types').PageData} */
    import {getImageBLOB} from '$lib/utils'
    export let data;
    console.log("ConsultaData:",data)
  //  let asociado = 
</script>


<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
    
{#await data}
  Esperame...
{:then d} 
 {#await getImageBLOB(d.asociado.asociado.persona.IMAGEN)}
      Image is loading!
    {:then base64}
      <img src="{base64}" alt={d.asociado.asociado.persona.NOMBRE}  class="max-w-sm rounded-lg shadow-2xl" />
    {/await}
    <div>
      
      <h1 class="text-4xl font-bold">{d.asociado.asociado.persona.NOMBRE}</h1>
      <p class="py-6">Email: {d.asociado.asociado.persona.EMAIL} Oficina: {d.asociado.asociado.persona.OFICINA}</p>
      <p class="py-6">{d.user.id}</p>
     
          
          <form action="?/validacion" method="POST">
            <input type="text" name="user"value={d.user.id} hidden>
            <input type="text" name="proceso"value={d.proceso} hidden>
            {#if d.asociado.existe===0}
              <input type="text" name="datos"  value={JSON.stringify(d.asociado)} hidden>
            {/if}
            <input type="text" name="siguiente"  value={d.asociado.siguiente} >            
            <input type="text" name="estado"  value='0' >
            <button class="btn btn-primary">Continuar</button>
          </form>
        
      
    
      
      
      
       
    </div>
    
    {/await}
  </div>
</div>

