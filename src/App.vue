<template>
  <div class="flex flex-row h-screen antialiased text-gray-800">
    <Sidebar />
    <Chat />
  </div>
</template>

<script>
import Chat from "./components/Chat.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "App",
  components: {
    Chat,
    Sidebar,
  },
};
</script>