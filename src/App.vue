<template>
  <div :class="['app-container', { 'dark-mode': isDarkMode }]">
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
        <button type="submit" class="search-btn" aria-label="Search">
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

      <!-- Right Section -->
      <div class="nav-right">
        <button
          @click="toggleDarkMode"
          class="dark-mode-btn"
          aria-label="Toggle Dark Mode"
        >
          <i :class="isDarkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
        </button>

        <!-- Mobile Menu Button -->
        <button @click="toggleMenu" class="menu-btn" aria-label="Toggle Menu">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <transition name="slide-down">
      <div v-if="isMenuOpen" class="mobile-menu" ref="mobileMenu">
        <router-link
          to="/"
          class="mobile-link"
          active-class="active"
          @click="closeMenu"
        >
          <i class="fas fa-home"></i> Home
        </router-link>
        <router-link
          :to="{ name: 'About' }"
          class="mobile-link"
          active-class="active"
          @click="closeMenu"
        >
          <i class="fas fa-info-circle"></i> About
        </router-link>
        <router-link
          :to="{ name: 'Jobs' }"
          class="mobile-link"
          active-class="active"
          @click="closeMenu"
        >
          <i class="fas fa-briefcase"></i> Jobs
        </router-link>
      </div>
    </transition>

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
      isDarkMode: false,
      searchQuery: "",
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      document.body.style.overflow = this.isMenuOpen ? "hidden" : "auto";
    },
    closeMenu() {
      this.isMenuOpen = false;
      document.body.style.overflow = "auto";
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle("dark-mode", this.isDarkMode);
    },
    handleSearch() {
      if (this.searchQuery.trim()) {
        this.$router.push({ name: "Search", query: { q: this.searchQuery } });
        this.closeMenu();
      }
    },
    handleClickOutside(event) {
      if (
        this.isMenuOpen &&
        !this.$refs.mobileMenu.contains(event.target) &&
        !event.target.closest(".menu-btn")
      ) {
        this.closeMenu();
      }
    },
    handleScroll() {
      if (this.isMenuOpen) {
        this.closeMenu();
      }
    },
  },
};
</script>

<style scoped>
:root {
  --primary-color: #2563eb;
  --hover-bg: rgba(37, 99, 235, 0.1);
  --text-color: #1f2937;
  --bg-color: #ffffff;
  --border-color: #e5e7eb;
}

.dark-mode {
  --text-color: #f3f4f6;
  --bg-color: #1f2937;
  --border-color: #374151;
}

.app-container {
  min-height: 100vh;
  background-color: var(--bg-color);
  transition: background-color 0.3s ease;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg-color);
  padding: 1rem 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  gap: 1.5rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  min-width: 100px;
}

.search-bar {
  flex: 1;
  max-width: 600px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.search-input {
  padding: 0.75rem 1rem;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  font-size: 1rem;
  width: 100%;
  transition: border-color 0.3s ease;
  background-color: transparent;
  color: var(--text-color);
}

.search-input:focus {
  border-color: var(--primary-color);
  outline: none;
}

.search-btn {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.search-btn:hover {
  opacity: 0.9;
}

.nav-links {
  display: flex;
  gap: 2rem;
  margin-left: auto;
}

.nav-link {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
  padding: 0.5rem;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link.active::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--primary-color);
}

.nav-link:hover {
  color: var(--primary-color);
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 1rem;
}

.dark-mode-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
  color: var(--text-color);
  transition: transform 0.3s ease;
  padding: 0.5rem;
}

.dark-mode-btn:hover {
  transform: rotate(15deg);
}

.menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: var(--text-color);
  padding: 0.5rem;
}

.mobile-menu {
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  background-color: var(--bg-color);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 999;
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.mobile-link {
  text-decoration: none;
  color: var(--text-color);
  padding: 1rem;
  border-radius: 6px;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 500;
}

.mobile-link:hover {
  background-color: var(--hover-bg);
}

.mobile-link.active {
  color: var(--primary-color);
  background-color: var(--hover-bg);
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

@media (max-width: 768px) {
  .navbar {
    padding: 1rem;
    flex-wrap: nowrap; /* Changed from wrap */
  }

  .nav-links {
    display: none;
  }

  .menu-btn {
    display: block;
  }

  .search-bar {
    order: 0; /* Changed from 1 */
    width: auto; /* Changed from 100% */
    margin-top: 0; /* Removed margin-top */
    display: flex !important; /* Force display */
    flex: 1; /* Take available space */
    margin-left: 1rem; /* Add spacing */
  }

  .nav-right {
    margin-left: 0.5rem;
  }

  /* Remove this rule completely */
  /* .navbar.active .search-bar {
    display: flex;
  } */
}
@media (max-width: 480px) {
  .search-bar {
    margin-left: 0.5rem;
  }

  .search-input {
    padding: 0.5rem;
    font-size: 0.9rem;
  }

  .search-btn {
    padding: 0.5rem;
  }

  .logo {
    min-width: auto;
  }
}
</style>
