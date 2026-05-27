import { useEffect, useState } from "react";

function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
            })
            .catch((err) => {
                console.log(err);
            });

    }, []);

    return (
        <div>

            <h2>Products List</h2>

            <table  cellPadding="10" cellSpacing="0" className="D">
                <div>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Brand</th>
                        <th>Rating</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        products.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>₹ {item.price}</td>
                                <td>{item.category}</td>
                                <td>{item.brand}</td>
                                <td>{item.rating}</td>
                            </tr>
                        ))
                    }

                </tbody>
                    </div>
            </table>

        </div>
    );
}

export default Products;