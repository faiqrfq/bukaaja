const form = document.getElementById("form-regist");
const fristname = document.getElementById("fristname");
const lastname = document.getElementById("lastname");
const number = document.getElementById("number");
const  email = document.getElementById("email");
const pass = document.getElementById("pass");

function showEror(inputId, massage){
    const erorElemen = document.getElementById('$(inputId)-eror')
    erorElement.innertext = '';
}
form.addEventListener('submit', function(obj)){
    obj.preventDefault();
}
if (fristname.value ==''){
    showEror('fristname', 'ngentot di air ah ah');
}
else{
    hideError('fristname');
}
if(email.value ==''){
    showEror('email', 'cuaksss');
}
else{
    hideError(email);
}