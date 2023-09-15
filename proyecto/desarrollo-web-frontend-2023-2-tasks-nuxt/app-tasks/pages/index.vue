<template>
  <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h1 class="text-h4 font-weight-thin mb-4">
        Vuetify
      </h1>
      <h4 class="subheading"></h4>
      <div id="1" class="pa-4 primary white--text rounded-pill" style="weight: 100vh">
        <div class="flex-column justify-center align-center text-white" style="weight: 100vh">
        
            <v-form fast-fail @submit.prevent="login" style="weight: 100vh">
              <v-text-field v-model="username" label="User Name"></v-text-field>

              <v-text-field v-model="password" label="password"></v-text-field>
              <a href="#" class="text-body-2" style="color:white">Forgot Password?</a>

              <v-btn type="submit" color="primary" block class="mt-2">Sign in</v-btn>

            </v-form>
            <div class="mt-2">
              <p class="text-body-2">Don't have an account? <a href="#" style="color:white">Sign Up</a></p>
            </div>
        
        </div>
      </div>
    </div>
  </v-parallax>
</template>

<script>
definePageMeta({
  layout: "blank",
});
</script>