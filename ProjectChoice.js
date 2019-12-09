let projDiv = document.getElementById("projectHolder");
let pageHeader = document.getElementById("HeaderTitle");
function createProjectList(project_list){

  for(var i = 0; i < project_list.length; i++){
    //Create Link to Project Display Page
    let proj_element_link = document.createElement("A");
    proj_element_link.href = "file:///C:/Users/johna/OneDrive/Documents/NYU_Fall_2019/Web/JohnathanKnox_com/projectIndiv.html";

    //Create The Project Element
    let proj_element = document.createElement("DIV");
    proj_element.classList.add("projectElementStyle");
    var contentAndTag_element = project_list[i]["projectMainImage"].split(" | "); //get content for image
    proj_element.style.backgroundImage = contentAndTag_element[0];
    proj_element.id = project_list[i]["id"];
    proj_element.addEventListener('click', function(){
      var listChoice = proj_element.id;
      console.log(listChoice);
      localStorage.setItem("storageNameProj", listChoice);

      location.href='projectIndiv.html';
    });
    proj_element_link.appendChild(proj_element); //add div to the link element

    //Create the Div that contains the Langauages
    let proj_element_lang = document.createElement("DIV");
    var contentAndTag_lang = project_list[i]["Created In: "].split(" | "); //get content for languages
    proj_element_lang.innerHTML = contentAndTag_lang[0];
    proj_element.appendChild(proj_element_lang);

    projDiv.appendChild(proj_element_link); //add div to the webpage
  }
}

window.onload = function(){
  var prevAns = localStorage.getItem("storageName");
  if(prevAns == "ARVR"){
    console.log("You Chose ARVR");
    pageHeader.innerHTML = "AUGMENTED/VIRTUAL REALITY";
    createProjectList(arvr_project_list);
  }
  if(prevAns == "Games"){
    console.log("You Chose Games");
    pageHeader.innerHTML = "GAMES";
    createProjectList(games_project_list);
  }
  if(prevAns == "Websites"){
    console.log("You Chose Websites");
    pageHeader.innerHTML = "WEBSITES";
    createProjectList(websites_project_list);
  }
  if(prevAns == "Programming"){
    console.log("You Chose Programming");
    pageHeader.innerHTML = "PROGRAMMING";
    createProjectList(programming_project_list);
  }
  if(prevAns == "Audio"){
    console.log("You Chose Audio");
    pageHeader.innerHTML = "AUDIO";
    createProjectList(audio_project_list);
  }
  if(prevAns == "Models"){
    console.log("You Chose Models");
    pageHeader.innerHTML = "MODELS";
    createProjectList(models_project_list);
  }
  if(prevAns == "Video"){
    console.log("You Chose Video");
    pageHeader.innerHTML = "VIDEOS";
    createProjectList(null);
  }
}
