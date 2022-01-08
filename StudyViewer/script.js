function submitted() {
  readJson();
}

function readJson() {
   var fileToLoad = document.getElementById("jsonFile").files[0];
 
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent) 
    {
      var textFromFileLoaded = fileLoadedEvent.target.result;
      localStorage.setItem('items', textFromFileLoaded);
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
}