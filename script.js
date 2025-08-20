// document.addEventListener("DOMContentLoaded",function(){
//     const container=document.getElementsByClassName("container");
//     const usercon=document.getElementsByClassName("usercon");
//     const stats=document.getElementsByClassName("stats");
//     const pitems=document.getElementsByClassName("pitems");
//     const statsjs=document.getElementsByClassName("statjs");
//     const uname=document.getElementById("uname");
//     const sbutt=document.getElementById("sbutt");
//     const easy=document.getElementById("easy");
//     const medium=document.getElementById("medium");
//     const hard=document.getElementById("hard");
//     const easyprogresscircle=document.querySelector(".easy-progress");
//     const mediumprogresscircle =document.querySelector(".medium-progress");
//     const hardprogresscirle=document.querySelector(".hard-progress");
//     const circle=document.getElementsByClassName("circle");
//     const usernaam=document.getElementById("user");
//     sbutt.addEventListener("click", function () {
//     const username = usernaam.value.trim(); // get string value
//     console.log(username);
//     if (validateuname(username)) {   // pass string instead of element
//         fetchdetail(username);
//     }
// });

// const { map } = require("lodash");

// function validateuname(username) {
//     if (username === "") {
//         alert("Username can not be empty");
//         return false;
//     }
//     const regex = /^[a-zA-Z0-9_-]{1,15}$/;
//     const isMatching = regex.test(username);
//     if (!isMatching) {
//         alert("Invalid Username");
//     }
//     return isMatching;
// }

// async function fetchdetail(username) {
//     // Note: your URL was also wrong
//     const url = "https://leetcode.com/graphql/"
//     const proxyurl="https://cors-anywhere.herokuapp.com/";
//     try {
//         sbutt.textContent="Searching..";
//         sbutt.disabled=true;
//         const myheaders=new Headers();
//         myheaders.append("content-type","application/json");
//         const graphql=JSON.stringify({
//             query: 
//                 "\n    query userProfileUserQuestionProgressV2($userSlug: String!) {\n  userProfileUserQuestionProgressV2(userSlug: $userSlug) {\n    numAcceptedQuestions {\n      count\n      difficulty\n    }\n    numFailedQuestions {\n      count\n      difficulty\n    }\n    numUntouchedQuestions {\n      count\n      difficulty\n    }\n    userSessionBeatsPercentage {\n      difficulty\n      percentage\n    }\n    totalQuestionBeatsPercentage\n  }\n}\n    ",variables:{"userSlug":`${username}`}
//         })
//         const requestopt={
//             method:"POST",
//             headers:myheaders,
//             body:graphql,
//             redirect:"follow"
//         };
//         const response = await fetch(proxyurl+url,requestopt);
//         if (!response.ok) {
//             throw new Error("Unable to fetch your details");
//         }
//         const parseddata = await response.json();
//         console.log("Logging Data:",parseddata);
//         displayuserdetail(parseddata);
//     } catch (err) {
//         statsjs[0].innerHTML=`<p>No data found</p>`
//     }
//     finally{
//         sbutt.textContent="search";
//         sbutt.disabled=false;
//     }
// }
// function displayuserdetail(parseddata){
//     const totaleasyque=parseddata.data.userProfileUserQuestionProgressV2.numUntouchedQuestions[0].count;
//      const totalmediumque=parseddata.data.userProfileUserQuestionProgressV2.numUntouchedQuestions[1].count;
//       const totalhardque=parseddata.data.userProfileUserQuestionProgressV2.numUntouchedQuestions[2].count;

//       const solvedeasyque=parseddata.data.userProfileUserQuestionProgressV2.numAcceptedQuestions[0].count;
//      const solvedmediumque=parseddata.data.userProfileUserQuestionProgressV2.numAcceptedQuestions[1].count;
//       const solvedhardque=parseddata.data.userProfileUserQuestionProgressV2.numAcceptedQuestions[2].count;

