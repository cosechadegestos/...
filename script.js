let bb = 0;
let cond = true;

// Sidebar responsiva: cambia ancho según dispositivo
function openNav() {
  const sidebar = document.getElementById("mySidebar");
  if (window.innerWidth <= 600) {
    sidebar.style.width = "70vw";
  } else {
    sidebar.style.width = "50%";
  }
  cond = false;
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  cond = true;
}

function oopenNav() {
  if (cond) openNav();
  else closeNav();
}

function closeback() {
  document.getElementById("back").style.display = "none";
}

function openback() {
  document.getElementById("back").style.display = "initial";
}

function back(valor) {
  switch (valor) {
    case 0:
      lga();
      break;
    case 1:
      experiencias();
      break;
    case 2:
      debate();
      break;
  }
}

function inicio() {
  document.getElementById("page").innerHTML = "<h2>Inicio</h2>";
  closeback();
}

function texto() {
  document.getElementById("page").innerHTML = "<h2>Texto Académico</h2>";
  closeback();
}

function lga() {
  document.getElementById("page").innerHTML =
    '<h2>Laboratorio de Gestos Agroecológicos</h2> <a href="javascript:void(0); infusion();">Infusión Multisónica</a><br><a href="javascript:void(0); otro()">Otro</a>';
  closeback();
}

function experiencias() {
  document.getElementById("page").innerHTML =
    '<h2>Experiencias</h2> <a href="javascript:void(0); compartencia()">Compartencia</a><br><a href="javascript:void(0); cheran()">Cherán</a><br><a href="javascript:void(0); mb()">Marie Bardet</a><br><a href="javascript:void(0); hau()">Festival Huerto Agroforestal Universitario</a><br><a href="javascript:void(0); residencia()">Residencia</a>';
  closeback();
}

function debate() {
  document.getElementById("page").innerHTML =
    '<h2>Debate Pedagógico</h2> <a href="javascript:void(0); coloquio()">Coloquio III</a><br><a href="javascript:void(0); dispositivos()">Dispositivos Pedagógicos</a>';
  closeback();
}

function compartencia() {
  document.getElementById("page").innerHTML = "<h2>Compartencia</h2>";
  openback();
  bb = 1;
}

function cheran() {
  document.getElementById("page").innerHTML = "<h2>Cherán</h2>";
  openback();
  bb = 1;
}

function mb() {
  document.getElementById("page").innerHTML = "<h2>Marie Bardet</h2>";
  openback();
  bb = 1;
}

function hau() {
  document.getElementById("page").innerHTML =
    "<h2>Festival Huerto Agroforestal Universitario</h2>";
  openback();
  bb = 1;
}

function residencia() {
  document.getElementById("page").innerHTML = "<h2>Residencia</h2>";
  openback();
  bb = 1;
}

function infusion() {
  document.getElementById("page").innerHTML = "<h2>Infusión Multisónica</h2>";
  openback();
  bb = 0;
}

function otro() {
  document.getElementById("page").innerHTML = "<h2>Otro</h2>";
  openback();
  bb = 0;
}

function coloquio() {
  document.getElementById("page").innerHTML = "<h2>Coloquio III</h2>";
  openback();
  bb = 2;
}

function dispositivos() {
  document.getElementById("page").innerHTML =
    "<h2>Dispositivos Pedagógicos</h2>";
  openback();
  bb = 2;
}
