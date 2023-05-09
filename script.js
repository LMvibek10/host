document.getElementById("parent").innerHTML=("My name is Vibek Rana Magar")

document.getElementById("parent").style.cssText=("background-color:red; color:black;text-align:center");

document.getElementsByClassName("exercise")[0].innerHTML=("My name is Vibek Rana Magar");

document.getElementsByClassName("exercise")[0].style.cssText=("background-color:red; color:black;text-align:center");

document.getElementsByClassName("exercise")[1].style.cssText=("background-color:green; color:black;text-align:center");

document.getElementsByClassName("exercise")[2].style.cssText=("background-color:aqua; color:black;text-align:center");

document.getElementsByClassName("exercise")[3].style.cssText=("background-color:purple; color:black;text-align:center");

document.getElementsByTagName("h1")[0].style.cssText=("background-color:pink; color:black;text-align:center");

document.getElementsByTagName("h1")[1].style.cssText=("background-color:black; color:black;text-align:center");

document.getElementsByTagName("h1")[2].style.cssText=("background-color:yellow; color:black;text-align:center");

document.getElementsByTagName("h1")[3].style.cssText=("background-color:red; color:black;text-align:center");

document.querySelector("h2").style.cssText=("background-color:pink; color:purple;text-align:center;text-transform:uppercase");

document.querySelector("#hi").style.cssText=("background-color:purple; color:pink;text-align:center;text-transform:lowercase");

document.querySelector(".hey").style.cssText=("background-color:green; color:white;text-align:center");

const change = document.querySelectorAll("h3");
for(i=0;i<=change.length;i++){
    change[i].innerHTML=("I am Vibek Rana Magar.");
    change[i].style.cssText=("background-color:aqua; color:brown; text-align:center; text-transform:uppercase");
}

function myfunction(){
    document.open();
    document.write("<h1>Hello World</h1>")
    document.close()
}