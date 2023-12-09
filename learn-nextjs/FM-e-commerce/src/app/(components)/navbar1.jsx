
import Link from 'next/link';

const Navbar1 = () => {
  return (
<div id="nav-belt" className='w-full text-sm flex static float-none h-16 bg-green-900'>
  <div className="nav-left">
    <div id="nav-logo" className="nav-celnav-t11 nav-progressive-attribute">
      <a
        href="/ref=nav_logo"
        id="nav-logo-sprites"
        className="nav-logo-link nav-progressive-attribute"
        aria-label="Amazon"
      >
        <span className="nav-sprite nav-logo-base" />
        <span
          id="logo-ext"
          className="nav-sprite nav-logo-ext nav-progressive-content"
        />
        <span className="nav-logo-locale">.us</span>
      </a>
    </div>
    <div id="nav-global-location-slot">
      <span
        id="nav-global-location-data-modal-action"
        className="a-declarative nav-progressive-attribute"
        data-a-modal='{"width":375, "closeButton":"false","popoverLabel":"Choose your location", "ajaxHeaders":{"anti-csrftoken-a2z":"hLEERXzFR7ATiLxM/+CX9seLrp6RgFIxuJvCtnVOSDVuAAAAAGVkzDQAAAAB"}, "name":"glow-modal", "url":"/portal-migration/hz/glow/get-rendered-address-selections?deviceType=desktop&pageType=Gateway&storeContext=NoStoreName&actionSource=desktop-modal", "footer":"<span class=\"a-declarative\" data-action=\"a-popover-close\" data-a-popover-close=\"{}\"><span class=\"a-button a-button-primary\"><span class=\"a-button-inner\"><button name=\"glowDoneButton\" class=\"a-button-text\" type=\"button\">Done</button></span></span></span>","header":"Choose your location"}'
        data-action="a-modal"
      >
        <a
          id="nav-global-location-popover-link"
          className="nav-a nav-a-2 a-popover-trigger a-declarative nav-progressive-attribute"
          tabIndex={0}
        >
          <div
            className="nav-sprite nav-progressive-attribute"
            id="nav-packard-glow-loc-icon"
          />
          <div id="glow-ingress-block">
            <span
              className="nav-line-1 nav-progressive-content"
              id="glow-ingress-line1"
            >
              Delivering to Lebanon 66952
            </span>
            <span
              className="nav-line-2 nav-progressive-content"
              id="glow-ingress-line2"
            >
              Update location
            </span>
          </div>
        </a>
      </span>
      <input
        data-addnewaddress="add-new"
        id="unifiedLocation1ClickAddress"
        name="dropdown-selection"
        type="hidden"
        defaultValue="add-new"
        className="nav-progressive-attribute"
      />
      <input
        data-addnewaddress="add-new"
        id="ubbShipTo"
        name="dropdown-selection-ubb"
        type="hidden"
        defaultValue="add-new"
        className="nav-progressive-attribute"
      />
      <input
        id="glowValidationToken"
        name="glow-validation-token"
        type="hidden"
        defaultValue="hLEERXzFR7ATiLxM/+CX9seLrp6RgFIxuJvCtnVOSDVuAAAAAGVkzDQAAAAB"
        className="nav-progressive-attribute"
      />
      <input
        id="glowDestinationType"
        name="glow-destination-type"
        type="hidden"
        defaultValue="REALM_DEFAULT"
        className="nav-progressive-attribute"
      />
    </div>
    <div
      id="nav-global-location-toaster-script-container"
      className="nav-progressive-content"
    ></div>
  </div>
  <div className="nav-fill">
    <div id="nav-search">
      <div id="nav-bar-left" />
      <form
        id="nav-search-bar-form"
        acceptCharset="utf-8"
        action="/s/ref=nb_sb_noss"
        className="nav-searchbar nav-progressive-attribute"
        method="GET"
        name="site-search"
        role="search"
      >
        <div className="nav-left">
          <div id="nav-search-dropdown-card">
            <div className="nav-search-scope nav-sprite">
              <div className="nav-search-facade" data-value="search-alias=aps">
                <span
                  id="nav-search-label-id"
                  className="nav-search-label nav-progressive-content"
                  style={{ width: "auto" }}
                >
                  All
                </span>
                <i className="nav-icon" />
              </div>
              <label
                id="searchDropdownDescription"
                htmlFor="searchDropdownBox"
                className="nav-progressive-attribute"
                style={{ display: "none" }}
              >
                Select the department you want to search in
              </label>
              <select
                aria-describedby="searchDropdownDescription"
                className="nav-search-dropdown searchSelect nav-progressive-attrubute nav-progressive-search-dropdown"
                data-nav-digest="lMIEH05dUXu7WCIuvsTXdyIVBpU="
                data-nav-selected={0}
                id="searchDropdownBox"
                name="url"
                style={{ display: "block", top: "2.5px" }}
                tabIndex={0}
                title="Search in"
              >
                <option selected="selected" value="search-alias=aps">
                  All Departments
                </option>
                <option value="search-alias=cyber-monday">Cyber Monday</option>
                <option value="search-alias=alexa-skills">Alexa Skills</option>
                <option value="search-alias=amazon-devices">
                  Amazon Devices
                </option>
                <option value="search-alias=amazon-pharmacy">
                  Amazon Pharmacy
                </option>
                <option value="search-alias=warehouse-deals">
                  Amazon Warehouse
                </option>
                <option value="search-alias=appliances">Appliances</option>
                <option value="search-alias=mobile-apps">
                  Apps &amp; Games
                </option>
                <option value="search-alias=arts-crafts">
                  Arts, Crafts &amp; Sewing
                </option>
                <option value="search-alias=audible">
                  Audible Books &amp; Originals
                </option>
                <option value="search-alias=automotive">
                  Automotive Parts &amp; Accessories
                </option>
                <option value="search-alias=baby-products">Baby</option>
                <option value="search-alias=beauty">
                  Beauty &amp; Personal Care
                </option>
                <option value="search-alias=stripbooks">Books</option>
                <option value="search-alias=popular">CDs &amp; Vinyl</option>
                <option value="search-alias=mobile">
                  Cell Phones &amp; Accessories
                </option>
                <option value="search-alias=fashion">
                  Clothing, Shoes &amp; Jewelry
                </option>
                <option value="search-alias=fashion-womens">
                  &nbsp;&nbsp;&nbsp;Women
                </option>
                <option value="search-alias=fashion-mens">
                  &nbsp;&nbsp;&nbsp;Men
                </option>
                <option value="search-alias=fashion-girls">
                  &nbsp;&nbsp;&nbsp;Girls
                </option>
                <option value="search-alias=fashion-boys">
                  &nbsp;&nbsp;&nbsp;Boys
                </option>
                <option value="search-alias=fashion-baby">
                  &nbsp;&nbsp;&nbsp;Baby
                </option>
                <option value="search-alias=collectibles">
                  Collectibles &amp; Fine Art
                </option>
                <option value="search-alias=computers">Computers</option>
                <option value="search-alias=financial">
                  Credit and Payment Cards
                </option>
                <option value="search-alias=digital-music">
                  Digital Music
                </option>
                <option value="search-alias=electronics">Electronics</option>
                <option value="search-alias=lawngarden">
                  Garden &amp; Outdoor
                </option>
                <option value="search-alias=gift-cards">Gift Cards</option>
                <option value="search-alias=grocery">
                  Grocery &amp; Gourmet Food
                </option>
                <option value="search-alias=handmade">Handmade</option>
                <option value="search-alias=hpc">
                  Health, Household &amp; Baby Care
                </option>
                <option value="search-alias=local-services">
                  Home &amp; Business Services
                </option>
                <option value="search-alias=garden">Home &amp; Kitchen</option>
                <option value="search-alias=industrial">
                  Industrial &amp; Scientific
                </option>
                <option value="search-alias=prime-exclusive">
                  Just for Prime
                </option>
                <option value="search-alias=digital-text">Kindle Store</option>
                <option value="search-alias=fashion-luggage">
                  Luggage &amp; Travel Gear
                </option>
                <option value="search-alias=luxury">Luxury Stores</option>
                <option value="search-alias=magazines">
                  Magazine Subscriptions
                </option>
                <option value="search-alias=movies-tv">Movies &amp; TV</option>
                <option value="search-alias=mi">Musical Instruments</option>
                <option value="search-alias=office-products">
                  Office Products
                </option>
                <option value="search-alias=pets">Pet Supplies</option>
                <option value="search-alias=luxury-beauty">
                  Premium Beauty
                </option>
                <option value="search-alias=instant-video">Prime Video</option>
                <option value="search-alias=smart-home">Smart Home</option>
                <option value="search-alias=software">Software</option>
                <option value="search-alias=sporting">
                  Sports &amp; Outdoors
                </option>
                <option value="search-alias=specialty-aps-sns">
                  Subscribe &amp; Save
                </option>
                <option value="search-alias=subscribe-with-amazon">
                  Subscription Boxes
                </option>
                <option value="search-alias=tools">
                  Tools &amp; Home Improvement
                </option>
                <option value="search-alias=toys-and-games">
                  Toys &amp; Games
                </option>
                <option value="search-alias=under-ten-dollars">
                  Under $10
                </option>
                <option value="search-alias=videogames">Video Games</option>
              </select>
            </div>
          </div>
        </div>
        <div className="nav-fill">
          <div className="nav-search-field ">
            <label htmlFor="twotabsearchtextbox" style={{ display: "none" }}>
              Search Amazon
            </label>
            <input
              type="text"
              id="twotabsearchtextbox"
              defaultValue=""
              name="field-keywords"
              autoComplete="off"
              placeholder="Search Amazon"
              className="nav-input nav-progressive-attribute"
              dir="auto"
              tabIndex={0}
              aria-label="Search Amazon"
              spellCheck="false"
            />
          </div>
          <div id="nav-iss-attach" />
        </div>
        <div className="nav-right">
          <div className="nav-search-submit nav-sprite">
            <span
              id="nav-search-submit-text"
              className="nav-search-submit-text nav-sprite nav-progressive-attribute"
              aria-label="Go"
            >
              <input
                id="nav-search-submit-button"
                type="submit"
                className="nav-input nav-progressive-attribute"
                defaultValue="Go"
                tabIndex={0}
              />
            </span>
          </div>
        </div>
      </form>
    </div>
  </div>
  <div className="nav-right">
    <div id="nav-tools" className="layoutToolbarPadding">
      <a
        href="/customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=topnav_lang"
        id="icp-nav-flyout"
        className="nav-a nav-a-2 icp-link-style-2"
        aria-label="Choose a language for shopping."
      >
        <span className="icp-nav-link-inner">
          <span className="nav-line-1"></span>
          <span className="nav-line-2">
            <span className="icp-nav-flag icp-nav-flag-us icp-nav-flag-lop" />
            <div>EN</div>
            <span
              className="nav-icon nav-arrow"
              style={{ visibility: "visible" }}
            />
          </span>
        </span>
      </a>
      <a
        href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3Fref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0"
        className="nav-a nav-a-2   nav-progressive-attribute"
        data-nav-ref="nav_ya_signin"
        data-nav-role="signin"
        data-ux-jq-mouseenter="true"
        id="nav-link-accountList"
        tabIndex={0}
        data-csa-c-type="link"
        data-csa-c-slot-id="nav-link-accountList"
        data-csa-c-content-id="nav_ya_signin"
        data-csa-c-id="ce36xc-wkhj8t-5zi4yg-q26kxz"
      >
        <div className="nav-line-1-container">
          <span
            id="nav-link-accountList-nav-line-1"
            className="nav-line-1 nav-progressive-content"
          >
            Hello, sign in
          </span>
        </div>
        <span className="nav-line-2 ">
          Account &amp; Lists
          <span
            className="nav-icon nav-arrow"
            style={{ visibility: "visible" }}
          />
        </span>
      </a>
      <a
        href="/gp/css/order-history?ref_=nav_orders_first"
        className="nav-a nav-a-2   nav-progressive-attribute"
        id="nav-orders"
        tabIndex={0}
      >
        <span className="nav-line-1">Returns</span>
        <span className="nav-line-2">
          &amp; Orders
          <span className="nav-icon nav-arrow" />
        </span>
      </a>
      <a
        href="/gp/cart/view.html?ref_=nav_cart"
        aria-label="0 items in cart"
        className="nav-a nav-a-2 nav-progressive-attribute"
        id="nav-cart"
      >
        <div id="nav-cart-count-container">
          <span
            id="nav-cart-count"
            aria-hidden="true"
            className="nav-cart-count nav-cart-0 nav-progressive-attribute nav-progressive-content"
          >
            0
          </span>
          <span className="nav-cart-icon nav-sprite" />
        </div>
        <div
          id="nav-cart-text-container"
          className=" nav-progressive-attribute"
        >
          <span aria-hidden="true" className="nav-line-1"></span>
          <span aria-hidden="true" className="nav-line-2">
            Cart
            <span className="nav-icon nav-arrow" />
          </span>
        </div>
      </a>
    </div>
  </div>
</div>
  );
};

export default Navbar1;
