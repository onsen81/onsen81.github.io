const quotes = [
  {
    quote: "삶이 있는 한 희망은 있다",
    author: "키케로",
  },
  {
    quote: "산다는 것 그것은 치열한 전투이다",
    author: "로망로랑",
  },
  {
    quote: "신은 용기있는 자를 결코 버리지 않는다",
    author: "켄러",
  },
  {
    quote: "피할 수 없으면 즐겨라",
    author: "로버트 엘리엇",
  },
  {
    quote: "언제나 현재에 집중할 수 있다면 행복할 것이다",
    author: "파울로 코엘료",
  },
  {
    quote: "계단을 밟아야 계단 위에 올라설 수 있다",
    author: "터키속담",
  },
  {
    quote: "살아가는 일에 전념하라",
    author: "괴테",
  },
  {
    quote: "성공의 비결은 단 한가지, 잘할 수 있는 일에 광적으로 집중하라",
    author: "톰 모나건",
  },
  {
    quote: "내가 좋아하는 것을 찾을 것, 그것이 일이 되게 두지 말것",
    author: "김재호",
  },
  {
    quote: "하루 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다",
    author: "사무엘 존슨",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
