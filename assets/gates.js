
const gates={
 ncn:{password:'NOBLECREST',target:'file-ncn',store:'ash_ncn'},
 nrf:{password:'FIVE-LIGHTS',target:'file-nrf',store:'ash_nrf'},
 drachen:{password:'BLACK-THRONE',target:'file-drachen',store:'ash_drachen'},
 detter:{password:'HOMEWARD',target:'file-detter',store:'ash_detter'},
 president:{password:'CINDER-CROWN',target:'file-president',store:'ash_president'}
};
function norm(v){return (v||'').trim().toUpperCase().replace(/\s+/g,'-')}
function unlockGate(name){
 const g=gates[name],input=document.getElementById('pw-'+name),msg=document.getElementById('msg-'+name);
 if(norm(input.value)===g.password){
  localStorage.setItem(g.store,'1');document.getElementById(g.target).classList.remove('hidden');
  msg.textContent='ACCESS ACCEPTED. FILE DECRYPTED.';msg.className='result good';
 }else{msg.textContent='ACCESS DENIED. CHECKSUM RETAINED.';msg.className='result bad'}
}
function restoreGates(){
 Object.keys(gates).forEach(name=>{const g=gates[name];if(localStorage.getItem(g.store)==='1'){const t=document.getElementById(g.target);if(t)t.classList.remove('hidden')}})
}
