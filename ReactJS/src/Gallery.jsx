import { useEffect, useState } from "react";
import "./Gallery.css";

function Gallery() {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {

        fetch("https://dummyjson.com/recipes")
            .then((res) => res.json())
            .then((data) => {

                setRecipes(data.recipes);

            })
            .catch((err) => {
                console.log(err);
            });

    }, []);

    return (
        <div>

            <h2 className="heading">Recipes Gallery</h2>

            <div className="card-container">

                {
                    recipes.map((item) => (

                        <div className="card" key={item.id}>

                            <img
                                src={item.image}
                                alt={item.name}
                                className="card-image"
                            />

                            <div className="card-body">

                                <h3>{item.name}</h3>

                                <p>
                                    <strong>Cuisine:</strong> {item.cuisine}
                                </p>

                                <p>
                                    <strong>Rating:</strong> ⭐ {item.rating}
                                </p>

                                <p>
                                    <strong>Difficulty:</strong> {item.difficulty}
                                </p>

                            </div>

                        </div>

                    ))
                }

            </div>

        </div>
    );
}

export default Gallery;