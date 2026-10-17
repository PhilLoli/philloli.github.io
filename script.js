/* The original photo and illustration URLs are extracted from the provided Figma frame.
   For permanent local hosting, run download-assets.sh on a machine with network access.
   Each image will then be used from assets/ without depending on Figma's temporary URLs. */
const assets={
  hero:{file:'hero.png',url:'https://www.figma.com/api/mcp/asset/01dd0fd9-02c5-409d-8f83-d3b0d33950de.png'},
  texture:{file:'texture.png',url:'https://www.figma.com/api/mcp/asset/1e138dc0-4c38-4adf-98c2-d5e6641e1aca.png'},
  portrait:{file:'portrait.png',url:'https://www.figma.com/api/mcp/asset/3192cea7-a0b5-4064-8b83-4680c4c0fb23.png'},
  approach:{file:'approach.png',url:'https://www.figma.com/api/mcp/asset/29edbcec-d4fb-4230-b633-4e825dc57bd8.png'},
  dashboard:{file:'dashboard.png',url:'https://www.figma.com/api/mcp/asset/15fac1fd-0dbb-44c1-8620-e80fd43df05e.png'},
  certificate:{file:'certificate.png',url:'https://www.figma.com/api/mcp/asset/277d17c9-869a-44f5-b40b-766f04936762.png'},
  internship:{file:'internship.png',url:'https://www.figma.com/api/mcp/asset/25941969-0529-44b5-8209-3b6a23b95bf3.png'},
  university:{file:'university.png',url:'https://www.figma.com/api/mcp/asset/405bf0ed-72bc-47b9-9196-7f7f0a775cea.png'}
};
function attachImage(img,asset){const local='assets/'+asset.file;img.src=local;img.onerror=function(){if(this.dataset.fallbackUsed)return;this.dataset.fallbackUsed='true';this.src=asset.url;};}
for(const img of document.querySelectorAll('[data-asset]'))attachImage(img,assets[img.dataset.asset]);
function backgroundAsset(key,variable){const asset=assets[key],test=new Image();test.onload=()=>document.documentElement.style.setProperty(variable,`url('assets/${asset.file}')`);test.onerror=()=>document.documentElement.style.setProperty(variable,`url('${asset.url}')`);test.src='assets/'+asset.file}
backgroundAsset('hero','--hero-image');backgroundAsset('texture','--texture-image');
const menuToggle=document.querySelector('.menu-toggle');const navLinks=document.querySelector('.nav-links');
menuToggle.addEventListener('click',()=>{const isOpen=navLinks.classList.toggle('is-open');menuToggle.setAttribute('aria-expanded',String(isOpen));menuToggle.setAttribute('aria-label',isOpen?'Закрыть меню':'Открыть меню')});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('is-open');menuToggle.setAttribute('aria-expanded','false')}));
for(const panel of document.querySelectorAll('.skill-panel')){panel.querySelector('.skill-tab').addEventListener('click',()=>{for(const other of document.querySelectorAll('.skill-panel')){const active=other===panel;other.classList.toggle('is-active',active);other.querySelector('.skill-tab').setAttribute('aria-expanded',String(active));other.querySelector('.skill-content').hidden=!active}})}
for(const button of document.querySelectorAll('.card-expand')){button.addEventListener('click',()=>{const expanded=button.getAttribute('aria-expanded')==='true';button.setAttribute('aria-expanded',String(!expanded));document.getElementById(button.getAttribute('aria-controls')).hidden=expanded})}
