import React from 'react';
import Home1 from "./pages/Home1";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import ProductDetail1 from "./pages/ProductDetail1";
import ProductDetail2 from "./pages/ProductDetail2";
import ProductDetail3 from "./pages/ProductDetail3";
import AboutUs1 from "./pages/AboutUs1";
import AboutUs2 from "./pages/AboutUs2";
import AboutUs3 from "./pages/AboutUs3";
import Checkout from "./pages/Checkout";
import ContactUs1 from "./pages/ContactUs1";
import ContactUs2 from "./pages/ContactUs2";
import ContactUs3 from "./pages/ContactUs3";
import BlogDetail from "./pages/BlogDetail";
import BlogGrid from "./pages/BlogGrid";
import BlogGridLarge from "./pages/BlogGridLarge";
import BlogGridLeft from "./pages/BlogGridLeft";
import BlogGridRight from "./pages/BlogGridRight";
import AccOrder from "./pages/AccOrder";
import AccOrderDetail from "./pages/AccOrderDetail";
import AccWishlist from "./pages/AccWishlist";
import MyAccount from "./pages/MyAccount";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import AccAddress from "./pages/AccAddress";
import AccOrderTrack from "./pages/AccOrderTrack";
import AccPayMethod from "./pages/AccPayMethod";
import AccViewOrder from "./pages/AccViewOrder";
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home1 />}></Route>
                <Route exact path="/home-2" element={<Home2 />}></Route>
                <Route exact path="/home-3" element={<Home3 />}></Route>
                <Route exact path="/product" element={<Product />}></Route>
                <Route exact path="/product-detail-1" element={<ProductDetail1 />}></Route>
                <Route exact path="/product-detail-2" element={<ProductDetail2 />}></Route>
                <Route exact path="/product-detail-3" element={<ProductDetail3 />}></Route>
                <Route exact path="/about-us-1" element={<AboutUs1 />}></Route>
                <Route exact path="/about-us-2" element={<AboutUs2 />}></Route>
                <Route exact path="/about-us-3" element={<AboutUs3 />}></Route>
                <Route exact path="/contact-1" element={<ContactUs1 />}></Route>
                <Route exact path="/contact-2" element={<ContactUs2 />}></Route>
                <Route exact path="/contact-3" element={<ContactUs3 />}></Route>
                <Route exact path="/wishlist" element={<Wishlist />}></Route>
                <Route exact path="/cart" element={<Cart />}></Route>
                <Route exact path="/checkout" element={<Checkout />}></Route>
                <Route exact path="/blog-detail" element={<BlogDetail />}></Route>
                <Route exact path="/blog-grid" element={<BlogGrid />}></Route>
                <Route exact path="/blog-grid-large" element={<BlogGridLarge />}></Route>
                <Route exact path="/blog-grid-left" element={<BlogGridLeft />}></Route>
                <Route exact path="/blog-grid-right" element={<BlogGridRight />}></Route>
                <Route exact path="/acc-order" element={<AccOrder />}></Route>
                <Route exact path="/acc-order-detail" element={<AccOrderDetail />}></Route>
                <Route exact path="/acc-wishlist" element={<AccWishlist />}></Route>
                <Route exact path="/my-account" element={<MyAccount />}></Route>
                <Route exact path="/privacy-policy" element={<PrivacyPolicy />}></Route>
                <Route exact path="/terms-conditions" element={<TermsConditions />}></Route>
                <Route exact path="/acc-address" element={<AccAddress />}></Route>
                <Route exact path="/acc-order-track" element={<AccOrderTrack />}></Route>
                <Route exact path="/acc-pay-method" element={<AccPayMethod />}></Route>
                <Route exact path="/acc-view-order" element={<AccViewOrder />}></Route>
            </Routes>
        </BrowserRouter>
    );
  }
}

export default App;
