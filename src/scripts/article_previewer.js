// TODO: add markdown it parser.

// var MarkdownIt = require('markdown-it'),
//     md = new MarkdownIt();

let myMD = "";

fetch('./resources/articles/resume.md')
    .then(recieved => recieved.txt())
    .then(data => console.log(myMD));

// var result = md.render(myMD);


// let post = document.getElementById("post");
// post.innerHTML = "<span>" + result + "</span>";
