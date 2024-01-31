import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

const nameTimeZone = document.querySelector(".nameTimeZone");
const currentTime = document.querySelector(".currentTime");
const currentDate = document.querySelector(".currentDate");

dayjs.extend(utc);
dayjs.extend(timezone);

const zonaHorariaActual = dayjs.tz.guess();
const horaActual = dayjs().format('HH:mm:ss');
const fechaActual = dayjs();
const diaSemana = fechaActual.format('dddd'); 
const numeroMes = fechaActual.format('DD MMMM'); 
const año = fechaActual.format('YYYY');


function updater (){
    
    const horaActual = dayjs().format('HH:mm:ss');
    
    nameTimeZone.textContent = zonaHorariaActual;
    currentTime.textContent = horaActual;
    currentDate.textContent  = diaSemana+','+numeroMes+','+año;
}


setInterval(updater, 1000);


