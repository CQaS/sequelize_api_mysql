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
        form.form-horizontal(action="/recursos/${data}", method="POST")
          each values, keys in recurso
            each v, key in values
              if (key == 'Field')
                if (v != 'id')
                  .form-group
                    label.control-label.col-sm-2(for=v)= v
                    .col-sm-10
                      each v2, key in values
                        if (key == 'Type')
                          if (v2 =='tinyint(1)')
                            select.form-select(name=v, id=v)
                              option(value='1' selected) SI
                              option(value='2') NO

                          else if(v2 == "enum('ENUM1','ENUM2','ENUM3')")
                            - var opciones = v2.replace("enum(", "").replace(")", "").split(",")
                            select.form-select(name=v, id=v)
                              each opcion in opciones
                                - var valor = opcion.replace(/'/g, "").trim()
                                option(value=valor)= valor

                          else
                            input.form-control(type="text", name=v)
            
          br
          .form-group
            .col-sm-offset-2.col-sm-10
              button.btn.btn-primary(type="submit") Crear
              a.btn.btn-danger(href='/recursos/listarTodos') Cancelar
      else
        h1 Algo fallo en el Formulario o no tienes permisos!
                          
    script(src='https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js', integrity='sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3', crossorigin='anonymous')
    script(src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js', integrity='sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz', crossorigin='anonymous')
`
  return plantilla
}

module.exports = plantilla_ListView