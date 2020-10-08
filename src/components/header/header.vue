<template>
  <header id="header">
    <div class="logo">
      <router-link :to="{ name:'Welcome' }">Authentication App</router-link>
    </div>
    <nav>
      <ul>
        <li v-if="!auth">
          <router-link :to="{ name:'Sign-up' }">Sign Up</router-link>
        </li>
        <li v-if="!auth">
          <router-link  :to="{ name:'Sign-in' }">Sign In</router-link>
        </li>
        <li v-if="auth">
          <router-link :to="{ name:'Dashboard' }">Dashboard</router-link>
        </li>
        <li v-if="auth">
          <button class="logout" @click="logout">Log Out</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'header',
  computed: {
    auth () {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$router.replace({ name: 'Sign-in' })
    }
  }
}
</script>

<style scoped lang="scss">
  #header {
    height: 56px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    background-color: #521751;
    padding: 0 20px;
  }
  .logo {
    font-weight: bold;
    color: white;
    a {
      text-decoration: none;
      color: white;
    }
  }
  nav {
    height: 100%;
  }
  ul {
    list-style: none;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: row;
    align-items: center;
    li {
      margin: 0 30px;
      a {
        text-decoration: none;
        color: white;
      }
      a:hover,
      a:active,
      a.router-link-active {
        color: #fa923f;
      }
      .logout {
        background-color: transparent;
        border: none;
        font: inherit;
        color: white;
        cursor: pointer;
      }
    }
  }
</style>
