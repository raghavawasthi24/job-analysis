import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="text-white">
      <div className="border-b flex gap-28 justify-between p-10">
        <div className="w-1/2 grid gap-2">
          <p className="text-4xl font-bold">Tantum</p>
          <p>
            Book or share your ride with Tantum. Easily connect with partner,
            share your live location, call or text a meassage.
          </p>
        </div>
        <div className="w-1/2 text-right grid gap-2">
          <p className="font-bold">Disclaimer</p>
          <p>
            Our carpooling website facilitates connections between users for
            shared rides. While we strive for a safe and positive experience,
            users are responsible for their interactions and arrangements.
            Please exercise caution and adhere to local laws and guidelines when
            participating in shared rides. We are not liable for any incidents
            or disputes that may arise between users. By using our platform, you
            agree to our terms and conditions. Safe travels!
          </p>
        </div>
      </div>
      <div className="flex justify-between p-10">
        <div className="flex gap-8">
          <a href="">
            <FaGithub className="w-8 h-8" />
          </a>
          <a href="">
            <FaLinkedin className="w-8 h-8" />
          </a>
        </div>
        <div className="flex gap-2">
          <p>&copy; 2024 All rights reserved.</p>
          <img src="assets/india-flag.webp" alt="" className="h-6" />
          <p>India</p>
        </div>
      </div>
    </div>
  );
}
