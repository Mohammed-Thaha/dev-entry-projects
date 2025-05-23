fetch("https://api.frankfurter.app/currencies")
.then(res=>res.json())
.then(res=>displayDropDown(res))
//array change pandrom
let btn=document.getElementById("btn");
let select=document.querySelectorAll('.currency')

function displayDropDown(res){
let curr=Object.entries(res);
for(let i=0;i<curr.length;i++){
    let opt=`<option value="${curr[i][0]}">${curr[i][0]}</option>`;
    select[0].innerHTML+=opt
    select[1].innerHTML+=opt
}
}
let input1=document.getElementById("input");
btn.addEventListener("click",()=>{
    let value1=select[0].value;
    let value2=select[1].value;
    let inputval=input.value;
    if(value1==value2){
        alert("choose different currence");
    }else{
        convert(value1,value2,inputval);
    }
});

function convert(v1,v2,inp){
    const host = 'api.frankfurter.app';
   fetch(`https://${host}/latest?${inp}&from=${v1}&to=${v2}`)
  .then(resp => resp.json())
  .then((data) => {
    document.getElementById("result").value=Object.values(data.rates);
  });
}
