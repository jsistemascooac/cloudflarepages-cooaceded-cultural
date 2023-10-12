<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log("final:",data)
</script>



  <div class="card w-96 bg-neutral text-neutral-content">
    <div class="card-body items-center text-center">
      <h2 class="card-title">{data.evento.expand.movimientoProceso.datos.estadoPersonaDelegado.NOMBRE}</h2>
      <p> Identificacion: {data.evento.cedula}</p>
      <p> Lugar evento: <b>{data.evento.expand.lugar.descricipcion}</b></p>
      <p> Token de registro: {data.evento.id}</p>
      <p>Participara en <b>{data.evento.expand.actividades.descripcion} </b> como actividad cultural </p>
      <div class="card-actions justify-end">
        <a class="btn btn-secondary" href="/cultural">Regresar</a>
      </div>
    </div>
  </div>