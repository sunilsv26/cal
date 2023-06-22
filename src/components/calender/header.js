import PropTypes from "prop-types";


const Header = ({ date, formatOptions }) => {

    return <div>
        {`${new Intl.DateTimeFormat('en-US', { month: formatOptions.month, year: formatOptions.year }).format(date)}`}
    </div>;
};

Header.propTypes = {
    date: PropTypes.instanceOf(Date),
    formatOptions: PropTypes.shape({
        month: PropTypes.oneOf(["numeric", "2-digit", "narrow", "short", "long"]),
        year: PropTypes.oneOf(["numeric", "2-digit"]),
    })
};

Header.defaultProps = {
    date: new Date(),
    formatOptions: {
        month: "long",
        year: "numeric"
    }
};

export default Header;