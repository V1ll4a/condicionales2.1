velocidad=Number(prompt("Cual es la velocidad subcero(m/s2)"))
posicion=Number(prompt("A que altura desea llegar(en m)?"))
let t=(0-velocidad)/(0-9.8)
let desplazamiento=(velocidad*t)-((9.8*t*t)/2)
if (desplazamiento >= posicion) {
    respuesta= "El proyectil logra llegar a la altura requerida."
} else{
    respuesta= "El proyectil no logra llegar a la altura requerida."
}
document.getElementById("conclusion").innerHTML=respuesta