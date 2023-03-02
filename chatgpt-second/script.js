var btn = document.getElementById("btn");
var startTime, endTime, reactionTime;

btn.addEventListener("click", function() {
  if (btn.className === "green") {
    endTime = new Date();
    reactionTime = (endTime - startTime) / 1000;
    document.body.innerHTML = `
      <h1>Your Reaction Time: ${reactionTime} seconds</h1>
      <button onclick="window.location.reload()">Play Again</button>
    `;
  }
});

setTimeout(function() {
  btn.className = "green";
  startTime = new Date();
}, Math.floor(Math.random() * 3000) + 1000);