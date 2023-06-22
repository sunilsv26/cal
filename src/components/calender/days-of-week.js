import PropTypes from "prop-types";


const DaysOfWeek = ({ format }) => {
    const weekdays = [];
    const options = { weekday: format === "firstTwoChars" ? "short" : format };
    for (let i = 1; i <= 7; i++) {
        // Here date passed as Jan 2023 to get week days in order starting from sunday
        const date = new Date(2023, 0, i);
        let weekday = date.toLocaleDateString(undefined, options);
        if (format === "firstTwoChars") {
            weekday = weekday.slice(0, 2);
        }
        weekdays.push(weekday);
    }

    return weekdays.map((day, i) => <th key={day + i}>{day}</th>);
};

DaysOfWeek.propTypes = {
    format: PropTypes.oneOf(["narrow", "short", "long", "firstTwoChars"])
};

DaysOfWeek.defaultProps = {
    format: "firstTwoChars"
};


export default DaysOfWeek;