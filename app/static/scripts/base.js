var bar = new Vue({
  el: '#bar',
  data: {

  },
  methods: {
    toggleNav: function() {
      if (document.getElementById("links").style.visibility == "visible") {
        document.getElementById("bar").style.width = "25px";
        document.getElementById("bar").style.transition = "width 1.5s";
        document.getElementById("links").style.visibility = "hidden";
        document.getElementById("links").style.opacity = "0";
        document.getElementById("links").style.transition = "visibility 0s linear 0s, opacity 1500ms";
        document.getElementById("button").style.visibility = "visible";
        document.getElementById("exitbutton").style.visibility = "hidden";
        document.getElementById("bar").style.borderRadius = "0px 50px 50px 0px";
        document.getElementById("bar").style.border = "1px solid #a6a6a600";
        document.getElementById("bar").style.backgroundImage = "linear-gradient(to right, #ffffff00, #ffffff00)";
        document.getElementById("bar").style.boxShadow = "0 0 0 0 rgba(0, 0, 0, 0.2)";
        }
      else {
        document.getElementById("bar").style.width = "275px";
        document.getElementById("bar").style.transition = "width 1s";
        document.getElementById("links").style.visibility = "visible";
        document.getElementById("links").style.opacity = "1";
        document.getElementById("links").style.transition = "visibility 0s linear 700ms, opacity 6000ms";
        document.getElementById("button").style.visibility = "hidden";
        document.getElementById("exitbutton").style.visibility = "visible";
        document.getElementById("bar").style.borderRadius = "0px 50px 50px 0px";
        document.getElementById("bar").style.border = "1px solid #ffffff66";
        document.getElementById("bar").style.backgroundColor = "#ffffff";
        document.getElementById("bar").style.boxShadow = "1px 3px 5px 2px rgba(0, 0, 0, 0.2)";

      }
    }
  }
})

console.log("js working!")
