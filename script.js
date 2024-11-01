window.addEventListener("load", () => {
  setTimeout(() => {
    // Açılış ekranını gizleyin
    document.getElementById("splashScreen").style.display = "none";
    // Ana içeriği gösterin
    document.querySelector(".container").style.display = "block";
  }, 500); // 5 saniye bekleme süresi
});
