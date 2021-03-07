<template>
  <user-form :show="show" @onSubmit="onSubmit($event)" @onReset="onReset()"/>
</template>
<script>
import UserForm from "@/components/UserForm";

export default {
  name: 'Login',
  components: {
    'user-form': UserForm
  },
  data: () => {
    return {
      show: true
    }
  },
  methods: {
    onSubmit(form) {
      this.$store.dispatch('login', form).then((res) => {
        this.$store.dispatch('changeToken', {token: res.data.token.plainTextToken, role: res.data.role}).then(() => {
          this.$router.push({name: 'Dashboard'});
        });
      });
    },
    onReset() {
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style scoped>

</style>