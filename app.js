function inputValue(value){
    var input = document.getElementById("input")
    input.value += value;
}
function allClear(){
    var input = document.getElementById("input")
    input.value = ""
}
function result(){
    var input = document.getElementById("input")
    var ans = eval(input.value)
    console.log("answer",ans)
    input.value = ans 
}

function removeValue(){
    var input = document.getElementById("input");
    var copy = input.value.slice(0,-1)
    console.log("copy",copy)
    input.value = copy
    
}
   
