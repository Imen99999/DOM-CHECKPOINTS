function Total (){
    
  let unitprice=document.getElementsById('price')
  let quaty=document.getElementsByClassName('quantity')
      let sum=0
  for (let i=0; i<quaty.length; i++){
  sum+=quaty[i].innerHTML*unitprice[i].innerHTML
  }
  
  tot.innerHTML=sum
  }





































/*const paragraph = document.getElementById("myParagraph");

// Using textContent to change the text
paragraph.textContent = "This is the updated paragraph text.";

// Using innerHTML to change the HTML content (including tags)
paragraph.innerHTML = "This is <em>emphasized</em> text."





// Create a new h2 element
const newHeading = document.createElement("h2");

// Set the text content of the new element
newHeading.textContent = "New Heading";

// Get the container div
const container = document.getElementById("container");

// Append the new element to the container
container.appendChild(newHeading);*/


