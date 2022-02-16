thinkNum = 13;
let wrongAns = [];

userAns = prompt(`Think of a number between 1 and 15`);


while(userAns != thinkNum)
{
  wrongAns.push(1)
  alert(`I'm sorry ${userAns} was not the number please try again!`)
    userAns = prompt("Think of a number between 1 and 15");

}
alert(`That's right! ${userAns} was correct!`);

var name = window.prompt("Hey, you have a name?")
alert("Hey " + name + ", nice to chat with you!")
//

userAns = prompt("I'd like to ask you some questions, is that ok?");
alert("Ok, let's move along please!");
//

 userAns = prompt("Are there seven days in a week?").toLowerCase();

 while(userAns != "yes")
{
  wrongAns.push(1)
    alert('Incorrect...');
    userAns = prompt("Are there seven days of the week?");
}
alert("That's right! There are seven days in a week!");
//

userAns = prompt("Is an Ostrich a bird?").toLowerCase();

 while(userAns != "yes")
{
  wrongAns.push(1)
    alert('Incorrect...');
    userAns = prompt("Is an Ostrich a bird?");
}
alert("Wow, you might be smarter than most people!");
//

userAns = prompt("Can candy cause cavities?").toLowerCase();

 while(userAns != "yes")
{
  wrongAns.push(1)
    alert('Incorrect...');
    userAns = prompt("Can candy cause cavities?");
}
alert("Wow. Ok, next question!");
//

userAns = prompt("Did Steve Jobs create the Mac computer?").toLowerCase();

while(userAns != "yes")
{
  wrongAns.push(1)
    alert('Incorrect...');
    userAns = prompt("Did Steve Jobs create the Mac computer?");
}
alert("Wow...Just wow!")
//
 userAns = prompt("Do you speak another language?").toLowerCase();
alert("Ok, that's all I have to ask, " + name + " Thank you!")
//

var questions = 7;

alert(`You got an answer wrong ${wrongAns.length} times out of ${questions}!`);

//