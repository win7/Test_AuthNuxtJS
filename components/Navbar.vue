<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    
    <el-menu-item index="1">
      <nuxt-link to="/">Nuxt-Auth</nuxt-link>
    </el-menu-item>
    <template v-if="!isAuthenticated">
      <el-menu-item index="2">
        <nuxt-link to="/register">Register</nuxt-link>
      </el-menu-item>
      <el-menu-item index="3">
        <nuxt-link to="/login">Log In</nuxt-link>
      </el-menu-item>
    </template>
    <el-submenu index="4" v-else>
      <template slot="title"> {{ loggedInUser.username }} </template>
      <el-menu-item index="4-1">
        <nuxt-link to="/profile">My Profile</nuxt-link>
      </el-menu-item>
      <el-divider></el-divider>
      <el-menu-item index="4-2">
        <a @click="logout">Logout</a>
      </el-menu-item>
    </el-submenu>
    <el-menu-item index="5" disabled>Info</el-menu-item>
    <el-menu-item index="6">
      <a href="https://www.ele.me" target="_blank">Orders</a>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  methods: {
    async logout() {
      await this.$auth.logout();
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
}
</script>