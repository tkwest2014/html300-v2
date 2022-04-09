<template>
  <div class="gallery">
    <div class="gallery-item" v-for="(img, index) in images" :key="index">

      <!-- We are dynamically binding the data with :src and :alt syntax -->
      <img :src="img.url" :alt="img.alt">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data() {
    return {
      images: [
        { url: require('../images/quebecCity.jpg'), alt: 'img-1' },
        { url:  require('../images/quebecCity1.jpg'), alt: 'img-2' },
        { url: require('../images/quebecCity.jpg'), alt: 'img-1' },
        { url:  require('../images/quebecCity1.jpg'), alt: 'img-2' },
        { url: require('../images/quebecCity.jpg'), alt: 'img-1' },
        { url:  require('../images/quebecCity1.jpg'), alt: 'img-2' }
      ]
    }
  }
}
</script>
