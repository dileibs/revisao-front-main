function toggleMenu() {
  const listaDoMenu = document.querySelector("ul");
  const activeStatus = listaDoMenu.getAttribute('active');
  listaDoMenu.setAttribute("active", !activeStatus);
}

// listaDoMenu recebe o componente 'ul'
// activeStatus recebe a lista doDoMenu com o atributo active
// active é a class que vem do css
// activeStatus é a situação atual do botão (true ou false), colocamos !activeStatus para definir o inverso do valor setado, ou seja, caso seja true, será false e caso seja false, será true.
