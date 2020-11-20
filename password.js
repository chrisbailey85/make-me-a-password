
function generatePassword(num, regex){
    let password = "";
    let replace = "[" + regex + "]" || "";
    let re = new RegExp(replace,"g");
    // let passwordArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M"]
    let passwordString = "ABCDEFGHIJKLMNOPQURSTWXYZabcdefghijklmnopqurstwxyz0123456789+*<>?@}{)(&^%$£!";
    console.log(re)
    for(let i = 0; i < num; i++){
        let index = Math.floor(Math.random() * passwordString.length)
        if(replace !== ""){
            if(passwordString.charAt(index).match(re)){
                i--
            } else{
                password += passwordString.charAt(index);
            }
        } else {
            password += passwordString.charAt(index);
        }
        
    
        
    }
    console.log(password)
    document.querySelector(".password").textContent = password;
}

document.querySelector("button").addEventListener("click", (e)=>{
    let num = document.querySelector("#number").value;
    let regex = document.querySelector("#regex").value;
    generatePassword(num, regex);
    e.preventDefault();
})
