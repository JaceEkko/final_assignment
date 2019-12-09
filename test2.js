let projDiv = document.getElementById("projIndivHolder");
let pageHeader = document.getElementById("HeaderTitle");
function createProjectPage(project){
  //Create VideoLink
  // if(project["mainSource"] != "null"){
  //   let mainSource = document.createElement("VIDEO");
  //   mainSource.setAttribute("controls", "controls");
  //   mainSource_source = document.createElement("SOURCE");
  //   mainSource_source.src = project["mainSource"];
  //   mainSource_source.type="video/mp4";
  //   mainSource.appendChild(mainSource_source);
  //   projDiv.appendChild(mainSource);
  // }
  // //Create Link to Github Page
  // if(project["View Code"] != "null"){
  //   let viewCodeBut = document.createElement("BUTTON");
  //   viewCodeBut.innerHTML = "View Code";
  //
  //   projDiv.appendChild(viewCodeBut);
  // }

  // var unavail = "UnAvailable";
  //
  // var mainSource = document.createElement("Video");
  // if(project["mainSource"] == "null"){
  //   mainSource.innerHTML = unavail;
  // }
  // projDiv.appendChild(mainSource);

  pageHeader.innerHTML = project["Title"];

  for(var key in project){
    if(project[key] != "null"){
      var contentAndTag = project[key].split(" | "); //seperate the content from the tag the content will be contained in
      console.log(contentAndTag[0], " ", contentAndTag[1]);

      var tag = document.createElement(contentAndTag[1]); //create a tag based on what was specified in the JSON
      if(contentAndTag[1] == "VIDEO"){ //the tag I want is a VIDEO
        tag.setAttribute("controls", "controls");
        tag_source = document.createElement("SOURCE");
        tag_source.src = contentAndTag[0];
        tag_source.type="video/mp4";
        tag.appendChild(tag_source);
      }
      if(contentAndTag[1] == "AUDIO"){ //the tag I want is a AUDIO
        tag.setAttribute("controls", "controls");
        tag_source = document.createElement("SOURCE");
        tag_source.src = contentAndTag[0];
        tag_source.type="audio/wav";
        tag.appendChild(tag_source);
      }
      if(contentAndTag[1] == "IFRAME"){
        tag.src = contentAndTag[0];
      }
      if(contentAndTag[1] == "BUTTON"){ //the tag I want is a BUTTON
        tag.innerHTML = key;
        tag_link = document.createElement("A");
        tag_link.href = contentAndTag[0];
        tag_link.appendChild(tag);
        tag = tag_link;
      }
      if(contentAndTag[1] == "P"){ //the tag I want is a PARAGRAPH
        if(key != "Title"){
          tag.innerHTML = "<b>" + key + "</b>" + contentAndTag[0];
        }
        else{
          tag.innerHTML = contentAndTag[0];
        }
      }
      projDiv.appendChild(tag);
    }
  }
}

window.onload = function(){
  var prevAns = localStorage.getItem("storageNameProj");
  var idAndIndex = prevAns.split("_");
  console.log(idAndIndex[0], " ", idAndIndex[1]);

  if(idAndIndex[0] == "PAV"){
    console.log("You Chose ARVR");
    createProjectPage(arvr_project_list[idAndIndex[1]]);
  }
  if(idAndIndex[0] == "PG"){
    console.log("You Chose Games");
    createProjectPage(games_project_list[idAndIndex[1]]);
  }
  if(idAndIndex[0] == "PP"){
    console.log("You Chose Programming");
    createProjectPage(programming_project_list[idAndIndex[1]]);
  }
  if(idAndIndex[0] == "PW"){
    console.log("You Chose Websites");
    createProjectPage(websites_project_list[idAndIndex[1]]);
  }
  if(idAndIndex[0] == "PA"){
    console.log("You Chose Audio");
    createProjectPage(audio_project_list[idAndIndex[1]]);
  }
  if(idAndIndex[0] == "PM"){
    console.log("You Chose Models");
    createProjectPage(models_project_list[idAndIndex[1]]);
  }
}
