<template>
  <base-section
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
  </base-section>
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
    ]
  })
}
</script>
