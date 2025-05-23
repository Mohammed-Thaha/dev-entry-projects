function contact_form(){
alert("Successfully Sent")
const conect="AKfycbwak0sVNKCM1YMbFYzc2zjhmyR9Kq1mSPcOzmwq8gLrAMPpHaUaq6CJrs17LbO52SJS/exec";
const scriptURL = 'https://script.google.com/macros/s/'+conect;
const form = document.forms['submit-to-google-sheet']  
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
        console.log("testing 177");
        setTimeout(function(){
            alert("Successfully sent")
            form.reset();
        },5000)
        
    })
    .catch(error => console.error('Error!', error.message))
}) 
}