import "./style.css";
import "./sass/header.sass";
import 'swiper/css';
import 'swiper/css/navigation';

import Swiper from "swiper";
import {Navigation} from 'swiper/modules';

const swiper = new Swiper(".swiper", {
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
  spaceBetween: 100,
  slidesPerView: 2,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  modules: [Navigation],
});