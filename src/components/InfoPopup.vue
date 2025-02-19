<script setup lang="ts">

interface Props {
  title: String
}

const props = defineProps<Props>()

</script>

<template>
  <div class="popup">
    <div class="info-header">
      <h3>{{ props.title ? props.title : 'INFO' }}</h3>
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/close-icon.svg"
        width="20"
        height="20"
        v-on:click="$emit('close')"
      />
    </div>
    <slot></slot>
    <div class="info-footer">
      This info popup is a component that receives its content into a
      slot and its title as a prop.
    </div>
  </div>
</template>

<style>
.popup {
  background-color: #555;
  color: #fff;
  border-radius: 6px;
  padding: 8px 16px;
  position: absolute;
  z-index: 1;
  left: 100px;
  margin-left: -80px;
  max-width: 300px;
}

/* Popup arrow */
.popup .popuptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

/* Toggle this class - hide and show the popup */
.popup .show {
  visibility: visible;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 1s;
}

.info-header {
  display: flex;
  justify-content: space-between;
}

.info-footer {
  font-style: italic;
}

/* Add animation (fade in the popup) */
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
