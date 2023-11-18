// import { Navigate } from 'react-router-dom'

import { Link } from "react-router-dom"
import { FAQs, Layout } from "../../components"
import hero from '../../assets/images/hero.jpg'
import about from '../../assets/images/about-home.svg'
import redline from "../../assets/images/redline.svg";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row gap-5 items-center h-full md:h-[80vh] md:max-h-[500px] w-[90%] max-w-[1200px] mx-auto">
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start my-10">
        <h1 className="text-primary text-4xl sm:text-6xl text-center md:text-left font-Montserrat font-bold">Let&rsquo;s Build the Future, Together.</h1>
        <p className="text-[#4F596A] text-center text-xl md:text-left max-w-[40ch] md:max-w-full mt-5 mb-10">
          Enabling and encouraging women to start a career in tech through {" "}
          <span className="relative inline-block">  
            our supportive platforms.
            <span className="absolute left-6 -bottom-1.5">
              <img src={redline} alt="" className="w-28" />
            </span>
          </span> 
        </p>
        <Link to="/pricing" className='bg-primary text-white w-fit rounded-lg px-4 sm:px-10 py-2 sm:py-3 font-medium flex shrink-0 transition duration-300 active:scale-100 hover:scale-90'>
          Get Started
        </Link>
      </div>
      <div className="w-full md:w-1/2">
        <div className="relative mr-8">
          <img src={hero} alt="Ridot Software Academy" className="z-10 rounded-3xl animate-bounce" />
          <div className="bg-primary h-full w-full absolute rounded-3xl top-8 -right-8 -z-10 shadow-xl">
          </div>
        </div>
      </div>
    </section>
  )
}

