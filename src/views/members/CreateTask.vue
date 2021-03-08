<template>
  <div id="create-task" class="container">
    <b-form @submit="onSubmit($event)" @reset="onReset" v-if="show">
      <b-row>
        <label for="date">Choose a date</label>
        <b-form-datepicker id="date" v-model="form.date" required class="col-4"></b-form-datepicker>
      </b-row>
      <br>
      <b-row>
        <b-col md="auto">
          <label for="time">Choose time</label>
          <b-time v-model="form.time" locale="en" required></b-time>
        </b-col>
      </b-row>
      <br>
      <b-row>
        <b-col md="auto">
          <label for="description">Task description</label>
          <b-form-textarea
              id="textarea"
              v-model="form.description"
              placeholder="Task description..."
              rows="3"
              max-rows="6"
              required
          ></b-form-textarea>
        </b-col>
      </b-row>
      <br>
      <b-row>
        <b-button :disabled="!form.date || !form.time || !form.description" type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger" class="offset-1">Reset</b-button>
      </b-row>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "CreateTask",
  data: () => {
    return {
      form: {
        date: null,
        time: null,
        description: null,
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      if (this.form.date && this.form.time && this.form.description) {
        this.$store.dispatch('createTask', this.form).then(() => {
          this.$router.push({name: 'Dashboard'});
        });
      }
    },
    onReset() {
      // Trick to reset/clear native browser form validation state
      this.form.date = null;
      this.form.time = null;
      this.form.description = null;
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
}
</script>

<style scoped>

</style>