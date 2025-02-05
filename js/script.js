function adjustLayout() {
  if (window.innerWidth < 768) {
    document.body.style.fontSize = "14px";
  } else {
    document.body.style.fontSize = "16px";
  }
}

window.addEventListener("load", adjustLayout);
window.addEventListener("resize", adjustLayout);