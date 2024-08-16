// task 1: 
var pizza_maker={
    order1:{
          id:"1",
          type: "custom",
          toppings: ["tomato sauce", "mozzarella cheese", "pepperoni slices"],
          size: "small",
          crust: "thick"
        },
        order2:{
            id:"2",
            type: "custom",
            toppings: ["olives", "green peppers", "onions", "sausage"],
            size: "medium",
            crust: "thin"
        },
        order3:{
            id:"3",
            type: "custom",
            toppings: ["tomato","peproni slices", "onions", "sausage","mushroom"],
            size: "large",
            crust: "thick"
        }
}
console.log(pizza_maker.order1.toppings[0])
console.log(pizza_maker.order2.toppings[1])
console.log(pizza_maker.order3.toppings[2])