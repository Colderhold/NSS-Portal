  document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const activityName = urlParams.get('activity');
  const activityDetails = activities[activityName.trim()];

  if (activityDetails) {
    updateActivityContent(activityDetails);
    updateGallery(activityName);
  } else {
    console.error('Activity not found.');
  }
});

// Update the gallery when "View More Photos" is clicked
function updateGalleryFromLink(activityName) {
  updateGallery(activityName);
}

document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const activityName = urlParams.get('activity');
  updateGallery(activityName);
});

const activities = {
  "activity 1": {
    "name": "Independence Day Celebration",
    "description": "NSS unit of SIESGST joyfully commemorates Independence Day, honoring the historic day when India gained freedom from colonial rule and embarked on a journey of self-governance. Our celebrations resonate with the spirit of patriotism and dedication to the nation.<br><strong>➤ Flag Hoisting Ceremony:</strong> Participate in or organize a flag hoisting ceremony, symbolizing the pride and sovereignty of our nation. <br><strong>➤ Cultural Extravaganza:</strong> Engage in or support a variety of cultural performances, including dance, music, and drama, showcasing the diverse cultural tapestry of India. <br><strong>➤ Patriotic Expressions:</strong> Create and exhibit patriotic slogans and posters, fostering awareness about the historical significance of Independence Day and nurturing a sense of national pride.",
    "row": "1",
    "date": "21-03-2021",
    "volunteer": "100",
    "images": [
     "img/picture49.png",
     "img/picture52.png",
     "img/picture53.png",
     "img/nss3.jpeg"
    ],
    "Independence Day Celebration": [
    "img/picture27.png",
    "img/picture28.png",
    "img/picture29.png"
]
  },
  "activity 2": {
    "name": "Republic Day Celebration",
    "description": "NSS unit of SIESGST proudly celebrates Republic Day, honouring India's democratic spirit and rich cultural heritage through meaningful activities and vibrant participation.<br><strong>➤ Flag Hoisting Ceremony:</strong> Attending or organising a flag hoisting ceremony, marking the official start of the celebrations with respect and patriotism. <br><strong>➤ Cultural Performances:</strong> Presenting or supporting diverse cultural performances like dance, music, and drama, showcasing India's vibrant unity in diversity. <br><strong>➤ Patriotic Slogans & Posters:</strong> Creating and displaying patriotic slogans and posters to raise awareness about the significance of the day and ignite national pride. ",
    "row": "1",
    "date": "21-03-2021",
    "volunteer": "100",
    "images": [
    "img/picture49.png",
    "img/picture50.png",
    "img/picture51.png",
    "img/nss12.jpeg"
    ]
  }
  // Add more activities as needed
};

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
  // Add more activities as needed
};

function redirectToGallery() {
  const urlParams = new URLSearchParams(window.location.search);
  const activityName = urlParams.get('activity');

  // Check if activityName is available and not null
  if (activityName) {
    window.location.href = `gallery.html?activity=${encodeURIComponent(activityName)}`;
  } else {
    console.error('Activity name not found.');
  }
}


const urlParams = new URLSearchParams(window.location.search);
const activityName = urlParams.get('activity');
const activityDetails = activities[activityName.trim()];

function updateActivityContent(activity) {
  // Check if the activityDetails is defined
  if (activity) {
    document.getElementById('activityName').textContent = activity.name;
    document.getElementById('activityDescription').innerHTML = activity.description;
    document.getElementById('row').textContent = activity.row;
    document.getElementById('date').textContent = activity.date;
    document.getElementById('volunteer').textContent = activity.volunteer;

    for (let i = 1; i <= 4; i++) {
      const imageId = 'image' + i;
      const imageUrl = activity.images[i - 1]; // Assuming 'images' is an array in your activity details
      document.getElementById(imageId).src = imageUrl;
    }
  } else {
    console.error('Activity not found.');
  }
}

updateActivityContent(activityDetails);


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

document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const activityName = urlParams.get('activity');
  updateGallery(activityName);
});