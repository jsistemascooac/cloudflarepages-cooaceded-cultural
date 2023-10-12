<script>
    /** @type {import('./$types').LayoutData} */
    export let data;
   // console.log("L:",data)
</script>

<div class="flex flex-col w-full">
    <div class="grid h-20 card bg-base-200 rounded-box place-items-center">
        <ul class="steps">
            {#each data.pasos as p}
                   <li class="step  {p.proceso?'step-primary':''}">{p.descripcion}</li>
            {/each}
          </ul>
    </div> 
    <div class="divider"></div> 
    <div class="grid h-20 card bg-base-300 rounded-box place-items-center"><slot/></div>
  </div>