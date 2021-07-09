OnlyDigits = /^[0-9]+$/;

let newsletter = prompt ("¿Te gustaría inscribirte a nuestro newsletter? ¡Dejanos tu e-mail");

if ((newsletter === "") || (OnlyDigits.test(newsletter))) {
    alert("¡Ups! Ingreso erróneo.");
}else if (newsletter === null) {
    alert("Newsletter cancelada.")
}else {
    alert(`Tu e-mail es ${newsletter}. ¡Te enviaremos ofertas en breve!`);
}
