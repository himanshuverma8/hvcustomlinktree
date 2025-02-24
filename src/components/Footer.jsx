import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterWrapper>
      <div className="footer__content">
        <div className="footer__logo">
          <img src="https://files.hvin.tech/lighting_logo.png" alt="Logo" />
        </div>
        <div className="footer__socials">
          {/* Instagram Icon */}
          <a href="https://www.instagram.com/hv__in/" target="_blank" rel="noopener noreferrer">
            <svg
              className="social__icon"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <a href="https://x.com/hv__in" target="_blank" rel="noopener noreferrer">
            <svg
              className="social__icon"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <a href="https://www.linkedin.com/in/himanshuver/" target="_blank" rel="noopener noreferrer">
            <svg
              className="social__icon"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                clipRule="evenodd"
              />
              <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
            </svg>
          </a>
        </div>
        <div className="footer__copyright">
          &copy; {new Date().getFullYear()} hv
        </div>
      </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  background-color: transparent;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 2;

  .footer__content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .footer__logo img {
    transition: transform 0.3s ease, fill 0.3s ease;
    height: 40px;
    width: auto;
  }

  .footer__logo img:hover {
    transform: scale(1.2);
  }

  .footer__socials {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-bottom: 10px;
  }

  .social__icon {
    width: 36px;
    height: 36px;
    fill: #fff;
    transition: transform 0.3s ease, fill 0.3s ease;
    cursor: pointer;
  }

  .social__icon:hover {
    transform: scale(1.2); /* Zoom in on hover */
    fill: #7775fc; /* Change color to the background color on hover */
  }

  .footer__copyright {
    font-size: 14px;
    color: #ccc;
  }
`;
