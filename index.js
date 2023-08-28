const inputEl= document.getElementById("result");
const buttonsEl= document.querySelectorAll("button");

for(let i=0; i <buttonsEl.length; i++){
    buttonsEl[i].addEventListener("click", ()=>{
       const buttonValue= buttonsEl[i].textContent;
       if(buttonValue==="AC"){
        clearResult();
       }

       else if(buttonValue==="="){
        calculateResult();
       }

       else if(buttonValue==="⌫"){
        clearOne();
       }

       else{
        appendValue(buttonValue);
       }
    });

}
function clearResult(){
 inputEl.value="";
};

function calculateResult(){
    inputEl.value = eval(inputEl.value); 


};

function appendValue(buttonValue){
    inputEl.value += buttonValue;

};

function clearOne(){
    inputEl.value= inputEl.value.slice(0,-1);
}