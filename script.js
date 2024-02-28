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

  const clickableCards = document.querySelectorAll('.clickable-card');

    clickableCards.forEach(function (card) {
      card.addEventListener('click', function () {
        const activityNumber = card.getAttribute('data-activity-number');
        if (activityNumber) {
          const url = `activity.html?activity=activity%20${encodeURIComponent(activityNumber)}`;
          window.location.href = url;
        }
      });
    });
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
     "img/picture49.jpg",
     "img/picture53.jpg",
     "img/picture51.jpg",
     "img/nss3.jpeg"
    ]
  },
  "activity 2": {
    "name": "Republic Day Celebration",
    "description": "NSS unit of SIESGST proudly celebrates Republic Day, honouring India's democratic spirit and rich cultural heritage through meaningful activities and vibrant participation.<br><strong>➤ Flag Hoisting Ceremony:</strong> Attending or organising a flag hoisting ceremony, marking the official start of the celebrations with respect and patriotism. <br><strong>➤ Cultural Performances:</strong> Presenting or supporting diverse cultural performances like dance, music, and drama, showcasing India's vibrant unity in diversity. <br><strong>➤ Patriotic Slogans & Posters:</strong> Creating and displaying patriotic slogans and posters to raise awareness about the significance of the day and ignite national pride. ",
    "row": "1",
    "date": "21-03-2021",
    "volunteer": "100",
    "images": [
    "img/picture50.jpg",
    "img/picture52.jpg",
    "img/picture54.jpg",
    "img/nss12.jpeg"
    ]
  },
  "activity 3": {
    "name": "International Yoga Day",
    "description": "SIESGST College joyously commemorates International Yoga Day, embracing the holistic essence of yoga for physical, mental, and spiritual well-being. Join us in a harmonious celebration that promotes balance and inner peace through engaging activities.<br><strong>➤ Yoga Sessions:</strong> Immerse yourself in rejuvenating yoga sessions led by experienced instructors, exploring various asanas and techniques to enhance flexibility, strength, and mindfulness. <br><strong>➤ Breathing Exercises:</strong> Delve into the art of conscious breathing with dedicated breathing exercises, fostering a connection between the mind and body, promoting relaxation and stress relief. <br><strong>➤ Meditation Workshops:</strong> Experience the transformative power of meditation in specialized workshops, guiding participants towards a state of calmness and self-awareness. <br><strong>➤ Yoga for Wellness Talks:</strong> Engage in enlightening discussions on the holistic benefits of yoga for overall well-being, including physical health, mental clarity, and emotional balance. ",
    "row": "1",
    "date": "21-03-2021",
    "volunteer": "100",
    "images": [
    "img/picture62.jpg",
    "img/picture63.jpg",
    "img/picture64.jpg",
    "img/nss5.jpeg"
    ]
  },
  "activity 4": {
    "name": "Mahatma Gandhi and Lal Bahadur Shastri Jayanti",
    "description": "Join the NSS unit of SIESGST in commemorating the birth anniversaries of two stalwarts, Mahatma Gandhi and Lal Bahadur Shastri. Let's pay homage to their indomitable spirit and unwavering commitment to the principles of truth, non-violence, and service to the nation.<br><strong>➤ Inspirational Talks:</strong> Engage in enlightening discussions on the life and teachings of Mahatma Gandhi and Lal Bahadur Shastri, drawing inspiration from their leadership and vision for a harmonious society. <br><strong>➤ Tribute Ceremonies:</strong> Participate in solemn tribute ceremonies to honor the legacies of these great leaders, reflecting on their contributions to India's freedom struggle and nation-building. <br><strong>➤ Peace March:</strong> Embark on a symbolic peace march, embodying the principles of Gandhian philosophy, spreading the message of peace, unity, and communal harmony.",
    "row": "1",
    "date": "02-10-2021",
    "volunteer": "150",
    "images": [
      "img/picture67.jpg",
      "img/picture68.jpg",
      "img/picture69.jpg",
      "img/nss15.jpeg"
    ]
  },
  
  "activity 5": {
    "name": "Mangrove Clean Drive",
    "description": "Join hands with the NSS unit of SIESGST in a noble initiative to preserve and protect our coastal ecosystem. The Mangrove Clean Drive aims to contribute to environmental conservation by cleaning and maintaining the mangrove areas, crucial for biodiversity and ecological balance.<br><strong>➤ Mangrove Cleanup:</strong> Participate in hands-on cleanup activities to remove litter and debris from mangrove areas, promoting a cleaner and healthier environment. <br><strong>➤ Environmental Awareness:</strong> Engage in awareness campaigns about the importance of mangroves in supporting marine life, preventing soil erosion, and mitigating climate change. <br><strong>➤ Plantation Drive:</strong> Contribute to the reforestation efforts by planting mangrove saplings, fostering a sustainable and resilient coastal ecosystem.",
    "row": "1",
    "date": "15-06-2022",
    "volunteer": "120",
    "images": [
      "img/picture24.jpg",
      "img/picture23.jpg",
      "img/picture22.jpg",
      "img/nss16.jpeg"
    ]
  },
  
  "activity 6": {
    "name": "Street Play",
    "description": "Experience the power of storytelling and social messaging through the art of street play. The NSS unit of SIESGST invites you to witness and participate in vibrant street performances addressing relevant social issues, inspiring change, and fostering awareness in an entertaining way.<br><strong>➤ Creative Performances:</strong> Enjoy dynamic and thought-provoking street plays performed by talented volunteers, focusing on issues like environmental conservation, social justice, and community harmony. <br><strong>➤ Audience Interaction:</strong> Engage with the performers in interactive sessions, discussing the themes and encouraging dialogue on the presented social issues. <br><strong>➤ Expressive Art:</strong> Showcase your creativity by participating in the production or direction of street plays, using drama as a medium for social impact.",
    "row": "1",
    "date": "18-04-2022",
    "volunteer": "80",
    "images": [
      "img/picture40.jpg",
      "img/picture41.jpg",
      "img/picture42.jpg",
      "img/nss10.jpg"
    ]
  },
  
  "activity 7": {
    "name": "Orphanage Visit",
    "description": "Spread smiles and joy by joining the NSS unit of SIESGST in a heartwarming visit to an orphanage. This activity is an opportunity to connect with and bring happiness to children in need, creating memorable moments and fostering a sense of compassion and social responsibility.<br><strong>➤ Fun and Games:</strong> Engage in playful activities, games, and interactive sessions with the children, creating a positive and uplifting environment. <br><strong>➤ Gift Distribution:</strong> Contribute to the happiness of the children by distributing gifts, school supplies, and essentials, making a meaningful impact on their lives. <br><strong>➤ Cultural Performances:</strong> Share moments of joy through cultural performances, bringing smiles and laughter to the faces of the children.",
    "row": "1",
    "date": "12-11-2022",
    "volunteer": "90",
    "images": [
      "img/picture70.jpg",
      "img/picture71.jpg",
      "img/picture46.jpg",
      "img/nss14.jpeg"
    ]
  },
  
  "activity 8": {
    "name": "Beach Clean Drive",
    "description": "Be a steward of environmental conservation by participating in the Beach Clean Drive organized by the NSS unit of SIESGST. Contribute to the cleanliness and beauty of our coastal areas while raising awareness about the importance of keeping our beaches free from pollution.<br><strong>➤ Beach Cleanup:</strong> Roll up your sleeves and engage in hands-on cleanup activities, removing litter and plastic waste from the beach, ensuring a cleaner and safer environment. <br><strong>➤ Eco-friendly Practices:</strong> Promote eco-friendly practices and responsible waste disposal through educational campaigns and demonstrations during the event. <br><strong>➤ Community Involvement:</strong> Encourage community participation in maintaining the pristine beauty of our beaches for the benefit of present and future generations.",
    "row": "1",
    "date": "20-08-2023",
    "volunteer": "130",
    "images": [
      "img/picture58.jpg",
      "img/picture60.jpg",
      "img/picture61.jpg",
      "img/nss13.jpeg"
    ]
  },

  "activity 9": {
    "name": "Dream Run",
    "description": "Join us for the exhilarating Dream Run, a marathon event organized by the NSS unit of SIESGST. Lace up your running shoes and be part of a vibrant community promoting fitness, well-being, and community spirit.<br><strong>➤ Marathon Route:</strong> Navigate through scenic routes, experiencing the thrill of the run amidst enthusiastic participants and cheering spectators. <br><strong>➤ Community Bonding:</strong> Foster a sense of unity and camaraderie as you run alongside fellow participants, making the Dream Run a celebration of health and togetherness. <br><strong>➤ Health Awareness:</strong> Contribute to health awareness campaigns during the event, promoting the importance of regular exercise and a healthy lifestyle. <br><strong>➤ Fun-filled Activities:</strong> Enjoy post-run festivities, including music, food, and interactive activities, making the Dream Run a memorable experience for all.",
    "row": "1",
    "date": "15-04-2023",
    "volunteer": "200",
    "images": [
      "img/picture11.jpg",
      "img/picture12.jpg",
      "img/picture14.jpg",
      "img/nss8.jpeg"
    ]
  },
  
  "activity 10": {
    "name": "Blood Donation Camp",
    "description": "Be a lifesaver by participating in the Blood Donation Camp organized by the NSS unit of SIESGST. Contribute to the noble cause of saving lives through voluntary blood donations, ensuring a stable and sufficient blood supply for those in need.<br><strong>➤ Voluntary Blood Donation:</strong> Step forward to donate blood voluntarily, contributing to the blood bank and supporting patients in medical emergencies. <br><strong>➤ Medical Check-up:</strong> Receive a thorough medical check-up before donation to ensure your eligibility and well-being throughout the process. <br><strong>➤ Awareness Programs:</strong> Engage in awareness programs highlighting the importance of blood donation, dispelling myths, and encouraging more individuals to participate. <br><strong>➤ Community Support:</strong> Strengthen community bonds through collective participation in this life-saving event, showcasing the spirit of compassion and solidarity.",
    "row": "1",
    "date": "05-09-2023",
    "volunteer": "150",
    "images": [
      "img/picture1 (12).jpg",
      "img/picture1 (6).jpg",
      "img/picture9.jpg",
      "img/nss9.jpeg"
    ]
  }
};

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

  "activity 9": [
    "img/picture11.jpg",
    "img/picture1 (1).jpg",
    "img/picture1 (3).jpg",
    "img/picture1 (5).jpg",
    "img/picture1 (7).jpg",
    "img/picture1 (9).jpg",
    "img/picture1 (11).jpg",
    "img/picture1 (15).jpg",
    "img/picture10 (1).jpg",
    "img/picture11 (1).jpg",
    "img/picture12.jpg",
    "img/picture14.jpg"
  ],

  "activity 10": [
    "img/picture1 (4).jpg",
    "img/picture1 (6).jpg",
    "img/picture1 (8).jpg",
    "img/picture1 (10).jpg",
    "img/picture1 (12).jpg",
    "img/picture1 (14).jpg",
    "img/picture1 (16).jpg",
    "img/picture1 (17).jpg",
    "img/picture9.jpg",
    "img/picture10.jpg"
  ],
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