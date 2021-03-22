<template>

  <ul class="applications-list list-unstyled">
    <application-item
        v-for="(applicant, index) in applicantsList"
        :key="applicant.applicantId"
        :applicantData="applicant"
        :isSelected="(selectedId === null && index === 0) || selectedId === applicant.applicantId"
        @click.native="selectApplicant(applicant)"
    />
  </ul>
</template>

<script>
import ApplicationItem from "@/components/ApplicationItem";
export default {
  name: 'ApplicationsList',
  components: {ApplicationItem},
  props:["applicantsList", "selectedId"],
  methods: {
    selectApplicant(applicantId) {
      this.$emit('selectApplicant', applicantId);
    }
  }
}
</script>

<style scoped lang="scss">
.applications-list {
  flex: 0 0 370px;
  width: 370px;
}
</style>
