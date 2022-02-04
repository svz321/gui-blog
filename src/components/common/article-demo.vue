<template>
    <div class="container">
        <div class="contents">
            <a traget="_blank" :href=article_data.hrefs class="titles">{{article_data.title}}</a>
            <div class="main">
                <div class="left">
                    <a traget="_blank" :href=article_data.hrefs >
                        <img :src="article_data.picture"></img>
                    </a>
                </div>
                <div class="right">
                    <a traget="_blank" :href=article_data.hrefs>{{article_data.content}}</a>
                    <div class="operation">
                        <el-badge :value="12" class="item">
                        <el-button icon="iconfont icon-good" @click="good">点赞</el-button>
                        </el-badge>
                        <el-badge class="item">
                        <el-button icon="iconfont icon-bad" @click="bad">点踩</el-button>
                        </el-badge>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"article_demo",
    props:["getarticle_data"],
    mounted(){
        console.log(this.article_data.picture);
    },
    data(){
        return{
            article_data:{
                    hrefs:this.getarticle_data.hrefs,
                    content:this.getarticle_data.content,
                    title:this.getarticle_data.title,
                    likes:this.getarticle_data.likes,
                    picture:this.getarticle_data.picture,
                }
        }
    },
    methods:{
        good(){

        },
        bad(){

        },
    }

}
</script>

<style lang="less" scoped>
.container{
    width: 840px;
    height: 160px;
    background-color: rgb(249, 249, 249);
    display: block;
    position: relative;
    :hover {
        background: #a2a6a8;
    }
    .contents{
        > a{
            font-weight:bold|bolder;
            text-decoration:none;
            width:100%;
            height:30px;
            font-size: 20px;
            font-weight: 500;
            color: #222226;
            overflow: hidden;
            white-space: normal;
            word-break: break-word;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            line-height: 25px;
            overflow: hidden;
            text-overflow: ellipsis;
            
        }
        > a:hover{
            text-decoration:underline;
        }
        .main{
            width:100%;
            height:130px;
            .left{
                width:140px;
                //height:130px;
                float:left;
                //background-color:red;
                > a > img{
                    margin: 5px 5px;
                    width: 130px;
                    height: 120px;
                }
            }
            .right{
                width:700px;
                //height:130px;
                float:left;
                //background-color:black;
                > a{
                    text-decoration:none;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    word-wrap:break-word;
                    display:-webkit-box; 
                    -webkit-box-orient:vertical;
                    -webkit-line-clamp:3; 
                    color: #222226;
                    height:70px;
                }
                .operation{
                    position:absolute;
                    height:50px;
                    bottom:0;
                    //background-color:black;
                    .item {
                    margin-top: 10px;
                    margin-right: 40px;
                    }
                }
            }
        }
    }
}
</style>