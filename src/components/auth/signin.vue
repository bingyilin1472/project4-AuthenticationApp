<template>
  <div id="signin">
    <div class="signin-form">
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="email">Mail</label>
          <input type="email" id="email" v-model="email">
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password">
        </div>
        <div class="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'signin',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions([
      'signin'
    ]),
    onSubmit  () {
      // 送出前，會先將綁定的資料彙整到formData之中
      const formData = {
        email: this.email,
        password: this.password
      }
      console.log(formData)
      // 測試帳戶1: abcd1234@gmail.com、4321abcd
      // 測試帳戶2: abcd6789@gmail.com、9876abcd
      this.signin({ email: formData.email, password: formData.password })
    }
  }
}
</script>

<style scoped lang="scss">
  .signin-form {
    width: 400px;
    margin: 30px auto;
    border: 1px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
  }
  .input  {
    margin: 10px auto;
    label {
      display: block;
      color: #4e4e4e;
      margin-bottom: 6px;
    }
    input {
      font: inherit;
      width: 100%;
      padding: 6px 12px;
      box-sizing: border-box;
      border: 1px solid #ccc;
    }
    input:focus {
      outline: none;
      border: 1px solid #521751;
      background-color: #eee;
    }
  }
  .submit {
    button  {
      border: 1px solid #521751;
      color: #521751;
      padding: 10px 20px;
      font: inherit;
      cursor: pointer;
    }
    button:hover,
    button:active {
      background-color: #521751;
      color: white;
    }
    button[disabled],
    button[disabled]:hover,
    button[disabled]:active {
      border: 1px solid #ccc;
      background-color: transparent;
      color: #ccc;
      cursor: not-allowed;
    }
  }
</style>
