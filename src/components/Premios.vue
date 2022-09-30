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
        .heading{
            margin-bottom: 80px;
        }
        .content{
            display: flex;
            align-items: flex-start;
            justify-content: center;
            &>*:not(:last-child){
                margin-right: 150px;
            }
            .wrapper{
                .thumbnail{
                    width: 250px;
                    height: 280xp;
                    margin-bottom: 28px;
                    clip-path: polygon(50% 0%, 100% 20%, 100% 75%, 50% 100%, 0 75%, 0 20%);
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

                }
            }
        }

    }

</style>