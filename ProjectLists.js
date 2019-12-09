//Questions:
//How to add hover functionality within javascript?
//change the url for the hover style in javascript
//responsively chnage the sizing based on how many elements in a row

//Project JSON Parameters:
/*{ //put the content followed by " | " and then the tag you want the content in
  id : "id", // "P" + "Shorthand for Category" + "_Index" //used to see which specific was chosen by the user
  projectMainImage: url(main image), //image for the project list
  "Title" : "Title | P", //MUST BE IN THIS ORDER
  mainSource: "url()/LocalVideo | TAG", //main video or link
  View Code: url()  | TAG, //link to code
  Play Demo: url('url')  | TAG, //link to demo
  "Created In: " : "all languages used  | TAG", //languages used to create the project
  "Start Year: " : "year  | TAG", //start year for the project
  "Duration: " : "duration of project creation  | TAG", //how long it took you to create the project
  "Description: " : "description of project  | TAG", //description of the project
  otherSources: [url()]
}*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////

var arvr_project_list = [
  {//VRTerraformGallatin
    "id" : "PAV_0",
    "projectMainImage" : "url(Images/GallatinTerraformScreenShot.PNG) | IMG | Hide",
    "Title" : "TERRAFORM",
    "mainSource" : "https://www.youtube.com/embed/NPh1jtXJtcg | IFRAME",
    "View Code" : "https://github.com/JaceEkko/GallatinFinalProject2019/tree/master/Scripts | BUTTON",
    "Play Demo" : "null",
    "Created In: " : "Unity, C# | P",
    "Start Year: " : "2018 | P",
    "Duration: " : "1 Week | P",
    "Description: " : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. | P"
  },
  {//MixedRealityLab
    "id" : "PAV_1",
    "projectMainImage" : "url(Images/MixedRealityVIPScreenShot.PNG) | IMG | Hide",
    "Title" : "MIXED REALITY LABORATORY",
    "mainSource" : "https://www.youtube.com/embed/jX398Pg70PY | IFRAME",
    "View Code" : "null",
    "Play Demo" : "null",
    "Created In: " : "Unity, C# | P",
    "Start Year: " : "2017 | P",
    "Duration: " : "2 Years | P",
    "Description: " : "Engineering students are required to perform a series of laboratory experiments over several years of their undergraduate experience. These experiments traditionally require devices to be physically connected to the test instrumentation in a typical laboratory environment. Unfortunately, this type of experience is not conducive to online education as the test instrumentation is often too costly, large and/or delicate to be located outside the lab. It is the goal of this research project to investigate how Mixed Reality (MR) visualizations can substitute for the test instruments while still providing the student with a similar laboratory experience to that of a physical lab. | P"
  }
]
var games_project_list = [
  { //AlphaVOmega
    "id" : "PG_0",
    "projectMainImage" : "url(Images/AlphaVOmegaScreenShot.png) | IMG | Hide",
    "Title" : "ALPHA VS OMEGA",
    "mainSource" : "https://www.youtube.com/embed/QAUJuclvRI8 | IFRAME",
    "View Code" : "https://github.com/JaceEkko/AlphaVOmega_BossBattleGame/tree/master/Scripts | BUTTON",
    "Created In: " : "Unity, C# | P",
    "Start Year: " : "2017 | P",
    "Duration: " : "2 Weeks | P"
  },
  {//ThreeWorlds
    "id" : "PG_1",
    "projectMainImage" : "url(Images/ThreeWorldsScreenShot.png) | IMG | Hide",
    "Title" : "THREE WORLDS",
    "mainSource" : "https://www.youtube.com/embed/0Qz8W3e2flg | IFRAME",
    "View Code" : "https://github.com/JaceEkko/ThreeWorlds_PlatformerGame/tree/master/Scripts | BUTTON",
    "Created In: " : "Unity, C# | P",
    "Start Year: " : "2017 | P",
    "Duration: " : "1 Week | P"
  },
  {//FatAsstronaut
    "id" : "PG_2",
    "projectMainImage" : "url(Images/FatAsstronautScreenShot.png) | IMG | Hide",
    "Title" : "FAT ASSTRONAUT",
    "mainSource" : "https://www.youtube.com/embed/E2H_UvxdtDI | IFRAME",
    "View Code" : "https://github.com/JaceEkko/FatAsstronaut_2DShooterGame/tree/master/Scripts | BUTTON",
    "Created In: " : "Unity, C# | P",
    "Start Year: " : "2017 | P",
    "Duration: " : "1 Week | P"
  }
]
var programming_project_list = [
  {
    "id" : "PP_0",
    "projectMainImage" : "url(Images/testImage.jpg) | IMG | Hide",
    "Created In: " : "Python | P"
  },
  {
    "id" : "PP_1",
    "projectMainImage" : "url(Images/testImage2.jpg) | IMG | Hide",
    "Created In: " : "Unity, C# | P"
  }
]
var websites_project_list = [
  { //ConcreteOasis
    "id" : "PW_0",
    "projectMainImage" : "url(Images/ConcreteOasisScreenShot.PNG) | IMG | Hide",
    "Title" : "CONCRETE OASIS",
    "View Website" : "https://jaceekko.github.io/midterm-webiste/ | BUTTON",
    "View Code" : "https://github.com/JaceEkko/midterm-webiste | BUTTON",
    "Created In: " : "HTML, CSS | P",
    "Start Year: " : "2019 | P",
    "Duration: " : "1 Week | P",
    "Description: " : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. | P"
  },
  { //PureWater
    "id" : "PW_1",
    "projectMainImage" : "url(Images/PureWaterScreenShot.PNG) | IMG | Hide",
    "Title" : "PURE WATER",
    "View Website" : "https://jaceekko.github.io/movement-website/ | BUTTON",
    "View Code" : "https://github.com/JaceEkko/movement-website | BUTTON",
    "Created In: " : "HTML, CSS | P",
    "Start Year: " : "2019 | P",
    "Duration: " : "1 Week | P",
    "Description: " : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. | P"
  }
]
var audio_project_list = [
  { //Afterglow Remix
    "id" : "PA_0",
    "projectMainImage" : "url(Images/testImage.jpg) | IMG | Hide",
    "Title" : "AFTERGLOW REMIX",
    "mainSource" : "Audio/Assignment3_11-4-19__3_RENDER.wav | AUDIO",
    "Original Song" : "http://cambridge-mt.com/ms/mtk/#KeystoneAngel | BUTTON",
    "Created In: " : "Reaper | P",
    "Start Year: " : "2019 | P",
    "Duration: " : "2 Days | P",
    "Description: " : "Please Write | P"
  },
  { //First Original Song
    "id" : "PA_1",
    "projectMainImage" : "url(Images/testImage2.jpg) | IMG | Hide",
    "Title" : "FIRST ORIGINAL SONG",
    "mainSource" : "Audio/Assignment4_11-20-19_7_RENDER.wav | AUDIO",
    "Created In: " : "Reaper | P",
    "Start Year: " : "2019 | P",
    "Duration: " : "4 Days | P",
    "Description: " : "Please Write | P"
  }
]
var models_project_list = [
  {
    "id" : "PM_0",
    "projectMainImage" : "url(Images/Models.JPG) | IMG | Hide",
    "mainSource" : "Images/Models.JPG | IMG | Show",
    "Title" : "GAUSS RIFLE",
    "Created In: " : "Maya | P",
    "Start Year: " : "2019 | P",
    "Duration: " : "2 Weeks | P",
  }
]
