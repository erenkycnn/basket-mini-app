<template>
  <div v-if="show" :class="`toast toast-${type}`" @click="dismiss">
    {{ message }}
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'info',
    },
    duration: {
      type: Number,
      default: 3000,
    },
  },
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.dismiss();
    }, this.duration);
  },
  methods: {
    dismiss() {
      this.show = false;
      this.$emit('dismiss');
    },
  },
};
</script>

<style>
.toast {
  position: fixed;
  top: 1rem;
  right: 1rem;
  background-color: #333;
  color: #fff;
  padding: 1rem;
  border-radius: 0.25rem;
  z-index: 9999;
  cursor: pointer;
  transition: opacity 0.5s ease;
}

.toast-info {
  background-color: #007bff;
}

.toast-success {
  background-color: #28a745;
}

.toast-warning {
  background-color: #ffc107;
}

.toast-error {
  background-color: #dc3545;
}
</style>
