<script>
	import '../app.postcss';
	export let data;
//	console.log("Layout:",data)
</script>



<div class="min-h-full">
	<nav class="navbar bg-base-100 border-b">
		<div class="flex-1">
			<a href="/" class="btn btn-ghost normal-case text-xl">APP COOACEDED Gestion Social</a>			
			<h1>Proyecto: <b>{data.parametros.proyecto.descripcion}</b></h1>
		</div>
<!-- 		
		<div class="flex-none">
			{#if !data.user}
				<div class="dropdown dropdown-end">
					<a href="/login" class="btn btn-primary">Iniciar</a>
					<a href="/register" class="btn btn-secondary">Registrarse</a>
				</div>
			{:else}
				 <div class="dropdown dropdown-end mr-4">
					<a href="/diarios/horario" class="btn btn-primary btn-outline">Nuevo diario</a>
				</div> 
				<div class="navbar bg-base-100">
				 	<div class="navbar-start">
					  <div class="dropdown">
						
					  </div>
					
					</div> 
					<div class="navbar-center hidden lg:flex">
					  <ul class="menu menu-horizontal px-1">
						
					
						<li tabindex="0">
					
						  <a>
							Academico
							<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
						  </a>
						  <ul class="p-2">
							<li><a href="/academico/grupos">Grupos</a></li>
							<li><a href="/academico/estudiantes/new" >Estudiantes</a></li>
						  </ul>
						</li>
					
						<li><a>Diario</a>
							<ul class="p-2">
								<li><a href="/diarios/planClases">Plan de Clase</a></li>
								<li><a href="/academico/estudiantes/new" >Asistencias</a></li>
							  </ul>
						</li>
					  </ul>
					</div>
					<div class="navbar-end">
					  <a href="/horario" class="btn">Horario</a>
					</div>
				  </div>
				<div class="dropdown dropdown-end">
					
					<label tabindex="0" class="btn btn-ghost btn-circle avatar">
						<div class="w-10 rounded-full">
							<img src="https://placeimg.com/80/80/people" alt="User avatar" />
						</div>
					</label>
					
					<ul
						tabindex="0"
						class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li><a href="/my/settings">Settings</a></li>
						<li>
							<form action="/logout" method="POST">
								<button type="submit" class="w-full text-start">Logout</button>
							</form>
						</li>
					</ul>
				</div>
			{/if}
		</div> -->
	</nav>
	<div class="py-10">
		<div class="mx-auto sm:px-6 lg:px-8">
			<slot />
		</div>
	</div>
</div>