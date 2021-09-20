window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 1000);
};

document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

document.querySelector('.scroll-btn').addEventListener('click', () => {
  document.querySelector('html').style.scrollBehavior = 'smooth';
setTimeout(() => {
  document.querySelector('html').style.scrollBehavior = 'unset';
}, 1000);
});

const date = new Date();

const monthDays = document.querySelector('.days');

const lastDay = new Date(date.getFullYear(), date.getMonth(), 1)

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "Devember"
];

document.querySelector(".date h1").innerHTML = months[date.getMonth()];

document.querySelector('.date p').innerHTML = date.toDateString();

let days = "";

for (let i = 1; i <= 31; i++) {
  days += `<div>${i}</div>`;
  monthDays.innerHTML = days;
}



