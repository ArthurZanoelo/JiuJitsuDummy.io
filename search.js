const submissions = [
    // Head Submissions
    {
        name: "Rear-Naked Choke",
        difficulty: "Beginner",
        page: "bodyParts/head.html",
        type: "Head Submission"
    },
    {
        name: "Triangle Choke",
        difficulty: "Beginner",
        page: "bodyParts/head.html",
        type: "Head Submission"
    },
    {
        name: "Guillotine Choke",
        difficulty: "Beginner",
        page: "bodyParts/head.html",
        type: "Head Submission"
    },
    {
        name: "Ezequiel Choke",
        difficulty: "Beginner",
        page: "bodyParts/head.html",
        type: "Head Submission"
    },
    {
        name: "North-South Choke",
        difficulty: "Intermediate",
        page: "bodyParts/head.html",
        type: "Head Submission"
    },
    {
        name: "Anaconda/Darce Choke",
        difficulty: "Intermediate",
        page: "bodyParts/head.html",
        type: "Head Submission"
    },
    {
        name: "Arm Triangle Choke",
        difficulty: "Expert",
        page: "bodyParts/head.html",
        type: "Head Submission"
    },

    // Arm Submissions
    {
        name: "Armbar",
        difficulty: "Beginner",
        page: "bodyParts/arm.html",
        type: "Arm Submission"
    },
    {
        name: "Kimura",
        difficulty: "Beginner",
        page: "bodyParts/arm.html",
        type: "Arm Submission"
    },
    {
        name: "Americana",
        difficulty: "Beginner",
        page: "bodyParts/arm.html",
        type: "Arm Submission"
    },
    {
        name: "Straight Arm Lock",
        difficulty: "Intermediate",
        page: "bodyParts/arm.html",
        type: "Arm Submission"
    },
    {
        name: "Wrist Lock",
        difficulty: "Intermediate",
        page: "bodyParts/arm.html",
        type: "Arm Submission"
    },
    {
        name: "Bicep Slicer",
        difficulty: "Expert",
        page: "bodyParts/arm.html",
        type: "Arm Submission"
    },
    {
        name: "Omoplata",
        difficulty: "Expert",
        page: "bodyParts/arm.html",
        type: "Arm Submission"
    },

    // Leg Submissions
    {
        name: "Straight Ankle Lock",
        difficulty: "Beginner",
        page: "bodyParts/leg.html",
        type: "Leg Submission"
    },
    {
        name: "Toe Hold",
        difficulty: "Beginner",
        page: "bodyParts/leg.html",
        type: "Leg Submission"
    },
    {
        name: "Kneebar",
        difficulty: "Intermediate",
        page: "bodyParts/leg.html",
        type: "Leg Submission"
    },
    {
        name: "Calf Slicer",
        difficulty: "Intermediate",
        page: "bodyParts/leg.html",
        type: "Leg Submission"
    },
    {
        name: "Heel Hook",
        difficulty: "Expert",
        page: "bodyParts/leg.html",
        type: "Leg Submission"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    const searchResults = document.getElementById('searchResults');

    searchBar.addEventListener('input', (e) => {
        const searchString = e.target.value.toLowerCase();
        
        if (searchString.length < 1) {
            searchResults.style.display = 'none';
            return;
        }

        const filteredSubmissions = submissions.filter(submission => {
            return (
                submission.name.toLowerCase().includes(searchString) ||
                submission.type.toLowerCase().includes(searchString) ||
                submission.difficulty.toLowerCase().includes(searchString)
            );
        });

        displayResults(filteredSubmissions);
    });

    function displayResults(results) {
        if (results.length === 0) {
            searchResults.style.display = 'none';
            return;
        }

        searchResults.innerHTML = '';
        results.forEach(result => {
            const div = document.createElement('div');
            div.className = 'search-result-item';
            div.innerHTML = `
                ${result.name} 
                <span class="difficulty-indicator ${result.difficulty.toLowerCase()}">
                    ${result.difficulty}
                </span>
                <span style="color: #666; margin-left: 10px;">${result.type}</span>
            `;
            
            div.addEventListener('click', () => {
                navigateToSubmission(result);
            });
            
            searchResults.appendChild(div);
        });
        
        searchResults.style.display = 'block';
    }

    function navigateToSubmission(submission) {
        localStorage.setItem('openSubmission', submission.name);
        window.location.href = submission.page;
    }

    // Hide search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchBar.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });
});
