export default {
  name: "Coin Flip",
  description: "Flip a coin",
  trigger: "flip",

  async execute(args) {
    const result = Math.random() < 0.5 ? "heads" : "tails";

    const html = `
<div class="coin-flip-container">
  <div class="coin-wrapper">
    <div class="coin ${result}">
      <div class="coin-side heads">
        <span>HEADS</span>
      </div>
      <div class="coin-side tails">
        <span>TAILS</span>
      </div>
    </div>
  </div>
  <div class="result-text">
    <div class="result-label">Result:</div>
    <div class="result-value ${result}">${result}</div>
  </div>
  <button class="flip-again" onclick="location.href='?q=!flip'">Flip Again</button>
</div>
    `;

    return {
      title: "Coin Flip",
      html: html
    };
  }
};
