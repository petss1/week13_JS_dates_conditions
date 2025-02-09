const correctName=(input)=>{
    const first=input.trim();
    const rightText=first.charAt(0).toUpperCase()+first.slice(1).toLowerCase();
    const second=rightText.replace(/viagra|xxx/gi,"***");
    return second;
}
const otherName=correctName("иВаН");

const chooseAvatars=[
    "./assets/images/ava1.avif",
    "./assets/images/ava2.avif",
    "./assets/images/ava3.avif",
    "./assets/images/ava4.avif",
    "./assets/images/ava5.avif",
];

function answerClick(){
    const userName=document.getElementById("userName").value;
    const userAvatar=document.getElementById("userAvatar").value;
    const userComment=document.querySelector(".user_comment").value;
    const showName=document.getElementById("showNameCheckbox").checked;

    const fixedName=correctName(userName || "username");
    const fixedComment=correctName(userComment);

    const avatarType=userAvatar || chooseAvatars[Math.floor(Math.random()*chooseAvatars.length)];

    const currentDate=new Date();
    const day=currentDate.getDate(); 
    const month=currentDate.getMonth() + 1; 
    const year=currentDate.getFullYear();
    const hours=currentDate.getHours(); 
    const minutes=currentDate.getMinutes(); 
    const formDate=`${day}.${month < 10 ? '0' + month : month}.${year} ${hours}:${minutes < 10 ? '0' + minutes : minutes}`;

    const messageDiv=document.createElement("div");
    messageDiv.classList.add("message");
    
    const avatarImg=document.createElement("img");
    avatarImg.src=avatarType; 
    avatarImg.alt="Avatar";
    avatarImg.style.width="120px";
    avatarImg.style.height="120px";
    messageDiv.appendChild(avatarImg);

    if (showName){
        const nameElement=document.createElement("b");
        nameElement.textContent=fixedName;
        messageDiv.appendChild(nameElement);
    }

    messageDiv.innerHTML+=`: ${fixedComment}`;

    const dateParagraph=document.createElement("p");
    dateParagraph.classList.add("comment-date");
    dateParagraph.textContent=`${formDate}`;
    messageDiv.appendChild(dateParagraph);
    
    document.getElementById("chatContainer").appendChild(messageDiv);
    
    document.getElementById("userName").value="";
    document.getElementById("userAvatar").value="";
    document.querySelector(".user_comment").value="";
}

document.getElementById("submitСomment").addEventListener("click",answerClick);
