
(function(){
 const clock=document.getElementById('clock');
 function tick(){
   const now=new Date(), past=new Date(now);
   past.setFullYear(now.getFullYear()-100);
   const date=new Intl.DateTimeFormat('en-US',{timeZone:'America/Chicago',month:'2-digit',day:'2-digit',year:'numeric'}).format(past);
   const time=new Intl.DateTimeFormat('en-US',{timeZone:'America/Chicago',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).format(now);
   if(clock) clock.textContent=date+' '+time+' CST';
 }
 tick();setInterval(tick,1000);
})();
