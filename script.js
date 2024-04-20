const btn=document.querySelector('button');
const text_note=document.querySelector('textarea')
const firstinput=document.querySelector('#bg');
const secid=document.querySelector('#text');
const right=document.querySelector('.right');
btn.addEventListener('click',createnotes)
function createnotes(){

const notes= text_note.value
if(notes.length==0){
    Toastify({
        text: "give some Value into this",
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();
}else{

    
    const stickydivs=document.createElement('div');
   const textspan=document.createElement('span');
   textspan.innerText=text_note;
   stickydivs.appendChild(textspan);




   
    stickydivs.classList.add('stickydivs');
    stickydivs.innerText=notes;



const edit=document.createElement('span');
edit.innerHTML="edit";
edit.classList.add('material-symbols-outlined');
stickydivs.appendChild(edit);

edit.addEventListener('click',function(e){
    stickydivs.contentEditable="true";
})





    
    const span=document.createElement('span');
    span.classList.add('span');
span.classList.add('close');
span.innerHTML="&times";

stickydivs.appendChild(span);
console.log(stickydivs);



stickydivs.style.backgroundColor=firstinput.value;
stickydivs.style.color=secid.value;

text_note.value='';



span.addEventListener('click',function(){
    stickydivs.remove();
})

right.append(stickydivs);


}

}


Toastify({
    text: "give some Value into this ",
    duration: 3000, // Optional - duration of the notification in milliseconds (default is 3000)
    gravity: "top", // Optional - position of the toast notification (top, bottom, or center)
    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", // Optional - background color
}).showToast();
