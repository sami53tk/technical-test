const decrementButton = document.getElementById("decrement");
      const incrementButton = document.getElementById("increment");
      const countSpan = document.getElementById("count");

      let count = 0;

      decrementButton.addEventListener("click", () => {
        count--;
        countSpan.innerText = count;
      });

      incrementButton.addEventListener("click", () => {
        count++;
        countSpan.innerText = count;
      });