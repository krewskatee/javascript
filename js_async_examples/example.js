setTimeout(() => {
  console.log("First Task Complete!");
  setTimeout(() => {
    console.log("Second Task Complete!");
    setTimeout(() => {
      console.log("Third Task Complete!");
    }, 2000);
  }, 2000);
}, 2000);
