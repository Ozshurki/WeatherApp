import React, {useEffect, useState} from "react";
import "./DailyForeCast.css";
import {WiDegrees} from "react-icons/wi";
import classNames from "classnames";
import {motion} from "framer-motion";

interface CardInt {
    date: string,
    minTemperature: number,
    maxTemperature: number,
    weatherType: string,
    animationDelay: number
    weatherIcon: string;
}

const DailyForeCast: React.FC<CardInt> = (props) => {


    const cardVariants = {
        hidden: {
            opacity: 0,
            x: 40
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {delay: 0.8 + props.animationDelay * 0.2, type: "spring"}
        }
    };

    return (
        <motion.div className="card"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{scale: 1.1}}>
            <img className="weather-img"
                 src={`https://developer.accuweather.com/sites/default/files/${props.weatherIcon}-s.png`}
                 alt={props.weatherIcon}/>
            <motion.div className="card-content">
                <div className="date">{new Date(props.date).toString().slice(0, 3)}</div>
                <div className="temperature">{props.minTemperature} / {props.maxTemperature}
                    <span>
                    <WiDegrees color="black" size="1.5rem"/>
                </span>
                </div>
                <div className="weather-type">{props.weatherType}</div>
            </motion.div>
        </motion.div>
    );
};

export default DailyForeCast;