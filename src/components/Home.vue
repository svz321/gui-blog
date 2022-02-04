<template>
    <div class='home_container' >
       <Header  :getheaderdata="header_data"></Header>
        <div class="home_main">
            <el-container>
                <!-- 推送 !-->
                <el-aside width="65%" >
                    <!-- 滑页 !-->
                    <el-carousel indicator-position="outside" class="home_carousel">
                        <el-carousel-item v-for="item in 4" :key="item">
                        <h3>{{ item }}</h3>
                        </el-carousel-item>
                    </el-carousel>

                    <!-- 文章 !-->
                    <div class="infinite-list-wrapper" style="overflow:auto">
                        <ul
                        class="list"
                        v-infinite-scroll="load"
                        infinite-scroll-disabled="disabled"
                        style="margin-left:10px;"
                        >
                        <div  v-for="i in count" :key=i>
                            <Article :getarticle_data=demos.article_data[i-1]
                            style="margin-left:120px;"
                            >
                            </Article>
                            <el-divider></el-divider>
                        </div>
                        </ul>
                        <p v-if="loading" style="text-align:center;">加载中...</p>
                        <p v-if="noMore" style="text-align:center;">没有更多了</p>
                    </div>
                    <!-- 分页 !-->
                    <!-- <div class="home_pagination">
                        <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage4"
                        :page-sizes="[100, 200, 300, 400]"
                        :page-size="100"
                        layout="sizes, prev, pager, next, jumper"
                        :total="400">
                        </el-pagination>
                    </div> -->
                </el-aside>
                <!-- 日历 !-->
                <el-main>
                    <div class="calendar">
                        <div class="date-header">
                            <el-button icon="iconfont icon-arrow-double-left" @click="preYear" circle></el-button>
                            <el-button icon="iconfont icon-arrow-left-bold" @click="preMonth" circle></el-button>
                            <div class="show-date" >{{year}}年{{month}}月{{day}}日</div>
                            <el-button icon="iconfont icon-arrow-right-bold" @click="nextMonth" circle></el-button>
                            <el-button icon="iconfont icon-arrow-double-right" @click="nextYear" circle></el-button>
                        </div>
                        <div class="date-content">
                            <div class="week-date">
                                <span v-for="item in weeks" :key="item" class="week_title">{{item}}</span>
                                <span v-for="item in beginDay-1" :key="'A'+item" class="other-days">{{preMonthDays-beginDay+item+1}}</span>
                                <span v-for="item in curMonthDays" :key="'B'+item" class="current-days">{{item}}</span>
                            </div>
                        </div>
                    </div>
                </el-main>
            </el-container>
        </div>
    </div>
</template>

