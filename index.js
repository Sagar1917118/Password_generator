const passDisplay=document.querySelector("[pDisplay]");
const copyIcon=document.querySelector("#copyIcon");
const copyIconSpan=document.querySelector("#copyIconSpan");
const passLength=document.querySelector("#pLength");
const PassSlider=document.querySelector("#myRange");
const List=document.querySelectorAll('input[type="checkbox"]');
const Bulb=document.querySelector("[pStrength]");
const PassGenerate=document.querySelector("[pGenerate]");
let passwordLength=10;
passLength.innerText=passwordLength;
// sider control
function handelSlider(){
  // here e is the event which is generated for the slider
  passLength.innerText=passwordLength;
  PassSlider.value=passwordLength;
}
// ----
PassSlider.addEventListener("input",function (e){
  passwordLength=e.target.value;
  handelSlider();
});
// ALternate function
// PassSlider.oninput =function(){
//     passLength.innerText=this.value;
//     passwordLength=this.value;
// }
// -----
// randam Number generator
function randNumber(min,max){
      let x=Math.floor(Math.random()*(max-min)+min);
      return x.toString();
}
function randNUMBER(){
  let y=(randNumber(0,9));
 //  console.log(y);
 return y;
}
function randUpperLetter(){
       let y=String.fromCharCode(randNumber(65,90));
      //  console.log(y);
      return y;
}
function randLowerLetter(){
  let y=String.fromCharCode(randNumber(97,122));
  // console.log(y);
  return y;
}
let str=`!@#$%^&*()_-+={}[]\|;':",./<>?`
let l=str.length;
function randSymbol(){
  let y=str[randNumber(0,l-1)];
  // console.log(y);
  return y;
}
function strengthCheck(){
     if(passwordLength>=10&&(List[0].checked||List[1].checked)&&(List[2].checked||List[3].checked)){
      Bulb.style.backgroundColor="#0ef025";
      Bulb.style.boxShadow="1px 1px 10px 1px #0ef025";
     }
     else if(passwordLength<=4){
      Bulb.style.backgroundColor="#fa0707";
      Bulb.style.boxShadow="1px 1px 10px 1px #fa0707";
     }
     else if(!List[0].checked&&!List[1].checked&&!List[2].checked&&!List[3].checked){
      Bulb.style.backgroundColor="#fa0707";
      Bulb.style.boxShadow="1px 1px 10px 1px #fa0707";
     }
     else if(List[0].checked&&!List[1].checked&&!List[2].checked&&!List[3].checked){
      Bulb.style.backgroundColor="#fa0707";
      Bulb.style.boxShadow="1px 1px 10px 1px #fa0707";
     }
     else if(!List[0].checked&&List[1].checked&&!List[2].checked&&!List[3].checked){
      Bulb.style.backgroundColor="#fa0707";
      Bulb.style.boxShadow="1px 1px 10px 1px #fa0707";
     }
     else if(!List[0].checked&&!List[1].checked&&List[2].checked&&!List[3].checked){
      Bulb.style.backgroundColor="#fa0707";
      Bulb.style.boxShadow="1px 1px 10px 1px #fa0707";
     }
     else if(!List[0].checked&&!List[1].checked&&!List[2].checked&&List[3].checked){
      Bulb.style.backgroundColor="#fa0707";
      Bulb.style.boxShadow="1px 1px 10px 1px #fa0707";
     }
     else if((List[2].checked&&List[3]&&List[0].checked||List[1].checked)||(List[0].checked&&List[1].checked&&List[2]||List[3])){
      Bulb.style.backgroundColor="#fabd07";
      Bulb.style.boxShadow="1px 1px 10px 1px #fabd07";  
     }
     else{
      Bulb.style.backgroundColor="#fabd07";  
      Bulb.style.boxShadow="1px 1px 10px 1px #fabd07";
     }
} 
let checkedItems;
function createPassword(){
  flag0=List[0].checked;
  flag1=List[1].checked;
  flag2=List[2].checked;
  flag3=List[3].checked;
  checkedItems=0;
  let arr=[];
     if(flag0){
     arr.push(randUpperLetter);
     checkedItems +=1;
     }
     if(flag1){
      arr.push(randLowerLetter);
      checkedItems +=1;
     }
     if(flag2){
      arr.push(randNUMBER);
      checkedItems +=1;
     }
     if(flag3){
      arr.push(randSymbol);
      checkedItems +=1;
     }
     if(checkedItems==0){
      passDisplay.innerText="";
     }
     else{
     console.log(arr);
    //  ---------------------------------------------
    if(passwordLength<checkedItems){
      passwordLength=checkedItems;
      passLength.innerText=checkedItems;
      // maintain slider when length is less than number of checked checkboxes
      handelSlider();
    }
    let Size=arr.length;
    let count=passwordLength;
    let ans="";
    while(count--){
      let x=Math.floor(Math.random()*Size);
      ans +=arr[x]();
    }
    passDisplay.innerText=ans;
    console.log(ans);
  }
    
}
// ===
PassGenerate.addEventListener("click",function(){
    createPassword();
    strengthCheck()
});
// ===
// copy Button funtion
copyIcon.addEventListener("click",copyPassword);
async function copyPassword(){
      try{
      if(passDisplay.innerText==""||passDisplay.innerText=="PASSWORD")
      throw(e);
      await navigator.clipboard.writeText(passDisplay.innerText);
      copyIconSpan.innerText="copied";
      copyIconSpan.style.display="block";
      setTimeout(()=>{
      copyIconSpan.style.display="none";
      },1500);
      }
      catch(e){
        copyIconSpan.innerText="failed";
        copyIconSpan.style.display="block";
        setTimeout(()=>{
        copyIconSpan.style.display="none";
        },1500);
      }

}