const Features = () => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 w-[90%] max-w-[1200px] mx-auto">
        <div className="group border p-10 shadow-[0px_13px_19px_0px_rgba(0,0,0,0.07)] transition-all duration-300 bg-white hover:bg-primary rounded-lg">
          <div className="bg-primary group-hover:bg-white border-hover:bg-white rounded-lg w-fit p-3">
            <svg className="fill-white group-hover:fill-primary" width="40px" height="40px" viewBox="0 0 64 64" id="Layer_1_1_" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><path d="M58,17H48v-3.77l-2.747-0.728c-0.198-0.589-0.432-1.158-0.698-1.7l1.424-2.452l-5.33-5.331l-2.451,1.425  c-0.544-0.267-1.112-0.5-1.7-0.699L35.77,1H28.23l-0.728,2.747c-0.588,0.198-1.156,0.432-1.7,0.699l-2.451-1.425l-5.33,5.331  l1.424,2.452c-0.267,0.542-0.5,1.111-0.698,1.7L16,13.23V17H6c-2.757,0-5,2.243-5,5v30c0,2.757,2.243,5,5,5h13v4h-4v2h34v-2h-4v-4  h13c2.757,0,5-2.243,5-5V22C63,19.243,60.757,17,58,17z M18,14.77l2.334-0.618l0.159-0.54c0.247-0.837,0.573-1.63,0.971-2.356  l0.27-0.495l-1.21-2.083l3.154-3.154l2.082,1.21l0.495-0.271c0.729-0.398,1.521-0.724,2.355-0.969l0.54-0.159L29.77,3h4.461  l0.619,2.335l0.54,0.159c0.834,0.245,1.627,0.571,2.355,0.969l0.495,0.271l2.082-1.21l3.154,3.154l-1.21,2.083l0.27,0.495  c0.397,0.727,0.724,1.52,0.971,2.356l0.159,0.54L46,14.77v4.461l-2.334,0.618l-0.159,0.54c-0.247,0.837-0.573,1.63-0.971,2.356  l-0.27,0.495l1.21,2.083L41,27.799V24c0-0.745-0.101-1.465-0.272-2.158C41.549,20.364,42,18.705,42,17c0-5.514-4.486-10-10-10  s-10,4.486-10,10c0,1.704,0.451,3.362,1.273,4.842C23.101,22.535,23,23.255,23,24v3.799l-2.477-2.477l1.21-2.083l-0.27-0.495  c-0.397-0.727-0.724-1.52-0.971-2.356l-0.159-0.54L18,19.23V14.77z M26,29.722c-0.595-0.347-1-0.985-1-1.722s0.405-1.375,1-1.722  V29.722z M24,17c0-4.411,3.589-8,8-8s8,3.589,8,8c0,0.784-0.121,1.555-0.342,2.295C38.072,16.723,35.237,15,32,15  c-3.237,0-6.071,1.723-7.657,4.295C24.121,18.554,24,17.783,24,17z M37,24h-0.172c-1.557,0-3.021-0.606-4.121-1.707L32,21.585  l-0.707,0.708C30.192,23.394,28.729,24,27.172,24H27c-0.732,0-1.409,0.212-2,0.556V24c0-3.86,3.141-7,7-7s7,3.14,7,7v0.556  C38.409,24.212,37.732,24,37,24z M34,35.667l-2,2.666l-2-2.666V35.65c0.627,0.223,1.298,0.35,2,0.35s1.373-0.128,2-0.35V35.667z   M28.65,37.2l1.95,2.6l-2.09,1.567l-1.22-3.658L28.65,37.2z M25.417,38.412l2.073,6.221L32,41.25l4.51,3.382l2.073-6.221l1.47,0.551  C41.218,39.399,42,40.528,42,41.772V45H22v-3.228c0-1.244,0.782-2.373,1.947-2.81L25.417,38.412z M35.49,41.367L33.4,39.8l1.95-2.6  l1.36,0.51L35.49,41.367z M32,34c-2.206,0-4-1.794-4-4v-4.068c1.464-0.154,2.845-0.688,4-1.596c1.155,0.909,2.536,1.442,4,1.596V30  C36,32.206,34.206,34,32,34z M38,26.278c0.595,0.347,1,0.985,1,1.722s-0.405,1.375-1,1.722V26.278z M6,19h10v1.77l2.747,0.728  c0.198,0.589,0.432,1.158,0.698,1.7l-1.424,2.452l5.33,5.331l0.64-0.372c0.593,0.684,1.404,1.165,2.334,1.324  C26.66,32.914,27.243,33.78,28,34.46v0.847l-4.756,1.783C21.304,37.818,20,39.7,20,41.772V47h24v-5.228  c0-2.072-1.304-3.954-3.244-4.683L36,35.307V34.46c0.757-0.679,1.34-1.545,1.675-2.528c0.929-0.159,1.74-0.641,2.333-1.324  l0.64,0.372l5.33-5.331l-1.424-2.452c0.267-0.542,0.5-1.111,0.698-1.7L48,20.77V19h10c1.654,0,3,1.346,3,3v27H3V22  C3,20.346,4.346,19,6,19z M43,61H21v-4h22V61z M58,55H6c-1.654,0-3-1.346-3-3v-1h58v1C61,53.654,59.654,55,58,55z"/></svg>
          </div>
          <h2 className="text-[#252B42] group-hover:text-white font-Montserrat font-bold my-5">Empowering Women in Tech</h2>
          <div className="w-16 h-1 bg-secondary group-hover:bg-white mb-5"></div>
          <p className="text-[#252B42] group-hover:text-white text-sm">
            Our specially curated programs focus on fostering a supportive learning environment, ensuring that women not only gain technical skills but also build confidence to thrive in the tech industry.
          </p>
        </div>
        <div className="group border p-10 shadow-[0px_13px_19px_0px_rgba(0,0,0,0.07)] transition-all duration-300 bg-white hover:bg-primary rounded-lg">
          <div className="bg-primary group-hover:bg-white rounded-lg w-fit p-3">
            <svg className="fill-white group-hover:fill-primary" width="40px" height="40px" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 506.49"><path fillRule="nonzero" d="M294.24 17.11C294.24 7.69 303.53 0 315.1 0s20.87 7.65 20.87 17.11v74.85c0 9.42-9.3 17.11-20.87 17.11s-20.86-7.65-20.86-17.11V17.11zm119.47 294.47c-1.58-1.07-3.35-1.55-5.16-1.18-1.79.34-3.35 1.29-4.42 2.85l-6.1 8.63c-4.14-1.86-9.41-3.07-13.88-3.71l-1.91-11.26c-.37-1.9-1.32-3.34-2.76-4.43-1.55-1.06-3.22-1.44-5.13-1.06l-14.13 2.5c-1.8.36-3.23 1.2-4.42 2.76-1.07 1.56-1.55 3.24-1.21 5.15l1.8 10.3c-4.34 1.8-8.65 4.45-12.31 7.41l-9.59-6.59c-1.54-1.07-3.21-1.56-5.02-1.2-1.8.38-3.34 1.33-4.42 2.88l-8.14 11.6c-1.08 1.56-1.56 3.35-1.2 5.14.36 1.91 1.31 3.36 2.88 4.42l8.61 6.12c-1.82 4.1-3.07 9.44-3.71 13.87l-11.24 1.92c-1.91.36-3.36 1.32-4.45 2.75-1.07 1.56-1.42 3.23-1.07 5.14l2.52 14.12c.36 1.8 1.2 3.24 2.75 4.43 1.56 1.09 3.24 1.57 5.16 1.2l10.27-1.79c1.9 4.49 4.5 8.54 7.43 12.43l-6.59 9.46c-1.07 1.55-1.55 3.23-1.19 5.02.35 1.8 1.32 3.35 2.88 4.43l11.72 8.25c1.54 1.09 3.35 1.43 5.14 1.09 1.79-.36 3.35-1.2 4.54-2.76l6.11-8.73c4.19 1.85 9.34 3.02 13.89 3.72l1.91 11.24c.34 1.92 1.31 3.35 2.74 4.42 1.57 1.08 3.24 1.44 5.15 1.08l14.13-2.51c1.79-.37 3.2-1.21 4.42-2.76 1.07-1.55 1.54-3.22 1.18-5.13l-1.77-10.3c4.53-1.91 8.5-4.48 12.42-7.42l9.47 6.58c1.55 1.08 3.22 1.56 5.14 1.19 1.91-.35 3.34-1.3 4.42-2.87l8.25-11.72c1.07-1.56 1.45-3.36 1.07-5.14-.34-1.81-1.18-3.35-2.74-4.56l-8.73-5.98c1.82-4.1 3.05-9.42 3.7-13.87l11.25-1.92c1.91-.36 3.34-1.32 4.43-2.75 1.08-1.56 1.45-3.23 1.08-5.14l-2.51-14.12c-.36-1.8-1.2-3.23-2.75-4.43-1.56-1.09-3.24-1.57-5.16-1.2l-10.29 1.8c-1.98-4.47-4.34-8.51-7.41-12.32l6.58-9.58c1.08-1.55 1.56-3.23 1.2-5.01-.37-1.81-1.32-3.36-2.88-4.45l-11.61-8.13-.34.12zm-35.89 30.55c16.67 0 30.17 13.52 30.17 30.18s-13.5 30.17-30.17 30.17c-16.66 0-30.16-13.51-30.16-30.17 0-16.66 13.5-30.18 30.16-30.18zm0-104.02c36.98 0 70.56 15.04 94.83 39.35C496.96 301.7 512 335.25 512 372.31c0 36.99-15.04 70.56-39.3 94.83-24.32 24.31-57.89 39.35-94.88 39.35-37.06 0-70.61-15.04-94.89-39.32l-.63-.68c-23.9-24.24-38.68-57.53-38.68-94.18 0-37.06 15.04-70.61 39.31-94.89 24.28-24.27 57.83-39.31 94.89-39.31zm78.73 55.41c-20.08-20.11-47.95-32.58-78.73-32.58-30.75 0-58.61 12.47-78.75 32.62-20.15 20.14-32.62 48-32.62 78.75 0 30.5 12.25 58.14 32.02 78.19l.6.54c20.14 20.15 48 32.62 78.75 32.62 30.76 0 58.65-12.47 78.77-32.58 20.11-20.12 32.58-48.01 32.58-78.77 0-30.75-12.47-58.61-32.62-78.79zM56.81 242.28c-1.18 0-2.24-5.2-2.24-11.57 0-6.38.92-11.53 2.24-11.53h56.94c1.19 0 2.23 5.2 2.23 11.53 0 6.39-.92 11.57-2.23 11.57H56.81zm90.78 0c-1.19 0-2.25-5.2-2.25-11.57 0-6.38.92-11.53 2.25-11.53h56.94c1.18 0 2.22 5.2 2.22 11.53 0 6.39-.92 11.57-2.22 11.57h-56.94zm90.77 0c-1.19 0-2.24-5.2-2.24-11.57 0-6.38.92-11.53 2.24-11.53h56.94c1.18 0 2.22 5.15 2.22 11.49-5.69 3.55-11.19 7.44-16.42 11.61h-42.74zM56.94 308.52c-1.18 0-2.24-5.2-2.24-11.57 0-6.39.93-11.58 2.24-11.58h56.94c1.18 0 2.22 5.19 2.22 11.58 0 6.37-.91 11.57-2.22 11.57H56.94zm90.77 0c-1.18 0-2.24-5.2-2.24-11.57 0-6.39.93-11.58 2.24-11.58h56.94c1.18 0 2.23 5.19 2.23 11.58 0 6.37-.92 11.57-2.23 11.57h-56.94zM57.06 374.8c-1.18 0-2.24-5.2-2.24-11.59 0-6.36.94-11.56 2.24-11.56H114c1.19 0 2.24 5.2 2.24 11.56 0 6.39-.93 11.59-2.24 11.59H57.06zm90.77 0c-1.18 0-2.24-5.2-2.24-11.59 0-6.36.94-11.56 2.24-11.56h56.94c1.19 0 2.25 5.2 2.25 11.56 0 6.39-.94 11.59-2.25 11.59h-56.94zM106.82 17.11C106.82 7.69 116.1 0 127.69 0c11.57 0 20.86 7.65 20.86 17.11v74.85c0 9.42-9.34 17.11-20.86 17.11-11.59 0-20.87-7.65-20.87-17.11V17.11zM22.98 163.64h397.37V77.46c0-2.94-1.18-5.53-3.08-7.43a10.59 10.59 0 0 0-7.43-3.08h-38.09c-6.39 0-11.57-5.2-11.57-11.57 0-6.38 5.18-11.58 11.57-11.58h38.09c9.33 0 17.71 3.77 23.83 9.89 6.12 6.13 9.88 14.49 9.88 23.82v136.81c-7.61-2.62-15.41-4.73-23.45-6.29v-21.38h.25H22.98v223.16c0 2.95 1.18 5.53 3.08 7.43 1.9 1.9 4.6 3.08 7.43 3.08h188.85c2.16 8.02 4.85 15.84 8.11 23.36H33.71c-9.3 0-17.7-3.75-23.82-9.89C3.75 427.72 0 419.36 0 410.02V77.55c0-9.29 3.75-17.7 9.89-23.82 6.12-6.13 14.48-9.89 23.82-9.89h40.67c6.38 0 11.57 5.21 11.57 11.57C85.95 61.8 80.76 67 74.38 67H33.71c-2.96 0-5.54 1.18-7.44 3.08-1.9 1.9-3.09 4.59-3.09 7.43v86.16h-.2v-.03zm158.94-96.69c-6.37 0-11.57-5.2-11.57-11.57 0-6.38 5.2-11.58 11.57-11.58h77.55c6.39 0 11.57 5.2 11.57 11.58 0 6.37-5.18 11.57-11.57 11.57h-77.55z"/></svg>
          </div>
          <h2 className="text-[#252B42] group-hover:text-white font-Montserrat font-bold my-5">Flexible Learning for Everyone</h2>
          <div className="w-16 h-1 bg-secondary group-hover:bg-white mb-5"></div>
          <p className="text-[#252B42] group-hover:text-white text-sm">
            Whether you&rsquo;re a professional, a student, or a homemaker, our adaptive programs allow you to balance your responsibilities while advancing your career in technology.
          </p>
        </div>
        <div className="group border p-10 shadow-[0px_13px_19px_0px_rgba(0,0,0,0.07)] transition-all duration-300 bg-white hover:bg-primary rounded-lg">
          <div className="bg-primary group-hover:bg-white rounded-lg w-fit p-3">
          <svg height="40px" width="40px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 493.079 493.079" xmlSpace="preserve">
            <g>
              <g>
                <g>
                  <path className="fill-white group-hover:fill-primary" d="M111.781,235.411l18.751,18.751H78.754c0-23.873,17.417-32.868,41.021-35.184l-10.566,10.579
                    h8.422L111.781,235.411z M155.439,180.873c-0.745,10.501-5.235,22.765-11.645,29.347h24.841v-27.744
                    c0-28.997-15.341-40.023-34.232-40.023c-18.91,0-34.264,11.026-34.264,40.023v27.744h24.841
                    c-6.203-6.362-10.628-18.068-11.612-28.317l0.269-0.016c10.725,0,19.957-4.441,25.032-10.978
                    C142.366,175.717,148.316,179.27,155.439,180.873z M288.054,88.485l4.331-4.347h-6.281l7.868-7.852
                    c-17.56,1.713-30.49,8.393-30.49,26.143h38.452L288.054,88.485z M289.227,48.717l0.191-0.016c7.933,0,14.816-3.301,18.593-8.153
                    c2.76,3.57,7.185,6.219,12.484,7.408c-0.554,7.803-3.903,16.912-8.678,21.813h18.496V49.145c0-21.544-11.438-29.742-25.46-29.742
                    c-14.071,0-25.46,8.202-25.46,29.742v20.621h18.464C293.224,65.04,289.943,56.33,289.227,48.717z M323.54,84.122h-6.265
                    l4.331,4.347l-13.912,13.928h38.485c0-17.751-12.912-24.43-30.49-26.143L323.54,84.122z M148.996,218.976l10.566,10.579h-8.422
                    l5.853,5.869l-18.751,18.751h51.778C190.02,230.303,172.6,221.308,148.996,218.976z M348.605,391.949l14.071,14.071h-11.214
                    l7.774,7.774l-24.906,24.938h68.846C403.159,406.972,380.044,395.01,348.605,391.949z M447.987,374.262
                    c0,65.532-53.285,118.817-118.817,118.817c-65.5,0-118.833-53.285-118.833-118.817c0-26.063,8.551-50.097,22.811-69.688
                    l-39.214-31.728l2.316-2.87c-16.102,15.483-37.882,25.032-61.82,25.032c-49.253,0-89.338-40.072-89.338-89.327
                    s40.056-89.311,89.343-89.311c22.033,0,42.181,8.059,57.79,21.353c13.912-10.485,45.148-33.931,54.681-39.625
                    c-5.173-9.471-8.422-20.161-8.422-31.712C238.482,29.775,268.257,0,304.885,0c36.596,0,66.371,29.775,66.371,66.387
                    c0,36.596-29.775,66.371-66.371,66.371c-22.273,0-41.896-11.104-53.92-27.951c-5.329,2.983-29.775,20.909-52.857,38.358
                    c15.83,16.118,25.619,38.2,25.619,62.516c0,21.845-7.9,41.863-20.955,57.408l38.705,31.313
                    c21.764-23.86,52.951-38.961,87.724-38.961C394.702,255.462,447.987,308.763,447.987,374.262z M304.853,125.463
                    c32.567,0,59.06-26.49,59.06-59.044c0-32.567-26.49-59.044-59.06-59.044s-59.06,26.477-59.06,59.044
                    C245.796,98.97,272.286,125.463,304.853,125.463z M213.845,205.698c0-43.813-35.628-79.46-79.444-79.46
                    c-43.862,0-79.49,35.644-79.49,79.46s35.628,79.46,79.49,79.46C178.217,285.175,213.845,249.528,213.845,205.698z
                    M434.884,374.262c0-58.283-47.431-105.714-105.714-105.714S223.472,315.98,223.472,374.262
                    c0,58.299,47.415,105.714,105.698,105.714S434.884,432.575,434.884,374.262z M306.932,406.02h-11.214l14.071-14.071
                    c-31.44,3.061-54.587,15.023-54.587,46.78h68.91l-24.938-24.938L306.932,406.02z M357.218,341.265
                    c-1.014,13.977-6.964,30.267-15.529,39.023h33.059v-36.914c0-38.579-20.384-53.22-45.575-53.22
                    c-25.159,0-45.575,14.657-45.575,53.22v36.914h33.091c-8.263-8.471-14.165-24.032-15.467-37.675l0.317-0.048
                    c14.246,0,26.555-5.886,33.312-14.563C339.768,334.349,347.701,339.124,357.218,341.265z"/>
                </g>
              </g>
            </g>
            </svg>
          </div>
          <h2 className="text-[#252B42] group-hover:text-white font-Montserrat font-bold my-5">Community of Women in Tech</h2>
          <div className="w-16 h-1 bg-secondary group-hover:bg-white mb-5"></div>
          <p className="text-[#252B42] group-hover:text-white text-sm">
           Stand a chance to be part of a network that encourages collaboration, mentorship, and the celebration of women&rsquo;s achievements in the software industry.
          </p>
        </div>
      </section>
    </>
  )
}

