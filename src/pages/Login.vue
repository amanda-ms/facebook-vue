<template>
  <div class="container">
    <div class="login content">
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

      <div class="login__secondary">
        <form @submit="submit" class="login__secondary__form">
          <input
            type="email"
            placeholder="Email ou telefone"
            v-model="email"
            class="login__secondary__form__input"
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            v-model="password"
            class="login__secondary__form__input"
          />
          <button class="login__secondary__form__button">Entrar</button>
          <div class="login__secondary__form__container">
            <a href="#" class="login__secondary__form__container__senha"
              >Esqueceu a senha?</a
            >
          </div>
          <a
            href="#"
            @click="modal = true"
            class="login__secondary__form__cadastro"
            >Criar nova conta</a
          >
        </form>
        <p class="login__secondary__page">
          <a href="#">Criar uma Página</a> para uma celebridade, banda ou
          empresa.
        </p>
      </div>

      <Modal v-if="modal">
        <div class="modal">
          <div class="header">
            <div class="header__cadastre">
              <h1>Cadastre-se</h1>
              <a href="#" @click="modal = false" class="header__close"
                ><img src="@/assets/close-cadastro.png"
              /></a>
            </div>
            <span>É rápido e fácil</span>
          </div>
          <form @submit="createUser" class="form">
            <input
              type="text"
              placeholder="Nome"
              v-model="cadastro.nome"
              class="form__input"
            />
            <input
              type="text"
              placeholder="Sobrenome"
              v-model="cadastro.sobrenome"
              class="form__input"
            />
            <input
              type="email"
              placeholder="Email"
              v-model="cadastro.email"
              class="form__input"
            />
            <input
              type="password"
              placeholder="Nova senha"
              v-model="cadastro.password"
              class="form__input"
            />
            <input
              type="password"
              placeholder="Confirme sua senha"
              v-model="cadastro.confirmationPassword"
              class="form__input"
            />

            <div class="form__birthday">
              <div class="form__birthday__title">
                <span>
                  Data de nascimento
                  <Icon
                    name="question"
                    color="#606770"
                    :size="13"
                    style="margin-left: 5px"
                  />
                </span>
              </div>
              <div class="form__birthday__content">
                <select
                  name="dia"
                  id="dia"
                  title="dia"
                  v-model="cadastro.dia"
                  class="form__input"
                >
                  <option selected value="0" disabled>Dia</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
                <select
                  name="mes"
                  id="mes"
                  title="mes"
                  v-model="cadastro.mes"
                  class="form__input"
                >
                  <option selected value="0">Mês</option>
                  <option value="1">Jan</option>
                  <option value="2">Fev</option>
                  <option value="3">Mar</option>
                  <option value="4">Abr</option>
                  <option value="5">Mai</option>
                  <option value="6">Jun</option>
                  <option value="7">Jul</option>
                  <option value="8">Ago</option>
                  <option value="9">Set</option>
                  <option value="10">Out</option>
                  <option value="11">Nov</option>
                  <option value="12">Dez</option>
                </select>
                <select
                  name="ano"
                  id="ano"
                  title="ano"
                  v-model="cadastro.ano"
                  class="form__input"
                >
                  <option selected value="0">Ano</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                  <option value="2007">2007</option>
                  <option value="2006">2006</option>
                  <option value="2005">2005</option>
                  <option value="2004">2004</option>
                  <option value="2003">2003</option>
                  <option value="2002">2002</option>
                  <option value="2001">2001</option>
                  <option value="2000">2000</option>
                  <option value="1999">1999</option>
                  <option value="1998">1998</option>
                  <option value="1997">1997</option>
                  <option value="1996">1996</option>
                  <option value="1995">1995</option>
                  <option value="1994">1994</option>
                  <option value="1993">1993</option>
                  <option value="1992">1992</option>
                  <option value="1991">1991</option>
                  <option value="1990">1990</option>
                  <option value="1989">1989</option>
                  <option value="1988">1988</option>
                  <option value="1987">1987</option>
                  <option value="1986">1986</option>
                  <option value="1985">1985</option>
                  <option value="1984">1984</option>
                  <option value="1983">1983</option>
                  <option value="1982">1982</option>
                  <option value="1981">1981</option>
                  <option value="1980">1980</option>
                  <option value="1979">1979</option>
                  <option value="1978">1978</option>
                  <option value="1977">1977</option>
                  <option value="1976">1976</option>
                  <option value="1975">1975</option>
                  <option value="1974">1974</option>
                  <option value="1973">1973</option>
                  <option value="1972">1972</option>
                  <option value="1971">1971</option>
                  <option value="1970">1970</option>
                  <option value="1969">1969</option>
                  <option value="1968">1968</option>
                  <option value="1967">1967</option>
                  <option value="1966">1966</option>
                  <option value="1965">1965</option>
                  <option value="1964">1964</option>
                  <option value="1963">1963</option>
                  <option value="1962">1962</option>
                  <option value="1961">1961</option>
                  <option value="1960">1960</option>
                </select>
              </div>
            </div>
            <div class="form__radio">
              <div class="form__radio__title">
                <span>
                  Gênero
                  <Icon
                    name="question"
                    color="#606770"
                    :size="13"
                    style="margin-left: 5px"
                  />
                </span>
              </div>
              <div class="form__radio__content">
                <label for="feminino" class="form__radio__content__label">
                  Feminino
                  <input
                    type="radio"
                    value="feminino"
                    name="genero"
                    v-model="cadastro.genero"
                  />
                </label>
                <label for="masculino" class="form__radio__content__label">
                  Masculino
                  <input
                    type="radio"
                    value="masculino"
                    name="genero"
                    v-model="cadastro.genero"
                  />
                </label>
                <label for="personalizado" class="form__radio__content__label">
                  Personalizado
                  <input
                    type="radio"
                    value="personalizado"
                    name="genero"
                    v-model="cadastro.genero"
                  />
                </label>
              </div>
            </div>
            <span class="form__span"
              >Ao clicar em Cadastre-se, você concorda com nossos
              <a href="#" class="form__span__anchor"
                >Termos, Política de Dados</a
              >
              e <a href="#" class="form__span__anchor">Política de Cookies</a>.
              Você pode receber notificações por SMS e pode cancelar isso quando
              quiser.</span
            >
            <button class="form__button">Cadastre-se</button>
          </form>
        </div>
      </Modal>
    </div>
    <div class="footer">
      <div class="footer__content content">
        <ul class="footer__content__languages">
          <li><a>Português (Brasil)</a></li>
          <li><a>English (US)</a></li>
          <li><a>Español</a></li>
          <li><a>Français (France)</a></li>
          <li><a>Italiano</a></li>
          <li><a>العربية </a></li>
          <li><a>Deutsch</a></li>
          <li><a>हिन्दी</a></li>
          <li><a>中文(简体)</a></li>
          <li><a>日本語</a></li>
        </ul>
        <ul class="footer__content__options">
          <li><a>Cadastre-se</a></li>
          <li><a>Entrar</a></li>
          <li><a>Messenger</a></li>
          <li><a>Facebook Lite</a></li>
          <li><a>Watch</a></li>
          <li><a>Pessoas</a></li>
          <li><a>Páginas</a></li>
          <li><a>Categorias de Página</a></li>
          <li><a>Locais</a></li>
          <li><a>Jogos</a></li>
          <li><a>Locais</a></li>
          <li><a>Marketplace</a></li>
          <li><a>Facebook Pay</a></li>
          <li><a>Grupos</a></li>
          <li><a>Vagas de emprego</a></li>
          <li><a>Oculus</a></li>
          <li><a>Portal</a></li>
          <li><a>Instagram</a></li>
          <li><a>Local</a></li>
          <li><a>Campanhas de arrecadação de fundos</a></li>
          <li><a>Serviços</a></li>
          <li><a>Central de Informações de Votação</a></li>
          <li><a>Sobre</a></li>
          <li><a>Criar anúncio</a></li>
          <li><a>Criar Página</a></li>
          <li><a>Desenvolvedores</a></li>
          <li><a>Carreiras</a></li>
          <li><a>Privacidade</a></li>
          <li><a>Cookies</a></li>
          <li><a>Escolhas para anúncios</a></li>
          <li><a>Termos</a></li>
          <li><a>Ajuda</a></li>
          <li><a>Configurações</a></li>
        </ul>
        <p class="footer__content__copy">Facebook © 2021</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Modal from "@/components/common/Modal";
