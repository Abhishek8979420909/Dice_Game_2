let img_list = ["./assests/one.png","./assests/two.png","./assests/three.png","./assests/four.png","./assests/five.png","./assests/six.png"];
let random_number_1 = Math.floor(Math.random()*5);
let random_number_2 = Math.floor(Math.random()*5);
let img_1 = document.querySelector(".img1");
img_1.setAttribute("src",img_list[random_number_1]);
let img_2 = document.querySelector(".img2");
img_2.setAttribute("src",img_list[random_number_2]);

if (random_number_1 > random_number_2){
    document.querySelector("h1").innerHTML="Congratulation! Player_1 Won the Game";
}
else if (random_number_1 == random_number_2){
    document.querySelector("h1").innerHTML="Match Was Draw";
}
else{
    document.querySelector("h1").innerHTML="Congratulation! Player_2 Won the Game";
}