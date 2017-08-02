<template>
<div class="users">
	<div class="bartop">
	<el-row>
		<span class="back" v-on:click="clickFn"></span>
		<el-col :span="20" :pull="2" class="title">登录</el-col>
	</el-row>
	</div>
	<el-row class="userinfo1">
		<el-col :span="22" :offset="1"><el-input icon="edit" type="text" placeholder="请输入手机号或者邮箱"></el-input></el-col>
	</el-row>
	<el-row class="userinfo2">
		<el-col :span="22" :offset="1"><el-input icon="edit" type="password" placeholder="请输入密码"></el-input></el-col>
	</el-row>
	<el-row class="userinfo2">
		<el-button type="primary" class="btn_info">确认</el-button>
	</el-row>
	<el-row class="login">
		<el-col :span="5" :offset="1"><el-router >我要注册</el-router></el-col>
		<el-col :span="6" :offset="11"><el-router >忘记密码<i class="fa fa-unlock-alt fa-lg" aria-hidden="true"></i></el-router></el-col>
	</el-row>
</div>
</template>
<script>
export default {
  name: 'users',
  data () {
    return {}
  },
  computed: {
  },
  methods: {
    clickFn: function () {
      this.$router.push('/')
      console.log(22)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{list-style: none;text-decoration: none;}
.title{height: 30px;line-height: 30px;margin-top: 5px;text-align: center;font-size: 1.25rem;font-weight: 500;float: right;}
.bartop{position: fixed;top: 0;width: 100%;height:35px;box-shadow:0px 2px 2px #ddd; display: block;background-color:white;}
.back{background: url('../assets/img/back.png') no-repeat;display: inline-block;width: 30px;height: 30px;background-size: 100%;margin: 5px;z-index: 5555;}
.userinfo1{margin-top: 100px;}
.userinfo2{margin-top: 10px;}
.users{background-color: white;height: 100%}
.btn_info{width:92%;}
.login{margin-top: 5px;color:#89a2c7;}
.fa{margin-left: 5px;}
</style>
