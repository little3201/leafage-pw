<template>
  <base-section id="project-features">
    <base-section-heading title="Project Features">
      Hi, thanks for using Abeille, this is a personal open source project, initially to do a personal blog class project, while doing some technical verification testing, hope to be useful to you, if there are problems, please contact me!
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
            {{ feature.description }}
          </base-avatar-card>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
export default {
  name: 'SectionProjectFeatures',

  data: () => ({
    features: [
      {
        title: 'Pixel Perfect Design',
        icon: 'mdi-fountain-pen-tip',
        description: 'Using vuetify.js, that is a beautiful UI'
      },
      {
        title: 'Retina Ready',
        icon: 'mdi-cellphone',
        description: 'Using vuetify.js, that is a beautiful UI'
      },
      {
        color: 'primary',
        dark: true,
        title: 'Easily Customizable',
        icon: 'mdi-pencil-box-outline',
        description: 'Using vuetify.js, that is a beautiful UI'
      },
      {
        title: 'Image Parallax',
        icon: 'mdi-image-size-select-actual',
        description: 'Using vuetify.js, that is a beautiful UI'
      },
      {
        title: 'Seo Optimized',
        icon: 'mdi-ice-pop',
        description: 'Using vuetify.js, that is a beautiful UI'
      },
      {
        title: 'Long Time Support',
        icon: 'mdi-help-circle-outline',
        description: 'Using vuetify.js, that is a beautiful UI'
      }
    ]
  })
}
</script>
