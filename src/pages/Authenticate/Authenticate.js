import * as React from "react";

import Authenticate1 from "../../assets/images/BlockCPS.webp";
import AuthenticateForm from "./AuthenticateForm";
import ContentAuthenticate from "./ContentAuthenticate.js";
import Footer from "../../components/layout/Footer/Footer";
import Header from "../../components/layout/Header/Header";
import Theme from "../../components/layout/Themes/Themes";
import { useEffect } from "react";

function Authenticate() {
  const [hide, setHide] = React.useState(true);

  useEffect(() => {
    const user_token = localStorage.getItem("user_login_token");
    if (user_token) {
      setHide(true);
      window.location.href = "/";
    } else {
      setHide(false);
    }
  }, []);

  return (
    <>
      {!hide && (
        <Theme>
          <div>
            <Header />
            <main style={{ paddingTop: "64px" }}>
              <div className="container">
                <div className="p-4">
                  <img
                    src={Authenticate1}
                    width="100%"
                    height="100%"
                    alt="CellphoneS"
                    style={{ borderRadius: "16px" }}
                  />
                  <div className="p-y-3">
                    <AuthenticateForm />
                  </div>
                  <ContentAuthenticate />
                </div>
              </div>
            </main>
            <Footer />
          </div>
        </Theme>
      )}
    </>
  );
}

export default Authenticate;
