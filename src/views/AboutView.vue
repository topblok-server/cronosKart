<template>
  <v-col align="center" justify="center">
    <v-col id="titleTextContainer" align="center" justify="center">
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">About cronosKart</h1>
    </v-col>

    <div id="innercontainer">
      <p class="text-gray-500 dark:text-gray-400">cronosKart is a highly anticipated racing game series that has already gained a massive following among gamers worldwide. Developed by a renowned video game studio, the series promises to deliver a thrilling and fast-paced gameplay experience that will captivate players of all ages. Fans are eagerly awaiting the release of the game, which is expected to become a hit due to its intuitive controls, challenging courses, and competitive multiplayer modes.</p>
      <div class="inline-flex items-center justify-center w-full">
          <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700">
          <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-700 dark:text-gray-300" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
          </div>
      </div>
      <p class="text-gray-500 dark:text-gray-400">The franchise is set to debut soon, and fans are counting down the days until they can get their hands on it. With innovative gameplay elements such as gravity-defying courses, customizable karts, and an expanded roster of power-ups, cronosKart is sure to impress players and exceed their expectations. Additionally, the game's vibrant and colorful visuals, catchy soundtracks, and game designs are expected to contribute to its lasting appeal. Whether you're a long-time fan or a newcomer to the series, cronosKart is sure to provide an exhilarating racing experience that will keep you coming back for more.</p>
    </div>
    <div id="accordianContainer">
      <v-row justify="center">
        <v-expansion-panels popout>
          <v-expansion-panel>
            <v-expansion-panel-header>When will cronosKart be released?</v-expansion-panel-header>
              <v-expansion-panel-content>
                The exact release date for cronosKart has not been announced yet, but it is expected to be released soon. Stay tuned for updates!
              </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>Can players customize their karts in cronosKart?</v-expansion-panel-header>
              <v-expansion-panel-content>
                Yes, players can customize their karts in cronosKart with various parts, colors, and decals, allowing them to personalize their ride and stand out on the track.
              </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>Can players race on custom tracks in cronosKart?</v-expansion-panel-header>
              <v-expansion-panel-content>
                Unfortunately, there won't be an option to create custom tracks in cronosKart, but the game will feature a variety of tracks for players to race on.
              </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>How many base karts will be available in cronosKart?</v-expansion-panel-header>
              <v-expansion-panel-content>
                There will be three base karts available in cronosKart at launch, including a Go Kart, an Indy Kart, and a Formula 1 Kart. Additionally, the developers have hinted at the possibility of adding more karts to the game in the future. Stay tuned for updates on new content coming soon.
              </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </div>

  </v-col>
</template>

<script>
export default {
  name: "About",

}
</script>

<style>
#innercontainer{
  width: 50%;
}
#titleTextContainer{
  margin-bottom: 2.5%;
}
#accordianContainer{
  width: 50%;
  margin: 5%;
}
</style>
