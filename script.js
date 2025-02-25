const cleaners = [
    // "Kaladaran",
    "Kabishan",
    "Lucky",
    "Niru",
    "Hobishan",
    "Titus",
];

const today = new Date().getDay(); // 0 (Sunday) - 6 (Saturday)
document.getElementById("cleaner-name").textContent = cleaners[today];
