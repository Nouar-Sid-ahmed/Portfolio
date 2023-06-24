<template>
  <div>
    <select v-model="$i18n.locale">
      <option value="en">
        <img src="/path-to-your-image/en-flag.png" alt="English"> English
      </option>
      <option value="fr">
        <img src="/path-to-your-image/fr-flag.png" alt="Français"> Français
      </option>
    </select>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
  select {
    padding: 10px;
    font-size: 1em;
  border: 1px solid #ccc;
  color: #333;
    background-color: #fff;
    border-radius: 5px;
}

  select option {
    padding: 10px;
}

  select img {
  width: 20px;
  height: auto;
  margin-right: 5px;
}
</style>