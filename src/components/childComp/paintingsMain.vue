<template>
  <div class="paintings-main-content">
    <div v-for="data in userData" :key="data.id" class="paintings-card">
      <div class="paintings-featured-image">
        <a @click="redirect(data.id, true)"
          ><img
            :src="`https://beta.ruralindiaonline.org/api${data.attributes.Painting.data.attributes.url}`"
            class="attachment-medium size-medium wp-post-image"
            alt=""
            width="300"
            height="234"
            decoding="async"
            loading="lazy"
        /></a>
      </div>
      <a @click="redirect(data.id, false)">
        <img
          class="paintings-painter-img"
          :src="`https://beta.ruralindiaonline.org/api${data.attributes.ChildPhoto.data.attributes.url}`"
      /></a>
      <div class="paintings-painter-name">
        <h2 class="entry-title">
          <a
            @click="redirect(data.id, true)"
            :title="data.attributes.Name"
            rel="bookmark"
            >{{ data.attributes.Name }}</a
          >
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "paintingsMain",
  data() {
    return {
      userData: [],
    };
  },
  methods: {
    async fetchApi() {
      const token =
        "e6cac262860592af3ab95de2c732f124f6d0d70c67882ab3864e6a457489cb1ad252fce7848c46f8d775ad03fd3fb9652cfcf989dfb761658af7d97f1de144eeb7f5fb4ab9ec6e5fbc4137d74f14f29fcca90b7cec578ee0b58df9a0147941586e9626b6e007d0710140beed7dd9a2664807fb7077efa3d591b0253424d49f31";
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      await axios
        .get(
          "https://beta.ruralindiaonline.org/api/api/childrens-paintings?populate=Painting,ChildPhoto",
          { headers }
        )
        .then((response) => {
          this.userData = JSON.parse(JSON.stringify(response.data.data));
        });
    },
    redirect(id, value) {
      this.$router.push({
        path: "/en/childrens-paintings/" + id,
        query: {
          image: value,
        },
      });
      console.log(value);
    },
  },
  mounted() {
    this.fetchApi();
  },
};
</script>

<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.paintings-container {
  font-size: 14px !important;
  font-family: "Open Sans", sans-serif;
  letter-spacing: 0.03em;
  line-height: 1.6em;
  background-color: white;
}

h5 {
  font-weight: 700;
  font-size: 14px !important;
  font-family: "Open Sans", sans-serif;
  letter-spacing: 0.03em;
  line-height: 1.5em;
}

.individual-main-content {
  display: grid;
  grid-template-columns: 60% 38%;
  grid-gap: 2%;
}

.painters-image {
  padding: 2.5em;
}

.painters-image .bwg_slideshow_play_pause {
  display: none;
}

.painters-image iframe {
  width: 80%;
}

/* .painters-image img {
    width: 65% !important;
} */

.pagination-links_col1 a:first-of-type,
.pagination-links_col2,
.pagination-links_col3 a:last-child {
  display: none;
}

.painters-description {
  padding: 4.5em;
  border-left: 2px solid darkgray;
}

.painters-description ul {
  display: flex;
  flex-direction: column;
  row-gap: 0.1em;
  text-align: justify;
}

.painters-description .description {
  display: inline-flex;
  align-items: baseline;
  column-gap: 0.5em;
  color: Black;
}

.painters-description li:last-child .description {
  display: block;
}

li {
  list-style: none;
}

/* Paintings Listing Page*/
.paintings-main-content {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
  column-gap: 1em;
  row-gap: 1em;
}

.paintings-card {
  position: relative;
  height: 268px;
}

.paintings-card .paintings-featured-image img {
  height: 235px;
  width: 100%;
  max-height: 235px;
}

.paintings-card .paintings-painter-img {
  position: absolute;
  width: 20%;
  top: 1em;
  right: 1em;
  border: 3px solid white;
}

.paintings-card h2.entry-title {
  background: lightgray;
  padding: 0.5em;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  margin: 0;
}

.paintings-card h2.entry-title a {
  color: black;
}

.paintings-main-header {
  text-align: center;
  display: flex;
  padding: 40px;
  flex-direction: column;
}

.paintings-main-header p {
  font-size: 16px;
  color: darkgray;
  line-height: 2em;
}

.angle-down {
  display: none;
}

@media (max-width: 768px) {
  #bwg_container1_0 #bwg_container2_0 .bwg_image_browser_image_0 {
    max-width: 100% !important;
  }

  #bwg_container1_0 #bwg_container2_0 .image_browser_images_conteiner_0 {
    padding: 0 !important;
  }

  .painters-image {
    max-height: 70vh;
    width: 100%;
  }

  .painters-image img {
    width: 100% !important;
  }

  .painters-image {
    padding: 0 !important;
  }

  .individual-main-content {
    grid-template-rows: auto;
    grid-template-columns: none !important;
  }

  .painters-image iframe {
    width: 100%;
  }

  .angle-down {
    display: inline-block;
    position: relative;
    border-bottom: 1px solid darkgray;
    margin-bottom: -30px;
  }

  .fa.fa-angle-down {
    display: inline-block;
    background: darkgray;
    width: 60px;
    height: 60px;
    font-size: 60px;
    text-align: center;
    border-radius: 30px;
    color: white;
    margin: 0 auto;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: absolute;
  }

  .painters-description {
    border-left: 0;
  }
}
</style>
