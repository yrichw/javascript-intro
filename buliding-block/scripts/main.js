const output = document.querySelector('.output');
output.textContent = "";
let i = 10;
for(i = 10; i>= 0; i--) {
    const para = document.createElement('p');
    if (i === 10) {
        para.textContent = "Countdown 10"
        
    } else if (i == 0) {
        para.textContent = "Blast off!"
    } {
        para.textContent = i
    }
    output.appendChild(para)

}
// let i = 10;

// const para = document.createElement('p');
// para.textContent = ;
// output.appendChild(para);