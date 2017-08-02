<template>
  <div id="app">
      <router-view class="child-view"></router-view>
	  <nav class="nav_foot">
		<div ><router-link to="/"  class="home" >首页</router-link></div>
		<div ><router-link to="/Shelf" class="shelf" >书架</router-link></div>
		<div ><router-link to="/Lei" class="lei" >分类</router-link></div>
		<div ><router-link to="/User" class="user" >我的</router-link></div>
	  </nav>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {}
}
</script>

<style>
body{margin:0!important;background: #f5f5f5;}
*{list-style: none;text-decoration: none;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav_foot{position: fixed;bottom: 0;width: 100%;height: 50px;background-color:white;}
.nav_foot div{float:left;display:inline-block;width: 25%;height: 50px;}
.nav_foot div a{font-size: 0.8rem;color:#7d99c1;line-height:85px;height: 50px;display: block;}
.home{background-image: url('assets/img/home.png');background-repeat:no-repeat;background-size: 40%;background-position: 50% 0%;}
.shelf{background-image: url('assets/img/shelf.png');background-repeat:no-repeat;background-size: 40%;background-position: 50% 0%;}
.user{background-image: url('assets/img/user.png');background-repeat:no-repeat;background-size: 40%;background-position: 50% 0%;}
.lei{background-image: url('assets/img/lei.png');background-repeat:no-repeat;background-size: 40%;background-position: 50% 0%;}
.child-view {
  position: absolute;
  width:100%;
  transition: all .8s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(50px, 0);
  transform: translate(50px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-50px, 0);
  transform: translate(-50px, 0);
}
</style>
