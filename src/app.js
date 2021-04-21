/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  for (var i = 0; i < pronoun.length; i++)
  {
    for (var i = 0; i < adj.length; i++)
    {
        for (var i = 0; i < noun.length; i++)
        {
           // let index = Math.floor(Math.random() * i);
            console.log(pronoun[i]+adj[i]+noun[i]);
        }
    }
  }

  console.log("Hello Rigo from the console!");
};
