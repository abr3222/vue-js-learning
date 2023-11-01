<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p> User name : {{ switch_name() }}</p>
        <p> User age : {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFun()">Reset Name</button>
    </div>
</template>

<script>
import { eventBus } from '../main';
export default {
  props: {
    myName: {
      type: String,
      required: true
    },
    resetFun: Function,
    userAge: Number
  },
  methods: {
    switch_name() {
      return this.myName.split("").reverse().join("");
    },
    resetName(){
      this.myName = "ABE",
      this.$emit('nameWasReset',this.myName)
    }
  },
  created() { // Step 3: Use Lifecylce hook to Update the infomratin directly without parrent
    eventBus.$on('ageWasEdited', (age) => {
      this.userAge = age;
    });
  }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
