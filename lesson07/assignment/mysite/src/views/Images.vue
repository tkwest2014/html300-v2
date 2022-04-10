<template>
<!-- Create Photo Gallary using V-For and an Array -->
    <div class="gallery row">
      <div class="gallery-item col-4" v-for="(img, index) in images" :key="index">
        <b-img class="img-thumbnail img-fluid" :src="img.url" :alt="img.alt"></b-img>
      </div>
    </div>
</template>

<script>

//Create Gallary Array
export default {
  name: 'Gallery',
  data() {
    return {
      images: [
        { url: require('../assets/images/quebecCity.jpg'), alt: 'img-1'},
        { url: require('../assets/images/quebecCity.jpg'), alt: 'img-1'},
        { url: require('../assets/images/quebecCity.jpg'), alt: 'img-1' },
        { url: require('../assets/images/quebecCity.jpg'), alt: 'img-1'},
        { url: require('../assets/images/quebecCity.jpg'), alt: 'img-1' },
        { url: require('../assets/images/quebecCity.jpg'), alt: 'img-1'}
      ]
    }
  }
}

</script>
