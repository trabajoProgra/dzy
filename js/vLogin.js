$('#registro').validate({ 
    "rules": {
        "correoLog": {
            required: true,
            equalTo : "#correo",
        },
        "contraseñaLog": {
            required: true,
            equalTo : "#password",
        }
        
        
    },
    messages: {
        "correoLog": {
            required: 'Debe ingresar un corre Registrado',
            equalTo : "#correo",
        },
        "contraseñaLog": {
            required: 'Debe ingresar un nombre de usuario',
            equalTo : "#password",
        }
    }
});


