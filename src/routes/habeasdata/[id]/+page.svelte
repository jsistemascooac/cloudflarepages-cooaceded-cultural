<script>
    /** @type {import('./$types').PageData} */
  
    export let data;
    console.log("Habeas:",data)
    let yes = false;
  //  let asociado = 
</script>
{#if data}
<textarea placeholder="Bio" class="textarea textarea-bordered textarea-lg w-full max-w-xs" value={data.habeasDataContrato.habeasDataContrato.descripcion}></textarea>
<form action="?/create" method="post">
  <!-- lg -->
 
   <input type="text" name="user" value={data.user.id} >
 <input type="text" name="proceso"value={data.proceso} >
     <input type="text" name="habeasDataContrato"value={data.habeasDataContrato.habeasDataContrato.id} >
  <input type="text" name="siguiente"  value={data.habeasDataContrato.logDB.siguiente} >             
  <input type="checkbox" class="toggle" name="acepta" bind:checked={yes} value={yes}> 
  {#if yes}
    <button class="btn btn-primary">Continuar</button>
  {/if}
</form>

{/if}