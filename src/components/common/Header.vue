<template>
  <div class="header">
    <div class="header-content">
      <Icon color="#fff" name="facebook-white" :size="23.5" />
      <div class="header-content__search">
        <input type="text" />
        <button>bla</button>
      </div>
      <div class="header-content__profile">
        <Avatar
          :size="40"
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
    &__profile {
      display: flex;
      height: 100%;
    }
    &__profile {
    }
  }
}
</style>