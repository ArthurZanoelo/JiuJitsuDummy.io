const videos = [
    {
        name: "Rear-Naked Choke",
        url: "https://www.youtube.com/watch?v=oYDe-hrazL8",
        thumbnail: "https://img.youtube.com/vi/oYDe-hrazL8/0.jpg",
        difficulty: "Beginner",
        type: "Head Submission"
    },
    {
        name: "Triangle Choke",
        url: "https://www.youtube.com/watch?v=ICiYVLNRsRU",
        thumbnail: "https://img.youtube.com/vi/ICiYVLNRsRU/0.jpg",
        difficulty: "Beginner",
        type: "Head Submission"
    },
    {
        name: "Guillotine Choke",
        url: "https://www.youtube.com/watch?v=pG4wHkoPvvA",
        thumbnail: "https://img.youtube.com/vi/pG4wHkoPvvA/0.jpg",
        difficulty: "Beginner",
        type: "Head Submission"
    },
    {
        name: "Ezekiel Choke",
        url: "https://www.youtube.com/watch?v=2s0VxxSNu-g",
        thumbnail: "https://img.youtube.com/vi/2s0VxxSNu-g/0.jpg",
        difficulty: "Beginner",
        type: "Head Submission"
    },
    {
        name: "North-South Choke",
        url: "https://www.youtube.com/watch?v=VkI7wuhN2Ps",
        thumbnail: "https://img.youtube.com/vi/VkI7wuhN2Ps/0.jpg",
        difficulty: "Intermediate",
        type: "Head Submission"
    },
    {
        name: "Anaconda/D'arce Choke",
        url: "https://www.youtube.com/watch?v=Nw2xfELw4wc",
        thumbnail: "https://img.youtube.com/vi/Nw2xfELw4wc/0.jpg",
        difficulty: "Intermediate",
        type: "Head Submission"
    },
    {
        name: "Arm Triangle Choke",
        url: "https://www.youtube.com/watch?v=TCOXwqVePsY",
        thumbnail: "https://img.youtube.com/vi/TCOXwqVePsY/0.jpg",
        difficulty: "Expert",
        type: "Head Submission"
    },
    {
        name: "Armbar",
        url: "https://www.youtube.com/watch?v=6W5eTSsM6EY",
        thumbnail: "https://img.youtube.com/vi/6W5eTSsM6EY/0.jpg",
        difficulty: "Beginner",
        type: "Arm Submission"
    },
    {
        name: "Kimura",
        url: "https://www.youtube.com/watch?v=ziOZjzUhKjE",
        thumbnail: "https://img.youtube.com/vi/ziOZjzUhKjE/0.jpg",
        difficulty: "Beginner",
        type: "Arm Submission"
    },
    {
        name: "Americana",
        url: "https://www.youtube.com/watch?v=Zhh4W24rwrw",
        thumbnail: "https://img.youtube.com/vi/Zhh4W24rwrw/0.jpg",
        difficulty: "Beginner",
        type: "Arm Submission"
    },
    {
        name: "Straight Arm Lock",
        url: "https://www.youtube.com/watch?v=fDzaKv17YEE",
        thumbnail: "https://img.youtube.com/vi/fDzaKv17YEE/0.jpg",
        difficulty: "Intermediate",
        type: "Arm Submission"
    },
    {
        name: "Wrist Lock",
        url: "https://www.youtube.com/watch?v=0bdMkxjP2uA",
        thumbnail: "https://img.youtube.com/vi/0bdMkxjP2uA/0.jpg",
        difficulty: "Intermediate",
        type: "Arm Submission"
    },
    {
        name: "Bicep Slicer",
        url: "https://www.youtube.com/watch?v=cT1DXGE8CsI",
        thumbnail: "https://img.youtube.com/vi/cT1DXGE8CsI/0.jpg",
        difficulty: "Expert",
        type: "Arm Submission"
    },
    {
        name: "Omoplata",
        url: "https://www.youtube.com/watch?v=LVy4tGv5Fk4",
        thumbnail: "https://img.youtube.com/vi/LVy4tGv5Fk4/0.jpg",
        difficulty: "Expert",
        type: "Arm Submission"
    },
    {
        name: "Straight Ankle Lock",
        url: "https://www.youtube.com/watch?v=0GXpZRhCClU",
        thumbnail: "https://img.youtube.com/vi/0GXpZRhCClU/0.jpg",
        difficulty: "Beginner",
        type: "Leg Submission"
    },
    {
        name: "Toe Hold",
        url: "https://www.youtube.com/watch?v=2xlKKmi9MpA",
        thumbnail: "https://img.youtube.com/vi/2xlKKmi9MpA/0.jpg",
        difficulty: "Beginner",
        type: "Leg Submission"
    },
    {
        name: "Kneebar",
        url: "https://www.youtube.com/watch?v=-uKV_QWA1IA",
        thumbnail: "https://img.youtube.com/vi/-uKV_QWA1IA/0.jpg",
        difficulty: "Intermediate",
        type: "Leg Submission"
    },
    {
        name: "Calf Slicer",
        url: "https://www.youtube.com/watch?v=2ZLh7ETdDAU",
        thumbnail: "https://img.youtube.com/vi/2ZLh7ETdDAU/0.jpg",
        difficulty: "Intermediate",
        type: "Leg Submission"
    },
    {
        name: "Heel Hook",
        url: "https://www.youtube.com/watch?v=KPd6Jg3pkYc",
        thumbnail: "https://img.youtube.com/vi/KPd6Jg3pkYc/0.jpg",
        difficulty: "Expert",
        type: "Leg Submission"
    }
];

// Wait for DOM to load before trying to access elements
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded'); // Debug log
    const videoGrid = document.querySelector('.video-grid');
    console.log('Video grid element:', videoGrid); // Debug log
    
    if (videoGrid) {
        console.log('Found video grid, adding videos...'); // Debug log
        videos.forEach(video => {
            const videoItem = document.createElement('div');
            videoItem.className = 'video-item';
            
            videoItem.innerHTML = `
                <a href="${video.url}" target="_blank">
                    <div class="video-thumbnail-container">
                        <img src="${video.thumbnail}" alt="${video.name} Tutorial">
                    </div>
                    <div class="video-info">
                        <h3>${video.name}</h3>
                        <span class="difficulty ${video.difficulty.toLowerCase()}">${video.difficulty}</span>
                        <span style="color: #666; margin-left: 10px;">${video.type}</span>
                    </div>
                </a>
            `;
            
            videoGrid.appendChild(videoItem);
        });
    } else {
        console.log('Video grid not found!'); // Debug log
    }
}); 