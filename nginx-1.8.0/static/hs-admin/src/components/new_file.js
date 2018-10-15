/* DaTouWang URL: www.datouwang.com */
html {
  height: 100%;
}

body {
  overflow:auto; 
  margin: 0 auto;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  font-family: 'Roboto', sans-serif;
  color: #555555;
}

a {
  text-decoration: none;
  color: inherit;
}

* {
  box-sizing: border-box;
}

.menu {
  display: block;
  position: relative;
  cursor: pointer;
}

.menu-title {
  display: block;
  width: 150px;
  height: 40px;
  padding: 12px 0 0;
  background: #9dc852;
  text-align: center;
  color: #ffffff;
  font-weight: bold;
  text-transform: uppercase;
  transition: 0.3s background-color;
}

.menu-title:before {
  content: "";
  display: block;
  height: 0;
  border-top: 5px solid #9dc852;
  border-left: 75px solid transparent;
  border-right: 75px solid transparent;
  border-bottom: 0 solid #dddddd;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 101;
  transition: 0.2s 0.2s border-top ease-out, 0.3s border-top-color;
}

.menu-title:hover {
  background: #8db842;
}

.menu-title:hover:before {
  border-top-color: #8db842;
}

.menu:hover > .menu-title:before {
  border-top-width: 0;
  transition: 0.2s border-top-width ease-in, 0.3s border-top-color;
}

.menu-title:after {
  content: "";
  display: block;
  height: 0;
  border-left: 75px solid transparent;
  border-right: 75px solid transparent;
  border-bottom: 0 solid #ebebeb;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 101;
  transition: 0.2s border-bottom ease-in;
}

.menu:hover > .menu-title:after {
  border-bottom-width: 5px;
  transition: 0.2s 0.2s border-bottom-width ease-out;
}

.menu-title_1nd {
  background: #2E6DA4;
}

.menu-title_1nd:hover {
  background: #2E6DA4;
}

.menu-title_1nd:before {
  border-top-color: #2E6DA4;
}

.menu-title_1nd:hover:before {
  border-top-color: #2E6DA4;
}

.menu-title_2nd {
  background: #4e96b3;
}

.menu-title_2nd:hover {
  background: #3e86a3;
}

.menu-title_2nd:before {
  border-top-color: #4e96b3;
}

.menu-title_2nd:hover:before {
  border-top-color: #3e86a3;
}

.menu-title_3rd {
  background: #c97676;
}

.menu-title_3rd:hover {
  background: #b96666;
}

.menu-title_3rd:before {
  border-top-color: #c97676;
}

.menu-title_3rd:hover:before {
  border-top-color: #b96666;
}

.menu-title_4th {
  background: #dbab58;
}

.menu-title_4th:hover {
  background: #cb9b48;
}

.menu-title_4th:before {
  border-top-color: #dbab58;
}

.menu-title_4th:hover:before {
  border-top-color: #cb9b48;
}

.menu-title_5th {
  background: #31B0D5;
}

.menu-title_5th:hover {
  background: #31B0D5;
}

.menu-title_5th:before {
  border-top-color: #31B0D5;
}

.menu-title_5th:hover:before {
  border-top-color: #31B0D5;
}


.menu-dropdown {
  min-width: 100%;
  text-align: center;
  padding: 15px 0;
  position: absolute;
  background: #ebebeb;
  z-index: 100;
  transition: 0.5s padding, 0.5s background;
}

.menu-dropdown:after {
  content: "";
  display: block;
  height: 0;
  border-top: 5px solid #ebebeb;
  border-left: 75px solid transparent;
  border-right: 75px solid transparent;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 101;
  transition: 0.5s border-top;
}

.menu:not(:hover) > .menu-dropdown {
  padding: 4px 0;
  background: #dddddd;
  z-index: 99;
}

.menu:not(:hover) > .menu-dropdown:after {
  border-top-color: #dddddd;
}

.menu:not(:hover) > .menu-title:after {
  border-bottom-color: #dddddd;
}

.menu-dropdown > * {
  overflow: hidden;
  height: 30px;
  padding: 5px 10px;
  background: transparent;
  white-space: nowrap;
  transition: 0.5s height cubic-bezier(0.73, 0.32, 0.34, 1.5), 0.5s padding cubic-bezier(0.73, 0.32, 0.34, 1.5), 0.5s margin cubic-bezier(0.73, 0.32, 0.34, 1.5), 0.5s 0.2s color, 0.2s background-color;
}

.menu-dropdown > *:hover {
  background: rgba(0, 0, 0, 0.1);
}

.menu:not(:hover) > .menu-dropdown > * {
  visibility: hidden;
  height: 0;
  padding-top: 0;
  padding-bottom: 0;
  margin: 0;
  color: rgba(25, 25, 25, 0);
  transition: 0.5s 0.1s height, 0.5s 0.1s padding, 0.5s 0.1s margin, 0.3s color, 0.6s visibility;
  z-index: 99;
}

.hList > * {
  float: left;
}

.hList > * + * {
  margin-left: 0;
}