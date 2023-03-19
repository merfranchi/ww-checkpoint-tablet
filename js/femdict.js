const grid = document.querySelector("#grid-shuffle");
const items = gsap.utils.toArray(".defcard");

document.querySelector("#shuffle").addEventListener("click", () => {

    // Get the state
  const state = Flip.getState(items);

  // Do the actual shuffling
  for(let i = items.length; i >= 0; i--) {
      grid.appendChild(grid.children[Math.random() * i | 0]);
  }

  // Animate the change
  Flip.from(state, {
    absolute: true
  });
});
