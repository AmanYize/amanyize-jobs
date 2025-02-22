<template>
  <div :class="['app-container']">
    <!-- Navigation Bar -->
    <nav class="navbar">
      <div class="logo">A.Y Jobs</div>

      <!-- Search Bar -->
      <form @submit.prevent="handleSearch" class="search-bar">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search for jobs..."
          class="search-input"
        />
        <button type="submit" class="search-btn">
          <i class="fas fa-search"></i>
        </button>
      </form>

      <!-- Desktop Links -->
      <div class="nav-links">
        <router-link to="/" class="nav-link" active-class="active">
          Home
        </router-link>
        <router-link
          :to="{ name: 'About' }"
          class="nav-link"
          active-class="active"
        >
          About
        </router-link>
        <router-link
          :to="{ name: 'Jobs' }"
          class="nav-link"
          active-class="active"
        >
          Jobs
        </router-link>
      </div>

      <!-- Dark Mode Toggle -->
      <button @click="toggleDarkMode" class="dark-mode-btn">
        <i :class="isDarkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
      </button>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="menu-btn">
        <i class="fas fa-bars"></i>
        <!-- Font Awesome Menu Icon -->
      </button>
    </nav>

    <!-- Mobile Menu -->
    <div
      v-if="isMenuOpen"
      class="mobile-menu animate__animated animate__fadeInDown"
    >
      <router-link
        to="/"
        class="mobile-link"
        active-class="active"
        @click="isMenuOpen = false"
      >
        <i class="fas fa-home"></i> Home
        <!-- Font Awesome Home Icon -->
      </router-link>
      <router-link
        :to="{ name: 'About' }"
        class="mobile-link"
        active-class="active"
        @click="isMenuOpen = false"
      >
        <i class="fas fa-info-circle"></i> About
        <!-- Font Awesome Info Icon -->
      </router-link>
      <router-link
        :to="{ name: 'Jobs' }"
        class="mobile-link"
        active-class="active"
        @click="isMenuOpen = false"
      >
        <i class="fas fa-briefcase"></i> Jobs
        <!-- Font Awesome Briefcase Icon -->
      </router-link>
    </div>

    <!-- Router View -->
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isDarkMode: false, // Track dark mode state
      searchQuery: "", // Store the search query
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle("dark-mode", this.isDarkMode); // Toggle dark mode on <body>
    },
    handleSearch() {
      if (this.searchQuery.trim()) {
        this.$router.push({ name: "Search", query: { q: this.searchQuery } });
      }
    },
  },
};
</script>

<style scoped>
/* Scoped Styles */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg-color);
  padding: 15px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
}

.search-bar {
  display: flex;
  align-items: center;
  gap: 10px;
}

.search-input {
  padding: 8px 12px;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  font-size: 1rem;
  width: 250px;
  transition: border-color 0.3s ease;
}

.search-input:focus {
  border-color: var(--primary-color);
  outline: none;
}

.search-btn {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-btn:hover {
  background-color: var(--hover-bg);
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-link {
  text-decoration: none;
  color: var(--text-color);
  font-size: 1rem;
  transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
  color: var(--primary-color);
  border-bottom: 2px solid var(--primary-color);
}

.menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: var(--text-color);
}

.dark-mode-btn {
  background: none; /* Remove background */
  border: none;
  cursor: pointer;
  font-size: 1.5rem; /* Larger icon size */
  color: var(--text-color);
  transition: color 0.3s ease;
}

.dark-mode-btn:hover {
  color: var(--primary-color); /* Highlight on hover */
}

.mobile-menu {
  display: none;
  flex-direction: column;
  background-color: var(--bg-color);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
}

.mobile-link {
  text-decoration: none;
  color: var(--text-color);
  font-size: 1rem;
  padding: 10px;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
}

.mobile-link:hover,
.mobile-link.active {
  background-color: var(--hover-bg);
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .menu-btn {
    display: block;
  }

  .mobile-menu {
    display: flex;
  }

  .search-bar {
    width: 100%;
    justify-content: center;
  }

  .search-input {
    width: 100%;
  }
}
</style>
