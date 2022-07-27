// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "What does CSS stand for?",
    answer: "Cascading style sheet",
    options: [
      "Cascading style paper",
       "Cascading stripe sheet",
       "Cascading style sheet",
       "Content style sheet"
    ]
  },
    {
    numb: 2,
    question: "How do you select all p elements inside a div element?",
    answer: "div p",
    options: [
      "div.p",
      "div: p select all",
      "div p",
      "div class: p"
    ]
  },
    {
    numb: 3,
    question: "What is the default value of the position property?",
    answer: "static",
    options: [
      "static",
      "relative",
      "fixed",
      "absolute"
    ]
  },
    {
    numb: 4,
    question: "How do you select elements with class name 'done'?",
    answer: ".done",
    options: [
      ".done",
      "done.",
      "#done",
      "done#"
    ]
  },
    {
    numb: 5,
    question: "Which property is used to change the left margin of an element?",
    answer: "margin-left",
    options: [
      "padding: left",
      "margin: left",
      "padding-left",
      "margin-left"
    ]
  },
  {
    numb: 6,
    question: "How do you make the text bold?",
    answer: "font-weight",
    options: [
      "font-size", 
      "font-weight", 
      "font-bold", 
      "bold: text"
    ]
  },
  {
    numb: 7,
    question: "Which property is used to alter the font of an element?",
    answer: "font-family",
    options: [
      "font", 
      "font-family", 
      "font: family", 
      "alter-font"
    ]
  },
  {
    numb: 8,
    question: "How do you make each word in a text start with a capital letter?",
    answer: "text-transform: capitalize",
    options: [
      "text-transform: uppercase", 
      "text-transform: capitalize", 
      "capitalize: text", 
      "transform: text"
    ]
  },
  {
    numb: 9,
    question: "How do you select elements with id name 'checked'?",
    answer: "#checked",
    options: [
      ".checked", 
      "#checked", 
      "checked#", 
      "##checked"
    ]
  },
  {
    numb: 10,
    question: "How do you make each letter in a text become a capital letter?",
    answer: "text-transform: uppercase",
    options: [
      "text-transform: uppercase", 
      "text-transform: capitalize", 
      "capitalize: text", 
      "transform: text"
    ]
  },
  {
    numb: 11,
    question: "How do you display hyperlinks without an underline?",
    answer: "text-decoration: none",
    options: [
      "text-decoration: none", 
      "text-beautification: no", 
      "text-underline: disappear", 
      "text-decoration: 0px"
    ]
  },
  {
    numb: 12,
    question: "Which CSS property is used to change the text color of an element?",
    answer: "color",
    options: [
      ".color", 
      "change-color", 
      "color", 
      "alter-color"
    ]
  },
  {
    numb: 13,
    question: "Which property is used to change the background color?",
    answer: "background-color",
    options: [
      "background color", 
      "bg-color", 
      "background-color", 
      "background-color-change"
    ]
  },
  {
    numb: 14,
    question: "Which property is used to add the background image?",
    answer: "background-image",
    options: [
      "background-image", 
      "background-color", 
      "bg-image", 
      "background color"
    ]
  },
  {
    numb: 15,
    question: "Which HTML tag is used to define an internal style sheet?",
    answer: "style",
    options: [
      "styles", 
      "style", 
      "inline-style", 
      ".style"
    ]
  },
  {
    numb: 16,
    question: "What's the apt way to externally link css to a HTML file?",
    answer: "<link href='style.css' rel='stylesheet'>",
    options: [
      "&lt;link rel=&apos;style.css&apos; href=&apos;stylesheet&apos;&gt;", 
      "&lt;link ref=&apos;style.css&apos; rel=&apos;stylesheet&apos;&gt;", 
      "&lt;link rel=&apos;style.css&apos; rel=&apos;stylesheet&apos;&gt;",
      "&lt;link href=&apos;style.css&apos; rel=&apos;stylesheet&apos;&gt;"
    ]
  },
  {
    numb: 17,
    question: "Where in an HTML document is the correct place to refer to an external style sheet?",
    answer: "head",
    options: [
      "header", 
      "body", 
      "script", 
      "head"
    ]
  },
  {
    numb: 18,
    question: "How do you make background images not to repeat?",
    answer: "background-repeat: no-repeat",
    options: [
      "background-repeat-none", 
      "background-repeat: no repeat", 
      "background-repeat: no-repeat", 
      "bg-image-repeat: none"
    ]
  },
  {
    numb: 19,
    question: "Which element is used to represent the transparency of an element in CSS ?",
    answer: "opacity",
    options: [
      "opacity", 
      "hover", 
      "cursor", 
      "transparency"
    ]
  },
  {
    numb: 20,
    question: "Which of the beneath property is used to overflow text?",
    answer: "text-overflow",
    options: [
      "text-shadow", 
      "text-overflow", 
      "text-animation", 
      "text-decoration"
    ]
  },
  
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];
