const galleryImages = {
    "activity 1": [
      "img/picture27.jpg",
      "img/picture28.jpg",
      "img/picture29.jpg",
      "img/picture30.jpg",
      "img/picture31.jpg",
      "img/picture32.jpg",
      "img/picture33.jpg",
      "img/picture34.jpg"
    ],
    "activity 2": [
      "img/picture49.jpg",
      "img/picture50.jpg",
      "img/picture51.jpg",
      "img/picture52.jpg",
      "img/picture53.jpg",
      "img/picture54.jpg",
      "img/picture55.jpg",
      "img/picture56.jpg"
    ],
    "activity 3": [
      "img/picture62.jpg",
      "img/picture63.jpg",
      "img/picture64.jpg",
      "img/picture65.jpg"
    ],
    "activity 4": [
      "img/picture67.jpg",
      "img/picture68.jpg",
      "img/picture69.jpg"
    ],
    "activity 5": [
      "img/picture20.jpg",
      "img/picture21.jpg",
      "img/picture22.jpg",
      "img/picture23.jpg",
      "img/picture24.jpg",
      "img/picture25.jpg"
    ],
    "activity 6": [
      "img/picture37.jpg",
      "img/picture38.jpg",
      "img/picture39.jpg",
      "img/picture40.jpg",
      "img/picture41.jpg",
      "img/picture42.jpg"
    ],
    "activity 7": [
      "img/picture70.jpg",
      "img/picture71.jpg",
      "img/picture46.jpg"
    ],
    "activity 8": [
      "img/picture57.jpg",
      "img/picture58.jpg",
      "img/picture59.jpg",
      "img/picture60.jpg",
      "img/picture61.jpg"
    ],
  };

function updateGalleryImages(images) {
    const photoGrid = document.getElementById('photoGrid');
  
    if (photoGrid) {
      photoGrid.innerHTML = ''; // Clear existing content
  
      images.forEach(function (imagePath, index) {
        const photoItem = document.createElement('div');
        photoItem.className = 'photo-item';
        photoItem.setAttribute('data-bs-toggle', 'modal');
        photoItem.setAttribute('data-bs-target', `#photoModal${index + 1}`);
  
        const image = document.createElement('img');
        image.src = imagePath;
        image.alt = `Photo ${index + 1}`;
  
        photoItem.appendChild(image);
        photoGrid.appendChild(photoItem);
      });
    } else {
      console.error("Element with ID 'photoGrid' not found.");
    }
  }

function updateGallery(activityName) {
    const images = galleryImages[activityName];
    if(!images) {
      console.log("No images found for " + activityName); 
      return;
    }
    updateGalleryImages(images);
  }