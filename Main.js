function display(val){
    document.getElementById('input').value +=val
}
function calculate(){
    var a = document.getElementById('input').value
    var b = eval(a)
    document.getElementById('input').value = b
}

function sin(){
    var a = document.getElementById('input').value
    var b = Math.sin(a* Math.PI / 180)
    document.getElementById('input').value = b

}

function cos(){
    var a = document.getElementById('input').value
    var b = Math.cos(a* Math.PI/180)
    document.getElementById('input').value = b
}
function tan(){
    var a = document.getElementById('input').value
    var b = Math.tan(a* Math.PI/180)
    document.getElementById('input').value = b
}
function pow(){
    var a = document.getElementById('input').value
    var b = Math.pow(a* Math.pow/180)
}

function clearDisplay(){
    document.getElementById('input').value = ""
}
function del(){
    document.getElementById('input').value = ""
}