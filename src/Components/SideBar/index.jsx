import React, {useState} from 'react';
import './style.css';

const SideBar = () => {
    const [veg, setVeg] = useState(false);

    const updateVegFilter = () => {
        setVeg(!veg);
    }
    
    return (
        <div className='sidebar-content'>
            <div className='filter'>
                <h4>By Dietary</h4><br />
                <input type="checkbox" value="veg" checked={veg} onChange={updateVegFilter}/>
                <label>Veg
                </label><br />
                <input type="checkbox" value="nonveg" />
                <label>Non-Veg
                </label>
            </div>
            <div className='filter'>
                <h4>By Meal</h4><br />
                <input type="checkbox" value="breakfast" />
                <label>Breakfast
                </label><br />
                <input type="checkbox" value="lunch" />
                <label>Lunch
                </label><br />
                <input type="checkbox" />
                <label>Snack
                </label><br />
                <input type="checkbox" />
                <label>Dinner
                </label><br />
                <input type="checkbox" />
                <label>Dessert
                </label>
            </div>
            <div className='filter'>
                <h4>By Cuisine</h4><br />
                <input type="checkbox" />
                <label>North-Indian
                </label><br />
                <input type="checkbox" />
                <label>South-Indian
                </label><br />
                <input type="checkbox" />
                <label>Chinese
                </label><br />
                <input type="checkbox" />
                <label>Italinan
                </label>
            </div>
        </div>
    )
}

export default SideBar
