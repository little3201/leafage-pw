<template>
    <v-footer
      padless
    >
      <v-card
        flat
        tile
        class="text-center"
      >
        <v-card-text>
          <v-btn
            class="mx-4"
            icon
          >
            <v-icon size="24px">mdi-home</v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text class="pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          <span>
            Copyright &copy; {{ new Date().getFullYear() }} · 陕ICP备19017836号-1 · Powerd By <strong>布吉岛</strong>
          </span>
        </v-card-text>
      </v-card>
    </v-footer>
</template>
