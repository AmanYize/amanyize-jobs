<template>
  <div class="job-details-container">
    <div v-if="title" class="job-card">
      <h1 class="job-title">{{ title }}</h1>
      <p class="job-location">
        <i class="fas fa-map-marker-alt"></i> {{ location }}
      </p>
      <p class="job-salary"><i class="fas fa-dollar-sign"></i> {{ salary }}</p>
      <div class="job-description">
        <h2>Job Description</h2>
        <p>{{ description }}</p>
      </div>
      <div class="company-info">
        <h2>About the Company</h2>
        <h3>{{ company.name }}</h3>
        <p>{{ company.description }}</p>
        <div class="contact-info">
          <p>
            <i class="fas fa-envelope"></i> Email: {{ company.contactEmail }}
          </p>
          <p><i class="fas fa-phone"></i> Phone: {{ company.contactPhone }}</p>
        </div>
      </div>
    </div>
    <div v-else class="loading">
      <p>Loading job details...</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      title: "",
      description: "",
      location: "",
      salary: "",
      company: {
        name: "",
        description: "",
        contactEmail: "",
        contactPhone: "",
      },
      isLoading: true, // Track loading state
    };
  },
  mounted() {
    fetch("https://fakejobs-api.vercel.app/jobs/" + this.id)
      .then((res) => res.json())
      .then((data) => {
        this.title = data.title;
        this.description = data.description;
        this.location = data.location;
        this.salary = data.salary;
        this.company = data.company;
        this.isLoading = false; // Stop loading after data is fetched
      })
      .catch((err) => {
        console.error("Error fetching job details:", err);
        this.isLoading = false; // Stop loading on error
      });
  },
};
</script>
<style scoped>
/* Define Light and Dark Mode Variables */
:root {
  --bg-color: #f9fafb; /* Light background */
  --text-color: #333; /* Dark text */
  --card-bg-color: white; /* White cards */
  --border-color: #e5e7eb; /* Light border */
  --primary-color: #6a11cb; /* Accent color */
  --secondary-text-color: #6b7280; /* Gray text */
  --hover-bg: #f3f4f6; /* Hover background */
}

[data-theme="dark"] {
  --bg-color: #1f2937; /* Dark background */
  --text-color: #ffffff; /* Light text */
  --card-bg-color: #374151; /* Dark cards */
  --border-color: #4b5563; /* Dark border */
  --primary-color: #ff7e5f; /* Warm accent */
  --secondary-text-color: #d1d5db; /* Light gray text */
  --hover-bg: #4b5563; /* Dark hover background */
}

/* General Styles */
.job-details-container {
  font-family: "Inter", Arial, sans-serif;
  color: var(--text-color);
  background-color: var(--bg-color);
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
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

/* Job Card */
.job-card {
  background-color: var(--card-bg-color);
  border: 1px solid var(--border-color);
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  padding: 30px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  overflow: hidden;
}

.job-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

/* Job Title */
.job-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-text-color);
  margin-bottom: 15px;
}

/* Job Location and Salary */
.job-location,
.job-salary {
  font-size: 1.2rem;
  color: var(--secondary-text-color);
  margin: 5px 0;
}

.job-location i,
.job-salary i {
  margin-right: 10px;
  color: var(--primary-color);
}

/* Job Description */
.job-description {
  margin-top: 30px;
}

.job-description h2 {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--primary-text-color);
  margin-bottom: 15px;
}

.job-description p {
  font-size: 1rem;
  color: var(--secondary-text-color);
  line-height: 1.6;
}

/* Company Info */
.company-info {
  margin-top: 30px;
}

.company-info h2 {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--primary-text-color);
  margin-bottom: 15px;
}

.company-info h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary-text-color);
  margin-bottom: 10px;
}

.company-info p {
  font-size: 1rem;
  color: var(--secondary-text-color);
  line-height: 1.6;
}

.contact-info p {
  font-size: 1rem;
  color: var(--secondary-text-color);
  margin: 5px 0;
}

.contact-info i {
  margin-right: 10px;
  color: var(--primary-color);
}

/* Responsive Design */
@media (max-width: 768px) {
  .job-title {
    font-size: 2rem;
  }

  .job-location,
  .job-salary {
    font-size: 1rem;
  }

  .job-description h2,
  .company-info h2 {
    font-size: 1.5rem;
  }

  .company-info h3 {
    font-size: 1.3rem;
  }

  .contact-info p {
    font-size: 0.9rem;
  }
}
</style>
