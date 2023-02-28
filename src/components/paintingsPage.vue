<template>
  <section id="services" class="services">
    <div class="container">
      <heading-title></heading-title>
      <paintings-main></paintings-main>
    </div>
  </section>
</template>

<script>

import paintingsMain from "./childComp/paintingsMain.vue";
import headingTitle from "./childComp/headingTitle.vue";

export default {
  name: "paintingsPage",
  components: {
    paintingsMain,
    headingTitle,
  }
};
</script>
<style>
section {
  padding: 60px 0;
  overflow: hidden;
}

.section-header {
  text-align: center;
  padding-bottom: 40px;
  padding-top: 50px;
}

@media (min-width: 1280px) {
  .section-header p {
    margin: 0 auto;
  }
}

h1,
h3,
h4 {
  color: #444;
}
h1,
h2,
h3 {
  font-family: amiri, serif;
  font-weight: 700;
}
.h1,
h1 {
  font-size: 36px;
}
.h2,
h2 {
  font-size: 30px;
}
.section-header p {
  font-size: 16px;
  color: darkgray;
  line-height: 2em;
}
.h1,
.h2,
.h3,
h1,
h2,
h3 {
  margin-top: 20px;
  margin-bottom: 10px;
}

.services .img {
  border-radius: 8px;
  overflow: hidden;
}

.services .img img {
  transition: 0.6s;
}

.services .details {
  background: lightgray;
  padding: 0.5em;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  text-align: center;
  font-weight: 500;
  margin: 0;
  top: -6px;
}

.services .details h3 {
  color: var(--color-default);
  font-weight: 700;
  font-size: 14px;
  margin: 0px;
  transition: ease-in-out 0.3s;
  font-weight: normal;
}

.services .service-item:hover .details h3 {
  color: var(--color-primary);
}

.services .service-item:hover .details .icon {
  background: var(--color-white);
  border: 2px solid var(--color-primary);
}

.services .service-item:hover .details .icon i {
  color: var(--color-primary);
}

.services .service-item:hover .img img {
  transform: scale(1.2);
}
</style>
