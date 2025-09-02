// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

//如何使用 JavaScript 和 DOM API 特性交替显示两张图片。当用户点击图片时进行切换。
const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  // prompt() 函数，与 alert() 类似会弹出一个对话框。prompt() 函数的功能更多，
  // 需要用户输入数据，并在用户点击确定后将数据存储在一个变量中。
  const myName = prompt("Please enter your name.");
  //localStorage API，它允许我们将数据存储在浏览器中并供后续获取。
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}
myButton.onclick = function () {
  setUserName();
};
//初始化代码，因为它在初次加载时开始工作。
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}