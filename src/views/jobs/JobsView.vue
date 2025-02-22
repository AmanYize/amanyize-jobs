<template>
  <div class="jobs-container">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Find Your Dream Job</h1>
        <p>
          Explore thousands of opportunities tailored just for you. Start your
          career journey today!
        </p>
      </div>
    </section>

    <!-- Loading State -->
    <div v-if="isLoading" class="loading">
      <p>Loading jobs...</p>
      <div class="spinner"></div>
    </div>

    <!-- No Jobs Found -->
    <div v-else-if="jobs.length === 0" class="no-jobs">
      <p>No jobs available at the moment.</p>
    </div>

    <!-- Job List -->
    <div v-else class="job-list">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
      isLoading: true, // Track loading state
    };
  },
  mounted() {
    fetch("https://fakejobs-api.vercel.app/jobs")
      .then((res) => res.json())
      .then((data) => {
        this.jobs = data;
        this.isLoading = false; // Stop loading after data is fetched
      })
      .catch((err) => {
        console.log(err);
        this.isLoading = false; // Stop loading on error
      });
  },
};
</script>

<style scoped>
/* General Styles */
.jobs-container {
  font-family: Arial, sans-serif;
  color: var(--text-color);
  background-color: var(--bg-color);
  padding: 20px;
  text-align: center;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: white;
  padding: 60px 20px;
  border-radius: 10px;
  margin-bottom: 40px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

/* Loading State */
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  color: var(--secondary-text-color);
  font-size: 1.2rem;
}

.spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid var(--primary-color);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin-top: 10px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Job List */
.job-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.job-card {
  background-color: var(--card-bg-color);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  overflow: hidden;
}

.job-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.job-title {
  text-decoration: none;
  color: var(--primary-text-color);
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
  color: var(--secondary-text-color);
}

.job-details {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.job-details p {
  font-size: 0.9rem;
  color: var(--secondary-text-color);
  margin: 0;
}

.job-details i {
  margin-right: 5px;
  color: var(--primary-color);
}

/* No Jobs Found */
.no-jobs {
  color: var(--secondary-text-color);
  font-size: 1.2rem;
  margin-top: 20px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .hero p {
    font-size: 1rem;
  }

  .job-header h2 {
    font-size: 1.3rem;
  }

  .job-details p {
    font-size: 0.8rem;
  }
}
</style>
