
let homebtn = document.getElementById('Homebtn');
let aboutbtn = document.getElementById('Aboutbtn');
let contactbtn = document.getElementById('Contactbtn');

let home =document.getElementById('Home');
let about =document.getElementById('About');
let contact =document.getElementById('Contact');

homebtn.onclick = function(){
    event.preventDefault();
    homebtn.setAttribute('class','active');
    aboutbtn.setAttribute('class','');
    contactbtn.setAttribute('class','');

    home.setAttribute('class','right-content');
    about.setAttribute('class','right-content d-none');
    contact.setAttribute('class','right-content d-none');
}

aboutbtn.onclick = function(){
    event.preventDefault();
    homebtn.setAttribute('class','');
    aboutbtn.setAttribute('class','active');
    contactbtn.setAttribute('class','');

    home.setAttribute('class','right-content d-none');
    about.setAttribute('class','right-content');
    contact.setAttribute('class','right-content d-none');
}

contactbtn.onclick = function(){
    event.preventDefault();
    homebtn.setAttribute('class','');
    aboutbtn.setAttribute('class','');
    contactbtn.setAttribute('class','active');

    home.setAttribute('class','right-content d-none');
    about.setAttribute('class','right-content d-none');
    contact.setAttribute('class','right-content');
}
