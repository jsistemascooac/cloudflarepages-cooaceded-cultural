<script>
    /** @type {import('./$types').PageData} */
    export let data;
     //  console.log("L:",data)
</script>
<h1>Bienvenidos a la  Actualizacion de Datos COOACEDED</h1>
{#if data.pasos[0]!==undefined}
    <a href="{data.pasos[0].url + data.pasos[0].prID}">Continuar</a>    
{/if}

