const test = document.querySelector(".tabcontent");

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
 }
 // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

//Server

const Api = "videos/api/videos.json";

fetch(Api)
  .then((response) => {
  	return response.json();
  })
  .then((data) => {
     try{
     	data.forEach((datas) => {
        const videoTag = `
        <div class="videoContainer" >
          <a href="videos/${datas.id}">${datas.title}</a>
        </div>`;
        test.innerHTML += videoTag;
     	});
     	
     }catch{
      	
      };
   })
   .catch((error) => {
      console.log("Error"+ error);
   });
