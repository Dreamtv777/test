    <!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {box-sizing: border-box;}
body {font-family: Verdana, sans-serif;}
.mySlides {display: none;}
img {vertical-align: middle;}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dreamtv {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #FF298D;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active {
  background-color: #1BF2FF;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .text {font-size: 11px}
}
</style>
</head>
<body>

<h4>Loved by Thousands of App Users like you</h4>


<div class="slideshow-container">

<div class="mySlides fade">
  <div class="numbertext"></div> <body>
    <ul id="slider"><li>
        <p><h4>Amazing App !</h4><p>
      
          <p><p class="card-text">I am using Dream TV App for 1 Year and found very amazing app, all channels are working properly having dedicated team for bug fixation. 
						    </p></p>
      </li><center>
  <img src="https://i.postimg.cc/pdGzgxJv/20211123-014607.png" style="width:20%">
  <p>Hassan Ali</p> <p>KPK, PK</p>
</div>




<div class="mySlides fade">
  <div class="numbertext"></div> <body>
    <ul id="slider"><li>
        <p><h4>Great App !</h4><p>
      
          <p><p class="card-text">Dream TV is really Pakistan No.1 App in the field of Live Streaming &amp; Broadcasting. I can watch any show, dramas and tv channels 24hr a day. Really its exceptional.  </p></p>
      </li><center>
  <img src="https://i.postimg.cc/tCpH7VxB/20211123-015503.png" style="width:20%">
  <p>Abeeha Malik</p><p>Lahore, PK</p>
</div>


<div class="mySlides fade">
  <div class="numbertext"></div> <body>
    <ul id="slider"><li>
        <p><h4>Total Game Changer !</h4><p>
      
          <p><p class="card-text">With the Launch of Dream TV App, all apps gone, Dream TV App change the world with excellent streaming service. I love Dream TV App! </p></p>
      </li><center>
  <img src="https://i.postimg.cc/C5qhsyNS/20211123-021345.png" style="width:20%">
  <p>Abee Malik</p> <p>Sialkot, PK</p>
</div>







<div class="mySlides fade">
  <div class="numbertext"></div> <body>
    <ul id="slider"><li>
        <p><h4>Actually Impressive !</h4><p>
      
          <p><p class="card-text">I am much impressed by Dream TV App, because its offering free live streaming of all channels. Thanks to Dream TV Team. Good Luck</p></p>
      </li><center>
  <img src="https://i.postimg.cc/9fvDjfKG/20211123-012746.png" style="width:20%">
  <p>Abdullah Shahzad</p> <p>Lahore, PK</p>
</div>




<div class="mySlides fade">
  <div class="numbertext"></div> <body>
    <ul id="slider"><li>
        <p><h4>Just Perfect !</h4><p>
      
          <p><p class="card-text">Dream TV is one of the Perfect Live TV App, I am using this for 2 years and found very perfect. Dream TV App is the best one.</p></p>
      </li><center>
  <img src="https://i.postimg.cc/SRVQjQT1/20211123-013417.png" style="width:20%">
  <p>Awais Ali</p> <p>Islamabad, PK</p>
</div>




















<br>

<div style="text-align:center">
  <span class="dreamtv"></span> 
  <span class="dreamtv"></span> 
  <span class="dreamtv"></span> 
  <span class="dreamtv"></span> 
  <span class="dreamtv"></span> 
  
</div>

<script>
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dreamtv");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides,7000); // Change image every 2 seconds
}
</script>

</body>
</html>