const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModifiedDate}`;