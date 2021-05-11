<template>
  <v-container>
  <v-card elevation="2" class="spacing-playground pa-6" >
    <h3>Register</h3>
    <template v-for="(err, i, key) in form.errors.errors">
      <v-alert dense outlined type="error">
        {{err[0]}}
      </v-alert>
    </template>
      <v-form
        ref="form"
        class="pr-2"
        elevation="2"
      >
        <v-text-field
          :counter="10"
          v-model="form.name"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="form.email"
          label="E-mail"
          required
        ></v-text-field>

        <v-text-field
          v-model="form.password"
          label="Password"
          required
          type="password"
        ></v-text-field>

        <v-text-field
          v-model="form.password_confirmation"
          label="Confirm Password"
          required
          type="password"
        ></v-text-field>

        <v-btn
          color="success"
          class="mr-4"
          @click="register"
        >
          Register
    </v-btn>
  </v-form>
</v-card>


<div class="text-center pr-2">
  <router-link  :to="'/'">Sign In</router-link>
</div>

</v-container>

</template>

<script>
import Form from 'vform'

export default {

  middleware: 'guest',
  metaInfo () {
    return { title: this.$t('register') }
  },

  data: () => ({
    form: new Form({
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    }),
    mustVerifyEmail: false
  }),

  methods: {
    async register () {
      // Register the user.
      const { data } = await this.form.post('/api/register')

      // Must verify email fist.
      if (data.status) {
        this.mustVerifyEmail = true
      } else {
        // Log in the user.
        const { data: { token } } = await this.form.post('/api/login')

        // Save the token.
        this.$store.dispatch('auth/saveToken', { token })

        // Update the user.
        await this.$store.dispatch('auth/updateUser', { user: data })

        // Redirect home.
        this.$router.push({ name: 'home' })
      }
    }
  }
}
</script>
