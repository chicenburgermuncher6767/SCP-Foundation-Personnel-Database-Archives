/*
==============================================================
FOUNDATION ARCHIVE V3
Only edit the CONFIG section.
==============================================================
*/

const CONFIG = {

  /* Fictional website clearance code. This is NOT real security. */
  clearanceCode: "JUPITER",

  /*
  OFFICIAL SCP DIRECTORY LINKS

  The SCP Wiki has official indexes for these categories.
  Friendly / Neutral / Hostile are YOUR archive classifications;
  the SCP Wiki does not impose one universal three-way alignment
  system across all Groups of Interest.
  */

  categories: {

    mtf: {
      number: "01",
      name: "MTF / SECURITY",
      shortName: "MTF / SECURITY",
      description: "Mobile Task Forces, security units, and related Foundation operational forces.",
      official: "https://scp-wiki.wikidot.com/task-forces/noredirect/true",
      officialText: "SCP Wiki — Mobile Task Forces. The Wiki notes that this page contains notable MTFs and provides a route to its comprehensive list.",
      records: [
        {name:"Alpha-1 — Red Right Hand", type:"MTF", url:"https://scp-wiki.wikidot.com/task-forces/noredirect/true"},
        {name:"Beta-1 — Cauterizers", type:"MTF", url:"https://scp-wiki.wikidot.com/task-forces/noredirect/true"},
        {name:"Beta-10 — Time Hoppers", type:"MTF", url:"https://scp-wiki.wikidot.com/task-forces/noredirect/true"},
        {name:"Beta-43 — Con-Trollers", type:"MTF", url:"https://scp-wiki.wikidot.com/task-forces/noredirect/true"},
        {name:"Gamma-1 — Search and Destroy", type:"MTF", url:"https://scp-wiki.wikidot.com/task-forces/noredirect/true"},
        {name:"Gamma-44 — Meat Lockers", type:"MTF", url:"https://scp-wiki.wikidot.com/task-forces/noredirect/true"},
        {name:"Delta-20 — Blaze It", type:"MTF", url:"https://scp-wiki.wikidot.com/task-forces/noredirect/true"},
        {name:"Lambda-9 — Mind over Matter", type:"MTF", url:"https://scp-wiki.wikidot.com/task-forces/noredirect/true"},
        {name:"Psi-10 — Maslow's Motivators", type:"MTF", url:"https://scp-wiki.wikidot.com/task-forces/noredirect/true"},
        {name:"Psi-18 — Tenure Trackers", type:"MTF", url:"https://scp-wiki.wikidot.com/task-forces/noredirect/true"},
        {name:"Tau-22 — Forest Fires", type:"MTF", url:"https://scp-wiki.wikidot.com/task-forces/noredirect/true"},
        {name:"Security Division", type:"FOUNDATION", url:"https://scp-wiki.wikidot.com/departments"}
      ],
      officialOnly: true
    },

    department: {
      number:"02",
      name:"DEPARTMENT",
      shortName:"DEPARTMENT",
      description:"Foundation departments, divisions, and specialist administrative or scientific organisations.",
      official:"https://scp-wiki.wikidot.com/departments",
      officialText:"SCP Wiki — Foundation Departments. The page explicitly notes that the listed departments are not the only departments and links to a more comprehensive list.",
      records:[
        {name:"O5 Council",type:"ADMINISTRATION",url:"https://scp-wiki.wikidot.com/departments"},
        {name:"Ethics Committee",type:"ADMINISTRATION",url:"https://scp-wiki.wikidot.com/departments"},
        {name:"RAISA",type:"ADMINISTRATION",url:"https://scp-wiki.wikidot.com/departments"},
        {name:"Antimemetics Division",type:"DIVISION",url:"https://scp-wiki.wikidot.com/departments"},
        {name:"Archival Division",type:"DIVISION",url:"https://scp-wiki.wikidot.com/departments"},
        {name:"Artificial Intelligence Applications Division",type:"DIVISION",url:"https://scp-wiki.wikidot.com/departments"},
        {name:"Department of Anomalous Weapons Development",type:"DEPARTMENT",url:"https://scp-wiki.wikidot.com/departments"},
        {name:"Department of Continuity",type:"DEPARTMENT",url:"https://scp-wiki.wikidot.com/departments"},
        {name:"Department of Entomology",type:"DEPARTMENT",url:"https://scp-wiki.wikidot.com/departments"},
        {name:"Department of Mathematics",type:"DEPARTMENT",url:"https://scp-wiki.wikidot.com/departments"},
        {name:"Department of Miscommunications",type:"DEPARTMENT",url:"https://scp-wiki.wikidot.com/departments"},
        {name:"Department of Mythology and Folkloristics",type:"DEPARTMENT",url:"https://scp-wiki.wikidot.com/departments"},
        {name:"Pataphysics Department",type:"DEPARTMENT",url:"https://scp-wiki.wikidot.com/departments"},
        {name:"Department of Tactical Theology",type:"DEPARTMENT",url:"https://scp-wiki.wikidot.com/departments"},
        {name:"Temporal Anomalies Department",type:"DEPARTMENT",url:"https://scp-wiki.wikidot.com/departments"}
      ]
    },

    friendly: {
      number:"03",
      name:"FRIENDLY GROUP OF INTEREST",
      shortName:"FRIENDLY GOI",
      description:"Groups of Interest classified by this archive as generally cooperative or allied with the Foundation.",
      official:"https://scp-wiki.wikidot.com/groups-of-interest",
      officialText:"SCP Wiki — Groups of Interest. Alignment is an archive classification here; individual SCP Wiki portrayals can vary.",
      records:[
        {name:"Wilson's Wildlife Solutions",type:"GOI",url:"https://scp-wiki.wikidot.com/groups-of-interest"},
        {name:"The Wandsmen",type:"GOI",url:"https://scp-wiki.wikidot.com/groups-of-interest"},
        {name:"Global Occult Coalition",type:"GOI",url:"https://scp-wiki.wikidot.com/groups-of-interest"},
        {name:"Three Moons Initiative",type:"GOI",url:"https://scp-wiki.wikidot.com/groups-of-interest"},
        {name:"Serpent's Hand",type:"GOI",url:"https://scp-wiki.wikidot.com/groups-of-interest"}
      ]
    },

    neutral: {
      number:"04",
      name:"NEUTRAL GROUP OF INTEREST",
      shortName:"NEUTRAL GOI",
      description:"Groups of Interest whose relationship with the Foundation is treated as neutral or variable within this archive.",
      official:"https://scp-wiki.wikidot.com/groups-of-interest",
      officialText:"SCP Wiki — Groups of Interest. The Wiki notes that portrayals and relationships may vary between works.",
      records:[
        {name:"Alexylva University",type:"GOI",url:"https://scp-wiki.wikidot.com/groups-of-interest"},
        {name:"Ambrose Restaurants",type:"GOI",url:"https://scp-wiki.wikidot.com/groups-of-interest"},
        {name:"Anderson Robotics",type:"GOI",url:"https://scp-wiki.wikidot.com/groups-of-interest"},
        {name:"Are We Cool Yet?",type:"GOI",url:"https://scp-wiki.wikidot.com/groups-of-interest"},
        {name:"Parawatch",type:"GOI",url:"https://scp-wiki.wikidot.com/groups-of-interest"},
        {name:"Prometheus Labs, Inc.",type:"GOI",url:"https://scp-wiki.wikidot.com/groups-of-interest"},
        {name:"Vikander-Kneed Technical Media",type:"GOI",url:"https://scp-wiki.wikidot.com/groups-of-interest"},
        {name:"The Chicago Spirit",type:"GOI",url:"https://scp-wiki.wikidot.com/groups-of-interest"}
      ]
    },

    hostile: {
      number:"05",
      name:"HOSTILE GOI / CLASS-D",
      shortName:"HOSTILE GOI / CLASS-D",
      description:"Groups treated as hostile within this archive, plus the Foundation's expendable personnel classification.",
      official:"https://scp-wiki.wikidot.com/groups-of-interest",
      officialText:"SCP Wiki — Groups of Interest. Hostility is a database classification here and is not a universal SCP Wiki alignment system.",
      records:[
        {name:"Chaos Insurgency",type:"GOI",url:"https://scp-wiki.wikidot.com/groups-of-interest"},
        {name:"Marshall, Carter & Dark Ltd.",type:"GOI",url:"https://scp-wiki.wikidot.com/groups-of-interest"},
        {name:"Children of the Scarlet King",type:"GOI",url:"https://scp-wiki.wikidot.com/groups-of-interest"},
        {name:"Sarkic Cults",type:"GOI",url:"https://scp-wiki.wikidot.com/groups-of-interest"},
        {name:"Horizon Initiative",type:"GOI",url:"https://scp-wiki.wikidot.com/groups-of-interest"},
        {name:"Class-D Personnel",type:"FOUNDATION",url:"https://scp-wiki.wikidot.com/security-clearance-levels"}
      ]
    }
  },

  /*
  ============================================================
  YOUR OC SECTION
  ============================================================

  Add your own OCs underneath the category where they belong.

  Example:

  {
    name: "YOUR OC",
    type: "PERSONNEL",
    description: "Your description.",
    url: "https://docs.google.com/document/d/YOUR-ID/edit"
  }

  These appear BELOW the official directory records.
  */

  myOCs: {
    mtf: [],
    department: [],
    friendly: [],
    neutral: [],
    hostile: []
  }
};


