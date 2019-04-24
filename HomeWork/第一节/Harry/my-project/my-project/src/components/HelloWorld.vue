<template>
  <div class="hello">
    <ul class="">
      <li v-for="(item,index) in tabs" :key="index" :class="{active:index == num}" @click="tabClick(index)">
          {{item}}
      </li>
    </ul>
    <div class="tabContent">
      <div class="content" >
        <div class="tabcontent1"></div>
      </div>
      <div class="content" v-for="(itemCon,index) in tabContents" :key="index" v-show="index == num">
          <div class="tabcontent2">{{itemCon}}</div>
      </div>
      <div class="content" >
        <div class="tabcontent3"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      tabs: ['tab1', 'tab2', 'tab3'],
      tabContents: ['tab1content', 'tab2content', 'tab3content'],
      num: 0
    }
  },
  methods: {
    tabClick: function (index) {
      this.num = index
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  height: 100%;
}
ul {
  display: flex;
  height: 100px;
  margin: 0;
  padding: 0;
}
li {
  display: inline-block;
  border-right: solid 1px #aaa;
  border-top: solid 1px #aaa;
  width: 80px;
  line-height: 100px;
}
li:first-of-type{
  border-left:solid 1px #aaa;
  border-top-left-radius: 4px;
}
li:last-of-type{
  border-top-right-radius: 4px;
}
li.active{
  background: #38bc9d;
}
li:hover{
  background: #38bc9d;
  cursor: pointer;
}
.tabContent
{
   display: flex;
   height: calc(100% - 100px);
}
.content{
  position: relative;
  width:33%;
  height: 100%;
  border:solid 1px #aaa;
  border-right: none;
  display: flex;
}
.content:last-of-type{
  border-right:solid 1px #aaa;
}
.tabcontent1{
    width: 100px;
    height: 100px;
    background-color: red;
    margin-top: 100px;
    margin-left: 100px;
}
.tabcontent2{
    width: 100px;
    height: 100px;
    background-color: yellow;
    align-items: center;
    align-self: center;
    margin: auto;
}
.tabcontent3{
    width: 100px;
    height: 100px;
    background-color: blue;
    position: absolute;
    bottom: 100px;
    right: 100px;
}
</style>
