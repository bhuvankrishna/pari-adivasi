
<template>
  <div class="image-container">
    <div class="image-content">
      <div class="image-section">

        <CCarousel controls indicators transition="slide">
          <CCarouselItem>
            <div v-if="isImage" class="main-image" id="image">
              <a href="#"
                ><img
                    :src="`https://beta.ruralindiaonline.org/api${attributesToDisplay.Painting.data.attributes.url}`"
                    :alt="attributesToDisplay.Painting.data.attributes.hash"
                    :title="attributesToDisplay.Painting.data.attributes.hash"
                /></a>
              </div>
          </CCarouselItem>
          <CCarouselItem>
              <div v-if="isImage" class="main-image" id="video">
                <a href="#"
                  ><img
                    :src="`https://img.youtube.com/vi/${attributesToDisplay.VideoID}/0.jpg`"
                    :alt="attributesToDisplay.Painting.data.attributes.hash"
                    :title="attributesToDisplay.Painting.data.attributes.hash"
                /></a>
              </div>
          </CCarouselItem>
        </CCarousel>

        <div v-if="!isImage" class="main-image">
          <a href="#"
            ><img
              src="https://beta.ruralindiaonline.org/api/uploads/003_Alpana_Munda_83cd51d7bd.jpg"
              :alt="attributesToDisplay.Painting.data.attributes.hash"
              :title="attributesToDisplay.Painting.data.attributes.hash"
          /></a>
        </div>
        <div class="slide-image">
          <a href="#"
            ><img
              :src="`https://beta.ruralindiaonline.org/api${attributesToDisplay.Painting.data.attributes.url}`"
              :alt="attributesToDisplay.Painting.data.attributes.hash"
              :title="attributesToDisplay.Painting.data.attributes.hash"
              style=""
          /></a>
          <a href="#"
            >
            <div class="img">
              <i class="bi bi-play-circle"></i>
              <img
                :src="`https://img.youtube.com/vi/${attributesToDisplay.VideoID}/0.jpg`"
                :alt="attributesToDisplay.Painting.data.attributes.hash"
                :title="attributesToDisplay.Painting.data.attributes.hash"
                style=""
              />
            </div>
          </a>
        </div>
      </div>
      <div class="painters-description">
        <ul>
          <li>
            <div class="description">
              <h5><b>Name: </b></h5>
              {{ attributesToDisplay.Name }}
            </div>
          </li>
          <li>
            <div class="description">
              <h5><b>Age: </b></h5>
              {{ attributesToDisplay.Age }}
            </div>
          </li>
          <li>
            <div class="description">
              <h5><b>Class: </b></h5>
              {{ attributesToDisplay.Class }}
            </div>
          </li>
          <li>
            <div class="description">
              <h5><b>School: </b></h5>
              {{ attributesToDisplay.School }}
            </div>
          </li>
          <li>
            <div class="description">
              <h5><b>Block: </b></h5>
              {{ attributesToDisplay.Block }}
            </div>
          </li>
          <li>
            <div class="description">
              <h5><b>District: </b></h5>
              {{ attributesToDisplay.District }}
            </div>
          </li>
          <li>
            <div class="description">
              <h5><b>State: </b></h5>
              {{ attributesToDisplay.State }} Name
            </div>
          </li>
          <li>
            <div class="description">
              <h5><b>Tribe: </b></h5>
              {{ attributesToDisplay.Tribe }}
            </div>
          </li>
          <li>
            <div class="description">
              <h5><b>Medium: </b></h5>
              {{ attributesToDisplay.Medium }}
            </div>
          </li>
          <li>
            <div class="description">
              <h5><b>Date: </b></h5>
              {{ attributesToDisplay.Year }}
            </div>
          </li>
          <li>
            <div class="description">
              <h5><b>Project Teacher: </b></h5>
              {{ attributesToDisplay.ProjectTeacher }}
            </div>
          </li>
          <li>
            <div class="description">{{ attributesToDisplay.Translation }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { CCarousel, CCarouselItem } from '@coreui/bootstrap-vue';

export default {
  name: "detailsPage",
  components: {
    CCarousel,
    CCarouselItem,
  },

  data() {
    return {
      dataToDisplay: [],
      attributesToDisplay: [],
      image: "",
      isImage: null,
    };
  },

  methods: {
    async fetchApiDetails() {
      const id = this.$route.params.id;
      this.isImage = this.$route.query.image;
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

          this.dataToDisplay = this.userData.find(
            (element) => element.id.toString() === id
          );
          this.attributesToDisplay = this.dataToDisplay.attributes;
          this.image = this.attributesToDisplay.Painting;
        });
    },
  },
  created() {
    this.fetchApiDetails();
  },
};
</script>
<style>
.img {
  position: relative;
}

.img i {
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
}

.image-content {
  display: grid;
  grid-template-columns: 53% 45%;
  grid-gap: 2%;
}

.image-container {
  font-size: 14px !important;
  font-family: "Open Sans", sans-serif;
  letter-spacing: 0.03em;
  line-height: 1.6em;
  background-color: white;
}
.image-container .image-section {
  padding: 2.5em;
  width: 100%;
  float: left;
}
.image-container .image-section .main-image img {
  width: 100%;
}
.image-container .image-section .slide-image {
  text-align: center;
  margin-top: 20px;
}
.image-container .image-section .slide-image a > img {
  width: 25%;
}

.painters-description {
  padding: 4.5em;
  border-left: 2px solid darkgray;
}

.painters-description ul {
  display: flex;
  flex-direction: column;
  row-gap: 0.3em;
  text-align: justify;
  padding-left: 0px;
}

.painters-description .description {
  display: inline-flex;
  align-items: baseline;
  column-gap: 0.5em;
  color: Black;
}

h5 {
  font-weight: 700;
  font-size: 14px !important;
  font-family: "Open Sans", sans-serif;
  letter-spacing: 0.03em;
  line-height: 1.5em;
}

.painters-description li:last-child .description {
  display: block;
}
ul {
  padding-left: 0;
  list-style: none;
  margin-top: 0;
  margin-bottom: 10px;
}
ol,
ul {
  margin-top: 0;
  margin-bottom: 10px;
}

li {
  list-style: none;
}
</style>
