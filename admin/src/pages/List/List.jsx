import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({ url }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list-container">
      <h2 className="list-title">All Foods List</h2>
      <div className="list-grid">
        {list.map((item, index) => (
          <div className="food-card" key={index}>
            <div className="food-image">
              <img src={`${url}/images/${item.image}`} alt={item.name} />
            </div>
            <div className="food-info">
              <h3 className="food-name">{item.name}</h3>
              <p className="food-category">{item.category}</p>
              <p className="food-price">${item.price}</p>
              <p className="food-canteen">{item.canteen.toUpperCase()}</p>
            </div>
            <button onClick={() => removeFood(item._id)} className="delete-btn">
              <span className="btn-text">Delete</span>
              <span className="btn-icon">🗑️</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;  