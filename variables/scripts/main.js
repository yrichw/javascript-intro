// 选择器：一个 CSS 样式选择器，用来查找元素。例如：
// #id：表示根据元素的 id 选择。
// .class：表示根据元素的 class 选择。
// element：表示根据标签名称（如 div, p, h1 等）选择。
const buttonA = document.querySelector("#button_A");//choose based on id
const headingA = document.querySelector("#heading_A");

let count = 1;
buttonA.onclick = () => {
    buttonA.textContent = "Try again";
    headingA.textContent = `${count} clicks so far`;
    count += 1

}