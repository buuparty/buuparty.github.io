const Api = "api/videos.json";
const divTag = document.querySelector(".container");
const titleTag = document.getElementsByTagName("title");
const metaTag = document.getElementsByTagName("meta")[3];


fetch(Api)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
     try{
     	const videoId = new URL(window.location).searchParams.get("id");

      if (videoId <= data.length-1 ){
      	const i = videoId;
      	const test =  `
         <h1>${data[i].title}</h1>`;
        
      	divTag.innerHTML += test;
      	titleTag[0].innerHTML += data[i].title;
        metaTag.content += data[i].title;
      }else {
      	console.log("error");
      }
     }catch{
      	
     }
   })
   .catch((error) => {
      console.log("Error"+ error);
   });







