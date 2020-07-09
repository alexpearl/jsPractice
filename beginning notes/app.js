// let rating='A';

// if (rating===3) {
//     console.log("you are a superstar");
// }
// else if(rating===2){
//     console.log("meets expectations gg");
// }
// else if(rating===1){
//     console.log("yikes needs improvement");
// }
// else{
//     console.log("invalid rating");
// }

// //ex2

// let highScore=1430;
// let userScore=1600;

// if (userScore>=highScore) {
//     console.log(`you have the new high score of ${userScore}, congrats`);
//     highScore=userScore;
// }
// else{
//     console.log(`good try, your score of ${userScore} did not beat the record of ${highScore}`);
// }


//nesting ex
// let password='helloKitty';

// if (password.length>=6) {
//     if (password.indexOf(" ")===-1) {
//         console.log("valid password");
//     }
//     else{
//         console.log("password is long enough but can't contain spaces")
//     }
// }
// else{
//     console.log("password must be longer");
// }


//ex truthy falsey used to check for value/conetent/if it exists 
// let mystery=5;

// if (mystery) {
//     console.log("truthy");
// }
// else{
//     console.log("falsy");
// }

//logical && 
// let password = 'chickenGal';
// if (password.length>=8 && password.indexOf(' ')=== -1) {
//     console.log('valid password');
// }
// else{
//     console.log('invalid password');
// }

//logical or ||    if one is true then all is true

// let age=78;
// if (age<6 || age>=65) {
//     console.log('you get in for free!');
// }
// else{
//     console.log('pay up!');
// }

//logical not !
// let loggedInUser='sdfdsvev';
// if (!loggedInUser) {
//     console.log('get out of here');
// }


// let flavor='watermelon';
// if (flavor !== 'grape' && flavor!=='cherry') {
//     console.log(`we don't have that flavor`)
// }

//swtich statement 
let day=1;
switch (day) {
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;

    default:
        console.log('invalid day');
}

let emoji='heart';
switch (emoji) {
    case 'sad face':
    case 'happy face':
        console.log('yellow');
        break;
    case 'lips':    
    case 'heart':
        console.log('red');
    case 'eggplant':
        console.log('purple');
    default:
        break;
}

//ternary op
//condotion ? ifTrue : ifFalse;
let num=7;

num ===7 ? console.log('lucky!') : console.log('bad');


//another ex 
let status='online';

let color= status === 'offline' ? 'red' : 'green';

