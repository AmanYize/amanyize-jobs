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
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
/* General Styles */
.job-details-container {
  font-family: "Arial", sans-serif;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.job-card {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: left;
}

.job-title {
  font-size: 2rem;
  color: #333333;
  margin-bottom: 10px;
}

.job-location,
.job-salary {
  font-size: 1.2rem;
  color: #555555;
  margin: 5px 0;
}

.job-description,
.company-info {
  margin-top: 20px;
}

.job-description h2,
.company-info h2 {
  font-size: 1.5rem;
  color: #333333;
  margin-bottom: 10px;
}

.company-info h3 {
  font-size: 1.3rem;
  color: #444444;
  margin-bottom: 5px;
}

.contact-info p {
  font-size: 1rem;
  color: #666666;
  margin: 5px 0;
}

.loading {
  text-align: center;
  font-size: 1.2rem;
  color: #888888;
}

/* Icons */
.fa-map-marker-alt,
.fa-dollar-sign,
.fa-envelope,
.fa-phone {
  margin-right: 10px;
  color: #007bff;
}

/* Responsive Design */
@media (max-width: 768px) {
  .job-title {
    font-size: 1.8rem;
  }

  .job-location,
  .job-salary {
    font-size: 1rem;
  }

  .job-description h2,
  .company-info h2 {
    font-size: 1.3rem;
  }

  .company-info h3 {
    font-size: 1.1rem;
  }
}
</style>
