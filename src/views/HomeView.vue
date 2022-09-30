<template>
  <div class="home">
    <HeaderComp/>
    <Formatos/>
    <Embajadoras/>
    <Premios/>
    <FormComp/>
    <FooterComp/>
  </div>
</template>

<script>
import HeaderComp from "../components/Header.vue";
import Formatos from "@/components/Formatos.vue";
import Embajadoras from "@/components/Embajadoras.vue";
import Premios from "@/components/Premios.vue";
import FooterComp from "@/components/Footer.vue";
import FormComp from "@/components/Form.vue";
export default {
    name: "HomeView",
    components: { HeaderComp, Formatos, Embajadoras, Premios, FooterComp, FormComp }
}
</script>
