(function () {
    'use strict'
    const forms = document.querySelectorAll('.requires-validation')
    Array.from(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

let add = document.getElementById('agregar')
let campNum = 1
add.addEventListener('click', () => {
    let div = document.createElement('div')
    div.id = `campos${campNum}`
    let nuevodb = document.querySelector('#nuevodb')
    nuevodb.appendChild(div)
    document.getElementById(`campos${campNum}`).innerHTML +=
        `
  <div class="col-md-12">
  <input class="form-control" type="text" name="camponame_${campNum}" id="camponame_${campNum}" placeholder="Nombre de la Columna" required>
  <div class="valid-feedback">Columna Valida!</div>
  <div class="invalid-feedback">Columna en blanco!</div>
  </div>
  <div class="col-md-12">
  <select class="form-select form-select-lg" name="camponame_${campNum}" id="camponame_${campNum}" required>
  <option selected>Selecciona TIPO</option>
  <option value="INTEGER">Entero</option>
  <option value="STRING">Varchar</option>
  <option value="BOOLEAN">Bool</option>
  <option value="ENUM">Enum</option>
  </select>
  <div class="valid-feedback">Tu seleccion!</div>
  <div class="invalid-feedback">Selecciona unaa posicion!</div>
  </div>`;
    document.getElementById('camponame_' + campNum).focus()
    campNum++
})