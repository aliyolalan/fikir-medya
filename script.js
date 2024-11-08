document.addEventListener("DOMContentLoaded", () => {
  const text =
    "Dijital bir dünyada kültürün artan hızı, estetiği, markaları ve deneyimleri tekdüzeliğe sürüklemeye devam ediyor. Tüm markalar bu tekdüzeliğin olduğu okyanusu aynı yerden; pahalı bir 'aynılık adası' üzerinden izliyorlar. Bu durumda farklılaşma arayışında olanlar için yaratıcılık -sadece- bir değerden öte gereklilik haline geldi";
  const textSecond = "Markalarımızı vasatlıktan kurtarmak için onları bu aynılık adasından çıkaracak cesur fikri arıyoruz.";
  const textElement = document.getElementById("typewriterText");
  const textElementSecond = document.getElementById("typewriterTextSecond");
  const splashScreen = document.getElementById("splashScreen");

  // Splash ekranı açıkken kaydırmayı devre dışı bırak
  document.body.style.overflow = "hidden";

  let index = 0;
  const typingSpeed = 5; // Her harfin yazılma süresi (ms)

  function typeWriter() {
    if (index < text.length || index < textSecond.length) {
      textElement.innerHTML += text.charAt(index);
      textElementSecond.innerHTML += textSecond.charAt(index);
      index++;
      setTimeout(typeWriter, typingSpeed);
    } else {
      // Typewriter efekti tamamlandıktan sonra splash ekranını kaydırma
      setTimeout(() => {
        splashScreen.classList.add("hiddenSplash");

        // Splash ekran kaybolduktan sonra kaydırmayı etkinleştir
        document.body.style.overflow = "auto";
      }, 500); // Yazı yazıldıktan 1 saniye sonra splash ekranını kaydırma
    }
  }

  // Typewriter efekti başlat
  typeWriter();
});

// Tam sayfa menü
const menuIcon = document.getElementById("menuIcon");
const fullPageMenu = document.getElementById("fullPageMenu");
const menuLinks = document.querySelectorAll(".full-page-menu a");
console.log(menuLinks);

// Menü simgesine tıklandığında tam sayfa menüyü göster/gizle
menuIcon.addEventListener("click", () => {
  fullPageMenu.classList.toggle("active");

  // Menü aktifse sayfa kaydırmayı kapat, değilse aç
  if (fullPageMenu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

// Form
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
