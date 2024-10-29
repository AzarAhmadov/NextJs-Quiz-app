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
    HTML: [
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
    ],
    CSS: [
      {
        id: 4,
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
        id: 5,
        question: "Which property is used to change the background color?",
        options: ["color", "background-color", "bg-color", "background"],
        answer: "background-color",
      },
      {
        id: 6,
        question: "How do you center-align text in CSS?",
        options: [
          "text-align: center;",
          "align: center;",
          "center-align: text;",
          "text-center: align;",
        ],
        answer: "text-align: center;",
      },
    ],
    JavaScript: [
      {
        id: 7,
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
        id: 8,
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
        id: 9,
        question: "What method is used to select an element by ID?",
        options: [
          "getElementByClass",
          "querySelector",
          "getElementById",
          "getElementByTagName",
        ],
        answer: "getElementById",
      },
    ],
    Accessibility: [
      {
        id: 10,
        question:
          "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
        options: ["4.5:1", "3:1", "2.5:1", "5:1"],
        answer: "4.5:1",
      },
      {
        id: 11,
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
        id: 12,
        question: "What does WCAG stand for?",
        options: [
          "Web Content Accessibility Guidelines",
          "World Class Accessibility Group",
          "Web Creative Accessibility Guidelines",
          "World Communication Accessibility Guidelines",
        ],
        answer: "Web Content Accessibility Guidelines",
      },
    ],
  };

  if (category && quizData[category]) {
    return NextResponse.json({
      quiz: {
        [category]: quizData[category],
      },
    });
  }

  return NextResponse.json({ error: "Category not found" }, { status: 404 });
}
