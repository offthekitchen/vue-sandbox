<template>
  <div class="overview">
    <p>
      Although I have years of experience as a VueJS developer, all of the code
      I've worked on is proprietary andf can not be shared. So, I created this
      simple Vue app as a sandbox to explore concepts and demonstrate a basic
      understabnding of the framework.
    </p>
    <div>
      This web app merely tracks the cities and specific breweries in which I
      have performed as a musician for my
      <a href="http://www.coloradosessions.com/" target="_blank"
        >Colorado Sessions</a
      >
      project. It is written in Typescript utilizing Interfaces and classes. It
      currently employs the following concepts:
      <ul>
        <li>Composition API & Composables</li>
        <li>Typescript</li>
        <li>Interfaces for data typing</li>
        <li>Vue Router</li>
        <li>Scoped Styles</li>
        <li>Parent child Component Architecture</li>
      </ul>
    </div>
    <div>
      As I develop it, I will incorporate the additional VueJS concepts:
      <ul>
        <li>Connectivity to an external MySQL database via Axios</li>
        <li>Vue Router</li>
        <li>VueX Store</li>
        <li>Vuetify</li>
        <li>Scoped slots</li>
        <li>Component Architecture</li>
      </ul>
    </div>
    <p>
      You can click the
      <img
        alt="Info icon"
        title="Info icon"
        class="icon"
        src="@/assets/info-icon.svg"
        width="20"
        height="20"
      />
      icon to get a little behind the scenes info of how each element was
      implemented.
    </p>
  </div>
</template>
<style scoped>
.overview {
  max-width: 650px;
}

.icon {
  margin-bottom: -5px;
}
</style>
