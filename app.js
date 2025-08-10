let amigos = [];

// Cambia el texto de un elemento
function asignarTextoElemento(selector, texto) {
    const elemento = document.querySelector(selector);
    if (elemento) elemento.innerHTML = texto;
}

// Agrega un amigo a la lista
function agregarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const nombreAmigo = amigoInput.value.trim();

    if (!nombreAmigo) {
        asignarTextoElemento("h2", "❌ Nombre inválido. Por favor, ingrese un nombre válido.");
        return;
    }

    if (amigos.includes(nombreAmigo)) {
        asignarTextoElemento("h2", "⚠️ Ese nombre ya está en la lista.");
        return;
    }

    amigos.push(nombreAmigo);
    amigoInput.value = '';
    mostrarAmigos();
    asignarTextoElemento("h2", `✅ Amigo agregado: ${nombreAmigo}`);
    asignarTextoElemento("h3", `Lista de amigos (${amigos.length}):`);
}

// Muestra la lista de amigos
function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Sortea un amigo y lo elimina de la lista
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if (amigos.length === 0) {
        resultado.innerHTML = '⚠️ No hay amigos para sortear. Por favor, agregue algunos.';
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `🎉 El amigo sorteado es: ${amigoSorteado}`;

    // Eliminar amigo sorteado de la lista
    amigos.splice(indiceAleatorio, 1);

    // Actualizar la lista visual
    mostrarAmigos();
}
