<template>
  <div id="Login">
    <div class="wrap flex justify-center flex-col">
      <van-form class="login-from p-4" @submit="onSubmit">
        <h2 class="text-4xl mb-4">登录</h2>
        <van-field
          v-model="form.username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="form.password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div class="mt-5">
          <van-button block type="info" native-type="submit"> 提交 </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>

import { Form, Field, Button } from 'vant'
import { sleep } from '@/utils'

export default {
  name: 'Login',
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button
  },
  data(){
    return {
      form: {}
    }
  },
  methods: {
    onSubmit(values) {

      this.$store.commit('LOADING', true)
      this.$http.post('/api/login', values)
        .then(res => {
          const { success, data, message } = res
          this.$notify({
            type: success ? 'success' : 'error',
            message
          })
          success && this.successHandle(data)

        })
        .finally(() => {
          this.$store.commit('LOADING', false)
        })

    },
    async successHandle(data){

      const { token } = data
      this.$store.commit('ADD_TOKEN', token)
      await sleep(1000)
      this.$router.push('/')

    }
  }
}
</script>

<style lang="scss" scoped>
  #Login {

    .wrap {
      height: 100vh
    }

    .login-from {
      transform: translateY(-5rem);
    }

  }
</style>
