import { useEffect, useState } from "react";
import fundo from '../assets/fundo.png';
import { Home, Box, User, FolderOpen, Rocket, Mail, ChevronDown, ArrowRight, Eye, Code, Globe, Target, LineChart, Bot, Settings, Check, ExternalLink } from "lucide-react";
import perfil from '../assets/perfil.png';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import confereAe from '../assets/confere-ae.png';


const skills = [
    {
        svg: <>
<svg viewBox="0 0 1052 1052"><path fill="#f0db4f" d="M0 0h1052v1052H0z"/><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"/></svg>
        </>,
        texto: 'JavaScript'
    },
    {
        svg: <>
<svg viewBox="0 0 256 256" preserveAspectRatio="xMidYMid"><path d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z" fill="#3178C6"/><path d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z" fill="#FFF"/></svg>
        </>,
        texto: 'TypeScript'
    },
    {
        svg: <>
<svg viewBox="0 0 452 520"><path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52"/><path fill="#ef652a" d="M226 472l149-41 35-394H226"/><path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"/><path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"/></svg>
        </>,
        texto: 'HTML5'
    },
    {
        svg: <>
<svg viewBox="0 0 512 512"><path fill="#264de4" d="M71.357 460.819 30.272 0h451.456l-41.129 460.746L255.724 512z"/><path fill="#2965f1" d="m405.388 431.408 35.148-393.73H256v435.146z"/><path fill="#ebebeb" d="m124.46 208.59 5.065 56.517H256V208.59zm-5.041-57.875H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z"/><path fill="#fff" d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z"/></svg>
        </>,
        texto: 'CSS3'
    },
    {
        svg: <>
<svg viewBox="0 0 256 204" preserveAspectRatio="xMidYMid"><path fill="#7E13F8" d="M53.172 0C38.565 0 27.756 12.785 28.24 26.65c.465 13.32-.139 30.573-4.482 44.642C19.402 85.402 12.034 94.34 0 95.488v12.956c12.034 1.148 19.402 10.086 23.758 24.197 4.343 14.069 4.947 31.32 4.482 44.641-.484 13.863 10.325 26.65 24.934 26.65h149.673c14.608 0 25.414-12.785 24.93-26.65-.464-13.32.139-30.572 4.482-44.641 4.359-14.11 11.707-23.05 23.741-24.197V95.488c-12.034-1.148-19.382-10.086-23.74-24.196-4.344-14.067-4.947-31.321-4.483-44.642C228.261 12.787 217.455 0 202.847 0H53.17h.002ZM173.56 125.533c0 19.092-14.24 30.67-37.872 30.67h-40.23a4.339 4.339 0 0 1-4.338-4.339V52.068a4.339 4.339 0 0 1 4.339-4.34h39.999c19.705 0 32.637 10.675 32.637 27.063 0 11.503-8.7 21.801-19.783 23.604v.601c15.089 1.655 25.248 12.104 25.248 26.537Zm-42.26-64.05h-22.937v32.4h19.32c14.934 0 23.17-6.014 23.17-16.764 0-10.073-7.082-15.636-19.552-15.636Zm-22.937 45.256v35.705h23.782c15.548 0 23.786-6.239 23.786-17.965 0-11.728-8.467-17.742-24.786-17.742h-22.782v.002Z"/></svg>
        </>,
        texto: 'Bootstrap'
    },
    {
        svg: <>
<svg fill="none" viewBox="0 0 54 33"><g clip-path="url(#tailwindcss__a)"><path fill="#38bdf8" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"/></g><defs><clipPath id="tailwindcss__a"><path fill="#fff" d="M0 0h54v32.4H0z"/></clipPath></defs></svg>
        </>,
        texto: 'Tailwind'
    },
    {
        svg: <>
<svg viewBox="0 0 256 292" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="nodejs__a" x1="68.188%" x2="27.823%" y1="17.487%" y2="89.755%"><stop offset="0%" stop-color="#41873F"/><stop offset="32.88%" stop-color="#418B3D"/><stop offset="63.52%" stop-color="#419637"/><stop offset="93.19%" stop-color="#3FA92D"/><stop offset="100%" stop-color="#3FAE2A"/></linearGradient><linearGradient id="nodejs__c" x1="43.277%" x2="159.245%" y1="55.169%" y2="-18.306%"><stop offset="13.76%" stop-color="#41873F"/><stop offset="40.32%" stop-color="#54A044"/><stop offset="71.36%" stop-color="#66B848"/><stop offset="90.81%" stop-color="#6CC04A"/></linearGradient><linearGradient id="nodejs__f" x1="-4.389%" x2="101.499%" y1="49.997%" y2="49.997%"><stop offset="9.192%" stop-color="#6CC04A"/><stop offset="28.64%" stop-color="#66B848"/><stop offset="59.68%" stop-color="#54A044"/><stop offset="86.24%" stop-color="#41873F"/></linearGradient><path id="nodejs__b" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"/><path id="nodejs__e" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"/></defs><path fill="url(#nodejs__a)" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"/><mask id="nodejs__d" fill="#fff"><use xlinkHref="#nodejs__b"/></mask><path fill="url(#nodejs__c)" d="M249.485 67.8 134.65 1.833c-1.086-.542-2.443-1.085-3.529-1.357L2.443 220.912c1.086 1.357 2.444 2.443 3.8 3.258l114.834 65.968c3.258 1.9 7.059 2.443 10.588 1.357L252.47 70.515c-.815-1.086-1.9-1.9-2.986-2.714Z" mask="url(#nodejs__d)"/><mask id="nodejs__g" fill="#fff"><use xlinkHref="#nodejs__e"/></mask><path fill="url(#nodejs__f)" d="M249.756 223.898c3.258-1.9 5.701-5.158 6.787-8.687L130.579.204c-3.258-.543-6.787-.272-9.773 1.628L6.786 67.53l122.979 224.238c1.628-.272 3.529-.815 5.158-1.63l114.833-66.239Z" mask="url(#nodejs__g)"/></svg>
        </>,
        texto: 'Node.js'
    },
    {
        svg: <>
<svg viewBox="0 0 32 32"><path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z"/></svg>
        </>,
        texto: 'Express'
    },
    {
        svg: <>
  <svg
    viewBox="0 0 432.071 445.383"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      fillRule="nonzero"
      clipRule="nonzero"
      fill="none"
      stroke="#fff"
      strokeWidth={12.4651}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={4}
    >
      <path
        d="M323.205 324.227c2.833-23.601 1.984-27.062 19.563-23.239l4.463.392c13.517.615 31.199-2.174 41.587-7 22.362-10.376 35.622-27.7 13.572-23.148-50.297 10.376-53.755-6.655-53.755-6.655 53.111-78.803 75.313-178.836 56.149-203.322-52.27-66.789-142.748-35.206-144.262-34.386l-.482.089c-9.938-2.062-21.06-3.294-33.554-3.496-22.761-.374-40.032 5.967-53.133 15.904 0 0-161.408-66.498-153.899 83.628 1.597 31.936 45.777 241.655 98.47 178.31 19.259-23.163 37.871-42.748 37.871-42.748 9.242 6.14 20.307 9.272 31.912 8.147l.897-.765c-.281 2.876-.157 5.689.359 9.019-13.572 15.167-9.584 17.83-36.723 23.416-27.457 5.659-11.326 15.734-.797 18.367 12.768 3.193 42.305 7.716 62.268-20.224l-.795 3.188c5.325 4.26 4.965 30.619 5.72 49.452.756 18.834 2.017 36.409 5.856 46.771 3.839 10.36 8.369 37.05 44.036 29.406 29.809-6.388 52.6-15.582 54.677-101.107"
        fill="#000"
        stroke="#000"
        strokeWidth={37.3953}
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />
      <path
        d="M402.395 271.23c-50.302 10.376-53.76-6.655-53.76-6.655 53.111-78.808 75.313-178.843 56.153-203.326-52.27-66.785-142.752-35.2-144.262-34.38l-.486.087c-9.938-2.063-21.06-3.292-33.56-3.496-22.761-.373-40.026 5.967-53.127 15.902 0 0-161.411-66.495-153.904 83.63 1.597 31.938 45.776 241.657 98.471 178.312 19.26-23.163 37.869-42.748 37.869-42.748 9.243 6.14 20.308 9.272 31.908 8.147l.901-.765c-.28 2.876-.152 5.689.361 9.019-13.575 15.167-9.586 17.83-36.723 23.416-27.459 5.659-11.328 15.734-.796 18.367 12.768 3.193 42.307 7.716 62.266-20.224l-.796 3.188c5.319 4.26 9.054 27.711 8.428 48.969-.626 21.259-1.044 35.854 3.147 47.254 4.191 11.4 8.368 37.05 44.042 29.406 29.809-6.388 45.256-22.942 47.405-50.555 1.525-19.631 4.976-16.729 5.194-34.28l2.768-8.309c3.192-26.611.507-35.196 18.872-31.203l4.463.392c13.517.615 31.208-2.174 41.591-7 22.358-10.376 35.618-27.7 13.573-23.148z"
        fill="#336791"
      />
    </g>
  </svg>
        </>,
        texto: 'PostgreSQL'
    },
    {
        svg: <>
<svg className="w-14 h-14" fill="none" viewBox="0 0 120 258"><path fill="#47A248" d="M83.009 28.756C72.133 15.909 62.767 2.86 60.854.15a.488.488 0 0 0-.705 0c-1.913 2.71-11.28 15.758-22.155 28.605-93.353 118.536 14.703 198.531 14.703 198.531l.906.602c.806 12.346 2.82 30.111 2.82 30.111h8.056s2.014-17.665 2.82-30.111l.906-.702c.101 0 108.157-79.895 14.804-198.431ZM60.45 225.48s-4.834-4.115-6.143-6.223v-.2l5.84-129.076c0-.401.605-.401.605 0l5.841 129.076v.2c-1.31 2.108-6.143 6.223-6.143 6.223Z"/></svg>
        </>,
        texto: 'MongoDB'
    },
    {
        svg: <>
<svg viewBox="0 0 109 113" fill="none"><path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supabase__paint0_linear)"/><path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supabase__paint1_linear)" fill-opacity="0.2"/><path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E"/><defs><linearGradient id="supabase__paint0_linear" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse"><stop stop-color="#249361"/><stop offset="1" stop-color="#3ECF8E"/></linearGradient><linearGradient id="supabase__paint1_linear" x1="36.1558" y1="30.578" x2="54.4844" y2="65.0806" gradientUnits="userSpaceOnUse"><stop/><stop offset="1" stop-opacity="0"/></linearGradient></defs></svg>
        </>,
        texto: 'Supabase'
    },
    {
        svg: <>
<svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33" fill="#DE4C36"/></svg>
        </>,
        texto: 'Git'
    },
    {
        svg: <>
<svg fill="none" viewBox="0 0 600 600"><path fill="#FF9100" d="M213.918 560.499c23.248 9.357 48.469 14.909 74.952 15.834 35.84 1.252 69.922-6.158 100.391-20.234-36.537-14.355-69.627-35.348-97.869-61.448-18.306 29.31-45.382 52.462-77.474 65.848Z"/><path fill="#FFC400" d="M291.389 494.66c-64.466-59.622-103.574-145.917-100.269-240.568.108-3.073.27-6.145.46-9.216a166.993 166.993 0 0 0-36.004-5.241 167.001 167.001 0 0 0-51.183 6.153c-17.21 30.145-27.594 64.733-28.888 101.781-3.339 95.611 54.522 179.154 138.409 212.939 32.093-13.387 59.168-36.51 77.475-65.848Z"/><path fill="#FF9100" d="M291.39 494.657c14.988-23.986 24.075-52.106 25.133-82.403 2.783-79.695-50.792-148.251-124.942-167.381-.19 3.071-.352 6.143-.46 9.216-3.305 94.651 35.803 180.946 100.269 240.568Z"/><path fill="#DD2C00" d="M308.231 20.858C266 54.691 232.652 99.302 212.475 150.693c-11.551 29.436-18.81 61.055-20.929 94.2 74.15 19.13 127.726 87.686 124.943 167.38-1.058 30.297-10.172 58.39-25.134 82.404 28.24 26.127 61.331 47.093 97.868 61.447 73.337-33.9 125.37-106.846 128.383-193.127 1.952-55.901-19.526-105.724-49.875-147.778-32.051-44.477-159.5-194.36-159.5-194.36Z"/></svg>
        </>,
        texto: 'Firebase'
    },
    {
        svg: <>
  <svg
    viewBox="0 0 48 46"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#863bff"
      d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z"
    />

    <mask
      id="viteMask"
      x="0"
      y="0"
      width="48"
      height="46"
      maskUnits="userSpaceOnUse"
      style={{ maskType: "alpha" }}
    >
      <path
        fill="#000"
        d="M25.842 44.938c-.664.844-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.183c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.498 0-3.579-1.842-3.579H1.133c-.92 0-1.456-1.04-.92-1.787L9.91.473c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.578 1.842 3.578h11.377c.943 0 1.473 1.088.89 1.832L25.843 44.94z"
      />
    </mask>

    <g mask="url(#viteMask)">
      <ellipse
        cx="41.412"
        cy="6.333"
        rx="5.971"
        ry="9.665"
        fill="#47bfff"
        transform="rotate(37.892 41.412 6.333)"
      />
      <ellipse
        cx="38.418"
        cy="32.4"
        rx="5.971"
        ry="15.297"
        fill="#47bfff"
        transform="rotate(37.892 38.418 32.4)"
      />
    </g>
  </svg>
        </>,
        texto: 'Vite'
    },
    {
        svg: <>
<svg viewBox="0 -6 256 256" preserveAspectRatio="xMidYMid"><path d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z" fill="#764ABC"/></svg>
        </>,
        texto: 'Redux'
    },




]


