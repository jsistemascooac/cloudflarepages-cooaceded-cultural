<script>
    /** @type {import('./$types').PageData} */
    export let data;
//console.log("Data-Valida-cultural",data.proceso[0].descripcion)
</script>



<div class="relative flex flex-col justify-center h-screen overflow-hidden">
	<div class="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
		<h1 class="text-3xl font-semibold text-center text-green-700">COOACEDED</h1>
		<form class="space-y-4" method="post">
			<div>
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="label">
					<span class="text-base label-text">Numero Cedula</span>
				</label>
				<input type="text" name="cedula" placeholder="Numero de cedula" class="w-full input input-bordered input-primary" />
			</div>
			<div>
			
				<input type="text" hidden name="siguiente"  bind:value={data.proceso[0].siguiente} class="w-full input input-bordered input-primary" />
			</div>
			<div>
			
				<input type="text" hidden name="proceso"  bind:value={data.proceso[0].id} class="w-full input input-bordered input-primary" />
			</div>
			
			<div>
				<button class="btn btn-block btn-primary">Entrar</button>
			</div>
		
		</form>
	</div>
</div>