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
        <div class="login__form__container">
          <a href="#" class="login__form__container__senha">Esqueceu a senha ?</a>
        </div>
        <router-link to="/cadastro" class="login__form__cadastro">Criar nova conta</router-link>
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
  align-items: center;
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
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
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
        cursor: pointer;
      }
      &__container {
        width: 90%;
        display: flex;
        justify-content: center;
        border-bottom: 1px solid #ccc;
        padding: 15px;
        &__senha {
          text-decoration: none;
          color: #1877f2;
          font-size: 15px;
        }
      }
      &__cadastro {
        display: flex;
        align-self: center;
        text-decoration: none;
        margin-top: 25px;
        background: #42b72a;
        padding: 15px;
        border-radius: 5px;
        color: #fff;
        font-weight: 700;
      }
    }
  }
}
</style>
