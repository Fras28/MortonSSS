import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./LandingPage.css";
import { VerPedido } from "../BtnBag/BtnBag";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../assets/Spinner/Spinner";
import Horarios from "../BtnNavidad/Horarios";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import dogFace from "../assets/dogFace.png"

const API = process.env.REACT_APP_API_STRAPI;
export default function LandingPage(url) {
  const { id } = useParams();
  const { comercio, categorias } = useSelector((state) => state.alldata);
  const API = process.env.REACT_APP_API_STRAPI;
  // const id = window.location.pathname.replace(/[\/\W_]/g, ''); // ;

  return (
    <div className="animate__animated  animate__zoomIn">
      {!categorias ? <Spinner /> : null}
      <div className="naviLanding titCasa ">
        <div className="logoL">
          <NavLink to={`/${comercio.id}`}>
            <img
              src={`${API}${comercio?.attributes?.logo?.data?.attributes?.url}`}
              alt=""
              style={{maxHeight:"80px", marginTop:"1rem"}}
            />
          </NavLink>
        </div>
        <div className="navi2">
          <svg
            width="59"
            height="2"
            viewBox="0 0 59 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M59 0.999995L0 1" stroke="#E88A23" />
          </svg>
          <Horarios />
          <svg
            width="59"
            height="2"
            viewBox="0 0 59 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M59 0.999995L0 1" stroke="#E88A23" />
          </svg>
        </div>
      </div>

      <div className="conteinerLB2  ">
        <div className="rowsCardL">
          {categorias?.map((categoria, index) => (
            <NavLink
              className={`navLink `}
              to={
                url.location.pathname === "/"
                  ? `/${categoria.attributes?.name}`
                  : `${url?.location?.pathname}/${categoria?.attributes?.name}`
              }
            >
              <div
                className={`titInicio ${
                  index === comercio.length - 1 && index % 2 === 0
                    ? "fullWidth"
                    : ""
                }`}
              >
                <img
                  src={
                    categoria?.attributes?.picture?.data != null
                      ? API +
                        categoria?.attributes?.picture?.data?.attributes
                          ?.url
                      :dogFace
                  }
                  alt="fotito"
                />
                <p style={{fontSize:"14px"}}>{categoria?.attributes?.name}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="navi2">
        <svg
          width="59"
          height="2"
          viewBox="0 0 59 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M59 0.999995L0 1" stroke="#E88A23" />
        </svg>
        <p className="naviTit3" style={{backgroundColor:`${comercio?.attributes?.rgb}`}}> Seguinos en </p>
        <svg
          width="59"
          height="2"
          viewBox="0 0 59 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M59 0.999995L0 1" stroke="#E88A23" />
        </svg>
      </div>
      <VerPedido id={url.location.pathname.slice(1, 3)} />
    </div>
  );
}
