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
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="gallery-page">
            <h1 className="gallery-title">🍽 Recipe Gallery</h1>

            <p className="gallery-subtitle">
                Discover delicious recipes
            </p>

            <div className="recipe-grid">
                {recipes.map((item) => (
                    <div className="recipe-card" key={item.id}>
                        <img
                            src={item.image}
                            alt={item.name}
                            className="recipe-image"
                        />

                        <div className="recipe-content">
                            <h3>{item.name}</h3>

                            <div className="recipe-details">
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
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;