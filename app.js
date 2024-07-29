// Adquirimos los elementos del DOM donde vamos a ingresar los datos de usuario
const form = document.getElementById('formRegister');
const nameinput = document.getElementById('nameinput');
const dateinput = document.getElementById('fechainput');
const horainput = document.getElementById('horainput');
const submitButton = document.getElementById('submitbutton');
const submitButtonText = submitButton.querySelector('span');
const deleteTodayButton = document.getElementById('deleteTodayButton');
const noRecordsMessage = document.getElementById('noRecordsMessage');

// Donde vamos a pintar los datos de Usuario
const tablebody = document.getElementById('tablebody');

// Para almacenar estos datos en el localStore, al actualizar, no se borre la info
let data = JSON.parse(localStorage.getItem('formData')) || [];

// Índice del elemento en edición, -1 significa que no hay edición en curso
let editingIndex = -1;

// Creamos función para que al evento "submit" click al boton (agregar/editar), almacene la información en memoria
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = nameinput.value;
    const date = dateinput.value;
    const hour = horainput.value;

    if (name && date && hour) {
        if (editingIndex === -1) {
            // Agregar nuevo registro
            const newData = { name, date, hour };
            data.push(newData);
            alert('Usuario registrado con éxito'); // Alerta para nuevo registro
        } else {
            // Actualizar registro existente
            data[editingIndex].name = name;
            // No se actualizan date y hour
            editingIndex = -1;
            submitButtonText.textContent = 'Agregar'; // Cambiar texto del botón a "Agregar"
            alert('Usuario editado con éxito'); // Alerta para edición de usuario
        }
        saveDataToLocalStorage();
        renderTable();
        form.reset();
        setDateAndTime(); // Actualiza la fecha y hora después de resetear el formulario
    } else {
        alert('Favor llenar todos los campos');
    }
});

// Función para guardar los datos del formulario
function saveDataToLocalStorage() {
    localStorage.setItem('formData', JSON.stringify(data));
}

// Función para renderizar o actualizar el formulario, limpia el contenido de la tabla para nuevo registro
function renderTable() {
    tablebody.innerHTML = '';

    const today = new Date().toISOString().slice(0, 10);
    let hasRecordsToday = false;

    data.forEach(function(item, index) {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const dateCell = document.createElement('td');
        const horaCell = document.createElement('td');
        const actionCell = document.createElement('td');

        const editButton = document.createElement('button');

        nameCell.textContent = item.name;
        dateCell.textContent = item.date;
        horaCell.textContent = item.hour;

        editButton.textContent = 'Editar';
        editButton.classList.add('button', 'button--secundary');

        editButton.addEventListener('click', function() {
            editData(index);
        });

        actionCell.appendChild(editButton);

        row.appendChild(nameCell);
        row.appendChild(dateCell);
        row.appendChild(horaCell);
        row.appendChild(actionCell);

        tablebody.appendChild(row);

        if (item.date === today) {
            hasRecordsToday = true;
        }
    });

    if (hasRecordsToday) {
        deleteTodayButton.disabled = false;
        noRecordsMessage.style.display = 'none';
    } else {
        deleteTodayButton.disabled = true;
        noRecordsMessage.style.display = 'block';
    }
}

// Función para editar datos
function editData(index) {
    const item = data[index];
    nameinput.value = item.name;
    editingIndex = index;
    submitButtonText.textContent = 'Editar'; // Cambiar texto del botón a "Editar"
}

// Función para establecer la fecha y la hora actual
function setDateAndTime() {
    const now = new Date();
    const formattedDate = now.toISOString().slice(0, 10);
    const formattedTime = now.toTimeString().slice(0, 5);

    dateinput.value = formattedDate;
    horainput.value = formattedTime;
}

// Función para eliminar registros del día actual
deleteTodayButton.addEventListener('click', function() {
    const today = new Date().toISOString().slice(0, 10);
    const recordsToDelete = data.filter(item => item.date === today);

    if (recordsToDelete.length === 0) {
        alert('No hay registros del día');
    } else {
        data = data.filter(item => item.date !== today);
        saveDataToLocalStorage();
        renderTable();
        alert('Registros del día eliminados con éxito');
    }
});

// Establece la fecha y la hora al cargar la página
document.addEventListener('DOMContentLoaded', setDateAndTime);

renderTable();
