'use strict';

const Header = (update) => {
  const header = $("<header></header>");
  const title = $("<span>Gas Finder</span>");
  const icon = $('<i class="fa fa-chevron-left" aria-hidden="true"></i>');
  const input = $('<input placeholder="Ingresa tu distrito a buscar" class="input-busqueda"></input>')
  const cuadroicon = $('<div class="iconos"></div>');
  const iconlupa = $('<i class="fa fa-search" aria-hidden="true"></i>');

  header.append(title);
  cuadroicon.append(iconlupa);
  header.append(cuadroicon)
  header.append(input);

  input.on('keyup', ()=>{
    filterByDistrict(state.stations, input.val());

  });
  return header;
}
