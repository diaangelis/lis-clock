const timeOutput=document.querySelector('.time');
const secOutput=document.querySelector('.sec');
const ampmOutput=document.querySelector('.ampm');
const monthOutput=document.querySelector('.month');
const dayOfWeekOutput=document.querySelector('.dayofweek');
const dayOutput=document.querySelector('.day');

//week day names
const weekday=["Sunday", "Monday", "Tuesday", "Wednesday", "Friday", "Saturday",
 ];

 //month abreviamento
 const monthName=[
    "Jan", "Feb", "Mar", "Apr" , "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov,", "Dec",
 ];
 
 
 function formatTime(val){
    if (val <10){
        return"0";
    } else { 
        return "";}

 }

 //get the date
 function clock(){
    const d= new Date();

//time variable
const h=d.getHours();
const m=d.getMinutes();
const s=d.getSeconds();

//output week name
dayOfWeekOutput.innerHTML= weekday[ 
    d.getDay()
];

//output month name
monthOutput.innerHTML= monthName[
    d.getMonth()
];


//output day
dayOutput.innerHTML= d.getDate();

//displaing time
const time=formatTime (h) + h + ":" + formatTime(m) + m ;
const sec= formatTime (s)+ s;

//formato do tempo
const ampm=h>=12? 'PM' :'AM';


//output the time
timeOutput.innerHTML=time;
secOutput.innerHTML=sec;
ampmOutput.innerHTML=ampm;

 }

 // update o tempo cada segundo

 setInterval(clock,1000);


 