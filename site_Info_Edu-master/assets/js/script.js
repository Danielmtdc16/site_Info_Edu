let logout = document.querySelector('.logout');
let logoutSytle = window.getComputedStyle(logout);

let idFooter = document.getElementById('footer');

let alturaLogout = logoutSytle.height;

idFooter.style.height = logoutSytle.height;
idFooter.style.marginTop = '-'+alturaLogout;

let menuBtn = document.querySelector('.open-btn');
let sideBar = document.querySelector('.sidebar');
let cards = document.getElementById('cardsAll');
let content = document.querySelector('.content');
let contentStyle = window.getComputedStyle(content);
let options = document.getElementById('options');

let table = document.querySelector('.table');
let tableStyle = window.getComputedStyle(table);

let tableHeight = tableStyle.height.replace('px', '');

let heightContent = contentStyle.height.replace('px', '');

console.log("altura do content sem px : ", heightContent);
console.log();

let contentHeightEmNumber = parseFloat(heightContent);

console.log('altura do content em number : ', contentHeightEmNumber);

let calc = contentHeightEmNumber + 10;

console.log('calc : ', calc);
let cont = 0;
function atualizarAlturaContent(){
    let contentStyle = window.getComputedStyle(content);
    let heightContent = contentStyle.height.replace('px', '');
    let contentHeightEmNumber = parseFloat(heightContent);
    let calc = contentHeightEmNumber + 10;
    cont++;
    console.log('atualizei : ', cont);
}

setInterval(atualizarAlturaContent, 1000);

let optionsHeight = calc.toString();

console.log('calc em string : ', optionsHeight);

let screenHeight = window.innerHeight;
let screenWidth = window.innerWidth;

menuBtn.addEventListener('click', () => {

    if (sideBar.classList.contains('active')) {

        sideBar.classList.remove('active');

    } else {

        sideBar.classList.add('active');

    }
    if (sideBar.classList.contains('active') && screenWidth <= 991) {
        console.log('options height + px = ', optionsHeight+'px');
        options.style.height = optionsHeight+'px';
    }
});

