<template>
  <div class="header">
    <div class="header-content">
      <Icon color="#fff" name="facebook-white" :size="23.5" />
      <div class="header-content__search">
        <input
          type="text"
          placeholder="Pesquisar"
          class="header-content__search__buscar"
        />
        <button class="header-content__search__button">bla</button>
      </div>
      <div class="header-content__profile">
        <Avatar
          :size="25"
          img="https://avatars2.githubusercontent.com/u/59808416?s=460&u=58981469d609584af2a665aa29ed021677e63387&v=4"
        />
        <span class="header-content__profile__name">Amanda</span>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/common/Icon";
import Avatar from "@/components/common/Avatar";
export default {
  components: {
    Icon,
    Avatar,
  },
};
</script>

<style lang="scss">
.header {
  height: 42px;
  background: #4267b2;
  .header-content {
    display: flex;
    align-items: center;
    height: 100%;
    width: 65%;
    margin: 0 17.5%;
    &__search {
      display: flex;
      &__buscar {
        margin-left: 7px;
        outline: 0;
        padding: 4.5px;
        border-top-left-radius: 2px;
        border-bottom-left-radius: 2px;
        border: 0;
        width: 400px;
      }
      &__button {
        border: 0;
        width: 45px;
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;
      }
    }
    &__profile {
      display: flex;
      align-items: center;
      height: 100%;
      padding-left: 100px;
      cursor: pointer;
      &__name {
        font-weight: 700;
        font-size: 12px;
        color: #fff;
        padding-left: 8px;
      }
    }
  }
}
</style>