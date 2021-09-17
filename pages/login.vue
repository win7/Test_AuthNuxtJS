<template>
    <el-container>
      <el-alert
        title="error"
        type="success" v-if="error"/>
      </el-alert>
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Username">
          <el-input type="text" v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">Log In</el-button>
          <!-- <el-button>Cancel</el-button> -->
        </el-form-item>
      </el-form>
    </el-container>
</template>

<script>
import Notification from '~/components/Notification'

export default {
  middleware: 'guest',
  components: {
    Notification,
  },

  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      error: null
    }
  },

  methods: {
    async login() {
      try {
        let response = await this.$auth.loginWith('local', {
          data: this.form
        })

        console.log(response);

        this.$router.push('/')
      } catch (err) {
        this.error = err.response.data.detail;
        console.log(err);
      }
    }
  }
}
</script>