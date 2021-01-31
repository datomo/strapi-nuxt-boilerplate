<template>
  <div class="examples">
    <p>is visible: {{examples.isVisible}}</p>
    <p>budget: {{examples.Budget}}</p>
    <p>text: {{examples.text}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      examples: {}
    }
  },
  async created() {
    this.examples = await this.$store.getters.examples;
  }
}
</script>

<style>
</style>