import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Tuiles from "./Tuiles";
import Card from "./Card";
import "./Slide.css"

const Slides = [<Card />, <Card />, <Card />, <Card />, <Card />];

function Slide() {
    return (
        <div className="Slide">
            <motion.div className="carousel">
                <motion.div drag="x" dragConstraint={{right: -20}} className="inner-carousel">
                {Slides.map(slide => (
                    <motion.div className="item">
                            <li className="slide">{slide}</li>
                    </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Slide;