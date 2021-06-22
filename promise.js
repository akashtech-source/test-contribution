const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
    if(!hasMeeting) {
        const meetingDetails = {
            name: 'Technical Meeting',
            location: 'Google Meet',
            time: '10:00 PM'
        };
        resolve(meetingDetails)
    } else {
        reject(new Error('Already Meeting Created'))
    }
});

meeting
    .then((res) => {
        console.log(JSON.stringify(res));
    })
    .catch ((err) => {
        console.log(err.message);
    })



    // another Way

    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Promise 1 is resolve`)
        }, 4000)
    });

    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Promise 2 is resolve`)
        }, 2000)
    });

    Promise.all([promise1, promise2]).then((res) => {
        console.log(res);
    })
    Promise.race([promise1, promise2]).then((res) => {
        console.log(res);
    })