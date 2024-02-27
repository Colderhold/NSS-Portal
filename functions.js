const galleryImages = {
    "activity 1": [
      "img/picture27.png",
      "img/picture28.png",
      "img/picture29.png",
      "img/picture30.png",
      "img/picture31.png",
      "img/picture32.png",
      "img/picture33.png",
      "img/picture34.png"
    ],
    "activity 2": [
      "img/picture49.png",
      "img/picture50.png",
      "img/picture51.png",
      "img/picture52.png",
      "img/picture53.png",
      "img/picture54.png",
      "img/picture55.png",
      "img/picture56.png"
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