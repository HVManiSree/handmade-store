import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";

function Admin() {
  const {
    products,
    addProduct,
    deleteProduct,
  } = useContext(ProductContext);

  const [isLoggedIn, setIsLoggedIn] =
    useState(false);

  const [password, setPassword] =
    useState("");

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] =
    useState("shirt");
  const [description, setDescription] =
    useState("");

  if (!isLoggedIn) {
    return (
      <div
        style={{
          padding: "30px",
          textAlign: "center",
        }}
      >
        <h1>Admin Login</h1>

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          style={{
            padding: "10px",
            width: "250px",
          }}
        />

        <br />
        <br />

        <button
          onClick={() => {
            if (password === "mani123") {
              setIsLoggedIn(true);
            } else {
              alert("Wrong Password");
            }
          }}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    );
  }

  const handleSubmit = () => {
    if (!name || !price) {
      alert("Please fill all required fields");
      return;
    }

    addProduct({
      name,
      price: Number(price),
      category,
      description,
      image: "https://via.placeholder.com/300",
    });

    setName("");
    setPrice("");
    setCategory("shirt");
    setDescription("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>

      <h2>Add Product</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) =>
          setPrice(e.target.value)
        }
      />

      <br />
      <br />

      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
      >
        <option value="shirt">
          Shirt
        </option>
        <option value="frame">
          Photo Frame
        </option>
        <option value="keychain">
          Key Chain
        </option>
      </select>

      <br />
      <br />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) =>
          setDescription(
            e.target.value
          )
        }
        rows="4"
        cols="40"
      />

      <br />
      <br />

      <button onClick={handleSubmit}>
        Add Product
      </button>

      <hr />

      <h2>Products</h2>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "10px",
          }}
        >
          <h3>{product.name}</h3>

          <p>
            <strong>Price:</strong> ₹
            {product.price}
          </p>

          <p>
            <strong>Category:</strong>{" "}
            {product.category}
          </p>

          <p>
            <strong>Description:</strong>{" "}
            {product.description}
          </p>

          <button
            onClick={() =>
              deleteProduct(product.id)
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Admin;