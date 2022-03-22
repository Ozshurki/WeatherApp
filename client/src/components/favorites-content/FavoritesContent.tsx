import React, {useState} from "react";

import "./FavoritesContent.css";
import FavoriteItem from "./favorite-item/FavoriteItem";
import {CityType} from "../../shared/types/city";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {favoritesActions} from "../../store/slices/favorites";
import {motion} from "framer-motion";


const FavoritesContent: React.FC = () => {

    const favoritesCities: CityType[] = useSelector((state: RootStateOrAny) => state.favorites.cities);
    const dispatch = useDispatch();
    const [cities, setCities] = useState<CityType[]>([]);

    const sortHandler = () => dispatch(favoritesActions.sort());

    return (
        <div className="favorites-content">
            {favoritesCities.length === 0 ? <></> :
                <div className="sort-btn" onClick={sortHandler}>Sort by temperature</div>
            }
            <motion.div className="favorites-items-container">
                {favoritesCities.length === 0 ?
                    <h1 className="favorites-is-empty-msg">Favorites is empty</h1>
                    : favoritesCities.map((city: CityType, index: number) => {
                        return (
                            <FavoriteItem key={index}
                                          keyLocation={city.key}
                                          cityName={city.cityName}
                                          temperature={city.temperature}
                                          weatherType={city.weatherType}
                                          weatherIcon={city.weatherIcon}/>
                        );
                    })}
            </motion.div>
        </div>
    );
};

export default FavoritesContent;