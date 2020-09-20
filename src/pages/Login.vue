<template>
  <div>
    <form @submit="submit">
      <input type="email" placeholder="Digite seu usuário" v-model="email" />
      <input
        type="password"
        placeholder="Digite sua senha"
        v-model="password"
      />
      <button>Entrar</button>
    </form>
    <router-link to="/cadastro">Cadastre-se</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async submit(e) {
      e.preventDefault();
      const { data } = await axios.get("http://localhost:3000/users", {
        params: {
          email: this.email,
          password: this.password,
        },
      });
      if (data.length > 0) {
        this.$router.push({ name: "timeline" });
      } else {
        alert("Usuário ou senha incorretos");
      }
    },
  },
};
</script>
