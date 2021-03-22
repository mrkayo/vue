<template>
  <div class="application-info">
    <div class="application-video">
      <img src="http://placehold.it/500x700" class="img-fluid">
    </div>
    <ApplicantData :applicantInfo="applicantInfo"/>
  </div>
</template>

<script>
import ApplicantData from "@/components/ApplicantData";
export default {
  name: 'ApplicationInfo',
  components: { ApplicantData},
  props:['applicantInfo']
}
</script>

<style scoped lang="scss">
.application-info {
  display: flex;
  padding-left: 100px;

}
.application-video {
  flex: 0 0 415px;
  width: 415px;
}

</style>
