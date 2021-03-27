//variables

const cVales = document.querySelector("#vCanjeados");
const contenedor = document.querySelector("#contenedor");
const btnCanjear = document.querySelector(".canj-vale");
const btnUno = document.querySelector(".b1");
const btn2 = document.querySelector(".b2");
const btn3 = document.querySelector(".b3");
const btn4 = document.querySelector(".b4");
const btn5 = document.querySelector(".b5");
const btn6 = document.querySelector(".b6");
const btn7 = document.querySelector(".b7");
const btn8 = document.querySelector(".b8");
const btn9 = document.querySelector(".b9");
const btn10 = document.querySelector(".b10");
const btn11 = document.querySelector(".b11");
const btn12 = document.querySelector(".b12");
const btn13 = document.querySelector(".b13");
const btn14 = document.querySelector(".b14");
const btn15 = document.querySelector(".b15");
const btn16 = document.querySelector(".b16");
const btn17 = document.querySelector(".b17");
const btn18 = document.querySelector(".b18");
const containerBtn = document.querySelector(".container");
let valesCanjeados = null;

eventListeners();
function eventListeners() {
  contenedor.addEventListener("click", agregarVale);

  //Musestra los vales canjeados de lcs
  document.addEventListener("DOMContentLoaded", () => {
    valesCanjeados = JSON.parse(localStorage.getItem("valesCanjeados")) || [];

    valesHTML();
  });

  //agarro el boton
}

mostrar();
function mostrar() {
  document.addEventListener("DOMContentLoaded", () => {
    const cambio = localStorage.getItem("btnNuevo");
    const c2 = localStorage.getItem("btn2");
    const c3 = localStorage.getItem("btn3");
    const c4 = localStorage.getItem("btn4");
    const c5 = localStorage.getItem("btn5");
    const c6 = localStorage.getItem("btn6");
    const c7 = localStorage.getItem("btn7");
    const c8 = localStorage.getItem("btn8");
    const c9 = localStorage.getItem("btn9");
    const c10 = localStorage.getItem("btn10");
    const c11 = localStorage.getItem("btn11");
    const c12 = localStorage.getItem("btn12");
    const c13 = localStorage.getItem("btn13");
    const c14 = localStorage.getItem("btn14");
    const c15 = localStorage.getItem("btn15");
    const c16 = localStorage.getItem("btn16");
    const c17 = localStorage.getItem("btn17");
    const c18 = localStorage.getItem("btn18");

    if (cambio !== null) {
      document.querySelector(".b1").innerHTML = "canjeado";
      document.querySelector(".b1").disabled = true;
      document.querySelector(".b1").classList.replace("btn", "btn-after");
    }
    if (c2 !== null) {
      document.querySelector(".b2").innerHTML = "canjeado";
      document.querySelector(".b2").disabled = true;
      document.querySelector(".b2").classList.replace("btn", "btn-after");
    }
    if (c3 !== null) {
      document.querySelector(".b3").innerHTML = "canjeado";
      document.querySelector(".b3").disabled = true;
      document.querySelector(".b3").classList.replace("btn", "btn-after");
    }
    if (c4 !== null) {
      document.querySelector(".b4").innerHTML = "canjeado";
      document.querySelector(".b4").disabled = true;
      document.querySelector(".b4").classList.replace("btn", "btn-after");
    }
    if (c5 !== null) {
      document.querySelector(".b5").innerHTML = "canjeado";
      document.querySelector(".b5").disabled = true;
      document.querySelector(".b5").classList.replace("btn", "btn-after");
    }
    if (c6 !== null) {
      document.querySelector(".b6").innerHTML = "canjeado";
      document.querySelector(".b6").disabled = true;
      document.querySelector(".b6").classList.replace("btn", "btn-after");
    }
    if (c7 !== null) {
      document.querySelector(".b7").innerHTML = "canjeado";
      document.querySelector(".b7").disabled = true;
      document.querySelector(".b7").classList.replace("btn", "btn-after");
    }
    if (c8 !== null) {
      document.querySelector(".b8").innerHTML = "canjeado";
      document.querySelector(".b8").disabled = true;
      document.querySelector(".b8").classList.replace("btn", "btn-after");
    }
    if (c9 !== null) {
      document.querySelector(".b9").innerHTML = "canjeado";
      document.querySelector(".b9").disabled = true;
      document.querySelector(".b9").classList.replace("btn", "btn-after");
    }
    if (c10 !== null) {
      document.querySelector(".b10").innerHTML = "canjeado";
      document.querySelector(".b10").disabled = true;
      document.querySelector(".b10").classList.replace("btn", "btn-after");
    }
    if (c11 !== null) {
      document.querySelector(".b11").innerHTML = "canjeado";
      document.querySelector(".b11").disabled = true;
      document.querySelector(".b11").classList.replace("btn", "btn-after");
    }
    if (c12 !== null) {
      document.querySelector(".b12").innerHTML = "canjeado";
      document.querySelector(".b12").disabled = true;
      document.querySelector(".b12").classList.replace("btn", "btn-after");
    }
    if (c13 !== null) {
      document.querySelector(".b13").innerHTML = "canjeado";
      document.querySelector(".b13").disabled = true;
      document.querySelector(".b13").classList.replace("btn", "btn-after");
    }
    if (c14 !== null) {
      document.querySelector(".b14").innerHTML = "canjeado";
      document.querySelector(".b14").disabled = true;
      document.querySelector(".b14").classList.replace("btn", "btn-after");
    }
    if (c15 !== null) {
      document.querySelector(".b15").innerHTML = "canjeado";
      document.querySelector(".b15").disabled = true;
      document.querySelector(".b15").classList.replace("btn", "btn-after");
    }
    if (c16 !== null) {
      document.querySelector(".b16").innerHTML = "canjeado";
      document.querySelector(".b16").disabled = true;
      document.querySelector(".b16").classList.replace("btn", "btn-after");
    }
    if (c17 !== null) {
      document.querySelector(".b17").innerHTML = "canjeado";
      document.querySelector(".b17").disabled = true;
      document.querySelector(".b17").classList.replace("btn", "btn-after");
    }
    if (c18 !== null) {
      document.querySelector(".b18").innerHTML = "canjeado";
      document.querySelector(".b18").disabled = true;
      document.querySelector(".b18").classList.replace("btn", "btn-after");
    }
  });
}

