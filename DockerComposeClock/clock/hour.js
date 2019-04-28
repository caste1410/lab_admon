/**
* Funcion que tiene como parametro un objeto de tipo
* Date y regresa en un arreglo las horas minutos y segundos
**/
function getCurrentTime(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  return [hours, minutes, seconds];
}
/**
* formatHour le da formato al arreglo que ingresa
* y utiliza la funcion addDigit para esto,
* además de agregar entre la hora y los minutos el simbolo :
* si el segundo es par esto para hacer el efecto de que parpadee
* en pantalla
**/
function formatHour(actualTime) {
  var time = getCurrentTime(actualTime);
  var format = time[2] % 2 == 0 ? addDigit(time[0]) + ":" + addDigit(time[1]) :
    addDigit(time[0]) + " " + addDigit(time[1]);
  return format;
}
/**
* La funcion addDigit le agrega un cero a la izquierda si
* el parametro que recibe es menor a 10 y regresa el nuevo
* valor que tiene el 0 a la izquierda
**/
function addDigit(value) {
  var newValue = value > 9 ? value : "0" + String(value);
  return newValue;
}
/**
* setFormatLocal agrega la hora en el formato de formatHour
* creando un objeto de clase date y pasandolo
* a la función formatHour() y asignando el valor
* al elemento de html localTime
**/
function setFormatLocal() {
  var localDate = new Date();
  localTime.textContent =formatHour(localDate);
}

/**
* setFormatServer agrega la hora en el formato de formatHour
* recibiendo la fecha del servidor y pasandolo
* a la función formatHour() y asignando el valor
* al elemento de html serverTime
**/
function setFormatServer(serverDate){
  serverTime.textContent = formatHour(serverDate);
}
/**
* getDataFromServer hace request al servidor y obtiene
* la fecha que el servidor envia despues
* de recibirlo aplica la funcion setFormatServer
**/
function getDataFromServer() {
  fetch("http://localhost:8080")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    var date = new Date(myJson);
    setFormatServer(date);
  });
}
/**
* displayHours ejecuta las funciones  setFormatLocal()
* y getDataFromServer()
**/
function displayHours(){
  setFormatLocal();
  getDataFromServer();
}
/* llamamos displayHours una vez para iniciar el texto en los elementos
* html y despues usamos la función setInterval para cambiar el texto de los elementos
* del html cada segundo
**/
displayHours();
setInterval(displayHours, 1000);
