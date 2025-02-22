<template>
  <div class="about">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>About Us</h1>
        <p>
          At AmanYize Jobs, we are dedicated to helping professionals find their
          dream jobs and connecting employers with top talent.
        </p>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="mission">
      <h2>Our Mission</h2>
      <p>
        Our mission is to empower individuals by providing them access to
        meaningful career opportunities while helping companies build strong,
        diverse teams.
      </p>
    </section>

    <!-- Team Section -->
    <section class="team">
      <h2>Meet the Team</h2>
      <div class="team-grid">
        <div class="team-member">
          <img src="../assets/amanuel.jpg" alt="Team Member 1" />
          <h3>Amanuel Yizelkal</h3>
          <p>CEO & Founder</p>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="values">
      <h2>Our Core Values</h2>
      <ul class="value-list">
        <li><i class="fas fa-users"></i> Collaboration</li>
        <li><i class="fas fa-lightbulb"></i> Innovation</li>
        <li><i class="fas fa-handshake"></i> Integrity</li>
        <li><i class="fas fa-heart"></i> Passion</li>
      </ul>
    </section>

    <!-- Call to Action -->
    <section class="cta">
      <h2>Join Our Community</h2>
      <p>
        Whether you're a job seeker or an employer, we’re here to help you
        succeed. Let’s grow together!
      </p>
      <router-link to="/jobs" class="btn btn-primary">Get Started</router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutView",
};
</script>

<style scoped>
/* General Styles */
.about {
  font-family: Arial, sans-serif;
  color: var(--text-color);
  background-color: var(--bg-color);
  padding: 20px;
  text-align: center;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
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

/* Mission Section */
.mission {
  margin-bottom: 40px;
}

.mission h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: var(--primary-text-color);
}

.mission p {
  font-size: 1.2rem;
  color: var(--secondary-text-color);
  margin: 0 auto;
  max-width: 600px;
}

/* Team Section */
.team {
  margin-bottom: 40px;
}

.team h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: var(--primary-text-color);
}

.team-grid {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.team-member {
  background-color: var(--card-bg-color);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 20px;
  width: 200px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.team-member:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.team-member img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}

.team-member h3 {
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: var(--primary-text-color);
}

.team-member p {
  font-size: 0.9rem;
  color: var(--secondary-text-color);
}

/* Values Section */
.values {
  margin-bottom: 40px;
}

.values h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: var(--primary-text-color);
}

.value-list {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.value-list li {
  background-color: var(--card-bg-color);
  border: 1px solid var(--border-color);
  border-radius: 5px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  color: var(--primary-text-color);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.value-list li:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.value-list i {
  font-size: 1.2rem;
  color: var(--primary-color);
}

/* Call to Action */
.cta {
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: white;
  padding: 60px 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.cta h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.cta p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.cta .btn {
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.cta .btn:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .hero p {
    font-size: 1rem;
  }

  .mission h2,
  .team h2,
  .values h2,
  .cta h2 {
    font-size: 1.8rem;
  }

  .team-member {
    width: 100%;
  }
}
</style>
