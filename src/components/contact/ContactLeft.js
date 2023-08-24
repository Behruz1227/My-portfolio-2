import React from 'react'
import { FaTelegram, FaTwitter, FaInstagram } from "react-icons/fa";
import { contactImg } from "../../assets/index";

function telegramLink() {
  document.getElementById("telegram-link").click()
}
function twitterLink() {
  document.getElementById("tvitter-link").click()
}
function instagramLink() {
  document.getElementById("instagram-link").click()
}
const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <a className='d-none' id='telegram-link' href="https://t.me/behruz_coder_01"></a>
      <a className='d-none' id='tvitter-link' href="https://twitter.com/Behruz_coder_01"></a>
      <a className='d-none' id='instagram-link' href="https://instagram.com/behruz_coder_01"></a>
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Behruzbek Developer</h3>
        <p className="text-lg font-normal text-gray-400">
          Front End Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          I will answer all your questions to the best of my ability
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+998 97 222 0790</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">behruzxonniyozov12@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon" onClick={twitterLink}>
            <FaTwitter />
          </span>
          <span className="bannerIcon" onClick={instagramLink}>
            <FaInstagram />
          </span>
          <span className="bannerIcon" onClick={telegramLink}>
            <FaTelegram />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft