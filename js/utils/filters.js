'use strict';

const filterByDistrict = (stations,query) => { /*objeto donde esta la informacion, input */
let nombre;
  for (var i = 0; i < stations.length; i++) {
    const distrito = stations[i].district;
    if( distrito == query){
     nombre = stations[i].name;

      console.log(distrito);
      console.log(nombre);
    }
  }
  const busqueda = $('<div class="seleccion"></div>');
  const lista = $('<p>'+nombre+'</p>');
  busqueda.append(lista);

  const root1 = $('.root');
  root1.append(busqueda);
  console.log(root1);
  return root1;
}
