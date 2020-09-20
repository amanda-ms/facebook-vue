<template>
  <div class="container">
    <div class="login">
      <div class="login__initial">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          alt="logo do Facebook"
          class="login__initial__logo"
        />
        <p class="login__initial__paragrafo">
          O Facebook ajuda você a se conectar e compartilhar com as pessoas que
          fazem parte da sua vida.
        </p>
      </div>
      <form @submit="submit" class="login__form">
        <input
          type="email"
          placeholder="Email ou telefone"
          v-model="email"
          class="login__form__input"
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          v-model="password"
          class="login__form__input"
        />
        <button class="login__form__button">Entrar</button>
        <a href="#">Esqueceu sua senha ?</a>
        <hr />
        <router-link to="/cadastro" class="login__form__cadastro"
          >Cadastre-se</router-link
        >
      </form>
    </div>
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

<style lang="scss">
.container {
  display: flex;
  width: 100%;
  background: #f0f2f5;
  height: 100%;
  .login {
    display: flex;
    width: 75%;
    margin: 50px auto;
    &__initial {
      display: flex;
      flex-direction: column;
      width: 60%;
      &__logo {
        width: 300px;
      }
      &__paragrafo {
        font-size: 28px;
        padding-left: 30px;
        margin-right: 75px;
      }
    }
    &__form {
      display: flex;
      flex-direction: column;
      background: #fff;
      width: 35%;
      border-radius: 10px;
      padding: 20px;
      height: 300px;
      &__input {
        outline: 0;
        border: 1px solid #ccc;
        font-size: 18px;
        padding: 15px;
        border-radius: 5px;
        margin-bottom: 10px;
      }
      &__button {
        height: 45px;
        border: none;
        background: #166fe5;
        color: #fff;
        font-size: 20px;
        font-weight: 700;
        border-radius: 5px;
      }
    }
  }
}
</style>
