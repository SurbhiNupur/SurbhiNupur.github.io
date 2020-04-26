var count = 0; // record times of press searching button if more than one not allowed to create again search box animation

function search() {
  let input = document.getElementById("input-search-value").value;
  console.log(input);

  if (!input) {
    document.getElementById("input-search-value").style.backgroundColor = "red";
  } 
  else if (count == 0) {
    document.getElementById("input-search-value").style.backgroundColor =
      "white";
  
    let searchBox = document.createElement("div");
    searchBox.classList.add("searchBox");
    //searchBox.style.border = "1px solid green";

    let label = document.createElement("label");
    label.classList.add("search-box-value");
    label.textContent = input;
    searchBox.appendChild(label);
    algoContainer.appendChild(searchBox);
    count++;
  }
  else{
	 document.querySelectorAll(".searchBox")[0].childNodes[0].innerHTML =input; 
  }
}