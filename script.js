window.addEventListener("load", () => {
  setTimeout(() => {
    // Açılış ekranını gizleyin
    document.getElementById("splashScreen").style.display = "none";
    // Ana içeriği gösterin
    document.querySelector(".container").style.display = "block";
  }, 500); // 5 saniye bekleme süresi
});

document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("focus", function () {
    this.closest(".form-group").classList.add("focused");
  });

  input.addEventListener("blur", function () {
    const inputValue = this.value;
    if (inputValue === "") {
      this.classList.remove("filled");
      this.closest(".form-group").classList.remove("focused");
    } else {
      this.classList.add("filled");
    }
  });
});
