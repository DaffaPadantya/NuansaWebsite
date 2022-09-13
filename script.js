function toggleClassName(){
    var sidebar = document.querySelector('.sidebar');
    var wrapper = document.querySelector('.wrapper');
    var toggle = document.querySelector('.toggle');

    sidebar.classList.toggle('active')
    wrapper.classList.toggle('active')
    toggle.classList.toggle('active')

    toggleClose();
    toggleClose2();
}


window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0)
})

function toggleDown() {
  var x = document.getElementById("downElement");
  if (x.style.display === "none") {
    x.style.display = "block" ;
  } else {
    x.style.display = "none";
  }
}

function toggleDown2() {
  var x = document.getElementById("downElement2");
  if (x.style.display === "none") {
    x.style.display = "block" ;
  } else {
    x.style.display = "none";
  }
}

function toggleClose(){
     var x = document.getElementById("downElement");
     x.style.display = "none"
}

function toggleClose2(){
     var x = document.getElementById("downElement2");
     x.style.display = "none"
}

sal({
    once: false,
  });

