// Variable que no se usa
var errorInutil = "No sirvo para nada";

// eslint-disable-next-line no-unused-vars
function clasificarPaciente(gravedad) {
// Error de formato
const   nombre        =          document            .          getElementById              ("paciente")          .             value             ;
  var                  mensaje =         ""              ;

// Uso de '==' en lugar de '===' (Comparación estricta)
if (gravedad == "critico") {
mensaje = "🚨 Alerta Roja: Quirófano inmediato para "            + nombre;
} else if (gravedad == "estable") {

// Error de mezcla de comillas dobles y simples
mensaje = '✅ Paciente ' + nombre                      + ' asignado a sala de espera';
}

// Falta de puntos y coma
console.log("Procesando triaje...")
document.getElementById("pantalla")                    .innerHTML = mensaje
}

// Función flecha mal formateada para probar a Prettier
const borrarRegistro = () => {  console.log("Borrando...");                                     return null;  }