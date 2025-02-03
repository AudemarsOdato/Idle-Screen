const currentTime_el = document.getElementById("time");
const currentDate_el = document.getElementById("date");
const timezone_el = document.getElementById("timezone");

// usersTimezone
dayjs.extend(dayjs_plugin_timezone);
dayjs.extend(dayjs_plugin_utc);
// const usersTimezone = dayjs.tz.guess();
// usersTimezone_el.textContent = usersTimezone;
const TIMEZONE = "Asia/Manila";

setInterval( () => {
        const currentTime = dayjs().tz(TIMEZONE);
        timezone_el.textContent = TIMEZONE;
        currentTime_el.textContent = currentTime.format('hh:mm:ss');
        currentDate_el.textContent = currentTime.format('dddd, D MMMM, YYYY');

        darkmode(isDarkmode);
}, 1000);

currentDate_el.addEventListener("click", () => {
        lightmode();
});

currentTime_el.addEventListener("click", () => {
        darkmode();
});

const body = document.querySelector("body");
const box = document.querySelector(".box");

function darkmode () {
        body.classList.add("dark-mode");
        box.classList.add("dark-mode");

        currentTime_el.style.color = "rgb(228, 228, 228)";
        currentDate_el.style.color = "rgb(228, 228, 228)";
        timezone_el.style.color = "rgb(191, 191, 191)";
}

function lightmode() {
        body.classList.remove("dark-mode");
        box.classList.remove("dark-mode");

        currentTime_el.style.color = "rgb(45, 23, 23)";
        currentDate_el.style.color = "rgb(45, 23, 23)";
        timezone_el.style.color = "rgba(59, 59, 59, 0.733)";
}