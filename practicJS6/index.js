const root=document.getElementById('root');
const h1=document.createElement('h1')
const form=document.createElement('form')
const datasForm = [
    {type:'text', placeholder: 'Name...', name: 'fullName', title:'Full Name'},
    {type:'email', placeholder: 'Email address...', name: 'email', title:'Email'},
    {type:'text', placeholder: 'Username...', name: 'username', title:'Username'},
    {type:'password', placeholder: '*****', name: 'password', title:'Password'},
    {type:'password', placeholder: '*****', name: 'repeatPasword', title:'Repeat Password'}
  ]

  form.classList.add('form');
h1.textContent='Sing Up';

function createInput(data) {
    const label = document.createElement('label');
    const span = document.createElement('span');
    span.textContent = data.title;
    const input = document.createElement('input');
    input.setAttribute('name', data.name);
    input.setAttribute('type', data.type);
    input.setAttribute('placeholder', data.placeholder);
    label.append(span, input);
    return label;
  }
  
  const elementsForm=datasForm.map((data)=>createInput(data))
  const labelCheckbox=document.createElement('label')
  const checkbox=document.createElement('input')
  
  labelCheckbox.classList.add('label')
  labelCheckbox.classList.add('checkbox')

  checkbox.setAttribute('name', 'agree');
  checkbox.setAttribute('type', 'checkbox');

  labelCheckbox.append(checkbox,'I agree to the thems of User')
  checkbox.addEventListener('change',(event)=>{
    if (event.target.checked) {
        event.target.parentElement.nextElementSibling.disabled=false
    }else{
        event.target.parentElement.nextElementSibling.disabled=true   
    }
  })
  
const button=document.createElement('button');

button.textContent='Sing Up'
button.setAttribute('type','submit');
button.disabled=true;

form.append(...elementsForm,labelCheckbox,button)
root.append(h1,form)
//form.append(createInput())
const patternEmail =/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
const patternUserName=/^[a-z0-9_-]{3,15}$/
const patternPassword=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
form.addEventListener('submit',(event)=>{
event.preventDefault()
if (form.elements.fullName.value.trim()==='') {
    form.elements.fullName.style.borderColor='red'
    
} element.style.borderColor='green'
for (let index=0 ;index<5;index++) {
    const element=form.elements[index]
    if (element.value.trim()==='') {
        element.style.borderColor='red'
    }
}
const isValidEmail=patternEmail.test(form.elements.email.vaue.trim())
const isValidUserName=isValidUserName.test(form.elements.email.vaue.trim())
const isValidPassword=patternPassword.test(form.elements.email.vaue.trim())
if (isValidEmail && isValidUserName &&isValidPassword ) {
    alert('thanks!')
    form.submit()
}
})