var a = 0;
function addElement(){
    document.getElementById("deleteAll").style.visibility = "visible";

    var txt = document.getElementById("in");
    var check = document.createElement("input");
    check.type = "checkbox";
    check.id = "checker" + a;
    check.onclick = function check_changed(){
        var par = this.parentNode.id;
        var out_txt = document.getElementById(par).querySelector("#out");
        if (this.checked == true)
            out_txt.style.textDecoration = "line-through";
        else
            out_txt.style.textDecoration = "none";
    }
    var todotxt = document.createElement("p");
    todotxt.id = "out";
    todotxt.innerHTML = txt.value;
    var btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.id = "delete";
    btn.className = "button";
    btn.onclick = function deleteTodo(){
        var parent = this.parentNode.id;
        document.getElementById(parent).remove();
        buttonVisibility();
    }
    var div_new = document.createElement("div");
    div_new.id = "item" + a;
    div_new.appendChild(check);
    div_new.appendChild(todotxt);
    div_new.appendChild(btn);
    var alldivs = document.getElementById("items");
    alldivs.appendChild(div_new);
    txt.value = "";
    a = a + 1;
}

function deleteAll(){
    var checkers = document.getElementById("items").getElementsByTagName("input");
    for (var i = 0; i < checkers.length; i++){
        if (checkers[i].type == "checkbox" && checkers[i].checked==true){
            document.getElementById(checkers[i].parentNode.id).remove();
            i--;
        }
    }
    buttonVisibility();
}

function buttonVisibility(){
    if(document.getElementById("items").getElementsByTagName("input").length == 0){
        document.getElementById("deleteAll").style.visibility = "hidden";
    }
}

