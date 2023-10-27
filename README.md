# TP_Final_PNT2

Estructura de Datos

Usuario{
id:
login:
password:
username:
email:
}

Mazo {
id:
nombreMazo:
id_user:
estado: (privado , publico)
modalidadJuego: ModoJugo
}

Carta{
id:
cardName:
img-url:
card-url:
}

CartaXMazo{
id_Mazo: 
id_Carta:
}

MiColeccion {
id_User:
id_Carta
}


FLow Navegacion:

Login/Registro ----> Home(Mis Mazos)

Barra de Navegacion que sale del costado
Mis Mazos
Mi Perfil ?
Buscar Mazos
Buscar Cartas
Mi Coleccion


Vista Home ( Mis Mazos)
muestra los decks en forma de CARDS con una imagen y un display de informacion
al Clickear Navega a Details  
Deberia tener un Boton para Agregar Mazo  y otro para Quitar Mazo por ID Mazo.

Details (Mazo)
Muestra las cartas del mazo en forma de CardImage y la informacion del mazo
Boton para agregar carta ---> Desde Busqueda en Api(redirige a vista Buscar Cartas) , Desde Mi Coleccion (redirige a Mi coleccion)
boton en la esquina superior de la carta para quitarla del mazo
Boton Toggle para indicar Estado Mazo (Privado/Publico)
cantMax cartas? restantes?

Mi Perfil 
Muestra la informacion de usuario (Username / Email) ?


Mi Coleccion
Parecido a Mazo  
Muestra las cartas del mazo en forma de Cardimagen
Boton para agregar carta ---> Desde Busqueda en Api(redirige a vista Buscar Cartas)
boton en la esquina superior de la carta para quitarla de la coleccion

Buscar Mazos  
Un Campo para completar , filtro , boton de busqueda
ej de filtro:
Por Nombre de Usuario
Por Nombre de Mazo
Por Modalidad de Juego


Buscar Cartas

Hay que investigar la api para saber que tipo de busquedas puede hacer etc.
