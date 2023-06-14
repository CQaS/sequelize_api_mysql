const plantilla_ListView = (data) => {

  let plantilla =
    `
doctype html
html(lang='en')
  head
    title ${data}
    // Required meta tags
    meta(charset='utf-8')
    meta(name='viewport', content='width=device-width, initial-scale=1, shrink-to-fit=no')
    // Bootstrap CSS v5.2.1
    link(href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css', rel='stylesheet', integrity='sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT', crossorigin='anonymous')
  body
    .container
      h3 LISTA DE RECURSOS: ${data}
      a.btn__button(href='/generarCRUD') CREAR RECURSO
      a.btn__button(href='/recursos/${data}/create') Crear ${data}
      a.btn__button(href='/recursos/usuario/salir') Salir
      br
      br
      if list != null && list.length > 0
            table.table.table-striped
              each val, key in list
                each n in val
                  tr
                    each x,y in n
                      if (y != 'id')
                        th= y
                    - break
                - break
                        
              each val, key in list
                each n in val
                  tr
                    each x,y in n
                      if (y == 'id')
                        td
                          a.btn__button(href='/recursos/${data}/' + x) Ver
                          a.btn__button(href='/recursos/${data}/' + x + '/edit') Editar
                          a.btn__button(href='/recursos/${data}/' + x + '/delete') Eliminar
                  - break
      else
        p Atencion: No tienes ${data} registrados!
    // Bootstrap JavaScript Libraries
    script(src='https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js', integrity='sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3', crossorigin='anonymous')
    script(src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js', integrity='sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz', crossorigin='anonymous')
`
  return plantilla
}

module.exports = plantilla_ListView