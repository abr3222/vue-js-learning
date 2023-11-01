<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p> User name : {{ switch_name() }}</p>
    </div>
</template>

<script>
export default {
  props: ['name'],
  methods: {
    switch_name() {
      return this.name.split("").reverse().join("");
    }
  }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
