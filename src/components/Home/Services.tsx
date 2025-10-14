"use client";

import { IoTrailSignOutline } from "react-icons/io5";
import { RiLandscapeAiLine } from "react-icons/ri";
import { MdEmojiFlags } from "react-icons/md";
import { BiFootball } from "react-icons/bi";
import { PiWarehouseLight } from "react-icons/pi";

export default function Services() {
  return (
    <>
      <div className="services">
        <div className="base">
          <div className="service-item">
            <IoTrailSignOutline />
            <p>Trilhas ecológicas</p>
          </div>
          <div className="service-item">
            <RiLandscapeAiLine />
            <p>Paisagens encantadoras</p>
          </div>
          <div className="service-item">
            <PiWarehouseLight />
            <p>Infraestrutura Sofisticada</p>
          </div>
          <div className="service-item">
            <MdEmojiFlags />
            <p>Entretenimento</p>
          </div>
          <div className="service-item">
            <BiFootball />
            <p>Quadras</p>
          </div>
        </div>
      </div>
    </>
  );
}
