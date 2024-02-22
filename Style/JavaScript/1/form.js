function storedData(formData) {
    return new Promise((resolve, reject) => {
        // Check if any input field is empty
        for (const value of formData.values()) {
            if (value.trim() === '') {
                reject('One or more fields are empty');
                return;
            }
        }

        // Assuming some asynchronous operation
        setTimeout(() => {
            // Resolving the promise with the form data
            resolve(formData);
        }, 1000); // Simulating a 1-second delay
    });
}

function handleFormSubmission(event) {


    const form = event.target;
    const formData = new FormData(form);

    storedData(formData)
        .then((result) => {
            // Handle the result as needed
            alert('Form data submitted', result);
        })
        .catch((error) => {
            // Handle errors if necessary
            alert('you should not fill the all fields', error);
        });
}
