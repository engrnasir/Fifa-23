<template>
  <div class="container-wrapper">
    <img src="@/assets/PremiosRanking.svg" alt="" class="heading">
    <div class="content">
        <div class="wrapper">
            <img src="@/assets/p1.png" alt="" class="thumbnail">
            <h3 class="title">Mandos Play Station 5</h3>
        </div>
        <div class="wrapper">
            <img src="@/assets/p2.png" alt="" class="thumbnail">
            <h3 class="title">Tarjetas Play Station</h3>
        </div>
        <div class="wrapper">
            <img src="@/assets/p3.png" alt="" class="thumbnail">
            <h3 class="title">Cascos gaming</h3>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .container-wrapper{
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 90px 20px;
        background: #012A2D;
        @media only screen and (max-width:780px) {
            padding: 50px 10px;
        }
        .heading{
            margin-bottom: 80px;
            @media only screen and (max-width:980px) {
                margin-bottom: 40px;
                width: 280px;
            }
            @media only screen and (max-width:780px) {
                margin-bottom: 30px;
                width: 200px;
            }
        }
        .content{
            display: flex;
            align-items: flex-start;
            justify-content: center;
            &>*:not(:last-child){
                margin-right: 150px;
                @media only screen and (max-width:1140px) {
                    margin-right: 50px;
                }
                @media only screen and (max-width:580px) {
                    margin-right: 20px;
                }
            }
            .wrapper{
                .thumbnail{
                    width: 250px;
                    margin-bottom: 28px;
                    clip-path: polygon(50% 0%, 100% 20%, 100% 75%, 50% 100%, 0 75%, 0 20%);
                    @media only screen and (max-width:980px) {
                        width: 180px;
                    }
                    @media only screen and (max-width:780px) {
                        margin-bottom: 18px;
                        width: 120px;
                    }
                    @media only screen and (max-width:780px) {
                        margin-bottom: 15px;
                        width: 80px;
                    }
                }
                .title{
                    font-family: 'Lato';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 29px;
                    text-align: center;
                    color: #FFFFFF;
                    text-transform: capitalize;
                    @media only screen and (max-width:980px) {
                        font-size: 20px;
                    }
                    @media only screen and (max-width:780px) {
                        font-size: 14px;
                        line-height: 18px;
                    }

                }
            }
        }

    }

</style>