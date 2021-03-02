import React from "react";
import { Provider } from "react-redux";
import "./index.css";
import store from "./store";
import Home from "./Home";

export default () =>
  <Provider store={store}>
        <div id="Stage">

<div class="App" style={{ float: 'left', paddingRight: '5px' }}>

  <div class="wrap-app">
    <ul class="ant-menu menu__header sticky-top ant-menu-dark ant-menu-root ant-menu-horizontal" role="menu" style={{ textAlign: 'left' }}>
      <li class="ant-menu-submenu ant-menu-submenu-horizontal ant-menu-overflowed-submenu" role="menuitem" style={{ display: 'none' }}>
        <div class="ant-menu-submenu-title" role="button" aria-expanded="false" aria-haspopup="true">
          <span>···</span>
          <i class="ant-menu-submenu-arrow">
          </i>
        </div>
      </li>
      <li class="ant-menu-item menu__heading-item item-logo ant-menu-item-only-child" role="menuitem">
        <div style={{ marginTop: '10px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="38" viewBox="0 0 35 38" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7413 32.8995L16.2449 32.676L3.64822 26.6975L3.61525 31.5955C3.61484 31.6084 3.61304 31.621 3.61304 31.6339V33.3427V35.1524C3.61982 36.1829 4.23245 37.1041 5.25271 37.6168C5.76131 37.8724 6.31881 38.0001 6.87631 38.0001C7.43686 38.0001 7.99699 37.8709 8.50767 37.6126L17.613 33.2551L16.7413 32.8995Z" fill="url(#paint0_linear)">
            </path>
            <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="35" height="34">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.22583 0.0419922H34.7414V33.3182H0.22583V0.0419922Z" fill="white">
              </path>
            </mask>
            <g mask="url(#mask0)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M32.4194 6.88074L19.8055 0.578559C18.3733 -0.137069 16.5935 -0.137309 15.1615 0.578559L2.5473 6.88074C1.1151 7.59625 0.225586 8.92983 0.225586 10.3611V22.9653C0.225586 24.3966 1.1151 25.7302 2.5473 26.4458L14.3819 31.9544L17.4504 33.318L32.4194 26.4458C33.8516 25.73 34.7412 24.3965 34.7412 22.9653V10.3611C34.7412 8.92995 33.8516 7.59637 32.4194 6.88074Z" fill="url(#paint1_linear)">
              </path>
              <mask id="mask1" maskUnits="userSpaceOnUse" x="0" y="0" width="35" height="34">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M32.4194 6.88074L19.8055 0.578559C18.3733 -0.137069 16.5935 -0.137309 15.1615 0.578559L2.5473 6.88074C1.1151 7.59625 0.225586 8.92983 0.225586 10.3611V22.9653C0.225586 24.3966 1.1151 25.7302 2.5473 26.4458L14.3819 31.9544L17.4504 33.318L32.4194 26.4458C33.8516 25.73 34.7412 24.3965 34.7412 22.9653V10.3611C34.7412 8.92995 33.8516 7.59637 32.4194 6.88074Z" fill="white">
                </path>
              </mask>
              <g mask="url(#mask1)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5017 17.5081C20.9336 16.8808 21.9142 15.6021 21.9142 14.1265C21.9142 12.0313 19.9371 10.3329 17.4984 10.3329C15.0595 10.3329 13.0825 12.0313 13.0825 14.1265C13.0825 15.6455 14.1216 16.9559 15.6226 17.5618V22.2008C15.6226 23.0332 16.4006 23.7143 17.3514 23.7143H17.7729C18.7239 23.7143 19.5017 23.0332 19.5017 22.2008V17.5081Z" fill="#FAFAFA">
                </path>
              </g>
            </g>
            <defs>
              <linearGradient id="paint0_linear" x1="2.27095" y1="53.5952" x2="24.4827" y2="34.2615" gradientUnits="userSpaceOnUse">
                <stop stop-color="#00EAF8">
                </stop>
                <stop offset="0.31364" stop-color="#17C7F6">
                </stop>
                <stop offset="1" stop-color="#6D42EF">
                </stop>
              </linearGradient>
              <linearGradient id="paint1_linear" x1="-17.2048" y1="17.0127" x2="16.7265" y2="51.8627" gradientUnits="userSpaceOnUse">
                <stop stop-color="#00EAF8">
                </stop>
                <stop offset="1" stop-color="#6D42EF">
                </stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </li>
      <li class="ant-menu-submenu ant-menu-submenu-horizontal ant-menu-overflowed-submenu" role="menuitem" style={{ display: 'none' }}>
        <div class="ant-menu-submenu-title" role="button" aria-expanded="false" aria-haspopup="true">
          <span>···</span>
          <i class="ant-menu-submenu-arrow">
          </i>
        </div>
      </li>
      <li class="ant-menu-item menu__heading-item item-trustkey ant-menu-item-only-child" role="menuitem">
        <a class="menu__heading-trustkey" href="/home">TrustKeys</a>
      </li>
      <li class="ant-menu-submenu ant-menu-submenu-horizontal ant-menu-overflowed-submenu" role="menuitem" style={{ display: 'none' }}>
        <div class="ant-menu-submenu-title" role="button" aria-expanded="false" aria-haspopup="true">
          <span>···</span>
          <i class="ant-menu-submenu-arrow">
          </i>
        </div>
      </li>
      <li class="ant-menu-item menu__heading-item ant-menu-item-only-child" role="menuitem">
        <a class="menu__heading-text" href="/">Giao dịch</a>
      </li>
      <li class="ant-menu-submenu ant-menu-submenu-horizontal ant-menu-overflowed-submenu" role="menuitem" style={{ display: 'none' }}>
        <div class="ant-menu-submenu-title" role="button" aria-expanded="false" aria-haspopup="true">
          <span>···</span>
          <i class="ant-menu-submenu-arrow">
          </i>
        </div>
      </li>
      <li class="ant-menu-item menu__heading-item ant-menu-item-only-child" role="menuitem">
        <a class="menu__heading-text" href="/market">Thị trường</a>
      </li>
      <li class="ant-menu-submenu ant-menu-submenu-horizontal ant-menu-overflowed-submenu" role="menuitem" style={{ display: 'none' }}>
        <div class="ant-menu-submenu-title" role="button" aria-expanded="false" aria-haspopup="true">
          <span>···</span>
          <i class="ant-menu-submenu-arrow">
          </i>
        </div>
      </li>
      <li class="ant-menu-submenu ant-menu-submenu-horizontal  menu__heading-item flr" role="menuitem">

        <div class="ant-menu-submenu-title" role="button" aria-expanded="false" aria-haspopup="true">
                <span class="menu__heading-text menu_heading-nn">Ngôn ngữ
          <span role="img" aria-label="caret-down" class="anticon anticon-caret-down" style={{ marginLeft: '6px' }}>
          <svg viewBox="0 0 1024 1024" focusable="false" class="" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z">

                  </path>
                  </svg>
                  </span>
                </span>

          <i class="ant-menu-submenu-arrow">
          </i>
        </div>
      </li>
      <li class="ant-menu-submenu ant-menu-submenu-horizontal ant-menu-overflowed-submenu" role="menuitem" style={{ display: 'none' }}>
        <div class="ant-menu-submenu-title" role="button" aria-expanded="false" aria-haspopup="true">
          <span>···</span>
          <i class="ant-menu-submenu-arrow">
          </i>
        </div>
      </li>
      <li class="ant-menu-item menu__heading-item flr menu__tutorial ant-menu-item-only-child" role="menuitem">
        <a class="menu__heading-text" href="/guide">Hướng dẫn</a>
      </li>
      <li class="ant-menu-submenu ant-menu-submenu-horizontal ant-menu-overflowed-submenu" role="menuitem" style={{ display: 'none' }}>
        <div class="ant-menu-submenu-title" role="button" aria-expanded="false" aria-haspopup="true">
          <span>···</span>
          <i class="ant-menu-submenu-arrow">
          </i>
        </div>
      </li>
      <li class="ant-menu-item flr menu__heading-item menu__login ant-menu-item-only-child" role="menuitem">
        <a class="menu__heading-text" href="/login">Đăng nhập</a>
      </li>
      <li class="ant-menu-submenu ant-menu-submenu-horizontal ant-menu-overflowed-submenu" role="menuitem" style={{ display: 'none' }}>
        <div class="ant-menu-submenu-title" role="button" aria-expanded="false" aria-haspopup="true">
          <span>···</span>
          <i class="ant-menu-submenu-arrow">
          </i>
        </div>
      </li>
      <li class="ant-menu-item menu__heading-item flr menu__qa-link ant-menu-item-only-child" role="menuitem">
        <a class="menu__heading-text" href="/faqs">Hỏi đáp</a>
      </li>
      <li class="ant-menu-submenu ant-menu-submenu-horizontal ant-menu-overflowed-submenu" role="menuitem" style={{ visibility: 'hidden', position: 'absolute', display: 'none' }}>
        <div class="ant-menu-submenu-title" role="button" aria-expanded="false" aria-haspopup="true">
          <span>···</span>
          <i class="ant-menu-submenu-arrow">
          </i>
        </div>
      </li>
    </ul>
    <div class="App-header">
      <div class="landing">
        <div class="landing-layout">
          <div class="landing__banner">
            <div class="landing__banner-layout landing__banner-layout-img-en">
              <div class="ant-row" style={{ height: '100px' }}>
                <div class="ant-col ant-col-12 d-flex self-center">

                </div>
                <div class="ant-col ant-col-12 landing__banner-right  ">
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="landing__market max-width ma">
            <div class="mt-large">
              <div class="open-order-wrap">
                <div class="ant-tabs ant-tabs-top ant-tabs-card ant-tabs-no-animation" style={{ textAlign: 'left' }}>
                  <div role="tablist" class="ant-tabs-bar ant-tabs-top-bar ant-tabs-card-bar" tabindex="0" style={{ borderWidth: '0px 0px 2px', borderColor: 'rgb(255, 255, 255)', paddingLeft: '0px', marginBottom: '0px', fontWeight: '500' }}>
                    <div class="ant-tabs-nav-container">

                      <span unselectable="unselectable" class="ant-tabs-tab-prev ant-tabs-tab-btn-disabled">
                        <span class="ant-tabs-tab-prev-icon">
                          <span role="img" aria-label="left" class="anticon anticon-left ant-tabs-tab-prev-icon-target">
                            <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                              <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z">
                              </path>
                            </svg>
                          </span>
                        </span>
                      </span>
                      <span unselectable="unselectable" class="ant-tabs-tab-next ant-tabs-tab-btn-disabled">
                        <span class="ant-tabs-tab-next-icon">
                          <span role="img" aria-label="right" class="anticon anticon-right ant-tabs-tab-next-icon-target">
                            <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z">
                              </path>
                            </svg>
                          </span>
                        </span>
                      </span>
                      <div class="ant-tabs-nav-wrap">
                        <div class="ant-tabs-nav-scroll">
                          <div class="ant-tabs-nav ant-tabs-nav-animated">
         
                            <div>
                              <div role="tab" aria-disabled="false" aria-selected="true" class="ant-tabs-tab-active ant-tabs-tab" style={{ marginRight: '5px' }}>
                                <div style={{ width: '88px' }}>USDT</div>
                              </div>
                              <div role="tab" aria-disabled="false" aria-selected="false" class=" ant-tabs-tab" style={{ marginRight: '5px' }}>
                                <div style={{ width: '88px' }}>BTC</div>
                              </div>
                              <div role="tab" aria-disabled="false" aria-selected="false" class=" ant-tabs-tab" style={{ marginRight: '0px' }}>
                                <div style={{ width: '88px' }}>ETH</div>
                              </div>
                              <div role="tab" aria-disabled="false" aria-selected="false" class=" ant-tabs-tab" style={{ marginRight: '0px' }}>
                                <div style={{ width: '88px' }}>KNC</div>
                              </div>
                              <div role="tab" aria-disabled="false" aria-selected="false" class=" ant-tabs-tab" style={{ marginRight: '0px' }}>
                   
                   
                                <div style={{ width: '88px' }}>LINK</div>
                              </div>
                              <div role="tab" aria-disabled="false" aria-selected="false" class=" ant-tabs-tab" style={{ marginRight: '0px' }}>
                                <div style={{ width: '88px' }}>DOGE</div>
                              </div>
                            </div>                            
                            <div class="ant-tabs-ink-bar ant-tabs-ink-bar-animated" style={{ display: 'block', transform: 'translate3d(0px, 0px, 0px)', width: '122px' }}>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div tabindex="0" role="presentation" style={{ width: '0px', height: '0px', overflow: 'hidden', position: 'absolute' }}>
                  </div>
                  <div class="ant-tabs-content ant-tabs-content-no-animated ant-tabs-top-content ant-tabs-card-content">
                    <div role="tabpanel" aria-hidden="false" class="ant-tabs-tabpane ant-tabs-tabpane-active">
                      <div tabindex="0" role="presentation" style={{ width: '0px', height: '0px', overflow: 'hidden', position: 'absolute' }}>
                      </div>
                      <div class="ant-table-wrapper mb-large" style={{ maxWidth: '1400px', overflow: 'auto' }}>
                        <div class="ant-spin-nested-loading">
                          <div class="ant-spin-container">
                            <div class="ant-table">
                              <div class="ant-table-container">
                              
                                <div class="ant-table-content">
                                <table style={{ tableLayout: 'auto' }}>

                                  <thead >
                                    <tr>
                                      <th style={{ width: '28%', textAlign:'center'}}  class="ant-table-cell text-left">
                                        <div class="text-left-header">Tên</div>
                                      </th>
                                      <th style={{ width: '10%'}}   class="ant-table-cell text-left">
                                        <div class="text-left-header">Giá gần nhất</div>
                                      </th>
                                      <th style={{ width: '17%'}} class="ant-table-cell text-left">
                                        <div class="text-left-header">Biến động giá 24h</div>
                                      </th>
                                      <th style={{ width: '15%'}} class="ant-table-cell text-left">
                                        <div class="text-left-header">Giá cao nhất</div>
                                      </th>
                                      <th style={{ width: '15%'}} class="ant-table-cell text-left">
                                        <div class="text-left-header">Giá thấp nhất</div>
                                      </th>
                                      <th style={{ width: '0%'}}  class="ant-table-cell text-left">
                                        <div class="text-left-header">Khối lượng 24h</div>
                                      </th>
                                    </tr>
                                  </thead>
                                  
                                </table>  
                                <Home/>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div tabindex="0" role="presentation" style={{ width: '0px', height: '0px', overflow: 'hidden', position: 'absolute' }}>
                      </div>
                    </div>
                    <div role="tabpanel" aria-hidden="true" class="ant-tabs-tabpane ant-tabs-tabpane-inactive">
                    </div>
                    <div role="tabpanel" aria-hidden="true" class="ant-tabs-tabpane ant-tabs-tabpane-inactive">
                    </div>
                  </div>
                  <div tabindex="0" role="presentation" style={{ width: '0px', height: '0px', overflow: 'hidden', position: 'absolute' }}>
                  </div>
                </div>
              </div>
            </div>
          

          </div>
          <div class="footer">
            <div class="footer-row">

              <div class="ant-row">
                <div class="ant-col ant-col-24">
                  <div class="footer-row2">
                    <a href="https://trustkeys.network" rel="noreferrer" target="_blank" style={{ color: 'white' }}>@TrustKeys 2020. trustkeys.network</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script src="/datafeeds/udf/dist/polyfills.js"></script>
<script src="/datafeeds/udf/dist/bundle.js"></script>
<script url="https://pompdelux.com/bundles/script?v=Xia3p0HJNjxldyhHOGa8_L8qeNoSJ6tEckOdKd3g6uk1"></script>
<script src="/static/js/2.a360305e.chunk.js"></script>
<script src="/static/js/main.7a53ae62.chunk.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.5/lodash.min.js"></script>
<div style={{position: 'absolute', top: '0px', left: '0px', width: '100%'}}>
<div>
<div class="ant-menu-submenu ant-menu-submenu-popup ant-menu-dark  ant-menu-submenu-hidden" style={{left:'1203px', top: '260px'}}>
<ul id="item_5$Menu" class="ant-menu ant-menu-sub ant-menu-hidden ant-menu-vertical" role="menu">
<li class="ant-menu-item menu__heading-item ant-menu-item-only-child" role="menuitem">
<span class="menu__heading-text">Tiếng Anh</span></li>
<li class="ant-menu-item menu__heading-item ant-menu-item-only-child" role="menuitem">
<span class="menu__heading-text">Tiếng Việt</span></li>
</ul></div></div></div>
</div>
  </Provider>;
