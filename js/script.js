var slideIndex = 0;
carousel();

function carousel() {
  let i;
  const x = document.getElementsByClassName("nyhet_bild");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}





function openMenu() {
  document.getElementById("menu_content").style.height = "87%";
}

function closeMenu() { 
  document.getElementById("menu_content").style.height = "0%";
}