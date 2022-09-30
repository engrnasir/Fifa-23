<template>
    <div class="container-wrapper">
        <form action="">
              <div class="heading-wrapper">
                  <h2 class="title">Inscríbete</h2>
                  <svg width="301" height="21" viewBox="0 0 301 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-line">
                  <path d="M2 19C99.958 1.65814 200.005 1.66312 299.204 1.66312" stroke="#17E88F" stroke-width="3" stroke-linecap="round"/>
                  </svg>
              </div>
              <input type="text" class="name" placeholder="Name" v-model="name">
              <input type="text" class="fifa-nick-name" placeholder="Fifa Nick Name" v-model="nickname">
              <input type="text" class="mail" placeholder="Mail" v-model="mail">
              <label for="communication">
                  <input type="checkbox" name="" id="communication" v-model="acceptCommunication">
                  <p>Acepto recibir comunicaciones de la empresa organizadora del torneo.</p> 
              </label>
              <label for="cookies">
                  <input type="checkbox" name="" id="cookies" v-model="acceptCookies"><p>Al registrarme, acepto las condiciones de uso y reconozco haber leído la política de privacidad y cookies.</p>
              </label>
              <button class="submit">
                <div class="circle">
                    <svg width="29" height="32" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.666 16L3.62522 4.02441V27.9756L24.666 16ZM27.5372 13.5245C27.9816 13.7742 28.351 14.1346 28.6078 14.5693C28.8647 15.004 29 15.4975 29 16C29 16.5025 28.8647 16.996 28.6078 17.4307C28.351 17.8654 27.9816 18.2258 27.5372 18.4755L4.46989 31.607C2.58478 32.6812 0 31.4541 0 29.1315V2.86847C0 0.545907 2.58478 -0.681173 4.46989 0.392966L27.5372 13.5245Z" fill="black"/>
                    </svg>
                </div>
                <p>Inscribirme</p>
              </button>
        </form>
        <img src="@/assets/form-hexa.svg" alt="" class="bg-hexa">
    </div>
</template>

<script>
export default {
    data(){
        return{
            name:'',
            nickname:'',
            mail:'',
            acceptCommunication:false,
            acceptCookies:false


        }
    }

}
</script>

<style lang="scss" scoped>
    .container-wrapper{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 100px 20px;
        position: relative;
        .bg-hexa{
            position: absolute;
            top: 0;
            left: 0;
        }
        form{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 620px;
            padding: 32px 20px 60px;
            background: #FFFFFF;
            box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
            border-radius: 0px;
            position: relative;
            z-index: 2;
            .heading-wrapper{
                .title{
                    font-family: 'Lato';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 36px;
                    line-height: 43px;
                    text-align: center;
                    color: #012A2D;
                }
                .h-line{
                    width: 160px;
                    margin-left: 25px;
                    margin-top: -10px;
                    margin-bottom: 20px;
                }
                
            }
            input[type='text']{
                width: 453px;
                height: 53px;
                background: #FFFFFF;
                box-shadow: inset 0px 0px 11px rgba(0, 0, 0, 0.25);
                border: none;
                margin-bottom: 30px;
                padding: 12px 20px;

                font-family: 'Lato';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                color: #000000;
                &:focus{
                    outline-color: #17E88F;
                }
            }
            label{
                font-family: 'Lato';
                font-style: normal;
                font-weight: 700;
                font-size: 14px;
                line-height: 17px;
                color: #000000;
                display: flex;
                align-items: center;
                margin-bottom: 40px;
                width: 432px;
                margin-left: 20px;    
                cursor: pointer;
            }
            input[type='checkbox']{
                min-width: 28px !important;
                min-height: 28px !important;
                margin-right: 20px;
                background: rgba(0, 0, 0, 0.05);
                border: none;
            }
            .submit{
                width: 293px;
                height: 50px;
                background: #012A2D;
                font-weight: 700;
                font-size: 24px;
                text-align: center;
                color: #FFFFFF;
                display: flex;
                align-items: center;
                cursor: pointer;
                transition: all .2s;
                &:active{
                    transform: scale(0.95);
                }
                .circle{
                    min-width: 73px;
                    min-height: 73px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: #17E88F;
                    transform: translateX(-30px);
                }
                p{
                    width: 100%;
                    text-align: center;
                }
            }
        }
    }

</style>