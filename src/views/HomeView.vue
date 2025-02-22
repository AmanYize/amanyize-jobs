<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 120, damping: 10 },
          }"
          class="hero-title"
        >
          Find Your Dream Job
        </h1>
        <p
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.3,
              type: 'spring',
              stiffness: 80,
              damping: 15,
            },
          }"
          class="hero-subtitle"
        >
          Explore thousands of opportunities tailored just for you.
        </p>
        <router-link to="/jobs" class="btn btn-primary"
          >Explore Jobs</router-link
        >
      </div>
      <div class="hero-image">
        <img src="../assets/hero.png" alt="Job Search Illustration" />
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <h2
        v-motion
        :initial="{ opacity: 0, scale: 0.9 }"
        :enter="{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.6, ease: 'easeInOut' },
        }"
        class="section-title"
      >
        Why Choose Us?
      </h2>
      <div class="feature-grid">
        <div
          v-for="(feature, index) in features"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.3 + index * 0.2,
              type: 'spring',
              stiffness: 100,
              damping: 15,
            },
          }"
          class="feature-card"
        >
          <i :class="feature.icon"></i>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials">
      <h2
        v-motion
        :initial="{ opacity: 0, scale: 0.9 }"
        :enter="{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.6, ease: 'easeInOut' },
        }"
        class="section-title"
      >
        What Our Users Say
      </h2>
      <div class="testimonial-slider">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :enter="{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.3 + index * 0.2,
              type: 'spring',
              stiffness: 120,
              damping: 15,
            },
          }"
          class="testimonial-card"
        >
          <p>{{ testimonial.quote }}</p>
          <p class="author">{{ testimonial.author }}</p>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta">
      <h2
        v-motion
        :initial="{ opacity: 0, scale: 0.9 }"
        :enter="{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.6, ease: 'easeInOut' },
        }"
        class="cta-title"
      >
        Ready to Take the Next Step?
      </h2>
      <p
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.3,
            type: 'spring',
            stiffness: 80,
            damping: 15,
          },
        }"
        class="cta-subtitle"
      >
        Join thousands of professionals finding their dream jobs today.
      </p>
      <router-link to="/jobs" class="btn btn-secondary"
        >Get Started</router-link
      >
    </section>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "HomeView",
  setup() {
    const features = ref([
      {
        icon: "fas fa-briefcase",
        title: "Wide Range of Jobs",
        description:
          "From entry-level to executive positions, we have opportunities for everyone.",
      },
      {
        icon: "fas fa-user-check",
        title: "Trusted by Employers",
        description:
          "Connect with top companies and trusted employers from around the world.",
      },
      {
        icon: "fas fa-handshake",
        title: "Personalized Support",
        description:
          "Get personalized career advice and support to help you succeed.",
      },
    ]);

    const testimonials = ref([
      {
        quote:
          "I found my dream job in just a few days! The platform is easy to use and very intuitive.",
        author: "- Jane Doe, Software Engineer",
      },
      {
        quote:
          "AmanYize Jobs helped me land a position at a top company. Highly recommend!",
        author: "- John Smith, Marketing Specialist",
      },
    ]);

    return {
      features,
      testimonials,
    };
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
.home {
  font-family: "Inter", Arial, sans-serif;
  color: var(--text-color);
  background-color: var(--bg-color);
  padding: 40px 20px;
  text-align: center;
}

/* Hero Section */
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, var(--primary-color), #2575fc);
  color: white;
  padding: 60px 20px;
  border-radius: 15px;
  margin-bottom: 60px;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  z-index: -1;
}

.hero-content {
  max-width: 50%;
  text-align: left;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 15px;
  letter-spacing: -0.02em;
  color: white;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.9);
}

.hero .btn {
  padding: 15px 30px;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 8px;
  background-color: white;
  color: var(--primary-color);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: none;
}

.hero .btn:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.hero-image img {
  max-width: 50%;
  height: auto;
  border-radius: 15px;
}

/* Features Section */
.features {
  margin-bottom: 80px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 40px;
  color: var(--text-color);
}

.feature-grid {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.feature-card {
  background-color: var(--card-bg-color);
  border: 1px solid var(--border-color);
  border-radius: 15px;
  padding: 30px;
  width: 350px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.feature-card i {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 15px;
}

.feature-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--text-color);
}

.feature-card p {
  font-size: 1rem;
  font-weight: 400;
  color: var(--secondary-text-color);
}

/* Testimonials Section */
.testimonials {
  margin-bottom: 80px;
}

.testimonial-slider {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.testimonial-card {
  background-color: var(--card-bg-color);
  border: 1px solid var(--border-color);
  border-radius: 15px;
  padding: 30px;
  width: 350px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}

.testimonial-card p {
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--text-color);
  margin-bottom: 15px;
}

.testimonial-card .author {
  font-size: 1rem;
  font-style: italic;
  color: var(--primary-color);
}

/* Call to Action */
.cta {
  background: linear-gradient(135deg, var(--primary-color), #feb47b);
  color: white;
  padding: 80px 20px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.cta-subtitle {
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.9);
}

.cta .btn {
  padding: 15px 30px;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 8px;
  background-color: white;
  color: var(--primary-color);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: none;
}

.cta .btn:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
  }

  .hero-content {
    max-width: 100%;
    margin-bottom: 20px;
  }

  .hero-image img {
    max-width: 100%;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .section-title,
  .cta-title {
    font-size: 2rem;
  }

  .feature-card,
  .testimonial-card {
    width: 100%;
  }
}
</style>
