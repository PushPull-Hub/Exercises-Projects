let Confirmation1 = confirm(
  "Hee , I'm Lucie ... a simple system can creat a simple kind of discussion with the user , Press ok to confirm "
);

let answer = prompt(
  "Heeeee ,Thanks for enjoying me :D , can you tell me ur name user !! "
);
if (answer === `Lucie`) {
  alert(
    `oooooh Lucie Like me :> , nice to meet you Lucie , you know ?? inside my sysytem my developer put a rule make me discuss only with Adults `
  );
}
if (answer !== `Lucie`)
  alert(
    `Heeeeey ${answer} , Nice to meet you , inside my sysytem my developer put a rule make me discuss only with Adults   `
  );
let Confirmation2 = confirm(" So Are you an Adult then ??");

let age = prompt("Nice , How old are you ??");

if (age.indexOf("fuck you" || "mothefucker" || "shit") >= 0) {
  age = prompt(
    " I thought you're smarter than insulting a machine :/ ,but I'll accept an appology :) "
  );

  if (age === ("Sorry" || "I appologize")) {
    age = prompt(
      "I'm still a machine to understand this stuffs , but your appology is accepted now tell me your age :)"
    );
  }
}

if (age >= 18) {
  alert(`Hee you're ${age} years old ...So You Can Enjoy me ;) `);
} else if (age <= 18 && age > 0) {
  alert(
    `ooooh  ${age}  is not an adult  you're still young , unfortunately i don't have a tool for kids yet ;( `
  );
  prompt(`Tell Me You Age`);
  alert(
    `Hahahahaha , my developer programmed me to deal with that , you already said you're ${age} years old... `
  );
} else if (age == 0) {
  alert(`see you in 2038 ;) `);
} else if (age < 0) {
  alert(
    "you have " +
      (-parseInt(age) + 18) +
      "years in afront of you pale to enjoy me "
  );
} else if (age === ("Hello" || "Goodmorning")) {
  prompt(`${age} to you too but I need to know your age :D`);
} else if (isNaN(+age)) {
  alert(`${age} it's not an age `);
} else {
}
