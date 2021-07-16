
 let userName = prompt('Please Enter Your Name: ');
 console.log(userName);
 document.write('<h3>Welcome ' + userName + '!</h3>');

let userAnswer = prompt('Do you like dumplings? Yes or No');
console.log(userAnswer);

 if (userAnswer == 'yes') {
    document.write('<h3>Get Excited ' + userName + ' You are now part of the Crispy Bottom Family!</h3>');
} else {
     document.write("<h3>It's ok if you don't like dumplings, this webiste will show you the dumpling's way</h3>");
 }