import Icon from "@/components/common/Icon";

export default {
  data() {
    return {
      email: "",
      password: "",
      cadastro: {
        nome: "",
        sobrenome: "",
        email: "",
        password: "",
        confirmationPassword: "",
        dia: "0",
        mes: "0",
        ano: "0",
        genero: "",
      },
      modal: false,
    };
  },
  components: {
    Modal,
    Icon,
  },
  methods: {
    async submit(e) {
      e.preventDefault();
      try {
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
      } catch (e) {
        this.$notify({
          group: "foo",
          title: "Erro",
          text: "Algo deu errado :(",
        });
      }
    },
    async createUser(e) {
      e.preventDefault();
      const {
        dia,
        mes,
        ano,
        nome,
        sobrenome,
        email,
        password,
        genero,
      } = this.cadastro;
      const { data } = await axios.post("http://localhost:3000/users", {
        nome,
        sobrenome,
        email,
        date: this.formatDate(dia, mes, ano),
        password,
        genero,
      });
      this.modal = false;

      this.cadastro.nome = "";
      this.cadastro.sobrenome = "";
      this.cadastro.email = "";
      this.cadastro.dia = "0";
      this.cadastro.mes = "0";
      this.cadastro.ano = "0";
      this.cadastro.password = "";
      this.cadastro.confirmationPassword = "";
    },
    formatDate(dia, mes, ano) {
      mes = mes - 1;
      return new Date(ano, mes, dia).toLocaleString("pt-br").split(" ")[0];
    },
  },
};
</script>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #f0f2f5;
  height: 100%;
  align-items: center;
  .login {
    display: flex;
    width: 75%;
    margin: 72px auto 112px;
    min-height: 535px;
    align-items: center;
    &__initial {
      display: flex;
      flex-direction: column;
      width: 60%;
      margin-bottom: 80px;
      &__logo {
        width: 300px;
      }
      &__paragrafo {
        font-size: 28px;
        padding-left: 30px;
        margin-right: 55px;
        line-height: 32px;
      }
    }
    &__secondary {
      &__form {
        display: flex;
        flex-direction: column;
        background: #fff;
        width: 396px;
        border-radius: 10px;
        padding: 20px;
        height: 345px;
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
          transition: background-color 300ms;
          outline: 0;
          &:hover {
            background: #1365cf;
          }
        }
        &__container {
          width: 100%;
          display: flex;
          justify-content: center;
          border-bottom: 1px solid #ccc;
          padding: 15px;
          &__senha {
            text-decoration: none;
            color: #1877f2;
            font-size: 15px;
            &:hover {
              text-decoration: underline;
            }
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
          transition: 400ms;
          &:hover {
            background: #379e23;
          }
        }
      }
      &__page {
        padding-top: 30px;
        font-size: 14px;
        display: flex;
        justify-content: center;
        a {
          text-decoration: none;
          font-weight: 600;
          color: #000;
          margin-right: 5px;
          padding-bottom: 0;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    .modal {
      display: flex;
      flex-direction: column;
      .header {
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #dadde1;
        padding: 15px;
        &__cadastre {
          display: flex;
          align-items: center;
          justify-content: space-between;
          h1 {
            margin: 0;
          }
        }
        span {
          color: #656d79;
          line-height: 20px;
          font-size: 15px;
        }
      }
      .form {
        display: flex;
        flex-wrap: wrap;
        padding: 15px;
        justify-content: center;
        &__input {
          padding: 10px;
          border-radius: 5px;
          outline: 0;
          border: 1px solid #ccc;
          margin-bottom: 10px;
          width: 44.5%;
          &:nth-child(1) {
            margin-right: 5px;
            width: calc(44.5% - 5px);
          }
          &:nth-child(3) {
            width: 100%;
          }
          &:nth-child(4) {
            margin-right: 5px;
            width: calc(44.5% - 5px);
          }
        }
        &__birthday {
          display: flex;
          flex-direction: column;
          width: 100%;
          &__title {
            width: 100%;
            font-size: 12px;
            color: #656d79;
            line-height: 25px;
            span {
              display: flex;
              align-items: center;
            }
          }
          &__content {
            display: flex;
            width: 100%;
          }
        }
        &__radio {
          display: flex;
          flex-direction: column;
          width: 100%;
          &__title {
            width: 100%;
            font-size: 12px;
            color: #656d79;
            line-height: 25px;
            span {
              display: flex;
              align-items: center;
            }
          }
          &__content {
            display: flex;
            width: 100%;
            &__label {
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 15px;
              width: 28.3%;
              color: rgb(31, 30, 30);
              border: 1px solid #ccc;
              padding: 8px 10px;
              margin-right: 10px;
              border-radius: 5px;
              &:last-child {
                margin: 0;
                width: 34%;
              }
            }
          }
        }
        &__span {
          font-size: 11px;
          line-height: 15px;
          color: #7e8794;
          margin-top: 10px;
          &__anchor {
            text-decoration: none;
            color: #1877f2;
          }
        }
        &__birthday {
          width: 100%;
          display: flex;
          select:last-child {
            margin-left: 5px;
          }
        }
        &__button {
          background: #00a400;
          padding: 8px;
          color: #fff;
          width: 200px;
          border: 0;
          border-radius: 5px;
          font-weight: bold;
          font-size: 18px;
          cursor: pointer;
          margin-top: 20px;
          &:hover {
            color: #ccc;
          }
        }
      }
    }
  }
  .footer {
    width: 100%;
    background: #fff;
    padding: 25px 0;
    min-height: 225px;
    &__content {
      &__languages {
        display: flex;
        list-style: none;
        border-bottom: 1px solid rgba(180, 176, 178, 0.4);
        padding-bottom: 10px;
        li {
          margin-right: 20px;
          a {
            color: #998d91;
            font-size: 12px;
          }
        }
      }
      &__options {
        display: flex;
        list-style: none;
        flex-wrap: wrap;
        padding-top: 10px;
        li {
          margin-right: 20px;
          a {
            color: #998d91;
            font-size: 12px;
          }
        }
      }
      &__copy {
        padding-top: 20px;
        font-size: 11px;
        color: #998d91;
      }
    }
  }
}

@media (min-width: 1905px) {
}

@media (max-width: 1904px) {
  .container {
    .login {
      width: 80%;
      justify-content: center;
      &__initial {
        width: 50%;
      }
      &__form {
        width: 30%;
        min-width: 380px;
      }
    }
  }
}

@media (max-width: 1264px) {
  .container {
    .login {
      justify-content: center;
      &__initial {
        width: 60%;
      }
      &__form {
        width: 40%;
      }
    }
  }
}

@media (max-width: 960px) {
}

@media (max-width: 600px) {
  .login {
    flex-direction: column;
    &__initial {
      width: 100%;
    }
    &__form {
      width: 100%;
    }
  }
}
</style>
