<template>
  <li class="application-item" :class="{ active: isSelected }">
    <div class="avatar">
      <img :src="applicantData.avatar" alt="Avatar" class="img-fluid">
    </div>
    <div class="application-data mr-auto">
      <h4>{{ applicantData.applicantName }}</h4>
      <p>{{ applicantData.applicantPosision }}</p>
    </div>
    <span class="flagged" v-if="applicantData.isFlagged">
      <img src="../assets/images/flag-icon.png" alt="flagged" class="img-fluid">
    </span>
  </li>
</template>

<script>
export default {
  name: 'ApplicationItem',
  props: ['applicantData', 'isSelected']
}
</script>

<style scoped lang="scss">
  .application-item {
    margin: 9px 0;
    padding: 1rem 13px 1rem 1rem;
    border-radius: 20px;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    display: flex;
    align-items: center;
    border: 2px solid transparent;
    &.active {
      border: 2px solid #ffdc00;
    }
  }
  .avatar {
    flex: 0 0 58px;
    width: 58px;
    height: 58px;
    img {
      border-radius: 50%;
    }
  }
  .application-data {
    padding-left: 1rem;
    h4 {
      font-size: 16px;
      font-weight: 400;
      color: #000;
      margin-bottom: 5px;
    }
    p {
      margin-bottom: 0;
      font-size: 14px;
      color: #3d3d3d;
    }
  }
  .flagged {
    flex: 0 0 26px;
    width: 26px;
  }
</style>
