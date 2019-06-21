/*
    Author: Jeremiah Stillings
    Date: 6/21/2019
    HTML Goal: Display a form that allows user to enter first name and lasat name
    JS Goal : On the fly validation to show
    -First letter capapitalized in both input
    -min of 2 chars entered
    -no special characters used
*/
function validatejs()
{
  //Get the input from user
  var case1 = document.getElementById("firstName").value;
  var case2 = document.getElementById("lastName").value;
  //setup the regex for each condition on the first name
  var cap = /^[A-Z]/.test(case1);
  var two = /^[A-Za-z0-9]{2,}$/.test(case1);
  var nospecial = /[-!$%^&*()_+|~=`{}[:;<>?,.@#\]]/g.test(case1);
  //setup the regex for each conditon on the last name
  var two2 = /^[A-Za-z0-9]{2,}$/.test(case2);
  var cap2 = /^[A-Z]/.test(case2);
  var nospecial2 = /[-!$%^&*()_+|~=`{}[:;<>?,.@#\]]/g.test(case2);
  // tell the user how it's going
  var output = "";

  //first name varification
  if (cap) {
    document.getElementById("output1").innerHTML = case1 + " Looking good so far, first name has a capital first letter";
  } else {
    document.getElementById("output1").innerHTML = "Problems, please use a capitalized first  name";
  };
  if (two) {
    document.getElementById("output2").innerHTML = "Looking good so far, first name has more then 1 characters";
  } else {
    document.getElementById("output2").innerHTML = "-->More Problems, please use more then one character for first name";
  };
  if (!nospecial) {
    document.getElementById("output3").innerHTML = "Looking good so far, no special characters found in the first name";
  } else {
    document.getElementById("output3").innerHTML = "--> More Problems, please do not use special characters in first name";
  };
  //last name verification
  if (cap2) {
    document.getElementById("output4").innerHTML = case1 + "  " + case2 +" Looking good so far, last name has a capital first letter";
  } else {
    document.getElementById("output4").innerHTML = "Problems, please use a capitalized last name";
  };
  if (two2) {
    document.getElementById("output5").innerHTML = "Looking good so far, last name has more then 1 characters";
  } else {
    document.getElementById("output5").innerHTML = "-->More Problems, please use more then one character for last name";
  };
  if (!nospecial2) {
    document.getElementById("output6").innerHTML = "Looking good so far, no special characters found in the last name";
  } else {
    document.getElementById("output6").innerHTML = "--> More Problems, please do not use special characters in last name";
  };
}
