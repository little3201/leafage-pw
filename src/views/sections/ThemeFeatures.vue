<template>
  <base-section id="theme-features">
    <base-section-heading title="Theme Features">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, in! Asperiores, impedit libero. Veniam rerum saepe unde nihil possimus quibusdam esse accusamus mollitia magni fuga.
    </base-section-heading>

    <v-container>
      <v-row>
        <v-col
          v-for="(feature, i) in features"
          :key="i"
          cols="12"
          md="6"
        >
          <base-avatar-card
            v-bind="feature"
            align="left"
            horizontal
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum veniam cum dolores ratione commodi beatae quas maxime, laboriosam excepturi solut!
          </base-avatar-card>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
export default {
  name: 'SectionThemeFeatures',

  data: () => ({
    features: [
      {
        title: 'Pixel Perfect Design',
        icon: 'mdi-fountain-pen-tip'
      },
      {
        title: 'Retina Ready',
        icon: 'mdi-cellphone'
      },
      {
        color: 'primary',
        dark: true,
        title: 'Easily Customizable',
        icon: 'mdi-pencil-box-outline'
      },
      {
        title: 'Image Parallax',
        icon: 'mdi-image-size-select-actual'
      },
      {
        title: 'Seo Optimized',
        icon: 'mdi-ice-pop'
      },
      {
        title: '24/7 Support',
        icon: 'mdi-help-circle-outline'
      }
    ]
  })
}
</script>
