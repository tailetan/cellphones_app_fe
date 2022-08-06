import "./menu.css";

import PropTypes from "prop-types";

function Menu({ menu }) {
  const goToShop = (name) => {
    if (name === "Điện thoại") window.location.href = "/shop?category=mobile";
    if (name === "Laptop, PC, Màn hình")
      window.location.href = "/shop?category=laptop";
    if (name === "Tablet") window.location.href = "/shop?category=tablet";
    if (name === "Phụ kiện") window.location.href = "/shop?category=accessory";
  };

  const goToShopWithBrand = (name, brand) => {
    if (name === "Điện thoại")
      window.location.href = `/shop?category=mobile&brand=${brand}`;
    if (name === "Laptop, PC, Màn hình")
      window.location.href = `/shop?category=laptop&brand=${brand}`;
    if (name === "Tablet")
      window.location.href = `/shop?category=tablet&brand=${brand}`;
    if (name === "Phụ kiện")
      window.location.href = `/shop?category=accessory&brand=${brand}`;
  };

  return (
    <nav className="menu">
      <ul className="menu-layout p-l-0">
        {menu.map((i, index) => (
          <li
            key={index}
            className={`ml-content d-flex align-center ${
              [
                "Điện thoại",
                "Tablet",
                "Phụ kiện",
                "Laptop, PC, Màn hình",
              ].includes(i.name)
                ? "text-black"
                : "text-gray"
            }`}
          >
            <a
              className="w-full d-flex align-center"
              onClick={() => {
                if (
                  [
                    "Điện thoại",
                    "Tablet",
                    "Phụ kiện",
                    "Laptop, PC, Màn hình",
                  ].includes(i.name)
                ) {
                  goToShop(i.name);
                }
              }}
            >
              {i.icon ? <i className={`mlc-icon-left ${i.icon}`} /> : ""}
              <span className="mlc-name flex-1 font-weight-bold">{i.name}</span>
              {i.brand || i.child ? (
                <span className="material-icons-round">navigate_next</span>
              ) : (
                ""
              )}
            </a>
            {i.brand ? (
              <div className="box-list-menu-child">
                <nav className="menu">
                  <ul className="menu-layout p-l-0">
                    {i.brand &&
                      i.brand.map((itemChild, indexChild) => (
                        <li
                          key={indexChild}
                          className={`ml-content ${
                            itemChild.brand ? "ml-content-child" : ""
                          } d-flex align-center ${
                            [
                              "Apple",
                              "Samsung",
                              "Xiaomi",
                              "Oppo",
                              "Realme",
                              "HP",
                              "Dell",
                              "Lenovo",
                              "Asus",
                              "Acer",
                            ].includes(itemChild.name)
                              ? "text-black"
                              : "text-gray"
                          }`}
                        >
                          <a
                            className="w-full d-flex align-center"
                            onClick={() => {
                              if (
                                [
                                  "Apple",
                                  "Samsung",
                                  "Xiaomi",
                                  "Oppo",
                                  "Realme",
                                  "HP",
                                  "Dell",
                                  "Lenovo",
                                  "Asus",
                                  "Acer",
                                ].includes(itemChild.name)
                              ) {
                                goToShopWithBrand(i.name, itemChild.name);
                              }
                            }}
                          >
                            {itemChild.icon ? (
                              <i
                                className={`mlc-icon-left ${itemChild.icon}`}
                              />
                            ) : (
                              ""
                            )}
                            <span className="mlc-name flex-1 font-weight-bold">
                              {itemChild.name}
                            </span>
                            {itemChild.brand || itemChild.child ? (
                              <span className="material-icons-round">
                                navigate_next
                              </span>
                            ) : (
                              ""
                            )}
                          </a>
                          <div className="box-list-menu-child-2">
                            <nav className="menu">
                              <ul className="menu-layout p-l-0">
                                {itemChild.brand &&
                                  itemChild.brand.map(
                                    (itemChild2, indexChild2) => (
                                      <li
                                        key={indexChild2}
                                        className={`ml-content text-gray ${
                                          itemChild2.brand
                                            ? "ml-content-child-2"
                                            : ""
                                        } d-flex align-center`}
                                      >
                                        <a className="w-full d-flex align-center">
                                          {itemChild2.icon ? (
                                            <i
                                              className={`mlc-icon-left ${itemChild2.icon}`}
                                            />
                                          ) : (
                                            ""
                                          )}
                                          <span className="mlc-name flex-1 font-weight-bold">
                                            {itemChild2.name}
                                          </span>
                                          {itemChild2.brand ||
                                          itemChild2.child ? (
                                            <span className="material-icons-round">
                                              navigate_next
                                            </span>
                                          ) : (
                                            ""
                                          )}
                                        </a>
                                        <div className="box-list-menu-child-3">
                                          <nav className="menu">
                                            <ul className="menu-layout p-l-0">
                                              {itemChild2.brand &&
                                                itemChild2.brand.map(
                                                  (itemChild3, indexChild3) => (
                                                    <li
                                                      key={indexChild3}
                                                      className="ml-content d-flex align-center"
                                                    >
                                                      <a className="w-full d-flex align-center">
                                                        {itemChild3.icon ? (
                                                          <i
                                                            className={`mlc-icon-left ${itemChild3.icon}`}
                                                          />
                                                        ) : (
                                                          ""
                                                        )}
                                                        <span className="mlc-name flex-1 font-weight-bold">
                                                          {itemChild3.name}
                                                        </span>
                                                        {itemChild3.brand ||
                                                        itemChild3.child ? (
                                                          <span className="material-icons-round">
                                                            navigate_next
                                                          </span>
                                                        ) : (
                                                          ""
                                                        )}
                                                      </a>
                                                    </li>
                                                  )
                                                )}
                                            </ul>
                                          </nav>
                                        </div>
                                      </li>
                                    )
                                  )}
                              </ul>
                            </nav>
                          </div>
                        </li>
                      ))}
                  </ul>
                </nav>
              </div>
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

Menu.propTypes = {
  menu: PropTypes.array,
  children: PropTypes.object,
};

export default Menu;
