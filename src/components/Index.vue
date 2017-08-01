<template>
<div class="index">
   <el-row class="head_ui">
     <el-col :span="8" offset="1">
        <h4><i class="fa fa-map-marker fa-6" aria-hidden="true"></i> 获取地址...</h4>
     </el-col>
     <el-col :span="8" offset="7">
        <h4><i class="fa fa-sun-o fa-6" aria-hidden="true"></i> 晴天/30℃</h4>
     </el-col>
   </el-row>
   <el-row class="head_ui input1">
     <el-col :span="18" offset="3">
        <el-input type="text" icon="search" class="search"></el-input>
     </el-col>
   </el-row>
   <el-row class="head_ui top_list">
     <el-col :span="3" offset="3"><a href="#">橡胶</a></el-col>
     <el-col :span="3" v-for="item in goods_fn"><a href="#">{{item}}</a></el-col>
   </el-row>
   <el-row class="good_list goods_img">
    <el-col :span="6" v-for="item in goods">
      <img src="" alt="暂无图片" width="70px"><br>
      <a href="#">{{item.g}}</a>
    </el-col>
   </el-row>
   <el-row class="good_list goods_img">
   <el-row class="line10">
    <el-col :span="24">乡货推荐</el-col>
   </el-row>
    <el-col :span="24" v-for="item in goods">
    22
    </el-col>
   </el-row>
</div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
      numbers: [ 'LOL', '丽人', '美食', '香蕉', '饿了么' ],
      goods: [
      {g: '香蕉'},
      {g: '苹果'},
      {g: '杭州'},
      {g: '苍南'},
      {g: '饿了么'},
      {g: '美团'},
      {g: '海澜之家'},
      {g: '小滨汽配'}
      ],
      icon: [
      {
      {url: ''},
      {url: ''},
      {url: ''},
      {url: ''},
      {url: ''},
      {url: ''},
      {url: ''},
      {url: ''}
      }
      ]
    }
  },
  computed: {
    goods_fn: function () {
      return this.numbers.filter(function (numbers) {
        return numbers
      })
    }
  },
  method: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{list-style: none;text-decoration: none;}
.top_list a{color:white;}
input::-webkit-input-placeholder{font-size: 3rem;}
input::-moz-placeholder{font-size: 3rem;}
input::-ms-input-placeholde{font-size: 3rem;}
.head_ui{background-color: #20A0FF;}
h4,h5{color: white;}
.top_list{line-height: 235%;color: white;text-overflow: ellipsis;white-space: nowrap; overflow: hidden;font-size: 0.73rem;}
.line10{height: 5px!important;background-color:#F5F5F5; }
.line10 div{height: 40px!important;border-bottom:none!important;color:black;text-align: left;padding-top: 15px;font-weight: 900;padding-left: 20px;}
.good_list{background-color: white;}
.good_list div{height: 120px;border-bottom:1px solid #ddd;}
.goods_img div a{color:black;}
/* .goods_a{height: 3rem;display: inline-block;} */
</style>
