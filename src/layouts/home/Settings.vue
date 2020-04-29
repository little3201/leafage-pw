<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    bottom
    left
    max-width="90%"
    min-width="275"
    offset-x
    offset-y
    origin="top right"
    transition="scale-transition"
  >
    <template v-slot:activator="{ attrs, on }">
      <v-card
        id="settings"
        class="py-2 px-4"
        color="#0000004D"
        dark
        flat
        style="position: fixed; top: 164px; right: -35px;"
        width="100"
        v-bind="attrs"
        v-on="on"
      >
        <v-icon large>
          mdi-cog
        </v-icon>
      </v-card>
    </template>

    <v-card class="py-2">
      <base-title
        align="center"
        title="Theme Colors"
        space="0"
      />

      <v-card-text>
        <v-item-group
          v-model="$vuetify.theme.themes.light.primary"
          class="d-flex justify-center"
        >
          <v-item
            v-for="color in colors"
            :key="color"
            :value="color"
          >
            <template v-slot="{ active, toggle }">
              <base-avatar
                :color="color"
                :outlined="active"
                class="ma-2"
                size="48"
                style="cursor: pointer;"
                @click.stop="toggle"
              />
            </template>
          </v-item>
        </v-item-group>

        <v-divider class="my-6" />

        <base-btn
          block
          href="#"
          class="mb-6"
          color="accent"
          target="_blank"
        >
          Free Download
        </base-btn>

        <base-btn
          :to="{ name: 'Sink' }"
          block
          color="grey darken-1"
          dark
          @click="menu = false"
        >
          View All Components
        </base-btn>

        <v-divider class="my-6" />

        <base-img
          class="mx-auto mb-6"
          src="@/assets/logo.png"
          width="88"
        />

        <div class="text-center">
          <base-btn
            :tile="false"
            :to="{ name: 'Pro' }"
            rounded
            @click="menu = false"
          >
            Go Pro

            <v-icon right>
              mdi-rocket
            </v-icon>
          </base-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  name: 'HomeSettings',

  data () {
    return {
      colors: [
        this.$vuetify.theme.themes.light.primary,
        '#9368e9'
      ],
      menu: false
    }
  }
}
</script>
