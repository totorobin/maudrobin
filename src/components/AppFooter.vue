<template>
  <footer class="app-footer">
    <RouterLink to="/contact">Contact</RouterLink>
    <span class="sep">·</span>
    <RouterLink to="/mentions-legales">Mentions légales</RouterLink>
    <span class="sep">·</span>
    <RouterLink to="/cgv">CGV</RouterLink>
    <span class="sep">·</span>
    <RouterLink to="/politique-de-confidentialite">Politique de confidentialité</RouterLink>
  </footer>
</template>

<style scoped>
.app-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #183a63;
  color: #ffffff;
  text-align: center;
  padding: 12px 20px;
  font-size: 13px;
  z-index: 100;
}

.app-footer a {
  color: #d4bfa0;
  text-decoration: none;
}

.app-footer a:hover {
  color: #ffffff;
  text-decoration: underline;
}

.sep {
  margin: 0 10px;
  opacity: 0.5;
}
</style>
