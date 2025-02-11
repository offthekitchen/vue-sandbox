<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import AppFooter from "./components/Footer.vue";

</script>
<template>
  <div class="page-wrapper">
    <header>
      <div class="title-area">
        <img
          alt="Vue logo"
          class="logo"
          src="@/assets/logo.svg"
          width="125"
          height="125"
        />
        <div class="title">VUE Development Sandbox</div>
      </div>
      <div class="navigation">
        <nav>
          <RouterLink to="/">OVERVIEW</RouterLink>
          <RouterLink to="/cities">CITIES</RouterLink>
          <RouterLink to="/breweries">BREWERIES</RouterLink>
        </nav>
      </div>
    </header>
    <div class="main-section">
      <RouterView />
    </div>

  </div>
  <AppFooter />
</template>

<style>
.page-wrapper {
  min-height: 800px;
  max-width: 1200px;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.title-area {
  display: flex;
}

.title {
  font-size: 36px;
}

nav {
  width: 100%;
  font-size: 18px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.main-section {
  display: flex;
  gap: 20px;
}

.primary-button {
  padding: 8px 16px;
  border: 2px solid var(--color-border);
  border-radius: 10px;
  background-color: white;
  font-size: 16px;
  margin-bottom: 4px;
}

.primary-button:hover {
  background-color: #e2e2e2;
}

</style>
