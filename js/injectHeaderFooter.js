const header = document.getElementById("header");
const footer = document.getElementById("footer");

const instaAna = "https://www.instagram.com/anasuhre/";
const faceAna = "https://www.facebook.com/anamicheli.suhre.1/";
const instaRafael = "https://www.facebook.com/profile.php?id=100008779454476";
const faceRafael = "https://www.instagram.com/rafael_lucas_kruger/";

header.innerHTML = `
  <a href="/index.html"><h3>💖 🕮 Ana & Rafael 🎮 💘</h3></a>
  <nav>
    <a href="#footer">Sobre nós</a> &nbsp;&nbsp;
  </nav>
`;

footer.innerHTML =
  `
  <h3>SOBRE NÓS</h3>
  <p>
    Começamos a namorar no dia 13/10/2019, depois de muita enrolação kkkk<br>
    E agora, enfim noivamosssss, no dia 10/09/2022!!!
  </p>

  <h3>CONTATO</h3>
  <p>Ana Micheli Suhre</p>
  <a target="_blank" href=` +
  faceAna +
  `>
    <i class="fa-brands fa-facebook"></i>
  </a>
  <a target="_blank" href=` +
  instaAna +
  `>
    <i class="fa-brands fa-instagram"></i>
  </a>
  <p>Rafael Lucas Krüger</p>
  <a target="_blank" href=` +
  faceRafael +
  `>
    <i class="fa-brands fa-facebook"></i>
  </a>
  <a target="_blank" href=` +
  instaRafael +
  `>
    <i class="fa-brands fa-instagram"></i>
  </a>
`;
