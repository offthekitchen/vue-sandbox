<script setup lang="ts"></script>

<template>
  <div class="stats-table">
    <h1>COLORADO STATS</h1>
    <div class="stats-row">
      <div class="stats-row-header">CO Cities perform in</div>
      <div class="stat">83</div>
    </div>
    <div class="stats-row">
      <div class="stats-row-header">% CO Cities perform in</div>
      <div class="stat">19.43%</div>
    </div>
  </div>
</template>

<style scoped>
.stats-table {
  border: 1px solid #e2e2e2;
  border-radius: 20px;
  margin: 16px;
  padding: 16px;
  height: 200px;
  width: 300px;

}
.stats-row {
  display: flex;
}
.stats-row-header {
  width: 200px;
  font-weight: 700;
}
</style>
