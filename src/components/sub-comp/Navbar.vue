<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <img src="../../assets/logo/logo-full.png" width="112" height="28">
      </router-link>
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item" :class="(isActive == 'Home')? 'is-active':''">
          Home
        </router-link>
        <router-link to="/english" class="navbar-item" :class="(isActive == 'English')? 'is-active':''">
          English Typing
        </router-link>
        <router-link to="/hindi" class="navbar-item" :class="(isActive == 'Hindi')? 'is-active':''">
          Hindi Typing
        </router-link>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a>
          <div class="navbar-dropdown">
            <a class="navbar-item">
              About
            </a>
            <a class="navbar-item">
              Jobs
            </a>
            <a class="navbar-item">
              Contact
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Report an issue
            </a>
          </div>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-success">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
// open bulma navbar in mobile
document.addEventListener("DOMContentLoaded", function() {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  // Check if there are any nav burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function($el) {
      $el.addEventListener("click", function() {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

export default {
  name: "app-navbar",
  data() {
    return {
    };
  },
  methods: {
  },
  mounted: function() {},
  computed: {
    isActive() {
      return this.$route.name;
    }
  }
}
</script>