<script>
import Header from "./common/Header.vue"
import Article from "./common/article-demo.vue"
export default {
    name:"home_set",
    data(){
        return{
            count: 0,
            loading: false,
            header_data:{
                activeIndex1:'1',
                activeIndex2:'',
            },
            demos:{
                sum:3,
                article_data:[
                {
                    hrefs:"111",
                    content:"content11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
                    title:"title1111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
                    likes:20,
                    picture:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
                },
                {
                    hrefs:"222",
                    content:"content2222222222222222222222222222222222222222222222222222222222222222222222222222222222222",
                    title:"title222222222222222222222222222222222222222222222",
                    likes:20,
                    picture:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
                },
                {
                    hrefs:"333",
                    content:"content33333333333333333333",
                    title:"title33333333333333333",
                    likes:20,
                    picture:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
                },
                ],
            },
            item:"",
            activeIndex1:'1',
            year:new Date().getFullYear(),
            month:new Date().getMonth()+1,
            day:new Date().getDate(),
            weeks:['日','一','二','三','四','五','六'],
            days:[{
                '日':1,'一':2,'二':3,'三':4,'四':5,'五':6,'六':7
            }],
        }
    },
    components:{
        Header,
        Article
    },
    mounted(){
        this.created();
        /*console.log(new Date(
                this.month==1?this.year-1:this.year,
                this.month==1?12:this.month-1,0).getDate())*/
        //console.log(new Date(this.year, this.month-1,1).getDay())
    },
    computed:{
        beginDay(){
            return new Date(this.year, this.month-1,1).getDay();
        },
        curMonthDays(){
            return new Date(this.year, this.month,0).getDate();
        },
        preMonthDays(){
            return new Date(
                this.month==0?this.year-1:this.year,
                this.month==0?12:this.month-1,0).getDate();
        },
        noMore () {
            if(this.count >= this.demos.sum)
                this.count = this.demos.sum
            return this.count == this.demos.sum
        },
        disabled () {
            return this.loading || this.noMore
        },
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
        preMonth(){
            this.year=this.month == 1? this.year - 1 :this.year;
            this.month=this.month==1?12 :this.month -1;
            const allDay = new Date(this.year,this.month,0).getDate();
            if(this.day>allDay){
                this.day= allDay;
            }
        },
        nextMonth(){
            this.year=this.month == 12 ? this.year + 1 :this.year;
            this.month=this.month==12 ? 1 :this.month + 1;
            const allDay = new Date(this.year,this.month,0).getDate();
            if(this.day>allDay){
                this.day= allDay;
            }
        },
        nextYear(){
            this.year=this.year+1;
        },
        preYear(){
            this.year=this.year-1;
        },
        handleChooseDay(e){
            this.day=e,
            target.dataset.day;
        },
        getInitTime(){
            const date =new Date();
            this.year = date.getFullYear();
            this.month = date.getMonth()+1;
            this.day = date.getDate();
            this.today='${this.year}-${this.month}-${this.day}';
        },
        created(){
            this.getInitTime();
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        load () {
            this.loading = true
            setTimeout(() => {
                this.count += 2
                this.loading = false
            }, 2000)
        }
    }
}
</script>

<style lang="less" scoped>
.home_container{
    margin: 0px;
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
    .home_main{
        width: 100%;
        height: 2000px;
        background-color: white;
        position:absolute;
        top:60px;

        .home_carousel{
            margin-top:40px;
            margin-left:10%;
            width: 80%;
        }
        .el-carousel__item h3 {
            color: #ff0000;
            font-size: 18px;
            opacity: 0.75;
            line-height: 300px;
            margin: 0;
            text-align: center; 
        }
    
        .el-carousel__item:nth-child(2n) {
            background-color: #99a9bf;
        }
        
        .el-carousel__item:nth-child(2n+1) {
            background-color: #d3dce6;
        }

        .home_pagination{
            background-color: white;
            position:absolute;
            margin-left:20%;
            width: 80%;
        }

        .calendar{
            position: fixed;
            top: 60px;
            width: 420px;
            background-color:white;
            border-radius: 2px;
            .date-header{
                display: -webkit-box;
                display:-ms-flexbox;
                display: flex;
                -webkit-box-pack: justify;
                    -ms-flex-pack: justify;
                        justify-content: space-between;
                -webkit-box-align:center;
                    -ms-flex-pack:center;
                        align-items: center;
                height:80px;
                padding:0 20px;
                background-color: #546E7A;
                color:#fff;
                font-size: 20px;
                
            }
            .date-content{
                display: -webkit-box;
                display:-ms-flexbox;
                display: flex;
                padding-right: 0px;
                .week-date{
                    display:inline-block;
                    > span{
                        padding-bottom: 20px;
                        display:inline-block;
                        border: 1px solid black;
                        width: calc(58px);
                        text-align: center;
                        height: 50px;
                        line-height: 52px;
                        color:aqua;
                        
                    }
                    .other-days{
                        color:#546E7A;
                    }
                    .week_title{
                        background-color:rgb(88, 62, 62);
                        color:#545c64;
                    }
                }
            }
        }
    }
}
</style>