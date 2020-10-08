<template>
  <div id="welcome">
    <h1>Welcome to Authentication App</h1>
    <p>Please sign up (or sign in).</p>
    <div class="cta">
<!--      <router-link to=></router-link>-->
      <router-link :to="{name: 'Sign-up'}">Sign Up</router-link>
      <router-link :to="{name: 'Sign-in'}">Sign In</router-link>
    </div>
  </div>

</template>

<script>
export default {
  name: 'welcome'
}
</script>

<style scoped lang="scss">
  #welcome {
    width: 80%;
    margin: auto;
  }
  h1  {
    text-align: center;
  }
  p {
    text-align: center;
  }
  .cta {
    width: 300px;
    margin: auto;
    text-align: center;
    a {
      margin: 10px;
      text-decoration: none;
      display: inline-block;
      border: 1px solid #521751;
      border-radius: 3px;
      width: 100px;
      padding: 10px;
      box-sizing: border-box;
      color: #521751;
    }
    a:hover,
    a:active {
      background-color: #521751;
      color: white;
    }
  }
</style>
