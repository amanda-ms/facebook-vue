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
          <a href="#" class="login__form__container__senha"
            >Esqueceu a senha ?</a
          >
        </div>
        <a href="#" @click="modal = true" class="login__form__cadastro"
          >Criar nova conta</a
        >
      </form>

      <Modal v-if="modal">
        <div class="modal">
          <div class="header">
            <div class="header__cadastre">
              <h1>Cadastre-se</h1>
              <span>É rápido e fácil</span>
            </div>
            <a href="#" @click="modal = false" class="header__close"
              ><img src="@/assets/close-cadastro.png"
            /></a>
          </div>
          <form @submit="createUser" class="form">
            <input
              type="text"
              placeholder="Digite seu nome"
              v-model="cadastro.nome"
              class="form__input"
            />
            <input
              type="email"
              placeholder="Digite seu email"
              v-model="cadastro.email"
              class="form__input"
            />
            <input
              type="date"
              placeholder="Digite seu aniversário"
              v-model="cadastro.date"
              class="form__input"
            />
            <input
              type="password"
              placeholder="Digite sua senha"
              v-model="cadastro.password"
              class="form__input"
            />
            <input
              type="password"
              placeholder="Confirme sua senha"
              v-model="cadastro.confirmationPassword"
              class="form__input"
            />
            <button class="form__button">Cadastrar</button>
          </form>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Modal from "@/components/common/Modal";

export default {
  data() {
    return {
      email: "",
      password: "",
      cadastro: {
        nome: "",
        email: "",
        date: "",
        password: "",
        confirmationPassword: "",
      },
      modal: false,
    };
  },
  components: {
    Modal,
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
    .modal {
      padding: 15px;
    }
  }
}
</style>
