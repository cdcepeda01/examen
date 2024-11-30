
var registro = document.getElementById('estudianteFormulario');
registro.addEventListener('submit', function(event){
    event.preventDefault();

    const codigo = document.getElementById('codigo').value;
    const nombre = document.getElementById('nombre').value;
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const nota4 = parseFloat(document.getElementById('nota4').value);

    const definitiva = (nota1 * 0.2) + (nota2 * 0.2) + (nota3 * 0.2) + (nota4 * 0.4);

    let estado, color, emoticono;

    if (definitiva >= 3.0) {
        estado = 'Aprobó';
        color = '#a5d6a7';    
    } else {
        estado = 'Reprobó';
        color = '#ef9a9a'; 
    }

    const tabla = document.getElementById('estudiantes').getElementsByTagName('tbody')[0];
    const nuevaFila = document.createElement('tr');

    const codigoCeld = document.createElement('td');
    codigoCeld.textContent = codigo;

    const nombreCeld = document.createElement('td');
    nombreCeld.textContent = nombre;

    const nota1Celd = document.createElement('td');
    nota1Celd.textContent = nota1.toFixed(1);

    const nota2Celd = document.createElement('td');
    nota2Celd.textContent = nota2.toFixed(1);

    const nota3Celd = document.createElement('td');
    nota3Celd.textContent = nota3.toFixed(1);

    const nota4Celd = document.createElement('td');
    nota4Celd.textContent = nota4.toFixed(1);

    const definitivaCeld = document.createElement('td');
    definitivaCeld.textContent = definitiva.toFixed(1);

    const estadoCeld = document.createElement('td');
    estadoCeld.textContent = `${estado}`; 
    estadoCeld.style.backgroundColor = color; 

    nuevaFila.appendChild(codigoCeld);
    nuevaFila.appendChild(nombreCeld);
    nuevaFila.appendChild(nota1Celd);
    nuevaFila.appendChild(nota2Celd);
    nuevaFila.appendChild(nota3Celd);
    nuevaFila.appendChild(nota4Celd);
    nuevaFila.appendChild(definitivaCeld);
    nuevaFila.appendChild(estadoCeld);

    tabla.appendChild(nuevaFila);

    registro.reset();
});