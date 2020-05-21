<template>
  <!-- <base-section
    id="features"
    class="secondary"
  >
    <v-responsive
      class="mx-auto"
      max-width="1350"
    >
      <v-container fluid>
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card.title"
            cols="12"
            sm="4"
            md="3"
          >
            <base-info-card
              align="center"
              dark
              v-bind="card"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </base-section> -->
  <section
    id="features"
    class="grey lighten-3"
  >
    <div class="py-12"></div>

    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">VUETIFY FEATURES</h2>

      <v-responsive
        class="mx-auto mb-12"
        width="56"
      >
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-row>
        <v-col
          v-for="({ icon, title, text }, i) in features"
          :key="i"
          cols="12"
          md="4"
        >
          <v-card
            class="py-12 px-4"
            color="grey lighten-5"
            flat
          >
            <v-theme-provider dark>
              <div>
                <v-avatar
                  color="primary"
                  size="88"
                >
                  <v-icon
                    large
                    v-text="icon"
                  ></v-icon>
                </v-avatar>
              </div>
            </v-theme-provider>

            <v-card-title
              class="justify-center font-weight-black text-uppercase"
              v-text="title"
            ></v-card-title>

            <v-card-text
              class="subtitle-1"
              v-text="text"
            >
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <div class="py-12"></div>
  </section>
</template>

<script>
export default {
  name: 'SectionFeatures',

  data: () => ({
    cards: [
      {
        icon: 'mdi-keyboard-outline',
        title: 'Trendy Design',
        text: 'Efficiently unleash media information without cross-media value. Quickly maximize value timely deliverables schemas.'
      },
      {
        icon: 'mdi-camera-outline',
        title: 'Photography',
        text: 'Efficiently unleash media information without cross-media value. Quickly maximize value timely deliverables schemas.'
      },
      {
        icon: 'mdi-pencil-outline',
        title: 'Brand Making',
        text: 'Efficiently unleash media information without cross-media value. Quickly maximize value timely deliverables schemas.'
      },
      {
        icon: 'mdi-puzzle-outline',
        title: '24/7 Support',
        text: 'Efficiently unleash media information without cross-media value. Quickly maximize value timely deliverables schemas.'
      }
    ],
    features: [
      {
        icon: 'mdi-account-group-outline',
        title: 'Vibrant Community',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam'
      },
      {
        icon: 'mdi-update',
        title: 'Frequent Updates',
        text: 'Sed ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit.'
      },
      {
        icon: 'mdi-shield-outline',
        title: 'Long-term Support',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam'
      }
    ]
  })
}
</script>
