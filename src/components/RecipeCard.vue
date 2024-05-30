<template>

  <div class="col-md-4">
    <div class="card  w-100 mt-4 shadow hoverdiv"

    >
      <img :src="recipedetails.image" width="100" class="card-img-top" alt="" />
      <div class="">
        <p class="card-title ratingdiv">{{ recipedetails.rating }}</p>
      </div>
      <div class="card-body">
        <p class="card-title">{{ recipedetails.name }}</p>
        <p class="card-title text-danger">{{ recipedetails.cookTimeMinutes }} mins</p>
        <div class="text-danger">
          <i class="ri-star-line"></i>
          <i class="ri-star-line"></i>
          <i class="ri-star-line"></i>
          <i class="ri-star-line"></i>
          <i class="ri-star-line"></i>
        </div>

        <div class="justify-content-end d-flex">
          <button class="btn">
              <svg viewBox="0 0 17.503 15.625" height="20.625" width="20.503" xmlns="http://www.w3.org/2000/svg" class="icon">
                <path transform="translate(0 0)" d="M8.752,15.625h0L1.383,8.162a4.824,4.824,0,0,1,0-6.762,4.679,4.679,0,0,1,6.674,0l.694.7.694-.7a4.678,4.678,0,0,1,6.675,0,4.825,4.825,0,0,1,0,6.762L8.752,15.624ZM4.72,1.25A3.442,3.442,0,0,0,2.277,2.275a3.562,3.562,0,0,0,0,5l6.475,6.556,6.475-6.556a3.563,3.563,0,0,0,0-5A3.443,3.443,0,0,0,12.786,1.25h-.01a3.415,3.415,0,0,0-2.443,1.038L8.752,3.9,7.164,2.275A3.442,3.442,0,0,0,4.72,1.25Z" id="Fill"></path>
              </svg>
          </button>
        </div>

       
        <button 
        class="btn-53 mt-2"      
        type="button"
        :data-bs-toggle="'modal'"
        :data-bs-target="'#modal' + recipedetails.id">
            <div class="original">VIEW</div>
            <div class="letters">
              <span>V</span>
              <span>I</span>
              <span>E</span>
              <span>W</span>
            </div>
        </button>

        <!-- <button
          class="btn btn-primary text-center"
         
        >
          Check
        </button> -->
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      :id="'modal' + recipedetails.id"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <RecipeModal :recipedetails="recipedetails" />
    </div>
  </div>
</template>

<script setup>
import RecipeModal from './RecipeModal.vue';
defineProps(['recipedetails']);
</script>

<style scoped>
.hoverdiv {
  border: 1px solid transparent;
  padding: 5px;
  display: inline-block;
  transition: border 0.3s ease, border-radius 0.3s ease, padding 0.3s ease; /* Added transitions */
}

.hoverdiv:hover {
  padding: 0px;
  border-radius: 10px;
  border-color: black; 
}

.ratingdiv{
  position: absolute;
  top: 0;
  right: 0;
  border: 1px solid;
  border-radius: 5px;
  display: flex;
  background-color: rgba(0, 0, 0, 0.644);
  color: white;
}



.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: transparent;
  position: relative;
}

.btn::after {
  content: 'like';
  width: fit-content;
  height: fit-content;
  position: absolute;
  font-size: 15px;
  color: red;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  opacity: 0;
  visibility: hidden;
  transition: .2s linear;
  top: 105%;
}

.icon {
  width: 30px;
  height: 30px;
  transition: .2s linear;
}

.icon path {
  fill: red;
  transition: .2s linear;
}

.btn:hover > .icon {
  transform: scale(1.2);
}

.btn:hover > .icon path {
  fill: red;
}

.btn:hover::after {
  visibility: visible;
  opacity: 1;
  top: 75%;
}







.btn-53,
.btn-53 *,
.btn-53 :after,
.btn-53 :before,
.btn-53:after,
.btn-53:before {
  border: 0 solid;
  box-sizing: border-box;
}

.btn-53 {
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: button;
  background-color: red;
  background-image: none;
  color: #fff;
  cursor: pointer;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-size: 80%;
  line-height: 0.7;
  -webkit-mask-image: -webkit-radial-gradient(red, #fff);
  padding: 0;
  width: 90%;
  margin: auto;
}

.btn-53:disabled {
  cursor: default;
}

.btn-53:-moz-focusring {
  outline: auto;
}

.btn-53 svg {
  display: block;
  vertical-align: middle;
}

.btn-53 [hidden] {
  display: none;
}

.btn-53 {
  border: 1px solid;
  border-radius: 15px;
  box-sizing: border-box;
  display: block;
  font-weight: 900;
  overflow: hidden;
  padding: 1.2rem 3rem;
  position: relative;
  text-transform: uppercase;
}

.btn-53 .original {
  background: #fff;
  color: #000;
  display: grid;
  inset: 0;
  place-content: center;
  position: absolute;
  transition: transform 0.2s cubic-bezier(0.87, 0, 0.13, 1);
}

.btn-53:hover .original {
  transform: translateY(100%);
}

.btn-53 .letters {
  display: inline-flex;
}

.btn-53 span {
  opacity: 0;
  transform: translateY(-15px);
  transition: transform 0.2s cubic-bezier(0.87, 0, 0.13, 1), opacity 0.2s;
}

.btn-53 span:nth-child(2n) {
  transform: translateY(15px);
}

.btn-53:hover span {
  opacity: 1;
  transform: translateY(0);
}

.btn-53:hover span:nth-child(2) {
  transition-delay: 0.1s;
}

.btn-53:hover span:nth-child(3) {
  transition-delay: 0.2s;
}

.btn-53:hover span:nth-child(4) {
  transition-delay: 0.3s;
}

.btn-53:hover span:nth-child(5) {
  transition-delay: 0.4s;
}

.btn-53:hover span:nth-child(6) {
  transition-delay: 0.5s;
}



</style>
