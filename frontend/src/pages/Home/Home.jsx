import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import FactsCounter from "../../components/FactsCounter/FactsCounter";

const Home = () => {
  const [category, setCategory] = useState("All");
  const [selectedCanteen, setSelectedCanteen] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />

      <div className="canteen-selector">
        <button
          className={`canteen-btn ${selectedCanteen === "All" ? "active" : ""}`}
          onClick={() => setSelectedCanteen("All")}
        >
          All Canteens
        </button>
        <button
          className={`canteen-btn ${selectedCanteen === "jc" ? "active" : ""}`}
          onClick={() => setSelectedCanteen("jc")}
        >
          JC
        </button>
        <button
          className={`canteen-btn ${selectedCanteen === "vc" ? "active" : ""}`}
          onClick={() => setSelectedCanteen("vc")}
        >
          VC
        </button>
        <button
          className={`canteen-btn ${selectedCanteen === "bbc" ? "active" : ""}`}
          onClick={() => setSelectedCanteen("bbc")}
        >
          BBC
        </button>
      </div>

      <FoodDisplay category={category} canteen={selectedCanteen} />
      <FactsCounter />
      <br />
      <br />
    </div>
  );
};

export default Home;
