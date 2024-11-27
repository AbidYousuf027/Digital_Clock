document.addEventListener("DOMContentLoaded", () => {
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");
  const ampmElement = document.getElementById("ampm");

  setInterval(function () {
    const date = new Date();
    let hours = date.getHours();
    let ampm = "AM";

    if (hours > 11) {
      ampm = "PM";
      if (hours > 12) {
        hours -= 12;
      }
    }

    // hours = hours.toString().padStart(2, "0");
    let minutes = date.getMinutes().toString().padStart(2, "0");
    let seconds = date.getSeconds().toString().padStart(2, "0");

    hoursElement.innerText = hours;
    minutesElement.innerText = minutes;
    secondsElement.innerText = seconds;
    ampmElement.innerText = ampm;
  }, 1000);
});

// function updateClock() {
//   let now = new Date();

//   // Get hours, minutes, and seconds
//   let hours = now.getHours();
//   let minutes = now.getMinutes();
//   let seconds = now.getSeconds();

//   // Determine AM or PM
//   let ampm = hours >= 12 ? 'PM' : 'AM';

//   // Convert 24-hour format to 12-hour format
//   hours = hours % 12;
//   hours = hours ? hours : 12; // '0' should be '12'

//   // Add leading zeros
//   hours = String(hours).padStart(2, '0');
//   minutes = String(minutes).padStart(2, '0');
//   seconds = String(seconds).padStart(2, '0');

//   // Update the clock in HTML
//   document.getElementById('hours').textContent = hours;
//   document.getElementById('minutes').textContent = minutes;
//   document.getElementById('seconds').textContent = seconds;
//   document.getElementById('ampm').textContent = ampm;
// }

// // Call updateClock every 1000 milliseconds (1 second)
// setInterval(updateClock, 1000);

// // Initialize the clock immediately
// updateClock();
