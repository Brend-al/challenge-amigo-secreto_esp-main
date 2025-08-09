// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema//
let amigos = [];

function agregarAmigo() {
  const Amigos = document.getElementById("amigo");
  const nuevoAmigo = Amigos.value.trim();

  if (nuevoAmigo === "") {
    alert("Por favor, ingrese un nombre de amigo valido");
    return;
  }

  const nombre = /^[a-zA-Z\s]+$/;
  if (!nombre.test(nuevoAmigo)) {
    alert("El nombre solo debe contener letras y espacios");
    Amigos.value = "";
    return;
  }

  amigos.push(nuevoAmigo);
  console.log(amigos);

  actualizarListaAmigos();

  Amigos.value = "";
}

function actualizarListaAmigos() {
  const lista = document.getElementById("ListaAmigos");

  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const nombreAmigo = amigos[i];

    const nuevoElementoLista = document.createElement("li");

    nuevoElementoLista.textContent = nombreAmigo;

    lista.appendChild(nuevoElementoLista);
  }
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("¡Necesitas al menos 2 amigos para sortear!");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  const amigoSorteado = amigos[indiceAleatorio];

  const elementoResultado = document.getElementById("resultado");

  if (elementoResultado) {
    elementoResultado.innerHTML = `¡El amigo sorteado es : <strong>${amigoSorteado}</strong>!`;
  } else {
    console.error("No se encontro el elemento con id 'resultado'");
  }
}

actualizarListaAmigos();
