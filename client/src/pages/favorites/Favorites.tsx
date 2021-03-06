import React from "react";
import { motion } from "framer-motion";

import "./Favorites.css";
import FavoriteCities from "../../components/favorites-content/FavoriteCities";


const favoritesVariants = {
    hidden: {
        opacity: 0,
        x: "100vw"
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {duration: 0.8, ease: "easeInOut"}
    },
    exit: {
        x: '100vw',
        transition: {
            ease: 'easeInOut'
        }
    }
};

const Favorites: React.FC = () => {

    return (
        <motion.div className="favorites-page"
        variants={favoritesVariants}
        initial="hidden"
        animate="visible"
        exit="exit">
            <FavoriteCities/>
        </motion.div>
    );
};

export default Favorites;