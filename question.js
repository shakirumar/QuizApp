// Questions for each category
const questionsByCategory = {
    // questions for the HTML category
    HTML: [
        {
            question: "What does HTML stand for?",
            options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks Text Markup Language", "Hyper Tool Markup Language"],
            answer: "Hyper Text Markup Language"
        },
        {
            question: "Choose the correct HTML element for the largest heading:",
            options: ["<h6>", "<heading>", "<h1>", "<head>"],
            answer: "<h1>"
        },
        {
            question: "Which HTML tag is used to create a hyperlink?",
            options: ["<a>", "<link>", "<url>", "<hyperlink>"],
            answer: "<a>"
        },
        {
            question: "What is the correct HTML tag for inserting a line break?",
            options: ["<break>", "<br>", "<lb>", "<line>"],
            answer: "<br>"
        },
        {
            question: "Which HTML tag is used to create an unordered list?",
            options: ["<ul>", "<list>", "<ol>", "<li>"],
            answer: "<ul>"
        },
        {
            question: "What is the correct HTML tag for inserting an image?",
            options: ["<img>", "<image>", "<src>", "<picture>"],
            answer: "<img>"
        },
        {
            question: "What is the correct HTML tag for creating a table?",
            options: ["<table>", "<tab>", "<tr>", "<td>"],
            answer: "<table>"
        },
        {
            question: "What is the correct HTML tag for creating a link to an external page?",
            options: ["<a href='http://www.example.com'>", "<link href='http://www.example.com'>", "<url href='http://www.example.com'>", "<hyperlink href='http://www.example.com'>"],
            answer: "<a href='http://www.example.com'>"
        },
        {
            question: "What is the correct HTML tag for creating a form?",
            options: ["<form>", "<input>", "<button>", "<field>"],
            answer: "<form>"
        },
        {
            question: "What is the correct HTML tag for creating a checkbox?",
            options: ["<checkbox>", "<input type='checkbox'>", "<input type='radio'>", "<input type='button'>"],
            answer: "<input type='checkbox'>"
        }
    ],

    // questions for the CSS category
    CSS: [
        {
            question: "What does CSS stand for?",
            options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
            answer: "Cascading Style Sheets"

        },
        {
            question: "Which is the correct CSS syntax?",
            options: ["{body:color=black;}", "body {color: black;}", "{body;color:black;}", "body: color=black;"],
            answer: "body {color: black;}"

        },
        {
            question: "How do you select an element with the id 'myDiv' in CSS?",
            options: ["#myDiv", ".myDiv", "div#myDiv", "div.myDiv"],
            answer: "#myDiv"
        },
        {
            question: "What is the correct CSS property for changing the text color of an element?",
            options: ["color", "text-color", "font-color", "text-style"],
            answer: "color"
        },
        {
            question: "How do you add a background color to a div element in CSS?",
            options: ["background-color: red;", "div {background-color: red;}", "div {color: red;}", "background: red;"],
            answer: "div {background-color: red;}"
        }
        ,
        {
            question: "How do you center align a div element in CSS?",
            options: ["text-align: center;", "align: center;", "margin: auto;", "display: block;"],
            answer: "margin: auto;"
        },
        {
            question: "How do you change the font size of an element in CSS?",
            options: ["font-size: 20px;", "size: 20px;", "font: 20px;", "text-size: 20px;"],
            answer: "font-size: 20px;"
        },
        {
            question: "How do you change the font family of an element in CSS?",
            options: ["font-family: Arial;", "font: Arial;", "font-style: Arial;", "text-font: Arial;"],
            answer: "font-family: Arial;"
        }
        ,
        {
            question: "How do you add a border to a div element in CSS?",
            options: ["border: 1px solid black;", "div {border: 1px solid black;}", "div {border-color: black;}", "border-color: black;"],
            answer: "border: 1px solid black;"
        },
        {
            question: "How do you add a border to a div element in CSS?",
            options: ["border: 1px solid black;", "div {border: 1px solid black;}", "div {border-color: black;}", "border-color: black;"],
            answer: "border: 1px solid black;"
        }
    ],

    // questions for the JavaScript category
    JavaScript: [
        {
            question: "What is JavaScript?",
            options: ["A programming language", "A database", "A web browser", "A programming framework"],
            answer: "A programming language"

        },
        {
            question: "Which keyword is used to declare a variable in JavaScript?",
            options: ["var", "let", "const", "variable"],
            answer: "var"

        },
        {
            question: "What is the purpose of the 'console.log()' function in JavaScript?",
            options: ["To display output in the console", "To create a loop", "To declare a variable", "To add a comment"],
            answer: "To display output in the console"
        },
        {
            question: "What is the correct way to comment out a single line in JavaScript?",
            options: ["// This is a comment", "/* This is a comment */", "-- This is a comment", "# This is a comment"],
            answer: "// This is a comment"
        },
        {
            question: "What is the correct way to declare a function in JavaScript?",
            options: ["function myFunction()", "myFunction()", "var myFunction = function()", "function = myFunction()"],
            answer: "function myFunction()"
        },
        {
            question: "What is the correct way to call a function in JavaScript?",
            options: ["myFunction()", "call myFunction()", "function myFunction", "myFunction"],
            answer: "myFunction()"
        },
        {
            question: "What is the correct way to declare a variable that cannot be reassigned in JavaScript?",
            options: ["var myVariable", "let myVariable", "const myVariable", "variable myVariable"],
            answer: "const myVariable"
        },
        {
            question: "What is the correct way to check if a variable is equal to a specific value in JavaScript?",
            options: ["if (myVariable == value)", "if (myVariable = value)", "if (myVariable === value)", "if (myVariable !== value)"],
            answer: "if (myVariable === value)"
        },
        {
            question: "What is the correct way to concatenate two strings in JavaScript?",
            options: ["string1 + string2", "string1.concat(string2)", "string1.join(string2)", "string1.append(string2)"],
            answer: "string1 + string2"
        },
        {
            question: "What is the correct way to create an array in JavaScript?",
            options: ["var myArray = [1, 2, 3]", "var myArray = (1, 2, 3)", "var myArray = {1, 2, 3}", "var myArray = {1, 2, 3}"],
            answer: "var myArray = [1, 2, 3]"
        }
    ],

    // questions for the Git category
    Git: [
        {
            question: "What is Git?",
            options: ["A version control system", "A programming language", "A web browser", "A database"],
            answer: "A version control system"

        },
        {
            question: "Which command is used to initialize a new Git repository?",
            options: ["git init", "git clone", "git add", "git commit"],
            answer: "git init"

        },
        {
            question: "What is the purpose of the 'git add' command?",
            options: ["To add files to the staging area", "To commit changes to the repository", "To initialize a new repository", "To clone a remote repository"],
            answer: "To add files to the staging area"
        },
        {
            question: "What is the purpose of the 'git commit' command?",
            options: ["To commit changes to the repository", "To add files to the staging area", "To initialize a new repository", "To clone a remote repository"],
            answer: "To commit changes to the repository"
        },
        {
            question: "What is the purpose of the 'git push' command?",
            options: ["To push changes to a remote repository", "To pull changes from a remote repository", "To initialize a new repository", "To clone a remote repository"],
            answer: "To push changes to a remote repository"
        },
        {
            question: "What is the purpose of the 'git pull' command?",
            options: ["To pull changes from a remote repository", "To push changes to a remote repository", "To initialize a new repository", "To clone a remote repository"],
            answer: "To pull changes from a remote repository"
        },
        {
            question: "What is the purpose of the 'git branch' command?",
            options: ["To create a new branch", "To switch to a different branch", "To merge branches", "To delete a branch"],
            answer: "To create a new branch"
        },
        {
            question: "What is the purpose of the 'git merge' command?",
            options: ["To merge branches", "To create a new branch", "To switch to a different branch", "To delete a branch"],
            answer: "To merge branches"
        },
        {
            question: "What is the purpose of the 'git checkout' command?",
            options: ["To switch to a different branch", "To create a new branch", "To merge branches", "To delete a branch"],
            answer: "To switch to a different branch"
        },
        {
            question: "What is the purpose of the 'git status' command?",
            options: ["To view the status of the repository", "To commit changes to the repository", "To initialize a new repository", "To clone a remote repository"],
            answer: "To view the status of the repository"
        }

    ]
    // Add more categories and questions as needed
};