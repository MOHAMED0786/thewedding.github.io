function openEnvelope() {
    document.querySelector(".envelope").classList.add("open");

    setTimeout(() => {
        document.querySelector(".envelope-container").style.display = "none";
        document.getElementById("mainContent").style.display = "flex";
    }, 800);
}