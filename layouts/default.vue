<template>
  <el-container>
    <el-header>
       <Navbar/>
    </el-header>
    <el-main>
      <nuxt/>
    </el-main>
    <el-footer>
      Footer
    </el-footer>
  </el-container>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>