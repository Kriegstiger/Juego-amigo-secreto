// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Declarar un array para almacenar la cantidad de amigos deseados
let amigos = [];
let ultimoSorteado = null;

// Función para agregar un nuevo amigo al array y mostrarlo en la lista HTML
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const listaAmigos = document.getElementById('listaAmigos');
    const nombreAmigo = inputAmigo.value.trim(); // Limpiar espacios en blanco

    if (nombreAmigo) {
        // Verificar si el nombre ya existe en el array
        if (amigos.includes(nombreAmigo)) {
            alert('El nombre ya está en la lista, ingrese otro por favor.');
        } else {
            amigos.push(nombreAmigo); // Agregar al array si no está repetido

            // Limpiar la lista en el DOM antes de actualizarla
            listaAmigos.innerHTML = '';

            // Recorrer el array y crear elementos <li> para cada amigo
            for (let amigo of amigos) {
                const listItem = document.createElement('li');
                listItem.textContent = amigo;
                listaAmigos.appendChild(listItem);
            }

            inputAmigo.value = ''; // Limpiar el campo de entrada
        }
    } else {
        alert('Por favor, escribe un nombre válido.');
    }
}

// Función para sortear un amigo, evitando repetir el último sorteado
function sortearAmigo() {
    if (amigos.length > 1) {
        let amigoSorteado;
        do {
            amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        } while (amigoSorteado === ultimoSorteado);

        ultimoSorteado = amigoSorteado;
        const resultado = document.getElementById('resultado');
        resultado.textContent = `El amigo sorteado es: ${amigoSorteado}`;
    } else if (amigos.length === 1) {
        const resultado = document.getElementById('resultado');
        resultado.textContent = `Solo hay un amigo: ${amigos[0]}`;
    } else {
        alert('No hay amigos en la lista para sortear.');
    }
}

// Función para borrar la lista y reiniciar el estado
function borrarLista() {
    amigos = []; // Vaciar el array
    ultimoSorteado = null; // Reiniciar el último sorteado
    const listaAmigos = document.getElementById('listaAmigos');
    const resultado = document.getElementById('resultado');

    // Vaciar el contenido visual de la lista y el resultado
    listaAmigos.innerHTML = '';
    resultado.textContent = '';
    alert('La lista ha sido borrada.');
}