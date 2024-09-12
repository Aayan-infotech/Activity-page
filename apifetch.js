function loadActivities(type) {
    const apiUrl = `http://54.169.66.11:3005/api/activityRoute/one`;

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type: type })
    })
        .then(response => response.json())
        .then(data => {

            const activitiesContainer = document.getElementById('activities-container');
            if (!activitiesContainer) {
                console.error('activities-container not found in the DOM');
                return;
            }

            activitiesContainer.innerHTML = '';

            data.data.forEach(activity => {
                const activityHTML = `
                    <div class="capsule-activity py-2" data-type="${activity.type}">
                        <img src="${activity.images[0].url}" alt="Activity Image" height="100%">
                        <div class="content ms-3 px-4">
                            <div class="d-flex justify-content-between align-items-center">
                                <h3 class="display-6 ">${activity.name}</h3>
                                <p class="px-4 py-2 bg-black text-white rounded px-4">${activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}</p>
                            </div>
                            <p>${activity.description}</p>
                        </div>
                    </div>
                `;
                activitiesContainer.innerHTML += activityHTML;
            });
        })
        .catch(error => {
            console.error('Error fetching activities:', error);
        });
}

window.addEventListener('DOMContentLoaded', function () {
    loadActivities('indoor');
});

window.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const formData = new FormData(contactForm);

            fetch('http://54.169.66.11:3005/api/user/contact', {
                method: 'POST',
                body: formData,
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    alert('Message sent successfully!');
                    this.reset();
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('There was an error sending your message.');
                });
        });
    } else {
        console.error('Form with ID contact-form not found');
    }
});