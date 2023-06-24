<template>
  <div>
    <Header />
    <main>
      <div class="container">
        <div class="text-container">
          <h1>{{ $t('name') }}</h1>
          <p>{{ $t('homeDescription') }}</p>
          <p>{{ $t('teachingDescription') }}</p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
.container {
  margin: 0;
  min-width: 100%;
  min-height: 83vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to top, #050508, #000080);
}

.text-container {
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  font-size: 2em;
  margin-bottom: 0.5em;
}

p {
  color: #666;
}
</style>


