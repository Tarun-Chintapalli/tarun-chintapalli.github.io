let yesButton = document.getElementById('yesButton');
let noButton = document.getElementById('noButton');
let smilingImage = document.querySelector('.smiling-image');

let size = 1.5; // Initial size of the button
let noButtonLabels = ["Anthe le", "Sare le", "It's okay le","Parledu le","Em chestham le","Ala aipoindi le","Lite le","Inkoddu le"];
let imageCount = 14; // Number of images
let currentImageIndex = 1; // Initial image index

function removeAllButtons() {
    yesButton.remove();
    noButton.remove();
}

noButton.addEventListener('click', () => {
    size += 1; // Increase size by 0.1
    yesButton.style.fontSize = `${size}rem`;

    if (currentImageIndex+1 < imageCount) {
        // Change label of NO button cyclically
        let newName = noButton.innerText;
        while (newName === noButton.innerText) {
            let randomIndex = Math.floor(Math.random() * noButtonLabels.length);
            newName = noButtonLabels[randomIndex];
        }
        noButton.innerText = newName;
        // Change image source cyclically
        
    } else {
        // Remove NO button and update text
        noButton.remove();
        document.querySelector('h1').innerText = "Maryadaga accept cheyy!!!!!";
    }
    currentImageIndex = (currentImageIndex % imageCount) + 1;
    smilingImage.src = `images/${currentImageIndex}.jpg`;
});

yesButton.addEventListener('click', () => {

    removeAllButtons();

    // Replace image with a GIF
    smilingImage.src = 'images/accept.gif'; // Update with the path to your GIF
    // Update text
    document.querySelector('h1').innerText = "...Here are the kisses and Here is your letter..";

    // Add download button for PDF
    let downloadButton = document.createElement('a');
    downloadButton.textContent = "💌";
    // downloadButton.href = "Love_letter.pdf"; // Update with the correct path to your PDF file
    // downloadButton.download = "valentine_card.pdf"; // Set the filename for the downloaded file
    // document.querySelector('.container').appendChild(downloadButton);
    downloadButton.style.fontSize = '7rem';
});
