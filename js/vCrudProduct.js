$('#registro').validate({ 
    "rules": {
        "id": {
            required: true,
            minlength: 1,
        },
        "nombre": {
            required: true,
        },
        "descripcion": {
            required: true,
        },
        
        "precio": {
            required: true,
            minlength : 1,
        },
        
    },
    messages: {
        "id": {
            required: 'Debe ingresar un RUT',
            minlength: 'La cantidad minima de caracteres es 1',
        },
        "nombre": {
            required: 'Debe ingresar un nombre de usuario',
        },
        "descripcion": {
            required: 'Debe ingresar la descripcion del producto',
        },
        "precio": {
            required: 'Debe ingresar el valor del producto',
            minlength: 'La cantidad minima de caracteres es 1'
        },
        
    }
});


function validarRut(id) {
    if (id.length < 8) return false;
  
    var caracteres = /^(\d{1,3}(\.?\d{3})*)\-?([\dkK])$/i;
    if (!caracteres.test(id)) return false;
  
    id = id.replace(/\./g, '');
    var dv = id.slice(-1).toUpperCase();
    var cuerpo = id.slice(0, -1);
  
    var suma = 0;
    var multiplo = 2;
    for (var i = cuerpo.length - 1; i >= 0; i--) {
      suma += parseInt(cuerpo.charAt(i)) * multiplo;
      if (multiplo < 7) multiplo += 1;
      else multiplo = 2;
    }
  
    var resultado = 11 - (suma % 11);
    if (resultado == 11) dv = '0';
    else if (resultado == 10) dv = 'K';
    else dv = resultado.toString();
  
    return dv === dv;
  }
  
  $(document).ready(function() {
    $('#id').on('input', function() {
      var id = $(this).val();
      var resultado = $('#resultado');
      if (validarId(id)) {
        resultado.text('La id no es valida');
      } else {
        resultado.text('La id no es valida');
      }
    });
  });

  function validarRut(precio) {
    if (precio.length < 8) return false;
  
    var caracteres = /^(\d{1,3}(\.?\d{3})*)\-?([\dkK])$/i;
    if (!caracteres.test(precio)) return false;
  
    precio = precio.replace(/\./g, '');
    var dv = precio.slice(-1).toUpperCase();
    var cuerpo = precio.slice(0, -1);
  
    var suma = 0;
    var multiplo = 2;
    for (var i = cuerpo.length - 1; i >= 0; i--) {
      suma += parseInt(cuerpo.charAt(i)) * multiplo;
      if (multiplo < 7) multiplo += 1;
      else multiplo = 2;
    }
  
    var resultado = 11 - (suma % 11);
    if (resultado == 11) dv = '0';
    else if (resultado == 10) dv = 'K';
    else dv = resultado.toString();
  
    return dv === dv;
  }
  
  $(document).ready(function() {
    $('#precio').on('input', function() {
      var precio = $(this).val();
      var resultado = $('#resultado');
      if (validarPrecio(precio)) {
        resultado.text('La id no es valida');
      } else {
        resultado.text('La id no es valida');
      }
    });
  });
  

$("#id").rules("add", { id: true });
$("#precio").rules("add", { precio: true });


