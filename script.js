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
}, 1000);