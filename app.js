// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const nombre = input.value.trim();

    // Validar que el nombre contenga solo letras y no esté vacío
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
        alert("Por favor, ingresa un nombre válido (solo letras).");
        input.value = "";
        return;
    }

    // Verificar si el nombre ya fue agregado
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        input.value = "";
        return;
    }

    // Agregar el nombre a la lista
    amigos.push(nombre);

    // Crear un nuevo elemento en la lista
    const li = document.createElement("li");
    li.textContent = nombre;
    listaAmigos.appendChild(li);

    // Limpiar el campo de entrada
    input.value = "";
}

// Función para sortear dos nombres aleatoriamente
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    // Verificar que haya al menos dos amigos para sortear
    if (amigos.length < 2) {
        alert("Debes agregar al menos dos nombres para sortear.");
        return;
    }

    // Mezclar la lista y seleccionar dos nombres distintos al azar
    let shuffled = [...amigos].sort(() => Math.random() - 0.5);
    let [amigo1, amigo2] = shuffled;

    // Mostrar los nombres sorteados
    resultado.innerHTML = `<li>${amigo1} 🎁 ${amigo2}</li>`;
}
