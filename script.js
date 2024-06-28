function scroll(elementSelector, instance=0) {
    let elements=document.querySelectorAll(elementSelector);
    if(elements.length>instance){
        elements[instance].scrollIntoView({behavior:'smooth'});
    }
}
document.getElementById('Home').addEventListener('click',()=>{
    scroll('#home');
});

document.getElementById('About').addEventListener('click',()=>{
    scroll('#about');
});

document.getElementById('Contact').addEventListener('click',()=>{
    scroll('#contact');
});

const textarea=document.querySelector('textarea');
textarea.addEventListener('keyup',e=>{
    textarea.style.height='26px';
    let scHeight=e.target.scrollHeight;
    textarea.style.height=`${scHeight-40}px`;
})

let email_val= /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

const username=document.getElementById('name');
const email=document.getElementById('email');
const msg=document.getElementById('msg');
const form=document.getElementById('form');

const name_error=document.getElementsByClassName('name-error');
const email_error=document.getElementsByClassName('email-error');
const msg_error=document.getElementsByClassName('msg-error');


form.addEventListener('submit',(e)=>{
    if(username==='' || username==null){
        e.preventDefault();
        name_error.innerHTML='Name is required;'
    }
})

name_error.innerHTML='name is required';
