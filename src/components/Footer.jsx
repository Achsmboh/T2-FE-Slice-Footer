import React from "react";
import kominfo from "../assets/kominfo.png";
import piala from "../assets/piala.png";
import logo from "../assets/logo1.png";
import { ImFacebook } from "react-icons/im";
import { BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="h-96 px-20 flex justify-center items-center">
      <div>
        <div className="grid grid-cols-3 text-black">
          <div className="flex flex-col pr-20">
            <div className="h-36">
              <img className="h-32" src={`${logo}`} alt="" />
            </div>
            <p className="text-abu leading-7">Indoweb.id adalah perusahaan yang bergerak salam pembuayan website, toko online serta software development</p>
            <div className="flex mt-5">
              <div>
                <img width={100} src={`${kominfo}`} alt="" />
              </div>

              <img src={`${piala}`} alt="" />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <div className="h-32 flex justify-start items-center">
                <h3
                  className="text-slate-600 font-bold text-xl
                "
                >
                  Produk
                </h3>
              </div>
              <ul className="leading-10 text-abu">
                <li>ePesantren</li>
                <li>eSekolah</li>
                <li>eKlinik</li>
                <li>eKoperasi</li>
              </ul>
            </div>
            <div>
              <div className="h-32 flex justify-start items-center">
                <h3
                  className="text-slate-600 font-bold text-xl
                "
                >
                  Halaman
                </h3>
              </div>
              <ul className="leading-10 text-abu">
                <li>Tentang Kami</li>
                <li>Bantuan</li>
                <li>Blog</li>
                <li>Karir !</li>
                <li>Harga</li>
                <li>Affiliate</li>
              </ul>
            </div>
          </div>
          <div className="px-20 ">
            <div className="h-32 flex justify-start items-center">
              <h3
                className="text-slate-600 font-bold text-xl
                "
              >
                Kontak
              </h3>
            </div>
            <p className="text-abu leading-7">Alamat:Jl.Elang CC 11, Perum Sukorejo Indah, Katang, Sukorejo. Kec.Ngasem, Kediri, Jawa Timur</p>
            <p className="text-abu">Phone WA: 0812-3364-0003</p>
            <div className="flex mt-9">
              <div className="bg-biruFb w-14 h-14 flex justify-center items-center text-white rounded-full text-xl">
                <ImFacebook />
              </div>
              <div className="mx-3 bg-ping w-14 h-14 flex justify-center items-center text-white rounded-full text-xl">
                <BsInstagram />
              </div>
              <div className="bg-biruLn w-14 h-14 flex justify-center items-center text-white rounded-full text-xl">
                <BsLinkedin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
