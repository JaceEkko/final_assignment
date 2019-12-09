var buttons = document.getElementsByClassName("categoryBtn");

function ChooseList(val){
  var listChoice = val.id;
  console.log(val.id);
  localStorage.setItem("storageName", listChoice);
}
