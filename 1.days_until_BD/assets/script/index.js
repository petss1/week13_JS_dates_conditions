const button=document.querySelector(".btn");
const birthdayInput=document.getElementById("start");
let resultParagraph=null;

function getDayForm(number){
    const lastType=number % 10;
    const lastTwoTypes=number % 100;
    if (lastType===1 && lastTwoTypes!==11){
        return "день";
    } else if((lastType===2 || lastType===3 || lastType===4) && !(lastTwoTypes>=11 && lastTwoTypes<=14)){
        return "дня";
    } else{
        return "дней";
    }
}

button.addEventListener("click", ()=>{
    const birthdayInputValue=birthdayInput.value;
    const errorMessageElement=document.getElementById("errorMessage");

    errorMessageElement.innerHTML="";

    if (!birthdayInputValue){
        errorMessageElement.innerHTML+= "Ваша дата рождения не заполнена";
        return;
    }

    if (resultParagraph){
        resultParagraph.remove();
    } 

    const date= new Date(); 
    let birthdate= new Date(birthdayInputValue);

    birthdate.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);

    if (birthdate<date){
        resultParagraph=document.createElement("p");
        button.after(resultParagraph);
        resultParagraph.textContent="Ваш день рождения уже прошел. Поздравляем!";
        return;
    }

    if (birthdate.getTime()===date.getTime()){
        resultParagraph=document.createElement("p");
        button.after(resultParagraph);
        resultParagraph.textContent="Ваш День рождения сегодня! Поздравляем!";
        return;
    }
    
    let difference=Math.ceil((birthdate-date)/(1000*60*60*24));

    const dayForm=getDayForm(difference);

    resultParagraph=document.createElement("p");
    button.after(resultParagraph);
    resultParagraph.textContent=`До вашего Дня рождения осталось: ${difference} ${dayForm}`;
})
