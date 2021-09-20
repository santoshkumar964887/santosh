import React from "react";
import "../../App.css";
export default function Header() {
  return (
    <div>
      <section className="pnavbar">
        <nav className="nav-fixed ">
          <nav>
            <div className="nav-wrapper">
              <a href="#!" className="brand-logo">
                &lt;Santosh kumar /&gt;
              </a>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
              <ul className="right hide-on-med-and-down nav-links">
                <li>
                  <a href="#aboutsec">About Me</a>
                </li>
                <li>
                  <a href="#skillssec">Skills</a>
                </li>
                <li>
                  <a href="#projectsec">My Work</a>
                </li>
                <li>
                  <a href="#achivement">My Achievement </a>
                </li>
                <li>
                  <a href="#projectsec">Certificates</a>
                </li>
                <li>
                  <a href="#contactsec">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <a href="#aboutsec">About Me</a>
          </li>
          <li>
            <a href="#skillssec">Skills</a>
          </li>
          <li>
            <a href="#projectsec">My Work</a>
          </li>
          <li>
            <a href="#achivement">My Achievement </a>
          </li>
          <li>
            <a href="#projectsec">Certificates</a>
          </li>
          <li>
            <a href="#contactsec">Contact</a>
          </li>
        </ul>
      </section>
    </div>
  );
}
