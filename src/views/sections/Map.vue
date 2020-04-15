<template>
  <base-section
    id="map"
    space="0"
  >
    <iframe
      allowfullscreen
      aria-hidden="false"
      frameborder="0"
      height="500"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214634.84395433197!2d-97.42974387625868!3d32.801023187219684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e6e122dc807ad%3A0xa4af8bf8dd69acbd!2sFort%20Worth%2C%20TX!5e0!3m2!1sen!2sus!4v1584734211438!5m2!1sen!2sus"
      style="border:0; display: block;"
      tabindex="0"
      width="100%"
    />
  </base-section>
</template>

<script>
export default {
  name: 'SectionMap',

  provide: {
    heading: { align: 'center' }
  }
}
</script>
