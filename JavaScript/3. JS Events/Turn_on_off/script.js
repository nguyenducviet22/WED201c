  let isOn = false;
  function turn_on() {
    isOn = !isOn;
    let light = document.getElementById("light");
    if (isOn) {
      light.style.color = "black";
      light.style.backgroundColor = "yellow";
    } else {
      light.style.color = "yellow";
      light.style.backgroundColor = "black";
    }
  }