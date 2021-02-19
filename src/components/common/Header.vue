<template>
  <div class="header">
    <div class="header__content">
      <div class="header__content__main">
        <Icon name="facebook" :size="40" viewbox="0 0 36 36" />
        <div class="header__content__main__search">
          <input
            type="text"
            placeholder="Pesquisar no Facebook"
            class="header__content__main__search__textfield"
          />
        </div>
      </div>

      <div class="header__content__menu">
        <ul class="header__content__menu__list">
          <li class="active">
            <router-link to="/timeline">
              <Icon
                name="home"
                color="#999B9F"
                :size="28"
                viewbox="0 0 28 28"
              />
            </router-link>
          </li>
          <li>
            <router-link to="/watch">
              <Icon
                name="watch"
                color="#999B9F"
                :size="28"
                viewbox="0 0 28 28"
              />
            </router-link>
          </li>
          <li>
            <router-link to="">
              <Icon
                name="market"
                color="#999B9F"
                :size="28"
                viewbox="0 0 28 28"
              />
            </router-link>
          </li>
          <li>
            <router-link to="">
              <Icon
                name="groups"
                color="#999B9F"
                :size="28"
                viewbox="0 0 28 28"
              />
            </router-link>
          </li>
          <li>
            <a>
              <Icon
                name="games"
                color="#999B9F"
                :size="28"
                viewbox="0 0 28 28"
              />
            </a>
          </li>
        </ul>
      </div>

      <div class="header__content__social">
        <div class="header__content__social__profile">
          <Avatar
            :size="28"
            img="https://avatars2.githubusercontent.com/u/59808416?s=460&u=58981469d609584af2a665aa29ed021677e63387&v=4"
          />
          <span class="header__content__social__profile__name">Amanda</span>
        </div>
        <ul class="header__content__social__list">
          <li>
            <Icon name="mais" color="#E7E9ED" :size="16" />
          </li>
          <li>
            <Icon
              name="mesenger"
              color="#E7E9ED"
              :size="20"
              viewbox="0 0 28 28"
            />
          </li>
          <li>
            <Icon name="bell" color="#E7E9ED" :size="20" viewbox="0 0 28 28" />
          </li>
          <li>
            <Icon
              name="arrow"
              color="#E7E9ED"
              :size="12"
              viewbox="0 0 123.959 123.958"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/common/Icon";
import Avatar from "@/components/common/Avatar";
export default {
  data: () => ({}),
  components: {
    Icon,
    Avatar,
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
.active {
  border-bottom: 4px solid #2d88ff !important;
  &:hover {
    border-radius: 0 !important;
    background: transparent !important;
  }
}
.header {
  height: 56px;
  background: #242526;
  border-bottom: 1px solid #ccc;
  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    margin: 0 16px;
    &__main {
      display: flex;
      align-items: center;
      height: 100%;
      // width: 320px;
      &__search {
        display: flex;
        margin-left: 10px;
        padding: 0 10px 0;
        background: url("../../assets/search.svg") no-repeat,
          rgba(255, 255, 255, 0.1);
        background-size: 17px;
        border-radius: 25px;
        width: 240px;
        background-position: 13px 12px;
        &__textfield {
          padding: 12px 12px 12px 30px;
          outline: 0;
          border: 0;
          width: 240px;
          font-size: 15px;
          color: #868a8d;
          background: transparent;
          &::placeholder {
            font-size: 15px;
            color: #868a8d;
          }
        }
      }
    }
    &__menu {
      height: 100%;
      &__list {
        height: 100%;
        list-style: none;
        display: flex;
        align-items: center;
        padding: 4px 0;
        li {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 112px;
          cursor: pointer;
          margin-right: 10px;
          border-bottom: 4px solid transparent;
          &:hover {
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.1);
          }
        }
      }
    }
    &__social {
      display: flex;
      align-items: center;
      height: 100%;
      &__profile {
        display: flex;
        align-items: center;
        height: 36px;
        cursor: pointer;
        margin-right: 10px;
        padding: 5px 10px 5px 5px;
        border-radius: 25px;
        &__name {
          font-weight: 700;
          font-size: 14px;
          color: #e7e9ed;
          padding-left: 8px;
        }
        &:hover {
          background: rgba(255, 255, 255, 0.1);
        }
      }
      &__list {
        display: flex;
        list-style: none;
        align-items: center;
        height: 100%;
        li {
          border-radius: 50%;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          background: rgba(255, 255, 255, 0.1);
          margin-right: 10px;
          cursor: pointer;
          &:hover {
            background: rgba(255, 255, 255, 0.2);
          }
        }
      }
    }
  }
}
</style>
