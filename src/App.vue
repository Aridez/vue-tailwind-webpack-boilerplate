<template>
  <div :class="{ dark: isDarkModeActive }">
    <div class="flex flex-row h-screen antialiased text-gray-800">
      <Sidebar @toggle-dark-mode="isDarkModeActive = !isDarkModeActive" />
      <Chat />
    </div>
  </div>
</template>

<script>
import Chat from "./components/Chat.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "App",
  data() {
    return {
      isDarkModeActive: false,
    };
  },
  components: {
    Chat,
    Sidebar,
  },
};
</script>