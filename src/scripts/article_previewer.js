// TODO: add markdown it parser.
var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();
var result = md.render(URL);


const post = document.getElementsByClassName("post");
