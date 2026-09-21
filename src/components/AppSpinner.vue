<template>
  <div class="spinner-wrap">
    <div class="spinner" />
  </div>
</template>

<style scoped>
.spinner-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #e8e0d0;
  border-top-color: #183a63;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
