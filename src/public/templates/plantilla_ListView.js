const plantilla_ListView = (data, arr) => {

  let plantilla =
    `
doctype html
html(lang='en')
  head
    title Title
    // Required meta tags
    meta(charset='utf-8')
    meta(name='viewport', content='width=device-width, initial-scale=1, shrink-to-fit=no')
    // Bootstrap CSS v5.2.1
    link(href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css', rel='stylesheet', integrity='sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT', crossorigin='anonymous')
  body
    .container
      h3 LISTA DE RECURSOS: ${data}
      br
      .table-responsive
        table#myTable.table.table-primary
          thead
          tbody
    // Bootstrap JavaScript Libraries
    script(src='https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js', integrity='sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3', crossorigin='anonymous')
    script(src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js', integrity='sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz', crossorigin='anonymous')
    script.
      const table = () => {
      let columnas = [${arr}]
      let thead = document.getElementById('myTable').getElementsByTagName('thead')[0]
      let encabezadoRow = document.createElement('tr')
      for (let i = 0; i < columnas.length; i++) {
      encabezadoCell = document.createElement('th')
      encabezadoCell.textContent = columnas[i]
      encabezadoRow.appendChild(encabezadoCell)
      }
      thead.appendChild(encabezadoRow)
      }
      table()
`
  return plantilla
}

module.exports = plantilla_ListView