<template>
  <header class="app-header">
    <div class="header-inner">
      <RouterLink to="/" class="site-logo">
        <img :src="logoUrl" alt="Maud Robin" />
      </RouterLink>

      <nav class="nav" :class="{ open: menuOpen }">
        <RouterLink to="/particuliers" class="nav-item" @click="menuOpen = false">Particuliers</RouterLink>
        <RouterLink to="/avec-les-chevaux" class="nav-item" @click="menuOpen = false">Avec les chevaux</RouterLink>

        <div class="nav-item has-submenu" @mouseenter="submenuOpen = true" @mouseleave="submenuOpen = false">
          <RouterLink to="/entreprises" @click="menuOpen = false">Entreprises</RouterLink>
          <span class="chevron">▾</span>
          <div class="submenu" v-show="submenuOpen">
            <RouterLink to="/equicoaching-en-bretagne" class="submenu-item" @click="menuOpen = false; submenuOpen = false">
              Equicoaching en Bretagne
            </RouterLink>
          </div>
        </div>

        <RouterLink to="/avis" class="nav-item" @click="menuOpen = false">Avis</RouterLink>
        <RouterLink to="/a-propos" class="nav-item" @click="menuOpen = false">À propos</RouterLink>
        <a href="https://photos.maudrobin.fr" class="nav-item" target="_blank" rel="noopener noreferrer" @click="menuOpen = false">Photos</a>
      </nav>

      <div class="header-right">
        <a href="tel:+33650641887" class="phone">06 50 64 18 87</a>
        <button class="burger" :class="{ open: menuOpen }" @click="menuOpen = !menuOpen" aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
const submenuOpen = ref(false)
const logoUrl = `${import.meta.env.VITE_WP_URL ?? ''}/wp-content/uploads/2026/09/Nom-en-logo.jpg`
</script>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 200;
  background-color: #ffffff;
  border-bottom: 1px solid #e8e0d0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.header-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
  height: 64px;
  display: flex;
  align-items: center;
  gap: 24px;
}

.site-logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  text-decoration: none;
}

.site-logo img {
  height: 44px;
  width: auto;
}

/* NAV */
.nav {
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
}

.nav-item {
  position: relative;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 500;
  color: #444444;
  text-decoration: none;
  border-radius: 4px;
  white-space: nowrap;
  transition: color 0.15s, background-color 0.15s;
  display: flex;
  align-items: center;
  gap: 4px;
}

.nav-item:hover,
.nav-item.router-link-active {
  color: #183a63;
  background-color: #f0f4f9;
}

/* Submenu */
.has-submenu {
  cursor: default;
}

.has-submenu > a {
  color: inherit;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
}

.chevron {
  font-size: 10px;
  color: #888;
  line-height: 1;
}

.submenu {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  background: #ffffff;
  border: 1px solid #e8e0d0;
  border-radius: 4px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  min-width: 220px;
  overflow: hidden;
}

.submenu-item {
  display: block;
  padding: 12px 16px;
  font-size: 14px;
  color: #444444;
  text-decoration: none;
  transition: background-color 0.15s, color 0.15s;
}

.submenu-item:hover {
  background-color: #f0f4f9;
  color: #183a63;
}

/* RIGHT SIDE */
.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  margin-left: auto;
}

.phone {
  font-size: 14px;
  font-weight: 600;
  color: #183a63;
  text-decoration: none;
  letter-spacing: 0.03em;
  white-space: nowrap;
}

.phone:hover {
  color: #b89a5a;
}

/* BURGER (mobile) */
.burger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.burger span {
  display: block;
  height: 2px;
  background-color: #183a63;
  border-radius: 2px;
  transition: transform 0.2s, opacity 0.2s;
}

.burger.open span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
.burger.open span:nth-child(2) { opacity: 0; }
.burger.open span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

/* RESPONSIVE */
@media (max-width: 768px) {
  .burger { display: flex; }

  .nav {
    display: none;
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    background: #ffffff;
    border-bottom: 1px solid #e8e0d0;
    flex-direction: column;
    align-items: stretch;
    padding: 8px 0;
    gap: 0;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  }

  .nav.open { display: flex; }

  .nav-item {
    border-radius: 0;
    padding: 12px 20px;
  }

  .has-submenu {
    flex-direction: column;
    align-items: flex-start;
  }

  .submenu {
    position: static;
    box-shadow: none;
    border: none;
    border-top: 1px solid #f0ebe0;
    border-radius: 0;
    width: 100%;
  }

  .submenu-item {
    padding-left: 32px;
  }
}
</style>
