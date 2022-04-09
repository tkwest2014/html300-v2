<template>
  <div class="row">
    <div class="gallery col-md-5">
      <div class="gallery-item" v-for="(img, index) in images" :key="index">
        <!-- We are dynamically binding the data with :src and :alt syntax -->
        <b-img class="img-thumbnail img-fluid" :src="img.url" :alt="img.alt"></b-img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data() {
    return {
      images: [
        { url: require('../assets/images/quebecCity.jpg'), alt: 'img-1'},
        { url:  require('../assets/images/quebecCity1.jpg'), alt: 'img-2' },
        { url: require('../assets/images/quebecCity.jpg'), alt: 'img-1' },
        { url:  require('../assets/images/quebecCity1.jpg'), alt: 'img-2' },
        { url: require('../assets/images/quebecCity.jpg'), alt: 'img-1' },
        { url:  require('../assets/images/quebecCity1.jpg'), alt: 'img-2' }
      ]
    }
  }
}


</script>
