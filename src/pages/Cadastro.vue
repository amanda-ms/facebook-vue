<template>
  <div>
    <form @submit="createUser">
      <input type="text" placeholder="Digite seu nome" v-model="nome" />
      <input type="email" placeholder="Digite seu email" v-model="email" />
      <input type="date" placeholder="Digite seu aniversário" v-model="date" />
      <input
        type="password"
        placeholder="Digite sua senha"
        v-model="password"
      />
      <input
        type="password"
        placeholder="Confirme sua senha"
        v-model="confirmationPassword"
      />
      <button>Cadastrar</button>
    </form>
    <router-link to="/">Voltar</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      nome: "",
      email: "",
      date: "",
      password: "",
      confirmationPassword: "",
    };
  },
  methods: {
    async createUser(e) {
      e.preventDefault();
      const { data } = await axios.post("http://localhost:3000/users", {
        nome: this.nome,
        email: this.email,
        date: this.date,
        password: this.password,
      });
      this.$router.push("/");

      this.nome = "";
      this.email = "";
      this.date = "";
      this.password = "";
      this.confirmationPassword = "";
    },
  },
};
</script>
