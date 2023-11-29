let ISP250 = document.getElementById('ISP250');
let CSC264 = document.getElementById('CSC264');

function changeTitle1() {
    ISP250.style.backdropFilter = 'blur(2px)';
    ISP250.style.visibility = 'visible';
    CSC264.style.visibility = 'collapse';

} function hideTitle1() {
    ISP250.style.visibility = 'collapse';
}
function changeTitle2() {
    CSC264.style.backdropFilter = 'blur(2px)';
    CSC264.style.visibility = 'visible';
    ISP250.style.visibility = 'collapse';
} function hideTitle2() {
    CSC264.style.visibility = 'collapse';
}