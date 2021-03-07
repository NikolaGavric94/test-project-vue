<template>
  <div id="home" class="container">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>Login</p>
    <login />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login';

export default {
  name: 'Home',
  components: {
    'login': Login
  }
}
</script>
