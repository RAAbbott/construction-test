<template>
  <div id="app" class="bg-gray-100 font-secondary">
    <Layout>
      <router-view />
    </Layout>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>