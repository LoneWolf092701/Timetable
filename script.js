const cleaners = [
    // "Kaladaran",
    "Kabishan",
    "Lucky",
    "Niru",
    "Hobishan",
    "Titus",
];

let today = new Date().getDay(); // 0 (Sunday) - 6 (Saturday)
let currentCleanerIndex = today;

function updateCleaner() {
    document.getElementById("cleaner-name").textContent = cleaners[currentCleanerIndex];
    document.getElementById("status-message").textContent = ""; // Reset message
}

// Function when "Not Available" is clicked
function markNotAvailable() {
    let previousCleaner = cleaners[currentCleanerIndex];
    currentCleanerIndex = (currentCleanerIndex + 1) % cleaners.length; // Move to next cleaner

    document.getElementById("cleaner-name").textContent = cleaners[currentCleanerIndex];
    document.getElementById("status-message").textContent = `${previousCleaner} is not available. Duty shifted to ${cleaners[currentCleanerIndex]}.`;
}

// Function when "Done" is clicked
function markDone() {
    document.getElementById("status-message").textContent = "Very good!";
}

updateCleaner(); // Initial display