reemplazo();
function reemplazo() {
  btnUno.addEventListener("click", () => {
    localStorage.setItem("btnNuevo", "b1");
  });
  btn2.addEventListener("click", () => {
    localStorage.setItem("btn2", "b2");
  });
  btn3.addEventListener("click", () => {
    localStorage.setItem("btn3", "b3");
  });
  btn4.addEventListener("click", () => {
    localStorage.setItem("btn4", "b4");
  });
  btn5.addEventListener("click", () => {
    localStorage.setItem("btn5", "b5");
  });
  btn6.addEventListener("click", () => {
    localStorage.setItem("btn6", "b6");
  });
  btn7.addEventListener("click", () => {
    localStorage.setItem("btn7", "b7");
  });
  btn8.addEventListener("click", () => {
    localStorage.setItem("btn8", "b8");
  });
  btn9.addEventListener("click", () => {
    localStorage.setItem("btn9", "b9");
  });
  btn10.addEventListener("click", () => {
    localStorage.setItem("btn10", "b10");
  });
  btn11.addEventListener("click", () => {
    localStorage.setItem("btn11", "b11");
  });
  btn12.addEventListener("click", () => {
    localStorage.setItem("btn12", "b12");
  });
  btn13.addEventListener("click", () => {
    localStorage.setItem("btn13", "b13");
  });
  btn14.addEventListener("click", () => {
    localStorage.setItem("btn14", "b14");
  });
  btn15.addEventListener("click", () => {
    localStorage.setItem("btn15", "b15");
  });
  btn16.addEventListener("click", () => {
    localStorage.setItem("btn16", "b16");
  });
  btn17.addEventListener("click", () => {
    localStorage.setItem("btn17", "b17");
  });
  btn18.addEventListener("click", () => {
    localStorage.setItem("btn18", "b18");
  });
}

function agregarVale(e) {
  e.preventDefault();
  if (e.target.classList.contains("canj-vale")) {
    const valeSeleccionado = e.target.parentElement.parentElement;
    console.log(btnUno.value);
    leerDatosVale(valeSeleccionado);
  }
}

//lee el contenido del html y extrae la info del vale
function leerDatosVale(vale) {
  //crear un objeto con el contenido de vale

  const infoVale = {
    imagen: vale.querySelector("img").src,
    cantidad: 5,
    id: vale.querySelector("button").getAttribute("data-id"),
  };
  const existe = valesCanjeados.some((vale) => vale.id === infoVale.id);
  if (existe) {
    const valesitos = valesCanjeados.map((vale) => {
      if (vale.id === infoVale.id) {
        vale.cantidad--;
        return vale;
      } else {
        return vale;
      }
    });
    valesCanjeados = [...valesitos];
  } else {
    //Agrega elementos al arreglo de carrito
    valesCanjeados = [...valesCanjeados, infoVale];
  }

  valesHTML();
}

//Muestra los vales canjeados en el html
function valesHTML() {
  //limpiar el html
  limpiarHTML();

  valesCanjeados.forEach((vale) => {
    const div = document.createElement("p");
    div.innerHTML = `
        <div class="div-img">
            <div>
                <img src="${vale.imagen}" width="200px"; style="padding:5px; border-radius:20px;" >
                
            </div>
        </div>
        `;

    //Agrega el html de vcanjeados en el div
    cVales.appendChild(div);
  });

  //agregando vales canjeados al storage
  sincronizarStorage();
}
function sincronizarStorage() {
  localStorage.setItem("valesCanjeados", JSON.stringify(valesCanjeados));
}

//elimina los vales del div
function limpiarHTML() {
  //cVales.innerHTML = '';

  while (cVales.firstChild) {
    cVales.removeChild(cVales.firstChild);
  }
}
