<script>
	let selectedValue = ''; // Variable para almacenar el valor seleccionado
  
	// Opciones para el elemento select
	let options = ['Opción 1', 'Opción 2', 'Opción 3'];
  
	// Manejar el cambio en la selección
	function handleChange(event) {
	  selectedValue = event.target.value;
	}
  </script>
  
  <style>
	/* Puedes agregar estilos CSS según tus necesidades */
  </style>
  
  <!-- Componente select -->
  <select bind:value={selectedValue} on:change={handleChange}>
	{#each options as option (option)}
	  <option value={option}>{option}</option>
	{/each}
  </select>
  
  <!-- Muestra el valor seleccionado -->
  <p>Seleccionado: {selectedValue}</p>
  