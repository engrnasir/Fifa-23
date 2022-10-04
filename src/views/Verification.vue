<template>
  <div class="container">
    <img src="@/assets/verifica-logo.png" alt="" class="logo">
    <h2>Confirmación de inscripción</h2>
    <p>Enhorabuena *|{{name}}|* ,<br>
    ¡te has registrado corractamente para el torneo <br>
    *|{{tournament}}|*!
    </p>
    <button>¡Accede aquí!</button>
    <img src="@/assets/verifica-footer.png" alt="" class="footer">
    <img src="@/assets/verifica-hexa.png" alt="" class="bg-hexa">
  </div>
</template>

<script>
export default {
    data(){
        return{
            name:'NAME',
            tournament:'TOURNAMENT'
        }
    }

}
</script>
<style lang="scss" scoped>
    .container{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 50px;
        .logo{
            width: 150px;
            margin-bottom: 35px;
        }
        h2{
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 29px;
            text-align: center;
            color: #012A2D;
            margin-bottom: 35px;
        }
        p{
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            text-align: center;
            color: #000000;
            margin-bottom: 35px;

        }
        button{
            width: 308px;
            height: 44px;
            background: #17E88F;
            border: none;
            transition: all .2s;
            cursor: pointer;
            font-weight: 700;
            font-size: 24px;
            line-height: 29px;
            color: #012A2D;
            margin-bottom: 40px;
            @media only screen and (max-width:740px){
                width: 270px;
            }
            &:active{
                transform: scale(0.95);
            }
            &:hover{
                box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.05);
            }
        }
        .footer{
            width: 100%;
        }
        .bg-hexa{
            position: absolute;
            left: 0;
            bottom: 300px;
            z-index: -1;
            width: 430px;
            @media only screen and (max-width:1140px){
                width: 250px;
                bottom: 200px;
            }
            @media only screen and (max-width:740px){
                width: 180px;
                bottom: 150px;
            }
        }
    }

</style>