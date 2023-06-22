import Calander from "../components/calender/calender";

import classes from "./home.module.css";
const Home = () => {
    return (
        <div className={classes.home}>
            <Calander date={"21/12/2023"} />
        </div>
    );
};

export default Home;