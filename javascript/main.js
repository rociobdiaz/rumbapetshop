/* OnlyDigits = /^[0-9]+$/;

let newsletter = prompt ("¿Te gustaría inscribirte a nuestro newsletter? ¡Dejanos tu e-mail");

if ((newsletter === "") || (OnlyDigits.test(newsletter))) {
    alert("¡Ups! Ingreso erróneo.");
}else if (newsletter === null) {
    alert("Newsletter cancelada.")
}else {
    alert(`Tu e-mail es ${newsletter}. ¡Te enviaremos ofertas en breve!`);
}
 */


/* CORRECCIÓN ENTREGA CLASE 4 */

/* OnlyDigits = /^[0-9]+$/;

function ingresoEmail () {
    let email = prompt("¿Te gustaría inscribirte a nuestro newsletter? ¡Dejanos tu e-mail");

    if ((email === "") || (OnlyDigits.test(email))) {
        alert("¡Ups! Ingreso erróneo.");

    }else if (email === null) {
        alert("Newsletter cancelada.");

    }else {
        alert(`Te has suscrito a nuestro newsletter con el e-mail: ${email}`);

    }
}
ingresoEmail(); */
