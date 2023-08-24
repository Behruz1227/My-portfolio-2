import React from 'react'
import { FaTwitter, FaInstagram, FaReact, FaTelegram } from "react-icons/fa";
import { SiSass, SiBootstrap, SiJavascript } from "react-icons/si";

function telegramLink() {
  document.getElementById("telegram-link").click()
}
function twitterLink() {
  document.getElementById("tvitter-link").click()
}
function instagramLink() {
  document.getElementById("instagram-link").click()
}

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <a className='d-none' id='telegram-link' href="https://t.me/behruz_coder_01"></a>
      <a className='d-none' id='tvitter-link' href="https://twitter.com/Behruz_coder_01"></a>
      <a className='d-none' id='instagram-link' href="https://instagram.com/behruz_coder_01"></a>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
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
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiJavascript />
          </span>
          <span className="bannerIcon">
            <SiSass />
          </span>
          <span className="bannerIcon">
            <SiBootstrap />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Media