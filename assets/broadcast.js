
const feed=[
 ['L-5 CONTROL','Silver Compass eastern relay confirmed. Noblecrest carrier remains intermittent.'],
 ['EXECUTIVE CIRCUIT','Office of the President requests updated NRF political-recognition report.'],
 ['MINISTRY OF STATE','Drachenwald desk confirms Valorian attention remains fixed on the northern frontier.'],
 ['NRF LIAISON','Settlement authority requests approval to convert temporary command districts into permanent civil provinces.'],
 ['L-5 CONTROL','Homeward planning remains sealed. Do not transmit Dettermark references on public channels.'],
 ['PRESIDENTIAL OFFICE','The Confederacy endures wherever lawful succession, records, and state authority remain joined.']
];
let index=0;
function updateBroadcast(){
 const src=document.getElementById('b-source'),body=document.getElementById('b-body');if(!src||!body)return;
 const item=feed[index%feed.length];src.textContent=item[0];body.textContent=item[1];index++;
}
function bootBroadcast(){updateBroadcast();setInterval(updateBroadcast,7000)}
