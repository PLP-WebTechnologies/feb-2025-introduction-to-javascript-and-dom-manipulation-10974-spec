// Function to change text content dynamically
function changeText() {
    const textElement = document.getElementById("changeText");
    textElement.textContent = "Wow! The text has changed! 🎉";
}

// Function to modify CSS styles via JavaScript
function changeStyle() {
    const styleElement = document.getElementById("styleText");
    styleElement.style.color = "red";
    styleElement.style.fontSize = "24px";
    styleElement.style.fontWeight = "bold";
}

// Function to add a new element
function addElement() {
    const elementSection = document.getElementById("elementSection");
    const newElement = document.createElement("p");
    newElement.textContent = "🦄🌈✨";
    elementSection.appendChild(newElement);
}

// Function to remove the last added element
function removeElement() {
    const elementSection = document.getElementById("elementSection");
    if (elementSection.lastChild) {
        elementSection.removeChild(elementSection.lastChild);
    }
}
