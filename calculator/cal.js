
function insert(num){
    var NUM = document.querySelector(".textview");
    NUM.value = String(NUM.value) + num;
}

function equals(){
  let sum = eval(document.querySelector(".textview").value);
  document.querySelector(".textview").value = sum;
    
}

function clean(){
    document.querySelector(".textview").value = "";
}

function back(){
    if(document.querySelector(".textview").value !== ""){
        let newArray = String(document.querySelector(".textview").value).split("");
        newArray.pop();
        let final = new String();
        for(const o of newArray){
            final = final + o;
        }
        document.querySelector(".textview").value = final;
    }
}