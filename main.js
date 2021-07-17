// =================CLOCK=================
const hour=document.getElementById('hour'),
minutes=document.getElementById('minutes'),
      seconds=document.getElementById('seconds');
      const clock=()=>{
          let time=new Date();
          let hh=time.getHours() * 30,
          mm=time.getMinutes() * 6,
          ss=time.getSeconds() *6;
          
          // =================CLOCK ROTATION=================
     hour.style.transform= `rotateZ(${hh+mm/12}deg)`
     minutes.style.transform= `rotateZ(${mm}deg)`
     seconds.style.transform= `rotateZ(${ss}deg)`
 }   
 setInterval(clock,1000) ; 
 

 const text1hour=document.getElementById('text_hour');
 const textminutes=document.getElementById('text_minutes');
 const textampm=document.getElementById('text_ampm');
 const textday=document.getElementById('text_day');
 const textmonth=document.getElementById('text_month');
 const textyear=document.getElementById('text_year');

const clocktext=()=>{
    let date12=new Date();
 let mmm=date12.getMinutes();
 let   hhh=date12.getHours();
 let ampm; 
 
//  //AMPM   
 if(hhh>=12){
     hhh=hhh-12;
     ampm='PM';
    }
    else{
        ampm='AM';
    }
    
    text1hour.innerHTML=`${ hhh}:`;
    textminutes.innerHTML=`${mmm}`;
    textampm.innerHTML=`${ampm}`;


 let day=date12.getDate();
 let mont=date12.getMonth();
 let yea=date12.getFullYear();
 
   textday.innerHTML=`${day}/`
    textmonth.innerHTML=`${mont}/`
    textyear.innerHTML=`${yea}`
}
setInterval(clocktext,1000);