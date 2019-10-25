// {/* <div class="lds-roller">
//     <div></div>
//     <div></div>
//     <div></div>
//     <div></div>
//     <div></div>
//     <div></div>
//     <div></div>
//     <div></div>
// </div> */}
var maindiv = document.createElement("div");
maindiv.setAttribute("class", "spinner");

var roll = document.createElement("div");
roll.setAttribute("id", "lds-roller");
// 8
var div1 = document.createElement("div");
var div2 = document.createElement("div");
var div3 = document.createElement("div");
var div4 = document.createElement("div");
var div5 = document.createElement("div");
var div6 = document.createElement("div");
var div7 = document.createElement("div");
var div8 = document.createElement("div");

roll.appendChild(div1);
roll.appendChild(div2);
roll.appendChild(div3);
roll.appendChild(div4);
roll.appendChild(div5);
roll.appendChild(div6);
roll.appendChild(div7);
roll.appendChild(div8);

maindiv.appendChild(roll);
