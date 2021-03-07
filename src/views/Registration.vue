<template>
  <div id="registration" class="container">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>Register</p>
    <registration />
  </div>
</template>

<script>
import Register from "@/components/Register";

export default {
  name: "Registration",
  components: {
    'registration': Register
  }
}
</script>

<style scoped>

</style>