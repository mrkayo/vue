<template>
  <div class="applications-container">
    <div class="job-title">
      <h3>Job Tittle</h3>
      <p>UI/UX Designer</p>
    </div>
    <div class="applications-wrapper">
      <ApplicationsList
          :applicantsList="allApplicants"
          :selectedId="selectedApplicant"
          @selectApplicant="updateSelected"
      />
      <ApplicationInfo :applicantInfo="selectedApplicantInfo" v-if="selectedApplicantInfo"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import ApplicationsList from "@/components/ApplicationsList";
import ApplicationInfo from "@/components/ApplicationInfo";
export default {
  name: 'Applications',
  data: function () {
    return {
      selectedApplicant: null,
      selectedApplicantInfo: null,
    }
  },
  components: {
    ApplicationInfo,
    ApplicationsList
  },
  methods: {
    ...mapActions(['fetchApplicants']),
    updateSelected(selected) {
      this.selectedApplicant = selected.applicantId;

      this.selectedApplicantInfo = selected;
    }
  },
  computed: mapGetters(['allApplicants']),
  async created() {
    await this.fetchApplicants();
    if (this.allApplicants.length > 0) {
      this.selectedApplicantInfo = this.allApplicants[0];
    }
  }
}
</script>


<style scoped lang="scss">
  .applications-container {
    max-width: 1440px;
    margin: auto;
    padding: 0 45px;
    padding-top: 40px;
    padding-bottom: 70px;
  }
  .applications-wrapper {
    display: flex;

  }
  .job-title {
    padding-left: 30px;
    margin-bottom: 20px;
    h3 {
      margin-bottom: 0;
      font-size: 16px;
      font-weight: bold;
    }
    p {
      font-size: 27px;
      color: #585858;
    }
  }
</style>
