<script setup>
import { ref } from "vue";

const isExpended = ref(localStorage.getItem('isExpanded') === 'true');
function toggleMenu() {
  isExpended.value = !isExpended.value;
  localStorage.setItem('isExpanded', isExpended.value)
}
const menus = [
  {
    icon: "dashboard",
    name: "Dashboard",
    route: '/'
  },
  {
    icon: "subject",
    name: "Job",
    route: '/job'
  },
  {
    icon: "groups",
    name: "Employee",
    route: '/employee'
  },
];
</script>
<template>
  <aside :class="`${isExpended && 'is-expended'}`">
    <div class="logo">
      <svg width="94" height="20" viewBox="0 0 94 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M31.6157 20H34.7664L41.8309 11.292L39.8362 20H46.5671L49.9433 5.26132L52.8071 5.26328L49.4314 20H66.3304L67.5077 14.8609H57.3396L57.9609 12.1485H67.8711L68.8522 7.86589H58.9419L59.537 5.26787L72.4241 5.27674L69.0515 20H81.2531C100.847 20 97.4012 -0.623259 70.9085 0.0144921H54.0095H51.1452H44.4143H31.1527H26.8565H24.5154H24.4218H24.2558H1.90275H1.02297L0 5.2323L6.00539 5.23639L2.62348 20H9.35451L12.7353 5.24102L23.2241 5.243L19.8438 20H26.5747L28.5694 11.292L31.6158 20L31.6157 20ZM19.9815 10.4494C19.8995 10.8093 19.0076 14.7321 18.9976 14.7321C18.4468 14.7321 12.8083 14.7341 12.8094 14.7293C13.1396 13.3025 13.4683 11.8755 13.8017 10.4494C13.8022 10.4473 19.9815 10.449 19.9815 10.4494ZM39.8999 5.25439L35.3624 10.5211L33.2504 5.2498L39.8999 5.25439H39.8999ZM78.917 5.90308L76.9597 14.8608C92.3758 15.9643 88.8675 7.02293 78.917 5.90308Z"
          fill="currentColor"></path>
      </svg>
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="toggleMenu">
        <span class="material-icons">keyboard_double_arrow_right</span>
      </button>
    </div>

    <h3>Menu</h3>
    <div class="menu">
      <router-link v-for="(menu, index) in menus" :key="index" :to="menu.route" class="button">
        <span class="material-icons">{{ menu.icon }}</span>
        <span class="text">{{ menu.name }}</span>
      </router-link>
    </div>

    <div class="flex"></div>


  </aside>
</template>
<style lang="scss">
aside {
  display: flex;
  flex-direction: column;
  background: var(--dark);
  color: var(--light);
  width: calc(2rem + 32px);
  min-height: 100vh;
  overflow: hidden;
  padding: 1rem;
  transition: 0.4s ease-out;


  .flex {
    flex: 1 1 0;
  }

  .logo {
    margin-bottom: 1rem;

    img {
      width: 2rem;
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    position: relative;
    top: 0;
    transition: 0.2s ease-out;

    .menu-toggle {
      transition: 0.2s ease-out;

      .material-icons {
        color: var(--light);
        font-size: 1.5rem;
        transition: 0.2s ease-out;
      }

      &:hover {
        .material-icons {
          color: var(--primary);
          transform: translateX(0.5rem);
        }
      }
    }
  }

  h3,
  .button .text {
    opacity: 0;
    transition: 0.3s ease-out;
  }

  h3 {
    color: var(--grey);
    font-size: 0.875rem;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;

      padding: 0.5rem 1rem;
      transition: 0.2s ease-out;

      .material-icons {
        font-size: 1.5rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }

      .text {
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover,
      &.router-link-exact-active {
        background: var(--dark-alt);

        .material-icons,
        .text {
          color: var(--primary);
        }
      }

      &.router-link-exact-active {
        border-right: 5px solid var(--primary);
      }
    }
  }

  &.is-expended {
    width: var(--sidebar-width);

    h3,
    .button .text {
      opacity: 1;
    }

    .button {
      .material-icons {
        margin-right: 1rem;
      }
    }

    .menu-toggle-wrap {
      top: -3rem;

      .menu-toggle {
        transform: rotate(-180deg);
      }
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    z-index: 99;
  }
}</style>
