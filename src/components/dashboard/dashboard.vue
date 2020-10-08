<template>
  <div id="dashboard">
    <h1>Dashboard</h1>
    <p>You should only get here if you're authenticated.</p>
    <p>Your User ID is {{ userId }}</p>
    <p v-if="userEmailGet">All user data (format: Js Obj in Array): <br><br> {{ userEmailGet }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'dashboard',
  data () {
    return {
      email: null,
      userId: null
    }
  },
  methods: {
    ...mapActions([
      'fetchUser'
    ])
  },
  computed: {
    userEmailGet () {
      return !this.$store.getters.user ? false : this.$store.getters.user
    }
  },
  created () {
    this.userId = this.$store.state.userId
    this.fetchUser()
  }
}
</script>

<style scoped>

</style>
