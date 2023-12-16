export const datosApp = {
    empresas: [
      {
        id: 1,
        nombre: 'Empresa A',
        supervisores: [
          {
            id: 11,
            nombre: 'Supervisor A.1',
            vendedores: [
              {
                id: 111,
                nombre: 'Vendedor A.1.1',
                clientes: [
                  { id: 1111, nombre: 'Cliente A.1.1.1', telefono: '123-456-7890' },
                  { id: 1112, nombre: 'Cliente A.1.1.2', telefono: '987-654-3210' },
                  // ...otros clientes
                ]
              },
              {
                id: 112,
                nombre: 'Vendedor A.1.2',
                clientes: [
                  { id: 1121, nombre: 'Cliente A.1.2.1', telefono: '777-888-9999' },
                  // ...otros clientes
                ]
              },
              // ...otros vendedores
            ]
          },
          {
            id: 12,
            nombre: 'Supervisor A.2',
            vendedores: [
              {
                id: 121,
                nombre: 'Vendedor A.2.1',
                clientes: [
                  { id: 1211, nombre: 'Cliente A.2.1.1', telefono: '333-444-5555' },
                  // ...otros clientes
                ]
              },
              {
                id: 122,
                nombre: 'Vendedor A.2.2',
                clientes: [
                  { id: 1221, nombre: 'Cliente A.2.2.1', telefono: '666-777-8888' },
                  // ...otros clientes
                ]
              },
              // ...otros vendedores
            ]
          },
          {
            id: 13,
            nombre: 'Supervisor A.3',
            vendedores: [
              // ...sin vendedores
            ]
          },
          // ...otros supervisores
        ]
      },
      {
        id: 2,
        nombre: 'Empresa B',
        supervisores: [
          {
            id: 21,
            nombre: 'Supervisor B.1',
            vendedores: [
              {
                id: 211,
                nombre: 'Vendedor B.1.1',
                clientes: [
                  { id: 2111, nombre: 'Cliente B.1.1.1', telefono: '111-222-3333' },
                  { id: 2112, nombre: 'Cliente B.1.1.2', telefono: '444-555-6666' },
                  // ...otros clientes
                ]
              },
              {
                id: 212,
                nombre: 'Vendedor B.1.2',
                clientes: [
                  { id: 2121, nombre: 'Cliente B.1.2.1', telefono: '555-123-4567' },
                  // ...otros clientes
                ]
              },
              // ...otros vendedores
            ]
          },
          {
            id: 22,
            nombre: 'Supervisor B.2',
            vendedores: [
              {
                id: 221,
                nombre: 'Vendedor B.2.1',
                clientes: [
                  { id: 2211, nombre: 'Cliente B.2.1.1', telefono: '888-999-0000' },
                  // ...otros clientes
                ]
              },
              {
                id: 222,
                nombre: 'Vendedor B.2.2',
                clientes: [
                  { id: 2221, nombre: 'Cliente B.2.2.1', telefono: '000-111-2222' },
                  // ...otros clientes
                ]
              },
              // ...otros vendedores
            ]
          },
          // ...otros supervisores
        ]
      },
      // ...otras empresas
    ]
  };
  
  // Acceder a los datos de prueba
  // console.log(datosApp.empresas[0].nombre); // Muestra el nombre de la primera empresa
  // console.log(datosApp.empresas[0].supervisores[0].nombre); // Muestra el nombre del primer supervisor de la primera empresa
  // console.log(datosApp.empresas[0].supervisores[0].vendedores[0].nombre); // Muestra el nombre del primer vendedor del primer supervisor de la primera empresa
  // console.log(datosApp.empresas[0].supervisores[0].vendedores[0].clientes[0].nombre); // Muestra el nombre del primer cliente del primer vendedor del primer supervisor de la primera empresa
  