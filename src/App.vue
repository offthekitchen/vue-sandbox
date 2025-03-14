<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import AppFooter from "./components/Footer.vue";
import InfoPopup from "./components/InfoPopup.vue";
import { storeToRefs } from "pinia"
import { useAppStore } from "./stores/app"


const store = useAppStore()

const { loading } = storeToRefs(store)

var appInfoHtml: string =
  'This Vue application is written in TypeScript using the composition API and composables. It incorporates the following:'
appInfoHtml += '<ul><li>Vue Router</li><li>Pinia Store</li><li>Slots</li><li>Axios</li></ul>'
var navInfoHtml: string =
  'The navigation uses the Vue Router to change out the content fo each area.  The home page fetches the performance data into the store.'
navInfoHtml += 'Navigation guards on the other routes check it the data is loaded and if not, redirect to the home.'
const showAppInfo = ref(false);
const showNavInfo = ref(false);

function toggleInfo(infoContext: string) {
  switch (infoContext) {
    case "app":
      showAppInfo.value = !showAppInfo.value;
      break;
    case "nav":
      showNavInfo.value = !showNavInfo.value;
      break;
  }
}
</script>
<template>
  <div v-show="loading" class="spinner-background">
    <VueSpinner size="90" color="hsla(160, 100%, 37%, 0.2)" />
  </div>
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
        <img
          alt="Info Icon"
          title="Info Icon"
          class="icon"
          src="@/assets/info-icon.svg"
          width="20"
          height="20"
          v-on:click="toggleInfo('app')"
        />
        <InfoPopup
          v-show="showAppInfo"
          @close="toggleInfo('app')"
          title="Application Info"
          ><span v-html="appInfoHtml"></span>
        </InfoPopup>
      </div>
      <div class="navigation">
        <nav>
          <RouterLink to="/vue-sandbox/">OVERVIEW</RouterLink>
          <RouterLink to="/vue-sandbox/cities">CITIES</RouterLink>
          <RouterLink to="/vue-sandbox/breweries">BREWERIES</RouterLink>
        </nav>
        <img
          alt="Info Icon"
          title="Info Icon"
          class="icon"
          src="@/assets/info-icon.svg"
          width="20"
          height="20"
          v-on:click="toggleInfo('nav')"
        />
        <InfoPopup
          v-show="showNavInfo"
          @close="toggleInfo('nav')"
          title="Navigation Info"
          ><span v-html="navInfoHtml"></span>
        </InfoPopup>
      </div>
    </header>
    <div class="main-section">
      <RouterView />
    </div>
  </div>
  <AppFooter />
</template>

<style>
.spinner-background {
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  opacity: .4;
}

.vue-spinner {
  align-self: center;
}

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

.navigation {
  display: flex;
  margin-top: 16px;
}

nav {
  font-size: 18px;
  text-align: center;
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
