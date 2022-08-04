import * as React from 'react';

import Footer from '../../components/layout/Footer/Footer';
import Header from '../../components/layout/Header/Header';
import Theme from '../../components/layout/Themes/Themes';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { QuantityPicker } from 'react-qty-picker';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Swal from 'sweetalert2';
import Notiflix from 'notiflix';

function Cart() {
  const [cart, setCart] = React.useState([]);
  // eslint-disable-next-line no-unused-vars
  const [orderAmount, setOrderAmount] = React.useState();

  const userId = useSelector((state) => state.admin.userId);

  React.useEffect(() => {
    handleCart();
  }, []);

  const handleCart = () => {
    const cart = localStorage.getItem('cart');

    if (cart) {
      setCart(JSON.parse(cart));
    }
  };

  const removeItemInCart = (id) => {
    const tempCart = JSON.parse(JSON.stringify(cart));
    const findIndex = tempCart.findIndex((e) => e.id === id);
    _.remove(tempCart, { id: tempCart[findIndex].id });
    setCart(tempCart);
    localStorage.setItem('cart', JSON.stringify(tempCart));
  };

  const setQuantity = (id, quantity) => {
    const tempCart = JSON.parse(JSON.stringify(cart));
    const findIndex = tempCart.findIndex((e) => e.id === id);
    tempCart[findIndex].quantity = quantity;
    setCart(tempCart);
    localStorage.setItem('cart', JSON.stringify(tempCart));
  };

  const totalPrice = () => {
    const totalArray = [];
    if (cart.length > 0) {
      cart.forEach((item) => {
        if (item.discount_percent != 0) {
          totalArray.push(
            (item.product_price - item.product_price * parseFloat(item.discount_percent)) *
              item.quantity
          );
        } else {
          totalArray.push(item.product_price * parseFloat(item.discount_percent) * item.quantity);
        }
      });
      const sum = totalArray.reduce((previousValue, currentValue) => previousValue + currentValue);
      return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
      }).format(sum);
    }
  };

  const orderAmountTotal = () => {
    const totalArray = [];
    if (cart.length > 0) {
      cart.forEach((item) => {
        if (item.discount_percent != 0) {
          totalArray.push(
            (item.product_price - item.product_price * parseFloat(item.discount_percent)) *
              item.quantity
          );
        } else {
          totalArray.push(item.product_price * parseFloat(item.discount_percent) * item.quantity);
        }
      });
      return totalArray.reduce((previousValue, currentValue) => previousValue + currentValue);
    }
    return 0;
  };

  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    width: '26em',
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
  });

  const placeOrder = async () => {
    if (localStorage.getItem('user_login_token')) {
      Notiflix.Block.pulse('#root', 'Đang xử lý...');
      const cartSend = [];
      cart.forEach((item, index) => {
        cartSend.push({
          order_id: index + 1,
          productId: item.id,
          quantity: item.quantity,
          price: item.product_price
        });
      });
      const body = {
        userId,
        orderAmount: orderAmountTotal(),
        cart: cartSend
      };
      const result = await axios.post('/orders', body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('user_login_token')}`
        }
      });
      if (result.status === 200) {
        Toast.fire({
          icon: 'success',
          title: 'Đặt hàng thành công!',
          background: 'rgba(243, 252, 245, 1)',
          color: '#28a745'
        });
        localStorage.removeItem('cart');
        window.location.href = '/';
      } else {
        Toast.fire({
          icon: 'error',
          title: 'Đặt hàng không thành công!',
          background: 'rgba(253, 241, 244, 1)',
          color: '#d70018'
        });
        Notiflix.Block.remove('#root');
      }
    } else {
      Toast.fire({
        icon: 'error',
        title: 'Vui lòng đăng nhập!',
        background: 'rgba(253, 241, 244, 1)',
        color: '#d70018'
      });
    }
  };

  return (
    <Theme>
      <div>
        <Header />
        <main style={{ paddingTop: '64px' }}>
          <div className="container d-flex justify-content-center align-items-center">
            <div style={{ width: '600px' }} className="m-y-5">
              <div className="d-flex">
                <a href="/" className="flex-grow-1 text-red font-weight-bold">
                  <ChevronLeftRoundedIcon />
                  Trở về
                </a>
                <p className="flex-grow-1 text-red font-weight-bold">Giỏ hàng</p>
              </div>
              <br />
              {cart.length > 0 &&
                cart.map((item, idx) => {
                  return (
                    <div
                      key={idx}
                      className="p-3 mb-4"
                      style={{
                        borderRadius: '6px',
                        boxShadow:
                          '0 1px 2px 0 rgb(60 64 67 / 10%), 0 2px 6px 2px rgb(60 64 67 / 15%)'
                      }}>
                      <div
                        className="mb-2 d-flex justify-content-end"
                        style={{ cursor: 'pointer' }}
                        onClick={() => removeItemInCart(item.id)}>
                        <ClearRoundedIcon />
                      </div>
                      <div className="d-flex">
                        <div style={{ width: '35%' }}>
                          <img src={item.product_thumbnail} width="100%" />
                        </div>
                        <div style={{ width: '65%', marginLeft: '6px' }}>
                          <p className="font-weight-bold mb-2">{item.product_name}</p>
                          {item.discount_percent === '0' ? (
                            <p className="text-red font-weight-bold">
                              {new Intl.NumberFormat('vi-VN', {
                                style: 'currency',
                                currency: 'VND'
                              }).format(item.product_price)}
                            </p>
                          ) : (
                            <div className="d-flex align-items-center">
                              <span className="text-gray font-weight-bold m-r-3">
                                <strike>
                                  {new Intl.NumberFormat('vi-VN', {
                                    style: 'currency',
                                    currency: 'VND'
                                  }).format(item.product_price)}
                                </strike>
                              </span>
                              <p className="text-red font-weight-bold">
                                {new Intl.NumberFormat('vi-VN', {
                                  style: 'currency',
                                  currency: 'VND'
                                })
                                  .format(
                                    item.product_price -
                                      item.product_price * parseFloat(item.discount_percent)
                                  )
                                  .toString()}
                              </p>
                              <p
                                style={{
                                  padding: '4px 8px',
                                  borderRadius: '6px',
                                  backgroundColor: '#d70018',
                                  fontWeight: 'bold',
                                  color: 'white'
                                }}
                                className="m-l-3">
                                Giảm&nbsp;{parseInt(parseFloat(item.discount_percent) * 100)}&nbsp;%
                              </p>
                            </div>
                          )}
                          <div className="d-flex mt-2 align-items-center">
                            <p className="mr-2">Chọn số lượng</p>
                            <QuantityPicker
                              min={1}
                              max={3}
                              value={item.quantity}
                              onChange={(value) => setQuantity(item.id, value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              <div
                className="p-3"
                style={{
                  borderRadius: '6px',
                  boxShadow: '0 1px 2px 0 rgb(60 64 67 / 10%), 0 2px 6px 2px rgb(60 64 67 / 15%)'
                }}>
                <div className="d-flex justify-content-between mb-3">
                  <p className="font-weight-bold">Tổng tiền</p>
                  <p className="font-weight-bold text-red">{totalPrice()}</p>
                </div>
                <button
                  className="add mb-3"
                  style={{ height: '60px' }}
                  onClick={placeOrder}
                  disabled={
                    localStorage.getItem('user_login_token') && cart.length === 0 ? true : false
                  }>
                  TIẾN HÀNH ĐẶT HÀNG
                </button>
                <a href="/">
                  <button className="add_new">CHỌN THÊM SẢN PHẨM KHÁC</button>
                </a>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </Theme>
  );
}

export default Cart;
