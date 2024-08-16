//async await... zomato --> payment -> success fail --> order placed

async function orderFood() {
    console.log("Ordering food / selecting food");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ foodName: "Pizza", price: 200 });
      }, 5000);
    });
  }
  
  const payment = async (price) => {
    console.log("Payment in progress");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ status: "success", mode: "online", price: price });
      }, 5000);
    });
  };
  
  const zomato = async () => {
    const orderData = await orderFood(); //function return...
  
    const paymentData = await payment(orderData.price);
    if (paymentData.status === "success") {
      const flag = await orderPlaced({ orderData, paymentData });
      if (flag === "success") {
        console.log("Order placed successfully");
      } else {
        console.log("Order failed");
      }
    }
  };
  
  const orderPlaced = async (data) => {
    console.log("Order placed");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("success");
      }, 2000);
    });
  };
  
  zomato();