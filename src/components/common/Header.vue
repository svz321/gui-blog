<template>
        <div class="header">
            <div class="left">
                <el-menu
                    :default-active="activeIndex1"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="headSelect"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                    <el-menu-item index="1">首页</el-menu-item>
                    <el-menu-item index="2">博客</el-menu-item>
                    <el-menu-item index="3">问答</el-menu-item>
                    <el-menu-item index="4">社区</el-menu-item>
                    <el-input
                        style="width:50%;margin-left:100px; margin-top:10px"
                        placeholder="请输入内容"
                        prefix-icon="el-icon-search"
                        v-model="input2">
                    </el-input>
                    <el-button plain @click="search">搜索</el-button>
                </el-menu>
            </div>
            <div class='middle'>
                <!--<el-button type="info" @click="logout">退出</el-button><el-avatar icon="el-icon-user-solid"></el-avatar>!-->
                <el-menu
                    :default-active="activeIndex2"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="userSelect"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    >
                    <el-submenu index="1" >
                            <template slot="title" >
                                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                            </template>
                            <el-menu-item index="1-1">个人中心</el-menu-item>
                            <el-menu-item index="1-2">设置</el-menu-item>
                            <el-menu-item index="1-3">退出</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="2-1">收藏</el-menu-item>
                    <el-menu-item index="2-2">动态</el-menu-item>
                    <el-menu-item index="2-3">消息</el-menu-item>
                </el-menu>
            </div>
            <div class="right">
                <el-button type="danger" icon="el-icon-edit" @click="search">创作</el-button>
            </div>
    </div>
</template>

<script>
export default {
    name:"header_con",
    props:['getheaderdata'],
    data(){
        return{
            activeIndex1:this.getheaderdata.activeIndex1,
            activeIndex2:this.getheaderdata.activeIndex2,
        }
    },
    mounted(){
        console.log(this.activeIndex1);
    },
    methods:{
        logout(){
            window.sessionStorage.clear()
            this.$router.push('/login')
        },
        headSelect(key, keyPath){
            console.log(key, keyPath);
        },
        userSelect(key, keyPath){
            console.log(key, keyPath);
        },
    }
}
</script>

<style lang="less" scoped>
.header{
    //opacity:0.5;
    z-index:10;
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    background-color: #545c64;
    display: flex;
    .left{
        width: 70%;
    }
    .middle{
        width: 20%;
        margin-left:100px; 
    }
    .right{
        width: 10%;
        margin-top:10px; 
        margin-left:50px; 
    }
}
</style>