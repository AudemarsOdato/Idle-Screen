const currentTime_el = document.getElementById("time");
const currentDate_el = document.getElementById("date");
const inputTimezone = document.getElementById("timezones");

// usersTimezone
dayjs.extend(dayjs_plugin_timezone);
dayjs.extend(dayjs_plugin_utc);
// const usersTimezone = dayjs.tz.guess();
// usersTimezone_el.textContent = usersTimezone;

setInterval( () => {
        const TIMEZONE = inputTimezone.value;
        const currentTime = dayjs().tz(TIMEZONE);
        currentTime_el.textContent = currentTime.format('hh:mm:ss');
        currentDate_el.textContent = currentTime.format('dddd, D MMMM, YYYY');
}, 1000);