<template>
  <div class="col-6 offset-3">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone."
      >
        <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
            id="input-2"
            v-model="form.password"
            type="password"
            placeholder="Enter password"
            required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger" class="offset-1">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "UserForm",
  props: {
    // eslint-disable-next-line vue/require-prop-type-constructor
    show: true
  },
  data: () => {
    return {
      form: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$emit('onSubmit', this.form);
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = '';
      this.form.password = '';
      this.$emit('onReset');
    }
  }
}
</script>

<style scoped>

</style>