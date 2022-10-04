<template>
  <div class="container-wrapper">
    <div class="como-llegar">
        <div class="heading-wrapper">
            <h2 class="heading">Cómo llegar</h2>
            <svg width="301" height="21" viewBox="0 0 301 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 19C99.958 1.65814 200.005 1.66312 299.204 1.66312" stroke="#17E88F" stroke-width="3" stroke-linecap="round"/>
            </svg>
        </div>
        <div class="empty-container"></div>
      </div>
      <svg width="322" height="617" viewBox="0 0 322 617" fill="none" xmlns="http://www.w3.org/2000/svg" class="bg-zigzag">
      <path d="M423.386 4C396.728 21.8886 374.055 45.4276 350.461 67.0352C303.82 109.748 256.91 152.145 209.284 193.758C192.704 208.244 175.616 222.39 159.942 237.882C156.474 241.311 146.536 248.987 151.356 249.729C154.969 250.284 165.422 243.483 167.55 242.447C180.903 235.945 194.306 229.693 208.197 224.406C232.704 215.078 264.021 203.208 290.795 206.473C321.885 210.265 271.416 247.541 266.015 251.685C230.951 278.59 194.696 304.776 164.616 337.435C155.098 347.768 150.625 358.936 169.398 352.215C185.635 346.402 199.872 336.37 215.805 330.044C221.194 327.904 215.919 334.688 215.37 335.478C206.904 347.661 197.034 359.044 187.113 370.039C175.411 383.007 162.758 394.915 150.487 407.317C146.205 411.644 133.084 422.553 132.989 430.248C132.876 439.388 188.09 431.918 195.372 432.857C223.197 436.441 169.123 489.268 163.855 494.805C126.782 533.776 87.4762 570.928 53.8692 613.05C39.2083 631.426 25.8034 650.789 15.07 671.738C11.0802 679.526 1.68246 695.451 4.52789 705.647C6.61093 713.111 14.1601 709.396 16.4828 706.299" stroke="#17E88F" stroke-width="8" stroke-linecap="round"/>
      </svg>
    <div class="bottom-container">
      <p class="text">Lorem ipsum</p>
      <p class="text">Lorem ipsum</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .container-wrapper{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .como-llegar{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;  
      .heading-wrapper{
        margin-bottom: 44px;
        .heading{
          font-family: 'Lato';
          font-style: normal;
          font-weight: 700;
          font-size: 36px;
          line-height: 43px;
          text-align: center;
          color: #012A2D;
        }
        svg{
          width: 215px;
        }
      }
      .empty-container{
        width: 1200px;
        height: 332px;
        background: #D9D9D9;
        margin-bottom: 50px;
        position: relative;
        z-index: 2;
        @media only screen and (max-width:1260px){
          width: 100%;
        }
      }
    }
    .bg-zigzag{
      position: absolute;
      bottom: 0;
      right: 0;
    }
    .bottom-container{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 104px;
      background: #012A2D;
      position: relative;
      z-index: 2;
      &>*:not(:last-child){
        margin-right: 80px;
        @media only screen and (max-width:780px){
          margin-right: 40px;
        }
      }
      .text{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        color: #FFFFFF;
        @media only screen and (max-width:780px){
          font-size: 24px;
        }
      }
    }
  }

</style>