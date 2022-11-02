let list1=document.getElementById('list-item');
let input=document.getElementById('form-input');
let btn1=document.getElementById('btn-add');


function addnote(e)
{
    if(input.value!="")
    {
    let note1=input.value;
   input.value='';
   let newn1= document.createElement('li');
   newn1.className='list-group-item d-flex';
   newn1.innerHTML=`<h5 class="m-auto">${note1}</h5>
   <button type="button" class="btn btn-warning  " >edit</button>
   <button type="button" class="btn btn-danger " onclick="removeNote(this)" >X</button>`;
   list1.appendChild(newn1)
    }
}
btn1.addEventListener('click',addnote);
let ebtn=document.getElementById('edit-txt');
let rbtn=document.getElementByTagName();
console.log(rbtn)
rbtn.addEventListener('click',removeNote)
function removeNote(r)
{
   r.parentElement.remove();
}
