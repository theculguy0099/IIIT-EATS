import mongoose from "mongoose";
import { connectDB } from "../config/db.js";  
import orderModel from "../models/orderModel.js";  

const food_list = [
    {
        _id: "1",
        name: "Greek salad",
        // image: food_1,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad",
        canteen: "jc"
    },
    {
        _id: "2",
        name: "Veg salad",
        // image: food_2,
        price: 18,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad",
        canteen: "vc"
    }, {
        _id: "3",
        name: "Clover Salad",
        // image: food_3,
        price: 16,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad",
        canteen: "bbc"
    }, {
        _id: "4",
        name: "Chicken Salad",
        // image: food_4,
        price: 24,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad",
        canteen: "jc"
    }, {
        _id: "5",
        name: "Lasagna Rolls",
        // image: food_5,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls",
        canteen: "vc"
    }, {
        _id: "6",
        name: "Peri Peri Rolls",
        // image: food_6,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls",
        canteen: "bbc"
    }, {
        _id: "7",
        name: "Chicken Rolls",
        // image: food_7,
        price: 20,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls",
        canteen: "jc"
    }, {
        _id: "8",
        name: "Veg Rolls",
        // image: food_8,
        price: 15,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls",
        canteen: "vc"
    }, {
        _id: "9",
        name: "Ripple Ice Cream",
        // image: food_9,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts",
        canteen: "bbc"
    }, {
        _id: "10",
        name: "Fruit Ice Cream",
        // image: food_10,
        price: 22,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts",
        canteen: "jc"
    }, {
        _id: "11",
        name: "Jar Ice Cream",
        // image: food_11,
        price: 10,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts",
        canteen: "vc"
    }, {
        _id: "12",
        name: "Vanilla Ice Cream",
        // image: food_12,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts",
        canteen: "bbc"
    },
    {
        _id: "13",
        name: "Chicken Sandwich",
        // image: food_13,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sandwich",
        canteen: "jc"
    },
    {
        _id: "14",
        name: "Vegan Sandwich",
        // image: food_14,
        price: 18,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sandwich",
        canteen: "vc"
    }, {
        _id: "15",
        name: "Grilled Sandwich",
        // image: food_15,
        price: 16,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sandwich",
        canteen: "bbc"
    }, {
        _id: "16",
        name: "Bread Sandwich",
        // image: food_16,
        price: 24,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sandwich",
        canteen: "jc"
    }, {
        _id: "17",
        name: "Cup Cake",
        // image: food_17,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cake",
        canteen: "vc"
    }, {
        _id: "18",
        name: "Vegan Cake",
        // image: food_18,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cake",
        canteen: "bbc"
    }, {
        _id: "19",
        name: "Butterscotch Cake",
        // image: food_19,
        price: 20,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cake",
        canteen: "jc"
    }, {
        _id: "20",
        name: "Sliced Cake",
        // image: food_20,
        price: 15,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cake",
        canteen: "vc"
    }, {
        _id: "21",
        name: "Garlic Mushroom ",
        // image: food_21,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pure Veg",
        canteen: "bbc"
    }, {
        _id: "22",
        name: "Fried Cauliflower",
        // image: food_22,
        price: 22,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pure Veg",
        canteen: "jc"
    }, {
        _id: "23",
        name: "Mix Veg Pulao",
        // image: food_23,
        price: 10,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pure Veg",
        canteen: "vc"
    }, {
        _id: "24",
        name: "Rice Zucchini",
        // image: food_24,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pure Veg",
        canteen: "bbc"
    },
    {
        _id: "25",
        name: "Cheese Pasta",
        // image: food_25,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pasta",
        canteen: "jc"
    },
    {
        _id: "26",
        name: "Tomato Pasta",
        // image: food_26,
        price: 18,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pasta",
        canteen: "vc"
    }, {
        _id: "27",
        name: "Creamy Pasta",
        // image: food_27,
        price: 16,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pasta",
        canteen: "bbc"
    }, {
        _id: "28",
        name: "Chicken Pasta",
        // image: food_28,
        price: 24,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pasta",
        canteen: "jc"
    }, {
        _id: "29",
        name: "Buttter Noodles",
        // image: food_29,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Noodles",
        canteen: "vc"
    }, {
        _id: "30",
        name: "Veg Noodles",
        // image: food_30,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Noodles",
        canteen: "bbc"
    }, {
        _id: "31",
        name: "Somen Noodles",
        // image: food_31,
        price: 20,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Noodles",
        canteen: "jc"
    }, {
        _id: "32",
        name: "Cooked Noodles",
        // image: food_32,
        price: 15,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Noodles",
        canteen: "vc"
    }
]

const updateCanteenInOrders = async () => {
    try {
      await connectDB();  // Connect to the database
      console.log("Connected to database");
  
      // Create a map of food names to canteens for quick lookup
      const foodCanteenMap = food_list.reduce((map, food) => {
        map[food.name.toLowerCase()] = food.canteen;
        return map;
      }, {});
  
      const result = await orderModel.updateMany(
        {},  // Update all documents
        [
          {
            $set: {
              items: {
                $map: {
                  input: "$items",
                  as: "item",
                  in: {
                    $mergeObjects: [
                      "$$item",
                      {
                        canteen: {
                          $cond: {
                            if: { $ne: [{ $type: "$$item.name" }, "missing"] },
                            then: {
                              $let: {
                                vars: {
                                  matchedCanteen: { 
                                    $getField: { 
                                      field: { $toLower: "$$item.name" }, 
                                      input: foodCanteenMap 
                                    }
                                  }
                                },
                                in: {
                                  $cond: {
                                    if: { $ne: ["$$matchedCanteen", null] },
                                    then: "$$matchedCanteen",
                                    else: "$$item.canteen"
                                  }
                                }
                              }
                            },
                            else: "$$item.canteen"
                          }
                        }
                      }
                    ]
                  }
                }
              }
            }
          }
        ]
      );
  
      console.log(`Updated ${result.modifiedCount} documents`);
      console.log("Finished updating canteens in orders");
    } catch (error) {
      console.error("Error updating documents:", error);
    } finally {
      await mongoose.disconnect();
      console.log("Disconnected from database");
    }
  };
  
  updateCanteenInOrders();