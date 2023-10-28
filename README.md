# TP_Final_PNT2

### Estructura de Datos
- Usuario ```{
id:
login:
password:
username:
email:
}```

- Mazo ```{
id:
nombreMazo:
id_user:
privado: (true, false)
modalidadJuego: ModoJugo
}```

- Carta ```{
id:
cardName:
img-url:
card-url:
}```

- CartasXMazo ```{
id_Mazo: 
id_Carta:
}```

- MiColeccion ```{
id_User:
id_Carta
}```


### Navegacion
- Login/Registro --> Home(Mis Mazos)
- Barra de Navegacion: *Bottom Tabs Navigator*
  - Mis mazos
  - Mi coleccion
  - Buscar carta
  - Buscar mazo
- Header: Mi perfil


### Vistas
- *Home (Mis Mazos)*  
  Muestra los decks en forma de CARDS con una imagen y un display de informacion
  al Clickear Navega a Details    
  Deberia tener un Boton para Agregar Mazo  y otro para Quitar Mazo por ID Mazo.
  

- *Details (Mazo)*  
  Muestra las cartas del mazo en forma de CardImage y la informacion del mazo  
  Boton para agregar carta ---> Desde Busqueda en Api(redirige a vista Buscar Cartas) , Desde Mi Coleccion (redirige a Mi coleccion)  
  boton en la esquina superior de la carta para quitarla del mazo  
  Boton Toggle para indicar Estado Mazo (Privado/Publico)  
  cantMax cartas? restantes?
  

- *Mi perfil*  
Muestra la informacion de usuario (Username / Email) ?
  

- *Mi coleccion*  
Parecido a Mazo, muestra las cartas del mazo en forma de Cardimagen    
Boton para agregar carta ---> Desde Busqueda en Api(redirige a vista Buscar Cartas)  
boton en la esquina superior de la carta para quitarla de la coleccion
  

- *Buscar Mazos*  
Un Campo para completar, filtro, boton de busqueda  
Ej de filtro:
    - Por Nombre de Usuario
    - Por Nombre de Mazo
    - Por Modalidad de Juego
  

- *Buscar Cartas*  
Hay que investigar la api para saber que tipo de busquedas puede hacer etc.
