<script>
  import { onMount } from "svelte";
  import { datosApp } from "../resources/datosMuestra";
  import { vendedores, clientes, supervisores } from "../resources/datosPrueba";
  let selectedSupervisor;
  let supervisorName;
  let sellersPlaceholder = "elije un vendedor";
  let pregunta1;
  let pregunta1Opcional;
  let pregunta2;
  let pregunta3;
  let pregunta4;
  let pregunta5;
  let pregunta6;
  let pregunta6Opcional;
  let client;
  let clientesFiltrados;
  let comentario = '';
  $: console.log(comentario)

  // onMount(()=>{
  // 	let id_supervisor0 = document.getElementById('supervisor0')
  // 	// @ts-ignore
  // 	id_supervisor0.selected = true
  // 	selectedSupervisor = supervisors[0].nombre

  // })

  let selectedSeller = "";
  let valitatedSeller;
  let seller;

  function handleInputChangeSeller(event) {
    // Capturar el valor del input
    selectedSeller = event.target.value;
    if (selectedSeller) {
      seller = vendedores.find((vendedor) => {
        return vendedor.nombre === selectedSeller;
      });
      if (seller) {
        selectedSupervisor = supervisores.find((supervisor) => {
          return supervisor.id === seller.supervisor_asignado;
        });
        if (selectedSupervisor) {
          supervisorName = selectedSupervisor.nombre;
          clientesFiltrados = clientes.filter(
            (cliente) => cliente.vendedor_asignado_id === seller.id
          );
        }
      }
    }
  }

  $: {
    if (selectedSeller == "") {
      valitatedSeller = "chose a supervisor";
    } else if (selectedSeller.length > 0) {
      const supervisorEncontrado = datosApp.empresas[0].supervisores.some(
        (supervisor) => supervisor.nombre === selectedSeller
      );
      if (supervisorEncontrado) {
        valitatedSeller = "supervisor encontrado";
      } else {
        valitatedSeller = "supervisor no valido";
      }
    }
  }
  function handleChangeSupervisor(event) {
    selectedSupervisor = event.target.value;
  }

  function handleQuestion1(event) {
    pregunta1 = event.target.value;
  }

  function handleQuestion2(event) {
    pregunta2 = event.target.value;
  }

  function handleQuestion3(event) {
    pregunta3 = event.target.value;
  }

  function handleQuestion4(event) {
    pregunta4 = event.target.value;
  }

  function handleQuestion5(event) {
    pregunta5 = event.target.value;
  }

  function handleQuestion6(event) {
    pregunta6 = event.target.value;
  }

  function handleInputChangeClient(event) {
    client = event.target.value;
  }

  function handleQ1Optional(event) {
    pregunta1Opcional = event.target.value;
  }

  function handleQ6Optional(event) {
    pregunta6Opcional = event.target.value;
  }

  function handleInputChangeComment(event) {
    comentario = event.target.value;
  }
  
</script>

<h3>FORMULARIO POST-VENTA SUPERVISORES</h3>
<h4>{datosApp.empresas[0].nombre}</h4>

