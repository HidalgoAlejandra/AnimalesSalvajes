// Importando la clase Padre
import Animal from "./Animal.js";

const audioPlayer = document.getElementById("player");

class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  Sisear() {
    console.log(this.getSonido());
    audioPlayer.src = `assets/sounds/${this.getSonido()}`;
    audioPlayer.play();
  }
}
export default Serpiente;
