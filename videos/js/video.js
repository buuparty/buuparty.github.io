const Api = "api/videos.json";
const divTag = document.querySelector(".content");
const titleTag = document.getElementsByTagName("title");
const navTag = document.querySelector(".navcontainer");
const bodyTag = document.querySelector(".bodycontainer");
const errorTag = document.querySelector(".errorcontainer");
const videoId = new URL(window.location).searchParams.get("id");

if (videoId !== null){
	
	errorTag.style.display = "none";
	
	fetch(Api)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
     try{
     	
      if (videoId <= data.length-1 ){
      	const i = videoId;
      	const test =  `
         <iframe src="${data[i].video}" frameborder=0 marginwidth=0 marginheight=0 scrolling=NO width=100% height=350 allowfullscreen></iframe>
         <h4>${data[i].title}</h4>
         `;
        
      	divTag.innerHTML += test;
      	titleTag[0].innerHTML += data[i].title;
      }else {
      	console.log("error");
      }
     }catch{
      	
     }
   })
   .catch((error) => {
      console.log("Error"+ error);
   });
}else{
	
	bodyTag.style.display = "none";
};

window.addEventListener("scroll", () => {
	navTag.classList.toggle("navbox", window.scrollY > 10);
});






