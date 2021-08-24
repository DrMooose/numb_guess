//global variables
var start_menu = document.getElementById("start");
var name_menu = document.getElementById("name"); 
var select_menu = document.getElementById("difficulty");     
var play_menu = document.getElementById("play");
var end_menu = document.getElementById("end");
var player_number;


//change to name screen
function change1() {
    start_menu.style.display = "none";
    name_menu.style.display = "block";
}

//change to select screen
function change2() {
    name_menu.style.display = "none";
    select_menu.style.display = "block";
    player_name = document.getElementById("player").value;
    document.getElementById("you").innerHTML = player_name;
    return player_name;
}

//chooses number based on selection
//use better names
var number;
function e(){
    number = Math.floor(Math.random() * 11);
    document.getElementById("tip").innerHTML = "number is between 0 and 10";
    guess();
    change3();
}

function m(){
    number = Math.floor(Math.random() * 51);
    document.getElementById("tip").innerHTML = "number is between 0 and 50";
    guess();
    change3();
}

function h(){
    number = Math.floor(Math.random() * 101);
    document.getElementById("tip").innerHTML = "number is between 0 and 100";
    guess();
    change3();
}

//change to play screen
function change3() {
    select_menu.style.display = "none";
    play_menu.style.display = "block";
}

var player_number;

//number checker
function guess() {

    player_number = document.getElementById("player_guess").value;
    
    if (player_number == number) {
        play_menu.style.display = "none";
        end_menu.style.display = "block";
        document.getElementById("answer").innerHTML = number;
    }

    else if (player_number > number) {
        document.getElementById("check").innerHTML = " too high";
    }

    else if (player_number < number) {
        document.getElementById("check").innerHTML = "too low";
    }

    else {
        document.getElementById("check").innerHTML = "please enter a number";
    }

}

//tracks number of attempts
var attempts = 0;
document.getElementById("trys").innerHTML = 0;
document.getElementById("tracker").addEventListener("click", function() {
    attempts++;
    document.getElementById("trys").innerHTML = attempts;
    document.getElementById("trys2").innerHTML = attempts;
});

/*broken for loop
for (var attempts = 0; player_number != number; attempts++) */

//repeat for incorrect
while (player_number != number) {
  guess();
}

//goes back to either select screen or start
//use parameters to shorten
function yes() {
    end_menu.style.display = "none";
    change2();
    attempts = 0;
    document.getElementById("trys").innerHTML = 0;
}

function no() {
    end_menu.style.display = "none";
    start_menu.style.display = "block";
    attempts = 0;
    document.getElementById("trys").innerHTML = 0;
}