const About = () => {
  return (
    <section className="flex flex-col md:flex-row gap-5 items-center h-full md:h-[80vh] md:max-h-[500px] w-[90%] max-w-[1200px] mx-auto">
      <div className="w-full md:w-1/2 mt-20 md:mt-0">
        <div className="relative">
          <img src={about} alt="About Ridot Software Academy" className="z-10 rounded-3xl mx-auto" />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start mt-8 mb-10">
        <div className="h-1 w-20 bg-secondary mb-5"></div>
        <h1 className="text-primary text-2xl sm:text-3xl text-center md:text-left font-Montserrat font-bold">Solving Tech Phobia in females.</h1>
        <p className="text-[#4F596A] text-center text-lg md:text-left max-w-[40ch] md:max-w-full mt-5 mb-10">
          The brand is in itself a unique one as it solves the problem of technological phobia in most females, it will enable and encourage women to start a career in tech.
        </p>
        <Link to="/about" className='bg-primary text-white w-fit rounded-lg px-4 sm:px-10 py-2 sm:py-3 font-medium flex shrink-0 transition duration-300 active:scale-100 hover:scale-90'>
          Learn More
        </Link>
      </div>
    </section>
  )
}

const Testimonials = () => {
  return (
    //  <section className="bg-[linear-gradient(44deg,#37478d_15.75%,#37478d_15.76%,#020181_84.63%)] h-screen">
    //  <section className="bg-gradient-to-r from-primary via-lightPrimary to-secondary h-screen">
    // <section className="bg-[linear-gradient(180deg,rgba(2,1,129,1)_0%,rgba(55,71,141,1)_15%)] h-screen">
    <section className="bg-primary h-screen">
      <h1>Hear what our students are saying</h1>
      <div>
        <div className="h-20 w-20 bg-lightPrimary backdrop-blur-sm"></div>
      </div>
    </section>
  )
}
console.log(Testimonials)

const Start = () => {
  return(
    <section className="flex flex-col justify-center items-center my-20">
      <div className="bg-secondary bg-opacity-20 mb-8 rounded-full">
        <h1 className="text-secondary uppercase text-xs md:text-sm font-bold px-4">Unlock exclusive savings now! </h1>
      </div>
      <h2 className="text-3xl md:text-[46px] font-bold text-primary font-Montserrat max-w-[20ch] mb-8 text-center">Ready to enjoy our ongoing discount?</h2>
      <Link to="/pricing" className='bg-primary text-white w-fit rounded-lg px-4 sm:px-10 py-2 sm:py-3 font-medium flex shrink-0 transition duration-300 active:scale-100 hover:scale-90'>
        Get Started
      </Link>
    </section>
  )
}

const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Features />
        <About />
        {/* <Testimonials /> */}
        <FAQs />
        <Start />
      </Layout>
    </>
  )
}

export default Home