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
    link(rel='stylesheet', href='/css/formCRUD.css')
  body
    .container
      br
      h3 LISTA DE RECURSOS: ${data}
      br
      a.btn__button(href='/generarCRUD') CREAR RECURSO
      a.btn__button(href='/recursos/${data}/create') Crear ${data}
      a.btn__button(href='/recursos/listarTodos') LISTAR RECURSOS
      a.btn__button(href='/recursos/usuario/salir') Salir
      br
      br
      if list != null
            table.table.table-striped.table-dark
              each val, key in list
                tr
                  each v, key in val
                    if (key == 'id')
                      th
                    else
                      th= key
                  - break
                -break
                        
              each val, key in list
                tr
                  each v, key in val
                    if (key == 'id')
                      td
                        a.btn__button(href='/recursos/${data}/' + v) Ver
                        a.btn__button(href='/recursos/${data}/' + v + '/edit') Editar
                        a.btn__button(href='/recursos/${data}/' + v + '/delete') Eliminar
                    else
                      td= v
      else
        p Atencion: No tienes ${data} registrados!
    // Bootstrap JavaScript Libraries
    script(src='https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js', integrity='sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3', crossorigin='anonymous')
    script(src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js', integrity='sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz', crossorigin='anonymous')
`
  return plantilla
}

module.exports = plantilla_ListView