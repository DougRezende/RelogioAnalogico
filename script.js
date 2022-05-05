const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => 
{
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${(mm)}deg)`;
    sc.style.transform = `rotateZ(${(ss)}deg)`;
})

const changeThemeToDark = () => {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("data-theme", "dark");
}

const changeThemeToLight = () => {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("data-theme", "light");
}    

let theme = localStorage.getItem('data-theme');
if (theme == 'dark') changeThemeToDark();

const botaoDark = document.getElementById('chk');
if (localStorage.getItem('data-theme') == 'dark'){
    botaoDark.checked = true;
}

botaoDark.addEventListener('change', () => {
    let theme = localStorage.getItem('data-theme');

    if(!botaoDark.checked){
        changeThemeToLight()
    }
    else{
        changeThemeToDark()
    }
});