<template>
  <div id="app">
    <div id="nav">
      <router-link v-if="!$store.getters.isLoggedIn" to="/">Login</router-link> |
      <router-link v-if="!$store.getters.isLoggedIn" to="/registration">Register</router-link> |
      <router-link v-if="$store.getters.isLoggedIn" to="/dashboard">Dashboard</router-link> |
      <b-link v-if="$store.getters.isLoggedIn" @click="$store.dispatch('clearToken') && $router.push({name: 'Home'})" href="#">Logout</b-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
