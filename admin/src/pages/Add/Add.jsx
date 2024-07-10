import React, { useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    price: "",
    description: "",
    category: "Salad",
    canteen: "jc",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", Number(data.price));
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("canteen", data.canteen);
    formData.append("image", image);

    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      if (response.data.success) {
        setData({
          name: "",
          price: "",
          description: "",
          category: "Salad",
          canteen: "jc",
        });
        setImage(false);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="add">
      <form onSubmit={onSubmitHandler}>
        <div className="add-img-upload">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Upload area"
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            name="image"
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name">
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder=" "
            required
          />
          <label htmlFor="name">Product Name</label>
        </div>

        <div className="add-product-description">
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            placeholder=" "
            rows="6"
            required
          />
          <label htmlFor="description">Product Description</label>
        </div>

        <div className="add-category-price">
          <div className="add-category">
            <select
              onChange={onChangeHandler}
              name="category"
              value={data.category}
            >
              <option value="">Select Category</option>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
            <label htmlFor="category">Product Category</label>
          </div>
          <div className="add-canteen">
            <select
              onChange={onChangeHandler}
              name="canteen"
              value={data.canteen}
            >
              <option value="jc">JC</option>
              <option value="vc">VC</option>
              <option value="bbc">BBC</option>
            </select>
            <label htmlFor="canteen">Canteen</label>
          </div>
          <div className="add-price">
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              placeholder=" "
              required
            />
            <label htmlFor="price">Product Price</label>
          </div>
        </div>
        <button type="submit" className="add-btn">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Add;
