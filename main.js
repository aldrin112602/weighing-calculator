(() => {
  const inputs = document.querySelectorAll('input')
  let price = kl = lines = totalCost = cash = change = 0;
  const handlers = [
    function() {
      price = this.value;
      calculate()
    },
    function() {
      kl = this.value;
      calculate()
    },
    function() {
      lines = this.value;
      calculate();
    },
    function() {},
    function() {
      cash = this.value;
      calculate();
    },
    
    function() {}
    ];
    
    function calculate() {
      totalCost = price * kl + (price / 10 * lines);
      inputs[3].value = totalCost;
      inputs[inputs.length - 1].value = cash - totalCost;
    }
  inputs.forEach((el, i)=> {
    el.addEventListener('input', handlers[i])
  })
  
})()
