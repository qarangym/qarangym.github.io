let count=0;
const clickCountElement = document.getElementById('score');
function increment(){
    count++;
    clickCountElement.textContent=count;
}