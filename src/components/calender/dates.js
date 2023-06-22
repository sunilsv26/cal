import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import classes from "./calender.module.css";

const Dates = ({ day, year, month }) => {

    const [rows, setRows] = useState([]);

    useEffect(() => {
        const firstDay = new Date(year, month, 1).getDay();
        const lastDay = new Date(year, month + 1, 0).getDate();
        const emptycells = Array(firstDay).fill(null);
        const dateCells = Array(lastDay).fill(null).map((_, index) => index + 1);
        const allCells = emptycells.concat(dateCells);
        const rowSize = 7;
        const allRows = [];
        for (let i = 0; i < allCells.length; i += rowSize) {
            allRows.push(allCells.slice(i, i + rowSize));
        }
        setRows(allRows);
    }, [month, year]);


    return <>
        {
            rows.map((row, ind) => {
                return <tr key={ind}>
                    {
                        row.map((d, index) => {

                            return <td key={index} className={+day === d ? classes.active_date : ""} >{d}</td>;
                        })
                    }
                </tr>;

            })
        }
    </>;
};

Dates.propTypes = {
    date: PropTypes.instanceOf(Date)
};



export default Dates

