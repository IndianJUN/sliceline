export function formatPrice(price) {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
  }
  
  export const foodItems = [
    {
      name: "Cheese Burger",
      img: "/img/burger.jpg",
      section: "Burger",
      price: 1
    },
    {
      name: "Pepperoni Pizza",
      img: "/img/pizza2.jpg",
      section: "Pizza",
      price: 1.5
    },
    {
      name: "Margherita",
      img: "/img/pizza.jpg",
      section: "Pizza",
      price: 2
    },
    {
      img: "/img/healthy-pizza.jpg",
      name: "Veggie Pizza",
      section: "Pizza",
      price: 2
    },
    {
      img: "/img/chickenpizza.jpg",
      name: "Chicken Pizza",
      section: "Pizza",
      price: 3
    },
    { img: "/img/sandwich.jpg", name: "Sandwich", section: "Sandwich", price: 4.5 },
    {
      img: "/img/fries.jpg",
      name: "Fries",
      section: "Sides",
      price: 1
    }
  ];
  
  export const foods = foodItems.reduce((res, food) => {
    if (!res[food.section]) {
      res[food.section] = [];
    }
    res[food.section].push(food);
    return res;
  }, {});
  
  //  © created by react.school
  
  