/* PAGE LOGIC */
let audioContext=null,audioUnlocked=false,warningAudioPending=false,warningComplete=false;
function getAudio(){const C=window.AudioContext||window.webkitAudioContext;if(!C)return null;if(!audioContext)audioContext=new C();if(audioContext.state==='suspended')audioContext.resume();return audioContext}
function unlockAudio(){const c=getAudio();if(!c)return;audioUnlocked=true;if(warningAudioPending&&warningComplete){warningAudioPending=false;memeticAudio()}}
function tone(f=700,d=.05,v=.02,t='square'){const c=getAudio();if(!c)return;const o=c.createOscillator(),g=c.createGain();o.type=t;o.frequency.value=f;g.gain.setValueAtTime(v,c.currentTime);g.gain.exponentialRampToValueAtTime(.0001,c.currentTime+d);o.connect(g);g.connect(c.destination);o.start();o.stop(c.currentTime+d)}
function hoverSound(){tone(930,.035,.012)}
function clickSound(){tone(1050,.04,.016);setTimeout(()=>tone(1400,.05,.01),50)}
function denySound(){tone(160,.1,.03);setTimeout(()=>tone(105,.14,.02),110)}
function memeticAudio(){const c=getAudio();if(!c)return;const m=c.createGain();m.gain.value=.02;m.connect(c.destination);[130,260,390,780].forEach((f,i)=>{const o=c.createOscillator(),g=c.createGain();o.type=i%2?'square':'sawtooth';o.frequency.setValueAtTime(f,c.currentTime);o.frequency.exponentialRampToValueAtTime(f/3,c.currentTime+1.7);g.gain.setValueAtTime(.0001,c.currentTime);g.gain.exponentialRampToValueAtTime(.13,c.currentTime+.07);g.gain.exponentialRampToValueAtTime(.0001,c.currentTime+1.7);o.connect(g);g.connect(m);o.start();o.stop(c.currentTime+1.8)})}
function memeticKillAgentWarning(){const c=getAudio();if(!c)return;const m=c.createGain();m.gain.setValueAtTime(.0001,c.currentTime);m.gain.exponentialRampToValueAtTime(.055,c.currentTime+.035);m.gain.exponentialRampToValueAtTime(.0001,c.currentTime+2.4);m.connect(c.destination);const o=c.createOscillator(),g=c.createGain();o.type='sawtooth';o.frequency.setValueAtTime(92,c.currentTime);o.frequency.exponentialRampToValueAtTime(41,c.currentTime+2.1);g.gain.value=.45;o.connect(g);g.connect(m);o.start();o.stop(c.currentTime+2.2);[0,.38,.79,1.22,1.65].forEach((x,i)=>setTimeout(()=>tone(i%2?760:420,.075,.025),x*1000))}
function sessionID(){const chars='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';let x='';for(let i=0;i<6;i++)x+=chars[Math.floor(Math.random()*chars.length)];return x}
function safe(v){return String(v).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;')}
const page=location.pathname.split('/').pop()||'index.html';
if(page==='index.html'||page===''){
 ['pointerdown','keydown','touchstart'].forEach(e=>document.addEventListener(e,unlockAudio,{passive:true}));document.getElementById('clearance').addEventListener('focus',unlockAudio);
 let n=10;const cd=document.getElementById('countdown'),st=document.getElementById('countdown-status');const timer=setInterval(()=>{n--;cd.textContent=n;if(n>0){st.textContent='COUNTERMEASURE IN '+n+' SECONDS';tone(450+n*25,.04,.01)}else{clearInterval(timer);warningComplete=true;cd.textContent='—';st.textContent='COUNTERMEASURE COMPLETE // CLEARANCE REQUIRED';document.getElementById('counter-status').textContent='READY';if(audioUnlocked)memeticAudio();else warningAudioPending=true}},1000);
 document.getElementById('verify').onclick=()=>{unlockAudio();if(!warningComplete){document.getElementById('clearance-message').textContent='ACCESS LOCKED // WAIT FOR COUNTERMEASURE COMPLETION.';denySound();return}if(document.getElementById('clearance').value===CONFIG.clearanceCode){clickSound();sessionStorage.setItem('archiveAccess','1');location.href='categories.html'}else{const e=document.getElementById('clearance').value.trim();document.getElementById('clearance-message').textContent=e?'ACCESS DENIED // INVALID AUTHORISATION CODE. COUNTERMEASURE ACTIVE.':'NO AUTHORISATION DETECTED // MEMETIC KILL AGENT SIMULATION INITIATED.';denySound();memeticKillAgentWarning()}};
 document.getElementById('clearance').onkeydown=e=>{if(e.key==='Enter')document.getElementById('verify').click()};
 setInterval(()=>{document.getElementById('warning-clock').textContent=new Date().toLocaleTimeString('en-AU',{hour12:false})},1000)
}
if(page==='categories.html'){
 if(sessionStorage.getItem('archiveAccess')!=='1')location.href='index.html';
 document.getElementById('selector-session').textContent=sessionID();const grid=document.getElementById('category-grid');Object.entries(CONFIG.categories).forEach(([key,c])=>{const a=document.createElement('a');a.className='category-card';a.href='database.html?category='+encodeURIComponent(key);a.innerHTML='<div class="category-number">CATEGORY '+c.number+'</div><div class="category-name">'+safe(c.name)+'</div><div class="category-description">'+safe(c.description)+'</div><div class="category-arrow">SELECT →</div>';a.onmouseenter=hoverSound;a.onclick=clickSound;grid.appendChild(a)})
}
if(page==='database.html'){
 if(sessionStorage.getItem('archiveAccess')!=='1')location.href='index.html';
 const key=new URLSearchParams(location.search).get('category')||'mtf',c=CONFIG.categories[key]||CONFIG.categories.mtf;document.getElementById('category-title').textContent=c.name;document.getElementById('category-code').textContent='CATEGORY '+c.number+' // '+c.shortName;document.getElementById('category-description').textContent=c.description;document.getElementById('breadcrumb-category').textContent=c.shortName;document.getElementById('official-directory').href=c.official;document.getElementById('official-note-text').textContent=c.officialText;document.getElementById('session-id').textContent=sessionID();
 function render(records){const side=document.getElementById('sidebar-list'),cards=document.getElementById('group-cards');side.innerHTML='';cards.innerHTML='';document.getElementById('result-count').textContent=String(records.length).padStart(2,'0')+' RESULTS';records.forEach(r=>{const s=document.createElement('a');s.className='sidebar-link';s.href=r.url;s.target='_blank';s.rel='noopener';s.textContent=r.name;s.onmouseenter=hoverSound;side.appendChild(s);const card=document.createElement('a');card.className='group-card';card.href=r.url;card.target='_blank';card.rel='noopener';card.innerHTML='<div class="group-type">'+safe(r.type||'RECORD')+'</div><div class="group-name">'+safe(r.name)+'</div><div class="group-description">'+safe(r.description||'Official SCP Wiki directory record.')+'</div><div class="open-mark">OPEN ↗</div>';card.onmouseenter=hoverSound;cards.appendChild(card)})}
 function renderOCs(records){const box=document.getElementById('oc-cards');box.innerHTML='';if(!records.length){box.innerHTML='<div class="oc-intro">NO LOCAL RECORDS ASSIGNED TO THIS CATEGORY. Add your own OC entries to <b>CONFIG.myOCs</b> in script.js.</div>';return}records.forEach(r=>{const card=document.createElement('a');card.className='group-card';card.href=r.url;card.target='_blank';card.rel='noopener';card.innerHTML='<div class="group-type">'+safe(r.type||'PERSONNEL')+'</div><div class="group-name">'+safe(r.name)+'</div><div class="group-description">'+safe(r.description||'Local Foundation archive record.')+'</div><div class="open-mark">OPEN ↗</div>';box.appendChild(card)})}
 const all=c.records||[];document.getElementById('group-count').textContent=String(all.length).padStart(2,'0');render(all);renderOCs(CONFIG.myOCs[key]||[]);document.getElementById('search').oninput=e=>{const q=e.target.value.toLowerCase().trim();render(all.filter(r=>(r.name+' '+(r.type||'')+' '+(r.description||'')).toLowerCase().includes(q)))};
 const now=()=>document.getElementById('clock').textContent=new Date().toLocaleString('en-AU',{hour12:false,dateStyle:'short',timeStyle:'medium'});now();setInterval(now,1000)
}
