document.querySelector('form').addEventListener('submit', function(e){

    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const atributos = document.getElementById('atributos').value;
    const pasiva = document.getElementById('pasiva').value;
    const descripcion = document.getElementById('descripcion').value;
    const precio = document.getElementById('precio').value;
    const imagen = document.getElementById('imagen').files[0];

    let imgSrc = '';
    if(imagen){
        imgSrc= URL.createObjectURL(imagen);
    }

    const table = document.getElementById('dataTable');
    const newRow = document.createElement('tr')

    newRow.innerHTML = `
        <td>${nombre}</td>
        <td>${atributos}</td>
        <td>${pasiva}</td>
        <td>${descripcion}</td>
        <td>${parseFloat(precio).toFixed(2)}</td>
        <td><img src="${imgSrc}" alt="Imagen"></td>
        <td class="action-buttons">
            <button class="edit-btn">Editar</button>
            <button class="delete-btn">Eliminar</button>
        </td>
    `;

    table.appendChild(newRow);

    this.reset();

    document.getElementById('dataTable').addEventListener('click', function(e) {
        if (e.target.classList.contains('delete-btn')) {
            e.target.closest('tr').remove();
        }
    });

    document.getElementById('dataTable').addEventListener('click',function(e){
        if(e.target.classList.contains('edit-btn')){
            const row = e.target.closest('tr');
        const cells = row.getElementsByTagName('td');
        
        alert('Función de edición no implementada completamente. Los valores actuales son:\n' +
              `Nombre: ${cells[0].textContent}\n` +
              `Atributos: ${cells[1].textContent}\n` +
              `Pasiva: ${cells[2].textContent}\n` +
              `Descripción: ${cells[3].textContent}\n` +
              `Precio: ${cells[4].textContent}`);
        }
    });
    
});