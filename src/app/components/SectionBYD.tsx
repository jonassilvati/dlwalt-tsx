"use client";

import React from "react";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./css/about.css";
import Image from "next/image";

const SectionBYD = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<span class="${className} pagination-bullet">${index + 1}</span>`;
    },
  };

  return (
    <section id="como-funciona-energia-solar" className="facts-area dark-bg">
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <h2
              className="section-title"
              style={{ fontSize: 14 }}
              data-aos="fade-up-right"
            >
              PROMOÇÃO DE ANIVERSÁRIO
            </h2>
            <h3 className="section-sub-title" data-aos="fade-up-left">
              8 anos de D | Walt!
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 text-center">
            <Image
              src="/images/byd.jpg"
              alt=""
              width={1238 / 3}
              height={1600 / 3}
            />
          </div>
          <div className="col-lg-6">
            <br />
            <h3 className="column-title" data-aos="zoom-out-right">
              VEJA ABAIXO O REGULAMENTO
            </h3>
            <a href="/byd.docx" className="btn btn-primary" style={{width: "100%"}}>
              LER REGULAMENTO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBYD;
