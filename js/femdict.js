// window.onload=function(){
//     var list = document.getElementsById("defgrid"),
//     button = document.getElementById("shuffle");
//     function shuffle(items)
//     {
//         var cached = items.slice(0), temp, i = cached.length, rand;
//         while(--i)
//         {
//             rand = Math.floor(i * Math.random());
//             temp = cached[rand];
//             cached[rand] = cached[i];
//             cached[i] = temp;
//         }
//         return cached;
//     }
//     function shuffleNodes()
//     {
//         var nodes = list.children, i = 0;
//         nodes = Array.prototype.slice.call(nodes);
//         nodes = shuffle(nodes);
//         while(i < nodes.length)
//         {
//             list.appendChild(nodes[i]);
//             ++i;
//         }
//     } 
//     document.getElementById("shuffle").onclick = shuffleNodes;
    
//     } 

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
