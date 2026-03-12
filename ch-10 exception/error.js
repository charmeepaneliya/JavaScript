let age = 17;

try {
  if (age > 18) {
    console.log("You are eligible for vote");
  } else {
    throw new Error("You are not eligible for vote");
  }
} catch (error) {
    console.log(error.message);
}
