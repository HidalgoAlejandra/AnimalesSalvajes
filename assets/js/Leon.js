// Importando la clase Padre
import Animal from "./Animal.js";

const audioPlayer = document.getElementById("player");

class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  Rugir() {
    console.log(this.getSonido());
    audioPlayer.src = `assets/sounds/${this.getSonido()}`;
    audioPlayer.play();
  }
}
export default Leon;
