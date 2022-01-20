import React from "react";

import "../assets/style/oauth.sass";

export default function OauthForm({ label }) {
  return (
    <div id="Oauth-form">
      <p className="form-label mb-3">{label}</p>
      <ul className="btns-list">
        <li className="oauth-btn-item">
          <button className="oauth_btn google_btn">
            <i className="fab fa-google-plus-g"></i>
            <span className="d-none d-sm-flex ms-3">google</span>
          </button>
        </li>
        <li className="oauth-btn-item">
          <button className="oauth_btn twitter_btn">
            <i className="fab fa-twitter"></i>
            <span className="d-none d-sm-flex ms-3">twitter</span>
          </button>
        </li>
        <li className="oauth-btn-item">
          <button className="oauth_btn facebook_btn">
            <i className="fab fa-facebook-f"></i>
            <span className="d-none d-sm-flex ms-3">facebook</span>
          </button>
        </li>
      </ul>
    </div>
  );
}