//       updateprogress(solvedeasyque,totaleasyque,easy,easyprogresscircle);
//       updateprogress(solvedmediumque,totalmediumque,medium,mediumprogresscircle);
//       updateprogress(solvedhardque,totalhardque,hard,hardprogresscircle);
// }
document.addEventListener("DOMContentLoaded",function(){
    const container=document.getElementsByClassName("container");
    const usercon=document.getElementsByClassName("usercon");
    const stats=document.getElementsByClassName("stats");
    const pitems=document.getElementsByClassName("pitems");
    const statsjs=document.getElementsByClassName("statjs");
    const uname=document.getElementById("uname");
    const sbutt=document.getElementById("sbutt");
    const easy=document.getElementById("easy");
    const medium=document.getElementById("medium");
    const hard=document.getElementById("hard");
    const easyprogresscircle=document.querySelector(".easy-progress");
    const mediumprogresscircle =document.querySelector(".medium-progress");
    const hardprogresscirle=document.querySelector(".hard-progress");
    const circle=document.getElementsByClassName("circle");
    const usernaam=document.getElementById("user");
    sbutt.addEventListener("click", function () {
    const username = usernaam.value.trim(); // get string value
    console.log(username);
    if (validateuname(username)) {   // pass string instead of element
        fetchdetail(username);
    }
});

function validateuname(username) {
    if (username === "") {
        alert("Username can not be empty");
        return false;
    }
    const regex = /^[a-zA-Z0-9_-]{1,15}$/;
    const isMatching = regex.test(username);
    if (!isMatching) {
        alert("Invalid Username");
    }
    return isMatching;
}

async function fetchdetail(username) {
    // Note: your URL was also wrong
    const url = "https://leetcode.com/graphql/"
    const proxyurl="https://cors-anywhere.herokuapp.com/";
     statsjs[0].innerHTML = `<p>Loading...</p>`;
    try {
        sbutt.textContent="Searching..";
        sbutt.disabled=true;
        const myheaders=new Headers();
        myheaders.append("content-type","application/json");
        const graphql=JSON.stringify({
            query: 
                "\n    query userProfileUserQuestionProgressV2($userSlug: String!) {\n  userProfileUserQuestionProgressV2(userSlug: $userSlug) {\n    numAcceptedQuestions {\n      count\n      difficulty\n    }\n    numFailedQuestions {\n      count\n      difficulty\n    }\n    numUntouchedQuestions {\n      count\n      difficulty\n    }\n    userSessionBeatsPercentage {\n      difficulty\n      percentage\n    }\n    totalQuestionBeatsPercentage\n  }\n}\n    ",variables:{"userSlug":`${username}`}
        })
        const requestopt={
            method:"POST",
            headers:myheaders,
            body:graphql,
            redirect:"follow"
        };
        const response = await fetch(proxyurl+url,requestopt);
        if (!response.ok) {
            throw new Error("Unable to fetch your details");
        }
        const parseddata = await response.json();
        console.log("Logging Data:",parseddata);
        displayuserdetail(parseddata);
    } catch (err) {
        statsjs[0].innerHTML=`<p>No data found</p>`
    }
    finally{
        sbutt.textContent="search";
        sbutt.disabled=false;
    }
}
function displayuserdetail(parseddata){
    const totaleasyque=parseddata.data.userProfileUserQuestionProgressV2.numUntouchedQuestions[0].count;
     const totalmediumque=parseddata.data.userProfileUserQuestionProgressV2.numUntouchedQuestions[1].count;
      const totalhardque=parseddata.data.userProfileUserQuestionProgressV2.numUntouchedQuestions[2].count;

      const solvedeasyque=parseddata.data.userProfileUserQuestionProgressV2.numAcceptedQuestions[0].count;
     const solvedmediumque=parseddata.data.userProfileUserQuestionProgressV2.numAcceptedQuestions[1].count;
      const solvedhardque=parseddata.data.userProfileUserQuestionProgressV2.numAcceptedQuestions[2].count;

      console.log(totalhardque);

      updateprogress(solvedeasyque,totaleasyque,easy,easyprogresscircle);
      updateprogress(solvedmediumque,totalmediumque,medium,mediumprogresscircle);
      updateprogress(solvedhardque,totalhardque,hard,hardprogresscirle);


      const cardsdata=[
        {label:"Total Submission :",value:parseddata.data.userProfileUserQuestionProgressV2.numAcceptedQuestions[0].count+parseddata.data.userProfileUserQuestionProgressV2.numAcceptedQuestions[1].count+parseddata.data.userProfileUserQuestionProgressV2.numAcceptedQuestions[2].count},
        {label:"Easy Submission :",value:parseddata.data.userProfileUserQuestionProgressV2.numAcceptedQuestions[0].count},
        {label:"Medium Submission :",value:parseddata.data.userProfileUserQuestionProgressV2.numAcceptedQuestions[1].count},
        {label:"Hard Submission :",value:parseddata.data.userProfileUserQuestionProgressV2.numAcceptedQuestions[2].count},
      ]
      console.log(cardsdata);

      statsjs[0].innerHTML=cardsdata.map(
        data=>
         `<div class=cards>
            <h4>${data.label}</h4>
            <p>${data.value}</p>
         </div> `
      ).join("")
}
function updateprogress(solve,total,label,circle){
    const progressdegree=(solve/total)*100;
    circle.style.setProperty("--progress-degree",`${progressdegree}%`)
    label.textContent=`${solve}/${total}`;
}

})




