let number1= document.querySelector(".number1")
let number2= document.querySelector(".number2")
let signe1 = document.querySelector(".signe")
let resresult = document.querySelector("#result")
let button = document.querySelector('.button')
let equal = document.querySelector(".eql")
let delete1 = document.querySelector(".delete")
let historique1 = document.querySelector(".historique")
let hist = document.querySelector(".history") 
let allhisory = document.querySelector(".allhisory")
let result = ""
let claire = document.querySelector(".claire")
let btnh = document.querySelector(".btnh")
let resHistory = [0]
number1.textContent = ""
number2.textContent = ""
signe1.textContent = ""
resresult.textContent = ""
let one = ""
let two = ""
let three = ""
let un = ""
let deux = ""
let trois = ""
let somme = function(a,b){
   return a + b
}
let moins = function(a,b){
   return a - b
}
let division = function(a,b){
   return a / b
}
let multiple = function(a,b){
   return a * b
}
button.addEventListener("click",function(e){
    let trg = e.target;
    let number = trg.dataset.num
    let signe = trg.dataset.btn
    let a =""
    let b =""
    let finneshed = false
   if(trg.classList.contains("btn")){
       if(number){
           if(signe1.innerHTML == ""){
               number1.innerHTML += number
            }else
            {
               number2.innerHTML += number
                finneshed = true
           }
        }else if(signe){
            signe1.innerHTML += signe
        }
        // function
        if(finneshed){
            resresult.innerHTML=""
            a = +number1.textContent
            b = +number2.textContent
            resHistory.push(a)
            let operation = signe1.textContent
            // add operation and check signe
            let s =""
            if(operation =="+"){
                s =  somme(a,b)
            } else if(operation =="-"){
                s = moins(a,b) 
            }else if(operation =="*"){
                s = multiple(a,b)
            }else if(operation =="/"){
                s= division(a,b)
            }
          resresult.innerHTML += s
          
            resHistory.push(s)
        }
    }
    if(trg.classList.contains("opr")){
    if(resresult.innerHTML!=""){
        number1.innerHTML= resresult.textContent
        number2.innerHTML=""
        signe1.innerHTML=""
        // function
        if(number){
            if(signe1.innerHTML == ""){
                number1.innerHTML += number
             }else
             {
                number2.innerHTML += number
                 finneshed = true
            }
         }else if(signe){
             signe1.innerHTML += signe
         }
         // function
    }else
    {
        return
    }
    }
})
claire.addEventListener("click",function(){
    number1.innerHTML=""
    number2.innerHTML=""
    signe1.innerHTML=""
    resresult.innerHTML = ""
    one = ""
    two = ""
    three = ""
    resHistory = [0]
})
equal.addEventListener("click",function(){
    if(resresult.innerHTML != ""){
        let c = (`${number1.textContent}  ${signe1.textContent}  ${number2.textContent} = ${resresult.textContent}`)
        number1.innerHTML=""
        number2.innerHTML=""
        signe1.innerHTML=""
        number1.innerHTML = resresult.textContent
        resresult.innerHTML=""
            let hit = ` <div class="py-5 px-0 border-y-[1px] border-[#242530] border-solid">
            ${c}
        </div>` 
        allhisory.insertAdjacentHTML("beforeend",hit)
        historique1.classList.add("text-[gold]")
    }else
    {
        return
    }
}
)
delete1.addEventListener("click",function(){
    one = number1.textContent
    un = one.length
    three = number2.textContent
    trois = three.length
    two = signe1.textContent
    deux = two.length
    if(un>0 && deux == 0){
    un--
    let new1 =  one.slice(0,un)
        number1.innerHTML = ""
        number1.innerHTML += new1
        resresult.innerHTML =""
   }else if(un>0  && deux > 0 && trois == 0){
    deux--
    let new2 =  two.slice(0,deux)
    signe1.innerHTML = ""
    signe1.innerHTML += new2
    if(deux == 0){
        resresult.innerHTML = resHistory[resHistory.length - 1] 
        resHistory.pop(resHistory.length - 1)
        // console.log(resHistory)
    }
   }else if(un>0  && deux > 0  && trois > 0){
    trois--
    let new3 =  three.slice(0,trois)
    number2.innerHTML = ""
    number2.innerHTML += new3
    if(trois == 0){
        resresult.innerHTML = resHistory[resHistory.length - 2] 
        resHistory.pop(resHistory.length - 1)
    }
   }
})
historique1.addEventListener('click',function(){
    if(hist.classList.contains("show")){
        hist.classList.remove("show")
        hist.style.left = "-380px"
    }else{
        hist.classList.add("show")
        hist.style.left = "0"

    }
}
)
btnh.addEventListener('click',function(){
    allhisory.textContent= ""
    hist.classList.remove("show")
    hist.classList.add("right-[380px]")
    hist.classList.remove("left-0")
    historique1.style.color = "white"
})