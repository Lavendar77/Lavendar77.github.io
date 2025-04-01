<script setup>
import SvgIcon from '@jamescoyle/vue-icon'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { useProfileStore } from '@/stores/profile'
import { mdiGithub, mdiGoogleDrive, mdiLinkedin, mdiMail, mdiWhatsapp } from '@mdi/js'
import { computed } from 'vue'
import { useProjectStore } from '@/stores/projects'
import { useToolStore } from '@/stores/tools'

const profileStore = useProfileStore()
const projectStore = useProjectStore()
const toolStore = useToolStore()

const age = computed(() => {
  const birthday = new Date('1997-03-31')
  const today = new Date()

  let age = today.getFullYear() - birthday.getFullYear()

  const monthDifference = today.getMonth() - birthday.getMonth()
  const dayDifference = today.getDate() - birthday.getDate()

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--
  }

  return age
})

function getColor(tool) {
  let color = toolStore.tools.filter((tl) => tl.name == tool)

  return color[0]?.color
}
</script>

<template>
  <main>
    <!-- <div class="text-center bg-warning text-white sticky-top small">Hire me, I need a job 🙏</div> -->
    <div class="header">
      <div class="container">
        <!-- <h3 class="salute">Hello 👋</h3> -->
        <h1 class="title">
          <!-- <span class="small" style="font-size: 15px;">I am</span> -->
          <br>
          {{ profileStore.name }}
        </h1>
        <h2 class="subtitle mb-5">
          Full Stack Software Engineer
        </h2>
        <div class="dropdown">
          <button
            class="btn btn-outline-primary shadow-none outline-none dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Explore My Portfolio
          </button>
          <ul class="dropdown-menu">
            <li>
              <a
                class="dropdown-item"
                :href="profileStore.drive"
                target="_blank"
              >
                <svg-icon
                  type="mdi"
                  :path="mdiGoogleDrive"
                /> Résumé
              </a>
            </li>
            <li>
              <a
                class="dropdown-item"
                :href="profileStore.linkedin"
                target="_blank"
              >
                <svg-icon
                  type="mdi"
                  :path="mdiLinkedin"
                /> LinkedIn
              </a>
            </li>
            <li>
              <a
                class="dropdown-item"
                :href="profileStore.github"
                target="_blank"
              >
                <svg-icon
                  type="mdi"
                  :path="mdiGithub"
                /> GitHub
              </a>
            </li>
            <li>
              <a
                class="dropdown-item"
                :href="profileStore.twitter"
                target="_blank"
              >
                &#x1D54F; <small>(Formerly Twitter)</small>
              </a>
            </li>
            <li>
              <a
                class="dropdown-item"
                :href="`mailto:${profileStore.email}`"
                target="_blank"
              >
                <svg-icon
                  type="mdi"
                  :path="mdiMail"
                /> Email
              </a>
            </li>
            <li>
              <a
                class="dropdown-item"
                :href="`https://wa.me/${profileStore.phone}/?text=Hi.`"
                target="_blank"
              >
                <svg-icon
                  type="mdi"
                  :path="mdiWhatsapp"
                /> WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="section">
        <div class="section-header">
          <div class="section-title">
            About Me
          </div>
          <div class="section-subtitle">
            Ade 😊
          </div>
        </div>

        <div class="section-content clearfix">
          <img
            src="/img/adeyinka.jpeg"
            width="160"
            :alt="profileStore.name"
            class="img-fluid img-thumbnail ms-3 float-end"
          >

          <p>
            I am passionate about building software solutions and continually learning within the
            ever-evolving field of software engineering. Coding to me is both an art form and a
            mental exercise, where creativity meets critical thinking. I'm a grounded individual who
            values authenticity and has a knack for solving problems. At {{ age }}, I've come to
            believe that true mastery comes from a deep understanding of oneself, both in terms of
            skills and personality. I bring a mix of optimism, curiosity, and goal-oriented focus to
            my work and passion, and I enjoy engaging in meaningful conversations. Additionally, I
            have a great love for movies, which provides me with endless inspiration on storytelling
            and creativity. By the way, I identify as an INTJ with a Melancholy-Phlegmatic
            temperament, which helps me approach challenges with a unique perspective.
          </p>
        </div>
      </div>

      <div class="section">
        <div class="section-header">
          <div class="section-title">
            My Passion
          </div>
          <div class="section-subtitle">
            What I love to do 👨🏻‍💻
          </div>
        </div>
        <div class="section-content">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card h-100">
                <img
                  src="/img/passion/dev.jpeg"
                  class="card-img-top"
                  alt="web"
                  height="300px"
                >
                <div class="card-body">
                  <h5 class="card-title">
                    Web Development
                  </h5>
                  <p class="card-text">
                    I've spent most of my software development career working on web applications.
                    Laravel is my go-to framework for building efficient web solutions, and Vue.js
                    offers a refreshing approach to crafting dynamic user interfaces.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img
                  src="/img/passion/pm.jpeg"
                  class="card-img-top"
                  alt="project management"
                  height="300px"
                >
                <div class="card-body">
                  <h5 class="card-title">
                    Project Management
                  </h5>
                  <p class="card-text">
                    Managing projects is a skill I take great pride in. I achieved the highest grade
                    (89%) in my undergraduate final year project, which boosted my confidence in my
                    project management abilities.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img
                  src="/img/passion/life.jpeg"
                  class="card-img-top"
                  alt="life"
                  height="300px"
                >
                <div class="card-body">
                  <h5 class="card-title">
                    Nature &amp; Life
                  </h5>
                  <p class="card-text">
                    I cherish the tranquility of a quiet life surrounded by nature, accompanied by
                    soothing music and a pack of snacks while indulging in my favorite films. This
                    combination fuels my imagination and keeps my spirits high.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-header">
          <div class="section-title">
            My Projects
          </div>
          <div class="section-subtitle">
            Work that I have done and collaborated on 😎
          </div>
        </div>
        <div class="section-content">
          <div class="row row-cols-1 row-cols-md-2 g-4">
            <div
              v-for="(project, index) in projectStore.getProjects"
              :key="index"
              class="col"
            >
              <div class="card shadow">
                <img
                  :src="`img/projects/${project.image}.jpg`"
                  :alt="project.name"
                  class="card-img-top rounded-0"
                  lazy
                >

                <div class="card-body">
                  <div class="d-md-flex justify-content-between">
                    <div>
                      <h4 class="mb-0">
                        {{ project.name }}
                      </h4>
                      <p class="card-subtitle section-subtitle m-0">
                        {{ project.subtitle }}
                      </p>
                    </div>
                    <div>
                      <span class="badge bg-primary float-end">
                        {{ project.job_title }}
                      </span>
                      <br>
                      <span
                        v-if="project.collaborated"
                        class="badge bg-success float-end"
                        style="font-size: 70%"
                      >
                        team player
                      </span>
                    </div>
                  </div>

                  <div class="mt-2 mb-3">
                    <span
                      v-for="(tool, toolIndex) in project.tools"
                      :key="toolIndex"
                      class="me-2 badge"
                      :style="`background-color: ${getColor(tool)};`"
                    >
                      {{ tool }}
                    </span>
                  </div>

                  <div class="card-text">
                    <p>{{ project.content }}</p>

                    <div
                      :id="`project${index}_duties`"
                      class="collapse"
                    >
                      <ul>
                        <li
                          v-for="(duty, dutyIndex) in project.duties"
                          :key="dutyIndex"
                        >
                          <span>{{ duty }}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="d-flex justify-content-between card-footer bg-transparent">
                  <div
                    v-if="project.duties.length"
                    class="duties dropend d-grid"
                  >
                    <button
                      class="btn btn-sm btn-outline-dark border-0 dropdown-toggle shadow-none"
                      data-bs-toggle="collapse"
                      :href="`#project${index}_duties`"
                      role="button"
                      aria-expanded="false"
                      :aria-controls="`#project${index}_duties`"
                    >
                      Duties
                    </button>
                  </div>
                  <a
                    v-if="project.is_live"
                    :href="project.website"
                    target="__blank"
                    class="btn btn-sm btn-outline-dark shadow-none"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-header">
          <div class="section-title">
            My Favourite Tools
          </div>
          <div class="section-subtitle">
            Languages, frameworks and dev. environments I use for best productivity 🔥
          </div>
        </div>
        <div class="section-content">
          <Swiper
            :slides-per-view="4"
            :space-between="50"
          >
            <SwiperSlide
              v-for="(tool, i) in toolStore.tools"
              :key="i"
            >
              <img
                width="600"
                height="400"
                class="img-fluid text-center my-5"
                :src="`img/tools/${tool.name}.png`"
                :alt="tool.name"
                lazy
              >
            </SwiperSlide>
          </Swiper>
          <h5>Others:</h5>
          <p>
            🔏 PHP, JavaScript <br>
            🏠 Vuex, Pinia, PestPHP <br>
            👶🏻 GoLang, Python <br>
            🗒️ Visual Studio Code, Notion <br>
            🎨 Tailwind, Bootstrap, Photoshop <br>
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