export default function Teste() {
    const br = {
        header: {
            title: 'Quem sou eu?',
            tipos: ['Desenvolvedor Full-Stack', 'Analista de Sistemas', 'Escritor e Professor nas horas vagas'],
            desc: 'Desenvolvedor Full-Stack criando experiências digitais inovadoras com paixão e precisão.',
            btn_falar: 'Fale Comigo',
            btn_projeto: 'Ver Projetos'
        },
        main: {
            servico: {
                title: 'Meus Serviços',
                subtitle: 'O que faço',
                desc: 'Soluções eficazes para aumentar sua visibiliade e imapcto no mundo digital.',
                projetos: [
                    {
                        title: 'Software Developer',
                        desc: 'Desenvolvimento de soluções completas com tecnologias modernas do mercado.',
                        rodape: 'Full Stack',
                        icone: <Code size={30}/>
                    },
                    {
                        title: 'Sites Profissionais',
                        desc: 'Sites rápidos, modernos e pensados para conversão. Presença digital que gera credibilidade e atrai clientes.',
                        rodape: 'Web',
                        icone: <Globe size={30}/>
                    },
                    {
                        title: 'Marketing Digital',
                        desc: 'Estratégias completas de marketing digital para aumentar a presença e visibilidade da sua marca.',
                        rodape: 'Digital',
                        icone: <Target size={30}/>
                    },
                    {
                        title: 'Tráfego Pago',
                        desc: 'Gestão inteligente de campanhas patrocinadas para maximizar conversões e resultados.',
                        rodape: 'Ads',
                        icone: <LineChart size={30}/>
                    },
                    {
                        title: 'Automações',
                        desc: 'Automatize processos e reduza trabalho manual. Chatbots, fluxos de atendimento e rotinas inteligentes.',
                        rodape: 'Automação',
                        icone: <Bot size={30}/>
                    },
                    {
                        title: 'Sistemas Personalizados',
                        desc: 'Soluções sob medida para organizar e escalar seu negócio. Painéis, CRMs e ERPs do jeito que você precisa.',
                        rodape: 'Sistemas',
                        icone: <Settings size={30}/>
                    },
                ],
                btn_orcamento: 'Faça um orçamento'

            },
            sobre_mim: {
                titulo: "Sobre Mim",
                subtitulo: "Prazer, sou ",
                p_1: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde pariatur atque quos veniam optio, praesentium beatae incidunt accusantium odio culpa provident odit, inventore accusamus! Distinctio dignissimos delectus quam quo dolores!`,
                p_2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde pariatur atque quos veniam optio, praesentium beatae incidunt accusantium odio culpa provident odit, inventore accusamus! Distinctio dignissimos delectus quam quo dolores!`,
                p_3: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde pariatur atque quos veniam optio, praesentium beatae incidunt accusantium odio culpa provident odit, inventore accusamus! Distinctio dignissimos delectus quam quo dolores!`,
                p_4: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde pariatur atque quos veniam optio, praesentium beatae incidunt accusantium odio culpa provident odit, inventore accusamus! Distinctio dignissimos delectus quam quo dolores!`,
                p_5: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde pariatur atque quos veniam optio, praesentium beatae incidunt accusantium odio culpa provident odit, inventore accusamus! Distinctio dignissimos delectus quam quo dolores!`,
                btn_jornada: "Minha Jornada"

            },
            skills: {
                titulo: "Minhas Skills",
                subtitulo: "Minhas Habilidades",
                p: "Tecnologias que utilizo no meu dia a dia"
            },
            projetos: {
                titulo: "Portfólio",
                subtitulo: "Meus Projetos",
                p: "Trabalhos que demonstram minha evolução como desenvolvedor",
                btn_projetos: [
                    'Todos', 'Websites', 'Ferramentas', 'Jogos'
                ],
                projetos: [
                    {
                        img: confereAe,
                        titulo: 'Confere Aê',
                        p: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, debitis!',
                        skills: ['Vue.js', 'Supabase', 'Bootstrap'],
                        tipo: ['Websites', 'Todos'],
                        btn_texto: 'Visitar'
                    }
                ] 
            }
        }
    }

    const en = {
    header: {
        title: "Who am I?",
        tipos: [
        "Full-Stack Developer",
        "Systems Analyst",
        "Writer and part-time Teacher"
        ],
        desc: "Full-Stack Developer creating innovative digital experiences with passion and precision.",
        btn_falar: "Contact Me",
        btn_projeto: "View Projects"
    }
    }

    const root = window.document.documentElement;
    root.style.overflowX = 'hidden';
    const [tamanho, setTamanho] = useState(200);
    const [crescendo, setCrescendo] = useState(true);
    const [scrollado, setScrollado] = useState(false);
    const topicosHeader = [
        {
            texto: 'Início',
            icone: <Home size={18} className="text-white text-shadow-lg"/>
        },
        {
            texto: 'Serviços',
            icone: <Box size={18} className="text-white text-shadow-lg"/>
        },
        {
            texto: 'Sobre',
            icone: <User size={18} className="text-white text-shadow-lg"/>
        },
        {
            texto: 'Projetos',
            icone: <FolderOpen size={18} className="text-white text-shadow-lg"/>
        },
        {
            texto: 'Carreira',
            icone: <Rocket size={18} className="text-white text-shadow-lg"/>
        },
        {
            texto: 'Contato',
            icone: <Mail size={18} className="text-white text-shadow-lg"/>
        },
    ];
    const idiomas = [
        {
            texto: 'br', 
            bandeira: "https://flagcdn.com/w160/br.png"
        },
        {
            texto: 'en', 
            bandeira: "https://flagcdn.com/w160/us.png"
        },
    ]
    const [idiomaAtual, setIdiomaAtual] = useState(idiomas[0]);
    const [mostrarIdiomas, setMostrarIdiomas] = useState(false);
    const [topicoAtual, setTopicoAtual] = useState(topicosHeader[0].texto);
    const traducao = {
        br, en
    }
    const [lang, setLang] = useState('br');
    const [projetoAtual, setProjetoAtual] = useState('Todos');

    const [textoAtual, setTextoAtual] = useState("");
    const [i, setI] = useState(0);
    const [apagando, setApagando] = useState(false);

    useEffect(() => {
        let timeout;

        const textoCompleto = traducao.br.header.tipos[i];

        if (!apagando) {
        timeout = setTimeout(() => {
            setTextoAtual(textoCompleto.substring(0, textoAtual.length + 1));

            if (textoAtual.length + 1 === textoCompleto.length) {
            setTimeout(() => setApagando(true), 1500);
            }
        }, 100);
        } else {
        timeout = setTimeout(() => {
            setTextoAtual(textoCompleto.substring(0, textoAtual.length - 1));

            if (textoAtual.length === 0) {
            setApagando(false);
            setI((prev) => (prev + 1) % traducao.br.header.tipos.length);
            }
        }, 50);
        }

        return () => clearTimeout(timeout);
    }, [textoAtual, apagando, i]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTamanho((prev) => {
                if (prev >= 310) setCrescendo(false);
                if (prev <= 200) setCrescendo(true);

                return crescendo ? prev + 5 : prev - 5;
            });
        }, 50);

        return () => clearInterval(interval);
    }, [crescendo]);

    useEffect(() => {
        const handleScroll = () => setScrollado(window.scrollY > 20);

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div className={`font-[Poppins] min-h-[640vh] flex flex-col bg-[#020617] pt-28`}>
            <img className="fixed z-1 inset-0 opacity-2 object-cover" src={fundo} alt="" />

            <header className={`fixed top-0 left-0 right-0 transition-all duration-200 min-h-21 max-h-21 grid grid-cols-[15%_1fr_20%] justify-items-center items-center px-[7.5%] border-b z-999 ${!scrollado ? 'border-b-[#02061701] bg-[#02061701]' : 'border-b-zinc-300/8 bg-linear-to-r from-[#03050d] to-[#020510]'}`}>
                <span className="flex items-center gap-2">
                    <svg
                        width="42"
                        height="42"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="drop-shadow-[0_0_12px_rgba(59,130,246,0.5)]"
                    >
                        <defs>
                        <linearGradient
                            id="gradG"
                            x1="0%"
                            y1="50%"
                            x2="100%"
                            y2="50%"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0%" stopColor="#00D4FF" />
                            <stop offset="100%" stopColor="#A855F7" />
                        </linearGradient>
                        </defs>

                        <path
                        d="M50 15 A35 35 0 1 0 85 50 H60"
                        stroke="url(#gradG)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        />
                    </svg>

                    <h1 className="text-white text-shadow-xs tracking-wider font-semibold text-xl leading-none">
                        Gabriel
                        <span className="text-base block bg-linear-to-r from-[#3B82F6] via-[#22D3EE] to-[#A855F7] bg-clip-text text-transparent -mt-1">
                            Dev
                        </span>
                    </h1>
                </span>

                <section className="grid grid-cols-6 gap-2 rounded-full p-2 bg-[#0b102b] border border-slate-800/50 min-w-2/3 max-w-2/3">
                    {topicosHeader.map((t, index) => 
                        <div 
                        onClick={() => setTopicoAtual(t.texto)}
                        key={index} className={`flex items-center justify-center text-shadow-sm text-sm text-slate-400 p-2.5 px-1.5 transition-color transition-transform duration-200 hover:text-slate-100 rounded-full cursor-pointer relative ${topicoAtual === t.texto ? 'bg-linear-to-r from-[#00D4FF] via-[#3B82F6] to-[#3B82F6] shadow-[1px_2px_5px_#ffffff4a]' : 'hover:-translate-y-0.75'}`}>
                            {topicoAtual !== t.texto ?
                                t.texto
                            :
                                t.icone
                            }
                        </div>
                    )}
                </section>

                <section className="ml-auto flex gap-4 items-center">
                    <div className="relative" onClick={() => setMostrarIdiomas(!mostrarIdiomas)}>
                        <h2 className="font-medium uppercase text-white text-shadow-xs flex gap-0.5 items-center cursor-pointer">
                            <img className="rounded-full max-w-9 min-w-9 max-h-7 min-h-7 scale-80 cursor-default" src={idiomaAtual.bandeira} alt="" />
                            {idiomaAtual.texto}
                            <ChevronDown className={`${mostrarIdiomas && 'rotate-180'} transition-all duration-150`} size={20}/>
                        </h2>

                        <div className={`absolute min-w-full bottom-0 translate-y-24 flex flex-col transition-all duration-150 bg-black/20 ${mostrarIdiomas ? 'opacity-100' : 'opacity-0'} overflow-hidden`}>
                            {idiomas.map((i, index) =>
                                <span onClick={() => {
                                    setIdiomaAtual(i);
                                    setLang(i.texto);
                                    }} 
                                    key={index} className="flex items-center justify-between px-[17.5%] gap-2 cursor-pointer transition-all duration-200 hover:bg-black/40 p-1 py-2">
                                    <img src={i.bandeira} className="rounded-full min-w-6 max-w-6 max-h-4.75 min-h-4.75" alt="" />

                                    <h2 className="font-medium uppercase text-white text-shadow-xs">
                                        {i.texto}
                                    </h2>
                                </span>
                            )}
                        </div>
                    </div>

                    <span className="w-11.5 h-11.5 scale-90 bg-[#25D366] flex items-center justify-center rounded-full cursor-pointer transition-all duration-150 hover:bg-[#38da74] shadow-[1px_1px_4px_#ffffff4a]">
                        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="-83.77245 -140.29175 726.0279 841.7505">
                            <path d="M407.185 336.283c-6.948-3.478-41.108-20.284-47.477-22.606-6.368-2.318-11-3.476-15.632 3.478-4.632 6.954-17.948 22.606-22.001 27.244-4.052 4.636-8.106 5.218-15.054 1.738-6.948-3.477-29.336-10.813-55.874-34.486-20.655-18.424-34.6-41.176-38.652-48.132-4.054-6.956-.434-10.716 3.045-14.18 3.127-3.114 6.95-8.116 10.423-12.174 3.474-4.056 4.632-6.956 6.948-11.59 2.316-4.639 1.158-8.695-.58-12.172-1.736-3.478-15.632-37.679-21.422-51.592-5.64-13.547-11.368-11.712-15.633-11.927-4.048-.201-8.685-.244-13.316-.244-4.632 0-12.16 1.739-18.53 8.693-6.367 6.956-24.317 23.767-24.317 57.964 0 34.202 24.896 67.239 28.371 71.876 3.475 4.639 48.993 74.818 118.695 104.914 16.576 7.16 29.518 11.434 39.609 14.636 16.644 5.289 31.79 4.542 43.763 2.753 13.349-1.993 41.108-16.807 46.898-33.036 5.79-16.233 5.79-30.144 4.052-33.041-1.736-2.899-6.368-4.638-13.316-8.116m-126.776 173.1h-.093c-41.473-.016-82.15-11.159-117.636-32.216l-8.44-5.01-87.475 22.947 23.348-85.288-5.494-8.745c-23.136-36.798-35.356-79.328-35.338-123 .051-127.431 103.734-231.106 231.22-231.106 61.734.022 119.763 24.094 163.402 67.782 43.636 43.685 67.653 101.754 67.629 163.51-.052 127.442-103.733 231.126-231.123 231.126M477.113 81.55C424.613 28.989 354.795.03 280.407 0 127.136 0 2.392 124.736 2.33 278.053c-.02 49.011 12.784 96.847 37.118 139.019L0 561.167l147.41-38.668c40.617 22.153 86.346 33.83 132.886 33.845h.114c153.255 0 278.01-124.748 278.072-278.068.028-74.301-28.869-144.165-81.369-196.725" fill="#FFF" fill-rule="evenodd"/>
                        </svg>
                    </span>
                </section>
            </header>

            <header className="min-h-screen pt-10 z-1 px-[10%]">
                <div className="absolute top-0 right-0 w-100 h-100 bg-blue-500 opacity-35 blur-[120px] rounded-full translate-x-1/4 -translate-y-1/4"></div>
                <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-700 opacity-60 -translate-x-1/4 translate-y-1/4 blur-[120px] rounded-full"></div>
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-400 opacity-50 blur-[100px] rounded-full transition-all duration-100"
                    style={{
                        width: `${tamanho}px`,
                        height: `${tamanho}px`,
                    }}
                />

                <div className="flex items-center justify-between">
                    <section className="flex flex-col gap-8">
                        <h1 className="text-center text-xs font-medium px-2.75 bg-[#091133] border border-[#00D4FF4a] text-[#17c9ff] text-shadow-xs mr-auto p-2 rounded-full">
                            {traducao.br.header.title}
                        </h1>

                        <h1 className="text-white text-6xl text-shadow-sm tracking-[1.2px] font-medium">
                            <span className="text-7xl">G</span>abriel
                            <br />
                            <span className="text-[#298ee9]">
                                <span className="text-7xl">G</span>rozinski
                            </span>
                        </h1>

                        <h2 className="text-2xl bg-linear-to-r from-[#52aeff] bg-clip-text text-transparent via-[#0377de] to-[#047fea] font-medium font-mono text-shadow-[1px_1px_1px_#ffffff3a]">
                            {textoAtual}
                            <span className="text-neutral-200 text-shadow-sm">
                                |
                            </span>
                        </h2>

                        <p className="text-slate-400 font-medium max-w-3/4 text-shadow-sm">
                            {traducao.br.header.desc}
                        </p>

                        <section className="flex gap-4 font-semibold">
                            <button className="p-4 text-white shadow-[0px_2px_5px_#ffffff3a] bg-linear-to-r from-[#00a6ff] via-[#3B82F6] to-[#692ffc] text-[15px] flex justify-center items-center gap-2.25 rounded-full tracking-[0.6px] px-6.5 cursor-pointer transition-all duration-220 hover:-translate-y-2 hover:shadow-[0px_2px_12px_#ffffff5a]">
                                {traducao.br.header.btn_falar}
                                <ArrowRight/>
                            </button>

                            <button className="p-4 text-white bg-[#13192f] border border-slate-400/24 rounded-full flex justify-center items-center gap-2.25 text-[15px] tracking-[0.6px] px-6.5 cursor-pointer transition-all duration-220 hover:-translate-y-2 hover:border-[#00a6ff8c]">
                                <Eye/>
                                {traducao.br.header.btn_projeto}
                            </button>
                        </section>
                    </section>

                    <img className="object-cover rounded-full max-w-[40vw] max-h-[40vw] mr-auto shadow-[10px_0px_20px_#0000002a]" src={perfil} alt="" />
                </div>

            </header>

            <main className="pt-[10vh]">
                <section className="flex flex-col items-center justify-center pt-16 pb-26 gap-6 relative px-[10%] bg-linear-to-b from-[#020617] via-[#050818] to-[#0c1025]">
                        <div className="absolute top-0 right-0 w-100 h-100 bg-blue-500 opacity-35 blur-[120px] rounded-full translate-x-[42%] -translate-y-1/3"></div>
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-700 opacity-35 -translate-x-[46%] translate-y-[60%] blur-[120px] rounded-full"></div>

                        <h1 className="text-center text-sm font-medium px-3.5 bg-[#091133] border border-[#00D4FF4a] text-[#17c9ff] text-shadow-xs p-2 rounded-full uppercase tracking-[1px] z-2">
                            {traducao.br.main.servico.title}
                        </h1>

                        <h1 className="text-[#298ee9] text-6xl text-shadow-sm tracking-[1.2px] font-medium z-2">
                            {traducao.br.main.servico.subtitle}
                        </h1>

                        <p className="text-slate-400 font-medium max-w-[40%] text-center text-shadow-sm z-2">
                            {traducao.br.main.servico.desc}
                        </p>

                        <section className="flex flex-wrap gap-6 mt-10 z-2">
                            {traducao.br.main.servico.projetos.map((p, index) =>
                                <article
                                key={index}
                                className="rounded-[8%] min-h-84 max-h-92 min-w-[25vw] max-w-[25vw] p-6.5 px-10 bg-[#070c23] border border-slate-500/10 grid grid-rows-[1fr_50%_1fr] justify-items-start group hover:shadow-[0px_1px_8px_#ffffff4a] hover:border-[#00a6ff7a] relative transition-all duration-400 ease hover:-translate-y-1.75"
                                >
                                    <div
                                    className="absolute inset-0 group-hover:bg-sky-300/12 bg-white/2 transition-all duration-200 rounded-[8%]"
                                    />

                                    <span className="shadow-[0px_0px_10px_#ffffff4a] bg-linear-to-b from-[#00a6ff] mt-auto via-[#3B82F6] to-[#3B82F6] group-hover:shadow-[0px_2px_6px_#ffffff3a] group-hover:rotate-4 transition-all duration-400 group-hover:scale-110 rounded-2xl p-4 text-white">
                                        {p.icone}
                                    </span>

                                    <div className="text-shadow-lg flex flex-col gap-2 mt-6">
                                        <h1 className="text-white text-xl font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-[#00a6ff] group-hover:via-[#3B82F6] group-hover:to-[#3B82F6]">
                                            {p.title}
                                        </h1>

                                        <p className="text-slate-300/70 leading-6 text-sm mt-0.5">
                                            {p.desc}
                                        </p>
                                    </div>

                                    <div className="py-4 border-t border-t-neutral-400/10 grid grid-cols-[33%_1fr] items-center min-w-full gap-2">
                                        <h2 className="text-center text-xs font-medium px-2.75 bg-[#091133] border border-[#00D4FF4a] text-[#17c9ff] text-shadow-xs p-2 rounded-full flex items-center justify-center mr-auto">
                                            {p.rodape}
                                        </h2>

                                        <span className="min-h-0.75 max-h-0.75 bg-linear-to-r from-neutral-400/10 via-neutral-400/4 to-neutral-400/0">

                                        </span>
                                    </div>
                                </article>
                            )}
                        </section>

                        <button className="p-5 text-white shadow-[0px_2px_5px_#ffffff3a] bg-linear-to-r from-[#00a6ff] via-[#3B82F6] to-[#692ffc] flex justify-center items-center gap-1.25 rounded-full tracking-[0.6px] px-7 cursor-pointer transition-all duration-320 hover:-translate-y-1 hover:shadow-[0px_2px_12px_#ffffff5a] mt-8 font-semibold z-2 group relative overflow-hidden">
                            {traducao.br.main.servico.btn_orcamento}
                            <ArrowRight size={22} className="group-hover:translate-x-0.5 transition-all duration-320"/>

                            <div
                            className="absolute min-h-full w-1/2 scale-90 group-hover:left-full -translate-x-30 group-hover:translate-x-30 left-0 z-999 transition-all duration-620 blur-[80px] bg-white rounded-full"
                            />
                        </button>
                </section>

                <section className="grid grid-cols-2 px-[10%] items-center gap-10 pt-24">
                    <div className="flex-1 place-self-end self-center">
                        <img className="min-h-[80vh] max-h-[80vh] object-cover rounded-xl" src={perfil} alt="" />
                    </div>

                    <article className="flex flex-col gap-6 items-start z-2">
                        <h1 className="text-center text-sm font-medium px-5.5 bg-[#091133] border border-[#00D4FF4a] text-[#17c9ff] text-shadow-xs p-2 rounded-full uppercase tracking-[1.2px] z-2">
                            {traducao.br.main.sobre_mim.titulo}
                        </h1>

                        <h1 className="text-5xl font-semibold text-white text-shadow-sm tracking-wider">
                            {traducao.br.main.sobre_mim.subtitulo}
                            <span className="text-transparent bg-linear-to-r bg-clip-text from-[#6ebcff] via-[#5eb1fb] to-[#309af7]">
                                Gabriel
                            </span>
                        </h1>

                        <p className="text-neutral-300 text-shadow-sm tracking-wide">
                            {traducao.br.main.sobre_mim.p_1}
                            <div className="my-6"></div>
                            {traducao.br.main.sobre_mim.p_2}
                            <div className="my-6"></div>
                            {traducao.br.main.sobre_mim.p_3}
                            <div className="my-6"></div>
                            {traducao.br.main.sobre_mim.p_3}
                            <div className="my-6"></div>
                            {traducao.br.main.sobre_mim.p_5}
                        </p>

                        <section className="flex mt-4 min-w-full items-center">
                            <button className="px-6 py-3 text-white shadow-[0px_2px_5px_#ffffff3a] bg-linear-to-r from-[#00a6ff] via-[#3B82F6] to-[#692ffc] font-medium flex justify-center items-center gap-1.25 rounded-full tracking-[0.6px] cursor-pointer transition-all duration-320 hover:-translate-y-1 hover:shadow-[0px_2px_12px_#ffffff5a] group relative overflow-hidden text-sm mr-6">
                                {traducao.br.main.sobre_mim.btn_jornada}
                                <ArrowRight size={22} className="group-hover:translate-x-0.5 transition-all duration-320"/>
                            </button>

                            <FaInstagram size={40} className="text-neutral-300 border border-slate-800/40 hover:-translate-y-0.75 hover:border-sky-400 hover:text-sky-400 transition-all duration-220 cursor-pointer bg-[#171c35] p-2.25 rounded-md"/>
                            <FaGithub size={40} className="text-neutral-300 border border-slate-800/40 hover:-translate-y-0.75 hover:border-sky-400 hover:text-sky-400 transition-all duration-220 cursor-pointer bg-[#171c35] p-2.25 rounded-md mx-4"/>
                            <FaLinkedin size={40} className="text-neutral-300 border border-slate-800/40 hover:-translate-y-0.75 hover:border-sky-400 hover:text-sky-400 transition-all duration-220 cursor-pointer bg-[#171c35] p-2.25 rounded-md"/>
                        </section>
                    </article>
                </section>

                <section className="flex flex-col items-center justify-center pt-16 gap-6 relative px-[12%] bg-linear-to-b from-[#020617] via-[#050818] to-[#0c1025] overflow-hidden pb-14">
                    <div className="absolute top-0 left-0 w-100 h-100 bg-blue-500 opacity-35 blur-[120px] rounded-full -translate-x-[42%] -translate-y-1/6"></div>
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-700 opacity-35 translate-x-[46%] translate-y-[20%] blur-[120px] rounded-full"></div>

                    <h1 className="text-center text-sm font-medium px-5 bg-[#091133] border border-[#00D4FF4a] text-[#17c9ff] text-shadow-xs p-2 rounded-full uppercase tracking-[1.2px] z-2">
                        {traducao.br.main.skills.titulo}
                    </h1>

                    <h1 className="text-[#298ee9] text-6xl text-shadow-sm tracking-[1.2px] font-medium z-2">
                        {traducao.br.main.skills.subtitulo}
                    </h1>

                    <p className="text-slate-400 font-medium max-w-[40%] text-center text-shadow-sm z-2">
                        {traducao.br.main.skills.p}
                    </p>

                    <section style={{rowGap: '28px'}} className="grid grid-cols-[repeat(auto-fit,minmax(148px,auto))] min-w-full justify-items-center gap-2 mt-10 z-2">
                        
                        {skills.map((s) =>
                            <div className="min-h-40 min-w-32 max-w-32 max-h-40 p-8 py-0 justify-center items-center gap-5 flex flex-col bg-[#141a33] rounded-2xl border border-slate-800 text-slate-400/90 text-shadow-lg font-mono transition-all duration-400 hover:-translate-y-1 hover:border-sky-500 group hover:text-sky-500 relative group overflow-hidden hover:shadow-[0px_1px_16px_#ffffff2a]">
                                <span className="min-w-18 min-h-18 max-h-18 max-w-18 p-3.5 bg-blue-500/4 rounded-xl group-hover:scale-110 transition-all duration-400 group-hover:bg-sky-200 flex items-center justify-center z-3">
                                        {s.svg}
                                </span>
                                {s.texto}

                                <div
                                className="absolute inset-0 transition-all duration-400 group-hover:bg-sky-100/20 blur-[80px]"
                                />
                            </div>                 
                        )}

                    </section>
                </section>

                <section className="flex flex-col items-center justify-center pt-16 pb-26 gap-6 relative px-[8%] bg-linear-to-b from-[#020617] via-[#050818] to-[#0c1025] overflow-hidden">
                    <div className="absolute top-0 left-0 w-100 h-100 bg-blue-500 opacity-35 blur-[120px] rounded-full -translate-x-[42%] -translate-y-1/6"></div>
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-700 opacity-35 translate-x-[46%] translate-y-[20%] blur-[120px] rounded-full"></div>

                    <h1 className="text-center text-sm font-medium px-5 bg-[#091133] border border-[#00D4FF4a] text-[#17c9ff] text-shadow-xs p-2 rounded-full uppercase tracking-[1.2px] z-2">
                        {traducao.br.main.projetos.titulo}
                    </h1>

                    <h1 className="text-[#298ee9] text-6xl text-shadow-sm tracking-[1.2px] font-medium z-2">
                        {traducao.br.main.projetos.subtitulo}
                    </h1>

                    <p className="text-slate-400 font-medium max-w-[40%] text-center text-shadow-sm z-2">
                        {traducao.br.main.projetos.p}
                    </p>

                    <section style={{rowGap: '28px'}} className="flex flex-wrap justify-center items-center gap-2 mt-10 z-2">
                            {traducao.br.main.projetos.btn_projetos.map((p, index) =>
                                <button key={index} onClick={() => setProjetoAtual(p)} className={`px-4 py-3 border text-shadow-sm flex justify-center items-center gap-1 rounded-full tracking-[0.6px] cursor-pointer transition-all duration-320 group relative overflow-hidden text-sm font-medium ${projetoAtual === p ? 'shadow-[0px_1px_12px_#ffffff3a] bg-linear-to-r from-[#0084ff] via-[#3B82F6] to-[#2f62fc] text-white border-slate-800/40' : 'border-slate-800 hover:text-white text-slate-500 hover:border-sky-400'}`}>
                                    {p}
                                    {projetoAtual === p &&
                                        <Check size={20}/>
                                    }
                                </button>                           
                            )}
                    </section>

                    <section className="grid grid-cols-3 justify-items-center mt-6">
                            {traducao.br.main.projetos.projetos.map((p, index) =>
                                p.tipo.includes(projetoAtual) &&
                                <article className="grid grid-rows-[50%_30%_1fr] min-h-120 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1.25 border border-slate-800 hover:border-sky-400/40 rounded-4xl z-3 bg-slate-900" key={index}>
                                    <div
                                    className="absolute inset-0 group-hover:bg-sky-500/4"
                                    />

                                    <div className="overflow-hidden max-h-full">
                                        <img className="object-cover min-h-full group-hover:scale-112 transition-all duration-300" src={p.img} alt="" />
                                    </div>

                                    <div className="flex flex-col justify-between pt-2 border-t border-t-slate-800/10 px-6 mt-2">
                                        <h1 className="text-white text-shadow-sm font-semibold tracking-wider text-xl group-hover:text-sky-400">
                                            {p.titulo}
                                        </h1>

                                        <p className="text-slate-400 text-sm font-medium">
                                            {p.p}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {p.skills.map((s) =>
                                                <h2 className="text-center text-[10px] font-medium px-3 bg-[#141d43] border border-[#00D4FF4a] text-[#3ad1ff] text-shadow-xs p-2 rounded-full uppercase tracking-[1.2px] z-2">
                                                    {s}
                                                </h2>    
                                            )}

                                        </div>
                                    </div>

                                    <button className="px-6 py-3 text-white shadow-[0px_2px_5px_#ffffff3a] bg-linear-to-r from-[#00a6ff] via-[#3B82F6] to-[#692ffc] font-medium flex flex-row-reverse justify-center items-center gap-1.25 rounded-lg tracking-[0.6px] transition-all duration-320 hover:-translate-y-1 hover:shadow-[0px_2px_12px_#ffffff3a] text-sm my-auto mx-6 cursor-pointer z-4">
                                        {p.btn_texto}
                                        <ExternalLink size={22} />
                                    </button>
                                </article>
                            )}
                    </section>
                </section>
            </main>
        </div>
    )
}