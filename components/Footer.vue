<template>
  <footer class="footer">
    <p class="footer__text">© 2023 Nouar</p>
    <div class="footer__links">
      <a href="https://www.linkedin.com/in/sid-ahmed-nouar-4347b5159/" class="footer__link" target="_blank" rel="noopener noreferrer">
        <img src="../static/icon/linkedin.png" alt="LinkedIn" class="footer__icon">
      </a>
      <a href="https://github.com/Nouar-Sid-ahmed" class="footer__link" target="_blank" rel="noopener noreferrer">
        <img src="../static/icon/github.png" alt="GitHub" class="footer__icon">
      </a>
      <a href="https://twitter.com/SidahmedNouar" class="footer__link" target="_blank" rel="noopener noreferrer">
        <img src="../static/icon/twitter.png" alt="Twitter" class="footer__icon">
      </a>
    </div>
    <p class="footer__text">{{$t('footerText')}}</p>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
.footer {
  background-color: #050508;
  color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.footer__text {
  margin: 0;
}

.footer__links {
  display: flex;
  gap: 50%;
  align-items: center;
  justify-content: center;
}

.footer__link {
  display: flex;
  align-items: center;
}

.footer__icon {
  width: 30px;
  height: 30px;
  transition: opacity 0.3s, transform 0.3s;
}

.footer__icon:hover {
  opacity: 0.8;
  transform: rotate(360deg);
}

.footer__icon img {
  width: 100%;
  height: 100%;
  filter: grayscale(50%);
}
</style>
