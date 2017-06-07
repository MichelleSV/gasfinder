'use strict';

const filterByDistrict = (stations,query) => { /*objeto donde esta la informacion, input */

  for (var i = 0; i < stations.length; i++) {
    const distrito = stations[i].district;
    if( distrito == query){
    const nombre = stations[i].name;

      console.log(query);
      console.log(nombre);
    }
  }
  const busqueda = $('<div class="seleccion"></div>');
  const lista = $('<p></p>');
  busqueda.append(lista);

  return busqueda;

}
