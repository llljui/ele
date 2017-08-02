<template>
<div class="index" >
   <el-row class="head_ui">
     <el-col :span="8" :offset="1">
        <h4><i class="fa fa-map-marker fa-6" aria-hidden="true"></i> 获取地址...</h4>
     </el-col>
     <el-col :span="8" :offset="7">
        <h4><i class="fa fa-sun-o fa-6" aria-hidden="true"></i> 晴天/30℃</h4>
     </el-col>
   </el-row>
   <el-row class="head_ui input1">
     <el-col :span="18" :offset="3">
        <el-input type="text" icon="search" class="search"></el-input>
     </el-col>
   </el-row>
   <el-row class="head_ui top_list">
     <el-col :span="3" class="off3"></el-col>
     <el-col :span="3" v-for="item in goods_fn"><a href="#">{{item}}</a></el-col>
   </el-row>
   <el-row class="good_list goods_img">
     <el-row class="line10">
      <el-col :span="24">好书推送</el-col>
     </el-row>
    <el-col :span="24" v-for="item in 10">
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
      numbers: [ '三国演义', '红楼梦', '水浒传', '西游记', '隋唐英雄传', '封神榜' ]
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
.head_ui{background-color: #7d99c1;}
h4,h5{color: white;}
.top_list{line-height: 235%;color: white;text-overflow: ellipsis;white-space: nowrap; overflow: hidden;font-size: 0.73rem;}
.top_list div{text-overflow: ellipsis;white-space: nowrap; overflow: hidden;}
.line10{height: 5px!important;background-color:#7d99c1; }
.line10 div{height: 40px!important;border-bottom:none!important;color:black;text-align: left;padding-top: 15px;font-weight: 900;padding-left: 20px;}
.good_list{background-color: white;}
.good_list div{height: 120px;/* border-bottom:1px solid #ddd; */}
.good_list div img{margin-top: 5px;}
.goods_img div a{color:black;}
.off3{height:1px;}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .nav_foot{}
  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
/* .goods_a{height: 3rem;display: inline-block;} */
</style>
