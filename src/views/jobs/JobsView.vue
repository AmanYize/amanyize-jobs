<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id" class="job">
    <router-link
      class="job-title"
      :to="{ name: 'JobDetails', params: { id: job.id } }"
    >
      <h2>{{ job.title }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    fetch("https://fakejobs-api.vercel.app/jobs")
      .then((res) => res.json())
      .then((data) => (this.jobs = data))
      .catch((err) => console.log(err));
  },
};
</script>

<style>
.job-title {
  text-decoration: none;
}
.job h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
  text-decoration: none;
}
.job h2:hover {
  background: #ddd;
}
</style>
