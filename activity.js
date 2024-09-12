document.addEventListener('DOMContentLoaded', function() {
    // Get buttons and activity elements
    const indoorBtn = document.getElementById('indoor-btn');
    const outdoorBtn = document.getElementById('outdoor-btn');
    const activityElements = document.querySelectorAll('.capsule-activity');
    
    // Function to show all activities
    function showAllActivities() {
        activityElements.forEach(activity => {
            activity.style.display = 'flex'; // Ensure display is flex
        });
        setActiveButton(null);
    }

    // Function to filter activities
    function filterActivities(type) {
        activityElements.forEach(activity => {
            if (activity.getAttribute('data-type') === type) {
                activity.style.display = 'flex'; // Ensure display is flex
            } else {
                activity.style.display = 'none';
            }
        });
        setActiveButton(type);
    }

    // Function to set the active button style
    function setActiveButton(type) {
        if (type === 'indoor') {
            indoorBtn.classList.add('active');
            outdoorBtn.classList.remove('active');
        } else if (type === 'outdoor') {
            outdoorBtn.classList.add('active');
            indoorBtn.classList.remove('active');
        } else {
            indoorBtn.classList.remove('active');
            outdoorBtn.classList.remove('active');
        }
    }

    // Event listeners for buttons
    indoorBtn.addEventListener('click', function() {
        filterActivities('indoor');
    });

    outdoorBtn.addEventListener('click', function() {
        filterActivities('outdoor');
    });

    // Show all activities by default
    showAllActivities();
});
