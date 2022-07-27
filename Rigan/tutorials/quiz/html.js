// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    numb: 2,
    question: "A webpage displays a picture. What tag was used to display that picture?",
    answer: "img",
    options: [
      "picture",
      "image",
      "img",
      "src"
    ]
  },
    {
    numb: 3,
    question: "Tags and test that are not directly displayed on the page are written in_____",
    answer: "<head>",
    options: [
      "&lt;html&gt;",
      "&lt;head&gt;",
      "&lt;title&gt;",
      "&lt;body&gt;"
    ]
  },
    {
    numb: 4,
    question: "How can you make a bulleted list?",
    answer: "<ul>",
    options: [
      "&lt;list&gt;",
      "&lt;nl&gt;",
      "&lt;ul&gt;",
      "&lt;ol&gt;"
    ]
  },
    {
    numb: 5,
    question: "How can you make an email link?",
    answer: "<a href='mailto:xxx@yyy'>",
    options: [
      "&lt;a href=&apos;xxx@yyy&apos;&gt;",
      "&lt;mail href=&apos;xxx@yyy&apos;&gt;",
      "&lt;mailto href=&apos;xxx@yyy&apos;&gt;",
      "&lt;a href=&apos;mailto:xxx@yyy&apos;&gt;"
    ]
  },
  {
    numb: 6,
    question: "Choose a correct HTML tag to make a text italic",
    answer: "<i>",
    options: [
      "&lt;ii&gt;", "&lt;italics&gt;", "&lt;italic&gt;", "&lt;i&gt;"
    ]
  },
  {
    numb: 7,
    question: "What is the correct HTML for adding a backgrouncld color?",
    answer: "<body bgcolor='yellow'>",
    options: [
      "&lt;body color=&apos;yellow&apos;&gt;", "&lt;body bgcolor=&apos;yellow&apos;&gt;", "&lt;bg&gt;yellow&lt;bg&gt;", "&lt;body background=&apos;yellow&apos;&gt;"
    ]
  },
  {
    numb: 8,
    question: "Choose a correct HTML tag for the smallest size heading",
    answer: "<h6>",
    options: [
      "&lt;heading&gt;", "&lt;h6&gt;", "&lt;h1&gt;", "&lt;head&gt;"
    ]
  },
  {
    numb: 9,
    question: "Which attribute is used to name an element uniquely?",
    answer: "id",
    options: [
      "class", "id", "dot", "all of the above"
    ]
  },
  {
    numb: 10,
    question: "To create a drop down box, which tag will you use?",
    answer: "<select>",
    options: [
      "&lt;select&gt;", "&lt;list&gt;", "&lt;input type=&quot;dropdown&quot;&gt;", "all of the above"
    ]
  },
  {
    numb: 11,
    question: "Which of the following is not a pair tag?",
    answer: "<img>",
    options: [
      "&lt;p&gt;", "&lt;u&gt;", "&lt;i&gt;", "&lt;img&gt;"
    ]
  },
  {
    numb: 12,
    question: "The special formatting codes in HTML document used to present content are___",
    answer: "tags",
    options: [
      "tags", "attributes", "values", "None of the above"
    ]
  },
  {
    numb: 13,
    question: "HTNL documents are saved in___",
    answer: "ASCII text",
    options: [
      "Special binary format", "Machine language code", "ASCII text", "None of the above"
    ]
  },
  {
    numb: 14,
    question: "What tag is used to list INDIVIDUAL items of an ordered list?",
    answer: "<li>",
    options: [
      "&lt;li&gt;", "&lt;ol&gt;", "&lt;ul&gt;", "&lt;list&gt;"
    ]
  },
  {
    numb: 15,
    question: "Which attribute is used with img tag to display the text if image could not load in browser?",
    answer: "alt",
    options: [
      "description", "name", "alt", "id"
    ]
  },
  {
    numb: 16,
    question: "What iS the full form of HTTP?",
    answer: "Hyper text transfer protocol",
    options: [
      "Hyper text transfer protocol", "Hyper text transfer package", "Hyper text transmission protocol", "Hyper text tracking protocol"
    ]
  },
  {
    numb: 17,
    question: "What is a search engine?",
    answer: "a website that searches anything",
    options: [
      "a program that searches engines", "a website that searches anything", "a hardware component", "a machinery engine that searches data"
    ]
  },
  {
    numb: 18,
    question: "text within the &lt;em&gt;...&lt;/em&gt; tag is displayed as",
    answer: "italic",
    options: [
      "bold", "italic", "list", "indented"
    ]
  },
  {
    numb: 19,
    question: "text within the &lt;strong&gt;...&lt;/strong&gt; tag is displayed as",
    answer: "bold",
    options: [
      "bold", "italic", "list", "indented"
    ]
  },
  {
    numb: 20,
    question: "Which of the following is not a block level element?",
    answer: "span",
    options: [
      "div", "h1", "p", "span"
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
