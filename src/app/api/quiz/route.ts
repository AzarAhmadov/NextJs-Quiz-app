import { NextResponse } from "next/server";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

interface QuizData {
  [key: string]: QuizQuestion[];
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  const quizData: QuizData = {
    html: [
      {
        id: 1,
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "Home Tool Markup Language",
          "Hyperlinks and Text Markup Language",
          "Hyper Text Management Language",
        ],
        answer: "Hyper Text Markup Language",
      },
      {
        id: 2,
        question:
          "Which HTML element is used to specify a header for a document?",
        options: ["<header>", "<head>", "<section>", "<footer>"],
        answer: "<header>",
      },
      {
        id: 3,
        question: "Which tag is used to create a line break in HTML?",
        options: ["<break>", "<br>", "<lb>", "<hr>"],
        answer: "<br>",
      },
      {
        id: 4,
        question:
          "What is the correct HTML element for inserting a line break?",
        options: ["<break>", "<lb>", "<br>", "<linebreak>"],
        answer: "<br>",
      },
      {
        id: 5,
        question: "Which attribute is used to specify the URL of an image?",
        options: ["src", "href", "link", "url"],
        answer: "src",
      },
      {
        id: 6,
        question: "What does the <a> tag do?",
        options: [
          "Defines a hyperlink",
          "Defines a section",
          "Defines a list",
          "Defines a table",
        ],
        answer: "Defines a hyperlink",
      },
      {
        id: 7,
        question: "What element is used for the largest heading?",
        options: ["<h6>", "<heading>", "<h1>", "<h2>"],
        answer: "<h1>",
      },
      {
        id: 8,
        question: "Which HTML element defines the footer for a document?",
        options: ["<footer>", "<bottom>", "<section>", "<head>"],
        answer: "<footer>",
      },
      {
        id: 9,
        question: "Which of these elements are all <table> elements?",
        options: [
          "<table><head><tfoot>",
          "<table><tr><td>",
          "<table><tbody><head>",
          "<table><footer><section>",
        ],
        answer: "<table><tr><td>",
      },
      {
        id: 10,
        question: "What HTML element is used to define an unordered list?",
        options: ["<ul>", "<ol>", "<li>", "<list>"],
        answer: "<ul>",
      },
    ],
    css: [
      {
        id: 11,
        question: "What does CSS stand for?",
        options: [
          "Cascading Style Sheets",
          "Computer Style Sheets",
          "Colorful Style Sheets",
          "Creative Style Sheets",
        ],
        answer: "Cascading Style Sheets",
      },
      {
        id: 12,
        question: "Which property is used to change the background color?",
        options: ["color", "background-color", "bg-color", "background"],
        answer: "background-color",
      },
      {
        id: 13,
        question: "How do you center-align text in CSS?",
        options: [
          "text-align: center;",
          "align: center;",
          "center-align: text;",
          "text-center: align;",
        ],
        answer: "text-align: center;",
      },
      {
        id: 14,
        question: "What is the default value of the position property?",
        options: ["fixed", "absolute", "relative", "static"],
        answer: "static",
      },
      {
        id: 15,
        question: "How do you add a comment in CSS?",
        options: [
          "// comment",
          "<!-- comment -->",
          "/* comment */",
          "## comment",
        ],
        answer: "/* comment */",
      },
      {
        id: 16,
        question: "Which CSS property controls the text size?",
        options: ["text-size", "font-size", "text-style", "font-style"],
        answer: "font-size",
      },
      {
        id: 17,
        question: "Which CSS property is used to change the text color?",
        options: ["text-color", "color", "font-color", "style-color"],
        answer: "color",
      },
      {
        id: 18,
        question: "Which property is used to change the font of an element?",
        options: ["font-family", "font-style", "font-weight", "text-font"],
        answer: "font-family",
      },
      {
        id: 19,
        question: "How do you make a list that lists its items with squares?",
        options: [
          "list-type: square;",
          "list-style-type: square;",
          "list-style: square;",
          "list: square;",
        ],
        answer: "list-style-type: square;",
      },
      {
        id: 20,
        question: "Which property is used to change the text alignment?",
        options: ["text-align", "align", "text-position", "text-direction"],
        answer: "text-align",
      },
    ],
    javascript: [
      {
        id: 21,
        question: "What is the purpose of `let` in JavaScript?",
        options: [
          "Declare a block-scoped variable",
          "Declare a constant",
          "Define a function",
          "Define a global variable",
        ],
        answer: "Declare a block-scoped variable",
      },
      {
        id: 22,
        question: "How do you create a function in JavaScript?",
        options: [
          "function = myFunction()",
          "function myFunction()",
          "create function myFunction()",
          "function: myFunction()",
        ],
        answer: "function myFunction()",
      },
      {
        id: 23,
        question: "What method is used to select an element by ID?",
        options: [
          "getElementByClass",
          "querySelector",
          "getElementById",
          "getElementByTagName",
        ],
        answer: "getElementById",
      },
      {
        id: 24,
        question: "What does the 'this' keyword refer to in JavaScript?",
        options: [
          "The global object",
          "The current function",
          "The calling object",
          "None of the above",
        ],
        answer: "The calling object",
      },
      {
        id: 25,
        question: "How do you write an IF statement in JavaScript?",
        options: ["if (i == 5)", "if i = 5", "if i == 5 then", "if (i = 5)"],
        answer: "if (i == 5)",
      },
      {
        id: 26,
        question: "How do you create an array in JavaScript?",
        options: [
          "var colors = []",
          "var colors = {}",
          "var colors = ()",
          "var colors = <>",
        ],
        answer: "var colors = []",
      },
      {
        id: 27,
        question: "Which operator is used to assign a value to a variable?",
        options: ["=", "-", "*", "x"],
        answer: "=",
      },
      {
        id: 28,
        question: "What is the correct way to write a JavaScript array?",
        options: [
          "var colors = 'red', 'green', 'blue'",
          "var colors = ['red', 'green', 'blue']",
          "var colors = (1:'red', 2:'green', 3:'blue')",
          "var colors = 'red' + 'green' + 'blue'",
        ],
        answer: "var colors = ['red', 'green', 'blue']",
      },
      {
        id: 29,
        question: "Which method can be used to remove an item from an array?",
        options: ["remove()", "delete()", "pop()", "shift()"],
        answer: "pop()",
      },
      {
        id: 30,
        question: "Which of the following is not a JavaScript data type?",
        options: ["Undefined", "Number", "Boolean", "Character"],
        answer: "Character",
      },
    ],
    accessibility: [
      {
        id: 31,
        question:
          "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
        options: ["4.5:1", "3:1", "2.5:1", "5:1"],
        answer: "4.5:1",
      },
      {
        id: 32,
        question: "What does 'alt' attribute in an image tag provide?",
        options: [
          "Alternative text",
          "Image title",
          "Image caption",
          "Image tooltip",
        ],
        answer: "Alternative text",
      },
      {
        id: 33,
        question: "What does WCAG stand for?",
        options: [
          "Web Content Accessibility Guidelines",
          "World Class Accessibility Group",
          "Web Creative Accessibility Guidelines",
          "World Communication Accessibility Guidelines",
        ],
        answer: "Web Content Accessibility Guidelines",
      },
      {
        id: 34,
        question:
          "Which of the following elements should have an accessible name?",
        options: [
          "Button elements",
          "Input elements",
          "Link elements",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        id: 35,
        question:
          "What role does the <header> element serve in web accessibility?",
        options: [
          "It defines the header for a document or section.",
          "It provides a title for the web page.",
          "It represents navigation links.",
          "It contains the main content of the page.",
        ],
        answer: "It defines the header for a document or section.",
      },
      {
        id: 36,
        question:
          "Which HTML attribute is used to provide additional information about an element?",
        options: ["data-*", "aria-label", "title", "role"],
        answer: "title",
      },
      {
        id: 37,
        question: "What is the purpose of the 'tabindex' attribute?",
        options: [
          "To control the order in which elements are focused",
          "To add a title to an element",
          "To specify the type of input",
          "To define accessibility roles",
        ],
        answer: "To control the order in which elements are focused",
      },
      {
        id: 38,
        question: "What is a screen reader?",
        options: [
          "A device that displays visual content",
          "A software application that reads text on a screen aloud",
          "A web browser extension",
          "A tool for creating audio content",
        ],
        answer: "A software application that reads text on a screen aloud",
      },
      {
        id: 39,
        question: "What is the purpose of ARIA roles?",
        options: [
          "To enhance the semantic meaning of HTML elements",
          "To provide visual styles",
          "To improve page load speed",
          "To create animations",
        ],
        answer: "To enhance the semantic meaning of HTML elements",
      },
      {
        id: 40,
        question:
          "How can you ensure that your website is accessible to keyboard users?",
        options: [
          "Make all interactive elements keyboard navigable",
          "Use only mouse events for interactions",
          "Disable keyboard navigation",
          "Add visual indicators for mouse hover",
        ],
        answer: "Make all interactive elements keyboard navigable",
      },
    ],
  };

  if (category && quizData[category]) {
    return NextResponse.json({
      [category]: quizData[category],
    });
  }

  return NextResponse.json({ error: "Category not found" }, { status: 404 });
}
