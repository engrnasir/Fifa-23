<template>
    <div class="header">
        <img src="@/assets/logo.png" alt="" class="logo">
        <p class="slogen">By Albacenter Shop</p>
        <svg width="301" height="21" viewBox="0 0 301 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-line">
        <path d="M2 19C99.958 1.65814 200.005 1.66312 299.204 1.66312" stroke="#17E88F" stroke-width="3" stroke-linecap="round"/>
        </svg>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .header{
        width: 100%;
        height: 330px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-image: url('@/assets/header-bg.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        
        .logo{
            width: 257px;
            margin-bottom: 5px;
        }
        .slogen{
            font-weight: 700;
            font-size: 24px;
            line-height: 29px;
            text-align: center;
            color: #012A2D;
            margin-bottom: 3px;
        }

    }

</style>