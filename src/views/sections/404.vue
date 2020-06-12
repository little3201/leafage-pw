<template>
  <base-section id="404">
    <base-heading title="404" />

    <base-subheading
      class="primary--text"
      title="Oh!"
    />

    <base-subheading
      space="6"
      title="Looks like this page doesn't exist"
    />

    <base-img
      :src="require('@/assets/logo.png')"
      class="mx-auto mb-4"
      contain
      height="340"
      width="230"
    />

    <div class="text-center">
      <base-btn :to="{ name: 'Home' }">
        Get me Out of Here
      </base-btn>
    </div>
  </base-section>
</template>

<script>
export default {
  name: 'FourOhFour',

  provide: {
    heading: { align: 'center' }
  }
}
</script>
