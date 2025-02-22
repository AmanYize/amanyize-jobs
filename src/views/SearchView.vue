<template>
  <div class="search-container">
    <h1>Search Results</h1>
    <p v-if="isLoading">Loading jobs...</p>
    <div v-else-if="jobs.length > 0" class="job-list">
      <div v-for="job in jobs" :key="job.id" class="job-card">
        <router-link
          class="job-title"
          :to="{ name: 'JobDetails', params: { id: job.id } }"
        >
          <div class="job-header">
            <h2>{{ job.title }}</h2>
            <span class="job-salary"
              ><i class="fas fa-dollar-sign"></i> {{ job.salary }}</span
            >
          </div>
          <div class="job-details">
            <p><i class="fas fa-map-marker-alt"></i> {{ job.location }}</p>
            <p><i class="fas fa-building"></i> {{ job.company.name }}</p>
          </div>
        </router-link>
      </div>
    </div>
    <p v-else>No jobs found for "{{ query }}".</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
      isLoading: true,
      query: "",
    };
  },
  watch: {
    "$route.query.q": {
      immediate: true,
      handler(newQuery) {
        this.query = newQuery || "";
        if (this.query) {
          this.fetchJobs();
        } else {
          this.isLoading = false;
        }
      },
    },
  },
  methods: {
    async fetchJobs() {
      this.isLoading = true;
      try {
        const response = await fetch(
          `https://fakejobs-api.vercel.app/jobs?q=${encodeURIComponent(
            this.query
          )}`
        );
        const data = await response.json();

        // Filter jobs based on title, location, or company name
        this.jobs = data.filter((job) => {
          const lowerCaseQuery = this.query.toLowerCase();
          return (
            job.title.toLowerCase().includes(lowerCaseQuery) ||
            job.location.toLowerCase().includes(lowerCaseQuery) ||
            job.company.name.toLowerCase().includes(lowerCaseQuery)
          );
        });
      } catch (err) {
        console.error("Error fetching jobs:", err);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
/* General Styles */
.search-container {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color: var(--bg-color); /* Use global background color */
  color: var(--text-color); /* Use global text color */
  transition: background-color 0.3s ease, color 0.3s ease;
}

h1 {
  font-size: 2rem;
  color: var(--primary-text-color); /* Primary text color */
  margin-bottom: 20px;
}

.job-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.job-card {
  background-color: var(--card-bg-color); /* Card-specific background */
  border: 1px solid var(--border-color); /* Border color */
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.job-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.job-title {
  text-decoration: none;
  color: var(--primary-text-color); /* Primary text color */
  display: block;
  padding: 20px;
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.job-header h2 {
  font-size: 1.5rem;
  margin: 0;
  transition: color 0.3s ease;
}

.job-header .job-salary {
  font-size: 1rem;
  color: var(--secondary-text-color); /* Secondary text color */
}

.job-details {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.job-details p {
  font-size: 0.9rem;
  color: var(--secondary-text-color); /* Secondary text color */
  margin: 0;
}

.job-details i {
  margin-right: 5px;
  color: var(--primary-color); /* Icon color */
}

/* No Results Message */
p {
  color: var(--secondary-text-color); /* Secondary text color */
  font-size: 1.2rem;
  margin-top: 20px;
}
</style>
