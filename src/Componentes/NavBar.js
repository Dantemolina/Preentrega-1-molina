import React from 'react'
import logo from '../imagenes/logo.png'

const NavBar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg">
    <img  class="logo" src={logo}></img>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"      data-bs-target="#navbarSupportedContent"aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sobre mi</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Productos
              </a>
               <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Bazar</a></li>
                <li><a class="dropdown-item" href="#">Deco Artesanal</a></li>
                <li><a class="dropdown-item" href="#">Deco Hogar</a></li>
                <li><a class="dropdown-item" href="#">Mates</a></li>
                <li><a class="dropdown-item" href="#">Organizadores</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>
  </>
  )
}

export default NavBar
