<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log("Repo:",data)
</script>

<div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th>#</th>
          <th>Identificación</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Movil</th>
          <th>Lugar</th>
          <th>Participa</th>
        </tr>
      </thead>
      <tbody>
       {#each data.asociados as a,i}
        <tr>
          <th>{i+1}</th>
          <td>{a.expand.movimientoProceso.datos.estadoPersonaDelegado.IDENTIFICACION}</td>
          <td>{a.expand.movimientoProceso.datos.estadoPersonaDelegado.NOMBRE}</td>
          <td>{a.expand.movimientoProceso.datos.estadoPersonaDelegado.EMAIL}</td>
          <td>{a.expand.movimientoProceso.datos.estadoPersonaDelegado.CELULAR}</td>
          <td>{a.expand.lugar.descricipcion}</td>
          <td>{a.expand.actividades.descripcion}</td>
        </tr>
        {/each} 
      </tbody>
    </table>
  </div>