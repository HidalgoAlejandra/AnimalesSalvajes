/* Tips: Para leer el json con fetch puede usar la ruta relativa 
ejemplo: fetch("/assets/js/archivo.json"),  asuminedo que el archivo.json esta dentro de la carpeta js */

// Importando la clase Padre
import Animal from "./Animal.js";
// Importando las clases hijas o heredadas
import Leon from "./Leon.js";
import Lobo from "./Lobo.js";
import Oso from "./Oso.js";
import Serpiente from "./Serpiente.js";
import Aguila from "./Aguila.js";

let recolecta = "";
const patronDeModulo = (() => {
  return {
    getDatos: async () => {
      try {
        const url = "./animales.json";
        const response = await fetch(url);
        console.log("Response: ", response);
        if (response.status !== 404) {
          const datos = await response.json();
          return datos;
        } else {
          throw new Error("404!!!");
        }
      } catch (err) {
        alert(err);
      }
    },

    mostrarDatos: (datos, sel_animal, sel_edad, sel_comentarios) => {
      //console.log(datos);
      let resultado = document.querySelector("#Animales");
      let arreglo = datos.animales;
      //console.log(sel_animal);
      let filtro = arreglo.filter((x) => x.name == sel_animal); //flitro por animal
      //console.log(filtro);

      for (let x of filtro) {
        recolecta = `
            <div class="card">
              <img src="assets/imgs/${x.imagen}" alt="" class="card-img-top">
              <div class="card-body">
                <p class="card-title">${x.name}</p>
                <audio controls>
                <source id="player" src="assets/sounds/${x.sonido}" type="audio/mpeg">
                Your browser does not support the audio element.
                </audio>
              </div>
            </div>
        `;
        if ((sel_animal = "Leon")) {
          const leon = new Leon(
            x.name,
            sel_edad,
            x.imagen,
            sel_comentarios,
            x.sonido
          );
          console.log(leon);
        } else if ((sel_animal = "Lobo")) {
          const lobo = new Lobo(
            x.name,
            sel_edad,
            x.imagen,
            sel_comentarios,
            x.sonido
          );
          console.log(lobo);
        } else if ((sel_animal = "Oso")) {
          const oso = new Oso(
            x.name,
            sel_edad,
            x.imagen,
            sel_comentarios,
            x.sonido
          );
          console.log(oso);
        } else if ((sel_animal = "Serpiente")) {
          const serpiente = new Serpiente(
            x.name,
            sel_edad,
            x.imagen,
            sel_comentarios,
            x.sonido
          );
          console.log(serpiente);
        } else if ((sel_animal = "Aguila")) {
          const aguila = new Aguila(
            x.name,
            sel_edad,
            x.imagen,
            sel_comentarios,
            x.sonido
          );
          console.log(aguila);
        }
      }
      resultado.innerHTML = recolecta;
    },
  }; //return
})();
//evento clic en boton
btnRegistrar.addEventListener("click", () => {
  //seleccionamos los valores del input
  let sel_animal = document.querySelector("#animal").value;
  let sel_edad = document.querySelector("#edad").value;
  let sel_comentarios = document.querySelector("#comentarios").value;

  patronDeModulo.getDatos().then((agregar) => {
    if (agregar) {
      return patronDeModulo.mostrarDatos(
        agregar,
        sel_animal,
        sel_edad,
        sel_comentarios
      );
    }
  });
});
