let dateOfBirth=document.querySelector("#birthday");
let luckyNumber=document.querySelector("#num");
let checkbtn=document.querySelector("#btn");
let outputBox=document.querySelector("#output");



checkbtn.addEventListener('click', function getLucky(){
    const dob=dateOfBirth.value;
    const numberToCheck = luckyNumber.value;
    
    if(dob&&numberToCheck) {
        const sum = calculateSum(dob);
        compareValues(sum,numberToCheck);
    }else {
        showMessage("Please enter both the fields");
    }
    // console.log(sum);
    // compareValues(sum,luckyNumber.values);


})
function compareValues(sum,numberToCheck){
    if(sum%numberToCheck===0){
        return showMessage( `${numberToCheck}  is lucky number🥳 🥳 🥳 ` )
    }
    else{
        showMessage(`${numberToCheck} is not that lucky 😕 `)
    }
    // console.log(sum,luckyNumber)
}

function calculateSum(dob){
    dob=dob.replaceAll("-","");
    let sum=0;
    for(let i=0;i<dob.length;i++){
        sum=sum+Number(dob.charAt(i))
        
    }
    return sum;
}
function showMessage(msg) {
    outputBox.style.display = "block";
    outputBox.innerText = msg;
    
}