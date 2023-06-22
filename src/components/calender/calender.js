import PropTypes from "prop-types";
import React, { memo, useEffect, useState } from 'react';

import Dates from './dates';
import DaysOfWeek from './days-of-week';
import Header from './header';

import classes from "./calender.module.css";

const dateFormats = ["dd/mm/yyyy", "mm/dd/yyyy"];

const Calendar = ({ date, dateFormat, monthDisplay, yearDisplay, weekDisplay }) => {

    const [input, setInput] = useState({});
    const [error, setError] = useState(false);

    const validateInput = () => {
        if (dateFormats.includes(dateFormat)) {
            if (dateFormat === dateFormats[0]) {
                const [day, month, year] = date.split("/");
                if (day >= 31 || month > 12) {
                    setError(true);
                }
                setInput({
                    day,
                    month,
                    year,
                });
            } else if (dateFormat === dateFormats[1]) {
                const [month, day, year] = date.split("/");
                setInput({
                    day,
                    month,
                    year,
                });
                if (day >= 31 || month > 12) {
                    setError(true);
                }
            }
        } else {
            setError(true);
        }
    };

    useEffect(() => {
        validateInput();
    }, []);




    return (
        <>{(!error && input.day) ? <table className={classes.calender}>
            <thead>
                <tr>
                    <th colSpan="7">
                        <Header
                            date={new Date(input.year, input.month - 1, input.day)}
                            formatOptions={{ month: monthDisplay, year: yearDisplay }}
                        />
                    </th>
                </tr>
                <tr><DaysOfWeek format={weekDisplay} /></tr>
            </thead>
            <tbody>
                <Dates month={input.month} year={input.year} day={input.day} />
            </tbody>
        </table> : error ? <p>Invalid Date</p> : <p>No date input provided</p>}</>

    );
};

Calendar.propTypes = {
    date: PropTypes.string,
    dateFormat: PropTypes.oneOf(["dd/mm/yyyy", "mm/dd/yyyy"]),
    monthDisplay: PropTypes.oneOf(["numeric", "2-digit", "narrow", "short", "long"]),
    yearDisplay: PropTypes.oneOf(["numeric", "2-digit"]),
    weekDisplay: PropTypes.oneOf(["narrow", "short", "long", "firstTwoChars"])
};

Calendar.defaultProps = {
    monthDisplay: "long",
    yearDisplay: "numeric",
    dateFormat: "dd/mm/yyyy",
    weekDisplay: "firstTwoChars"
};

export default memo(Calendar);