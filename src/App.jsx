import "./App.css";

function App() {
  return (
    <>
      <div className="Header-Container">
        <div className="top-header">
          <p>sumer um dois caera acularksajndakslndalknlk</p>
        </div>
        <div className="nav-header">
          <div className="logo-header">
            <p className="p-logo-header">Exclusive</p>
          </div>
          <div className="navbar">
            <nav>
              <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Sing Up</li>
              </ul>
            </nav>
          </div>
          <div className="input-header">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="What are you looking for?"
            />
            <div className="icons-svg-carrinho">
              <img src="src\assets\svgs\coracao.svg" alt="" />
              <img src="src\assets\svgs\carrinho.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="container-menu-carrosel">
          <div className="menu-lateral">
            <nav className="navbar-lateral">
              <ul className="menu-lateral">
                <li className="nav-lateral">Woman's Fashion</li>
                <li className="nav-lateral">Men's Fashion</li>
                <li className="nav-lateral">Eletronics</li>
                <li className="nav-lateral">Home & Lifestyle</li>
                <li className="nav-lateral">Medicine</li>
                <li className="nav-lateral">Sports & Outdoor</li>
                <li className="nav-lateral">Baby & Toys</li>
                <li className="nav-lateral">Groceries & Pets</li>
                <li className="nav-lateral">Health & Beauty</li>
              </ul>
            </nav>
          </div>
          <div className="carrosel">
            <div className="texto-do-carrosel">
              <div className="iphone-logo">
              <img src="src\assets\imgs\logoiphone.png" alt="" className="logo-iphone"/>
              <p>
              Iphone 14 Series
              </p>
              </div>
              <div className="promo-carrosel">
              <h3 className="title-promo">Uo to 10% off Voucher</h3>
              </div>
              <div className="shop-now">
                <p className="p-promo">
                <a href="">Shop Now</a></p>
               <img src="src\assets\svgs\seta.svg" alt="" className="seta"/> 
              </div>
             
             
             
            </div>
            <div className="img-do-carrosel">
              <img src="src\assets\imgs\iphonecarrosel.png" alt="" className="carrosel-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
