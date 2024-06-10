const inputText = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");



function checkPalindrome(input){
  let pal = [...input].filter(x => x.match(/[a-z0-9]/i)).map(x => x.toLowerCase())
  
  let testpal = pal.slice().reverse()

  for (let i = 0; i < pal.length; i++){
    if(pal[i] !== testpal[i]){
      result.innerHTML = `<p><strong>${input}</strong> is not a palindrome</p>`
      return false;
    }
  } 
  result.innerHTML = `<p><strong>${input}</strong> is a palindrome</p>`
    return true;
}

inputText,addEventListener("keypress", (event)=>{
    if(event.key =="Enter"){
        event.preventDefault();
        document.getElementById("check-btn").click();
    }
})

checkButton.addEventListener("click", ()=>{
  if(inputText.value === ""){
    alert("Please input a value")
  } else(
    checkPalindrome(inputText.value)
  )
})
