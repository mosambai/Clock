let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime() {
    let date = new Date();
   
    // Getting hours, minutes, seconds from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    // Calculate rotations
    let hRotation = 30 * hh + mm / 2; // 360 degrees / 12 hours = 30 degrees per hour
    let mRotation = 6 * mm;           // 360 degrees / 60 minutes = 6 degrees per minute
    let sRotation = 6 * ss;           // 360 degrees / 60 seconds = 6 degrees per second

    // Apply the rotations to the clock hands
    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

// Call the function every second
setInterval(displayTime, 1000);