<div id="dropdown-menu">
  <label for="seller">Vendedor:</label>
  <input
    type="text"
    id="seller"
    list="opciones"
    on:input={handleInputChangeSeller}
    placeholder={sellersPlaceholder}
  />

  <!-- Lista de sugerencias -->
  <datalist id="opciones">
    {#each vendedores as vendedor}
      <option value={vendedor.nombre}></option>
    {/each}
  </datalist>
</div>
<div id="dropdown-menu-clients">
  <label for="clients">Clientes:</label>
  <input
    type="text"
    id="clients"
    list="list-clients"
    on:input={handleInputChangeClient}
    placeholder="elije un cliente"
  />
  <datalist id="list-clients">
    {#if clientesFiltrados}
      {#each clientesFiltrados as clientes}
        <option value={clientes.nombre}></option>
      {/each}
    {/if}
  </datalist>
</div>
{#if supervisorName}
  <p>Supervisor: {supervisorName}</p>
{:else}
  <p>Supervisor: Elije un vendedor</p>
{/if}

<p>el cliente conoce al vendedor?</p>
<input
  type="radio"
  id="q1-1"
  value="si"
  name="question1"
  on:change={handleQuestion1}
/>
<label for="q1-1">Si</label>
<input
  type="radio"
  id="q1-2"
  value="no"
  name="question1"
  on:change={handleQuestion1}
/>
{#if pregunta1 === "si"}
  <p>Si lo conoces:</p>
  <input
    type="radio"
    id="q1-3"
    value="conoce al vendedor por su nombre"
    name="question1-optional"
    on:change={handleQ1Optional}
  />
  <label for="q1-3">Conoce al vendedor por su nombre</label>
  <input
    type="radio"
    id="q1-4"
    value="conoce al vendedor por su sobrenombre"
    name="question1-optional"
    on:change={handleQ1Optional}
  />
  <label for="q1-4">Conoce al vendedor por su sobrenombre</label>
{/if}
<label for="q1-2">No</label>

<p>
  Cuando el vendedor visita su negocio, el mismo cuenta con alguna indumentaria
  que lo identifique como personal de Multicompras?, ej: camisa, gorro,
  credencial…
</p>
<input
  type="radio"
  id="q2-1"
  value="si"
  name="question2"
  on:change={handleQuestion2}
/>
<label for="q2-1">Si</label>
<input
  type="radio"
  id="q2-2"
  value="no"
  name="question2"
  on:change={handleQuestion2}
/>
<label for="q2-2">No</label>

<p>el vendedor le mostro el catalogo de productos?</p>
<input
  type="radio"
  id="q3-1"
  value="si"
  name="question3"
  on:change={handleQuestion3}
/>
<label for="q3-1">Si</label>
<input
  type="radio"
  id="q3-2"
  value="no"
  name="question3"
  on:change={handleQuestion3}
/>
<label for="q3-2">No</label>
<p>el vendedor le mostro y ofrecio las promociones del mes?</p>
<input
  type="radio"
  id="q4-1"
  value="si"
  name="question4"
  on:change={handleQuestion4}
/>
<label for="q4-1">Si</label>
<input
  type="radio"
  id="q4-2"
  value="no"
  name="question4"
  on:change={handleQuestion4}
/>
<label for="q4-2">No</label>

<p>como calificaria el trato que le brinda su vendedor asignado?</p>
<input
  type="radio"
  id="q5-1"
  value="excelente"
  name="question5"
  on:change={handleQuestion5}
/>
<label for="q5-1">Excelente</label>
<input
  type="radio"
  id="q5-2"
  value="bueno"
  name="question5"
  on:change={handleQuestion5}
/>
<label for="q5-2">Bueno</label>
<input
  type="radio"
  id="q5-3"
  value="regular"
  name="question5"
  on:change={handleQuestion5}
/>
<label for="q5-3">Regular</label>
<input
  type="radio"
  id="q5-4"
  value="Malo"
  name="question5"
  on:change={handleQuestion5}
/>
<label for="q5-4">Malo</label>
<input
  type="radio"
  id="q5-6"
  value="no lo se"
  name="question5"
  on:change={handleQuestion5}
/>
<label for="q5-6">No lo se</label>

<p>conoce al supervisor?</p>
<input
  type="radio"
  id="q6-1"
  value="si"
  name="question4"
  on:change={handleQuestion6}
/>
<label for="q6-1">Si</label>
<input
  type="radio"
  id="q6-2"
  value="no"
  name="question4"
  on:change={handleQuestion6}
/>
<label for="q6-2">No</label>
{#if pregunta6 === "si"}
  <input
    type="radio"
    id="q6-3"
    value="hace una semana"
    name="question4"
    on:change={handleQ6Optional}
  />
  <label for="q6-3">Hace una semana</label>
  <input
    type="radio"
    id="q6-4"
    value="hace mas de una semana"
    name="question4"
    on:change={handleQ6Optional}
  />
  <label for="q6-4">Hace mas de una semana</label>
{/if}

<label for="comment">Comentarios u observaciones:</label>
<input type="text" id="comment" on:input={handleInputChangeComment} placeholder="ingresa el comentario u observacion">
