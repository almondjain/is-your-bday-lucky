const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#number-calculate");
const displayMessage = document.querySelector("#output-container");

function calculateDobSum(dob){
    let sum=0;
    dob = dob.replaceAll("-","");
    for(let digit of dob){
        sum+= Number(digit);
    }
    return sum;
}

function showMessage(message){
    displayMessage.innerText = message;
}

checkButton.addEventListener("click", () => {
    const dob = dateOfBirth.value;
    const noToCheck = luckyNumber.value;

    if(dob && noToCheck)
    {
        const sumOfDob = calculateDobSum(dob);
        console.log('summm'+sumOfDob);
        //checking no.is lucky or not!
        if(sumOfDob % noToCheck === 0){
            showMessage("Your Date of Birth {dob} is lucky!");
        }else{
            showMessage("Oops! Your Date of Birth is not lucky!");
        }
    }else{
        showMessage("Please Enter both fields!");
    }
});
