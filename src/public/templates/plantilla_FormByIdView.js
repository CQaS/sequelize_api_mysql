const plantilla_ListView = (data) => {

  let plantilla =
    `
doctype html
html(lang='en')
  head
    title Crear
    meta(charset='utf-8')
    meta(name='viewport', content='width=device-width, initial-scale=1, shrink-to-fit=no')
    // Bootstrap CSS v5.2.1
    link(href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css', rel='stylesheet', integrity='sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT', crossorigin='anonymous')
    link(rel='stylesheet', href='/css/formCRUD.css')
  body
    .container
      br
      h3 Formulario del recurso ${data}
      br
      if recurso != null
        form.form-horizontal(action="/recursos/${data}/actualizar", method="POST")
          each values, keys in recurso
            each value, key in values
              if (key == 'id')
                input(type='hidden', name='id', value=value)
              if (key != 'id')
                .form-group
                  label.control-label.col-sm-2(for=key)= key
                  .col-sm-10
                    input.form-control(type="text", name=key, value=value)
            - break
          br
          .form-group
            .col-sm-offset-2.col-sm-10
              button.btn.btn-primary(type="submit") Actualizar
              a.btn.btn-danger(href='/recursos/listarTodos') Cancelar
      else
        h1 No hay datos de ${data} para ver!
                          
    script(src='https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js', integrity='sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3', crossorigin='anonymous')
    script(src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js', integrity='sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz', crossorigin='anonymous')
`
  return plantilla
}

module.exports = plantilla_ListView