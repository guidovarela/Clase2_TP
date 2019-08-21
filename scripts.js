var ingreso = prompt('Ingrese un dia de la semana:');
	var diaIngresado = ingreso.toLowerCase();

	var diasHabiles = ['lunes','martes','miercoles','jueves','viernes'];
	var diasFinde = ['sabado','domingo'];

	/*if(diasHabiles[0] == DiaIngresado){
		console.log('Funca!');
		console.log(DiaIngresado);
	}else{
		console.log('no funca :(');
		console.log(DiaIngresado);
	}*/

	for (var i=0; i < diasHabiles.length; i++) {
		if(diasHabiles[i]==diaIngresado){
			console.log('El dia ingresado es un día hábil');
			break;
		}
	}
	for (var i=0; i < diasFinde.length; i++) {
		if(diasFinde[i]==diaIngresado){
			console.log('Estamos en el fin de semana! :)');
			break;
		}
	}
