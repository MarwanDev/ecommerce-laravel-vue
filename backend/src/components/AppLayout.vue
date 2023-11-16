<template>
  <div v-if="currentUser.id" class="min-h-full bg-gray-200 flex">
    <!--    Sidebar-->
    <Sidebar :class="{'-ml-[200px]': !sidebarOpened}"/>
    <!--/    Sidebar-->

    <div class="flex-1">
      <!-- <Navbar @toggle-sidebar="toggleSidebar"></Navbar> -->
      <!--      Content-->
      <main class="p-6">
        <router-view></router-view>
      </main>
      <!--      Content-->
    </div>
  </div>
  <div v-else class="min-h-full bg-gray-200 flex items-center justify-center">
    <Spinner />
  </div>
  <Toast />
</template>

<script setup>


</script>

<style scoped>

</style>
