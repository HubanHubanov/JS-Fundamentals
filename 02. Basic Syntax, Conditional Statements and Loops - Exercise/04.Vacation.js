function vacation(peopleNumber, type, day) {
  let price = 0;

  switch (type) {
    case "Students":
      switch (day) {
        case "Friday":
          price = 8.45;
          break;

        case "Saturday":
          price = 9.8;
          break;

        case "Sunday":
          price = 10.46;
          break;
      }

      break;

    case "Business":
      switch (day) {
        case "Friday":
          price = 10.9;
          break;

        case "Saturday":
          price = 15.6;
          break;

        case "Sunday":
          price = 16;
          break;
      }

      break;

    case "Regular":
      switch (day) {
        case "Friday":
          price = 15;
          break;

        case "Saturday":
          price = 20;
          break;

        case "Sunday":
          price = 22.5;
          break;
      }

      break;
  }

  let totalPrice = peopleNumber * price;

  if (type === "Students" && peopleNumber >= 30) {
    totalPrice *= 0.85;
  }

  if (type === "Business" && peopleNumber >= 100) {
    totalPrice -= 10 * price;
  }

  if (type === "Regular" && peopleNumber >= 10 && peopleNumber <= 20) {
    totalPrice *= 0.95;
  }
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
