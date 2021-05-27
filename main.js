menu_list_array = ["Veg Margherita Pizza","Cheese pizza","Pepperoni pizza","Hawaiian","Cowboy Special"
                    ];

function getmenu(){
var htmldata;
htmldata="<ol class='memulist'>"
memu_list_array.sort();
for(var i=0;i<memu_list_array.length;i++){
     htmldata=htmldata+'<li>'+memu_list_array[i]+'</li>'
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML=htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();

htmldata="<section class='cards'>"
for(var i=0; i<menu_list_array.length; i++){
    htmldata=htmldata+'<div class="card">'+'<img src="images/pizzaImg.png"/>'+menu_list_array[i]+'</div>'
}
    htmldata=htmldata+"</section>"
    document.getElementById("display_addmenu").innerHTML=htmldata;

}

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    add_item();

}