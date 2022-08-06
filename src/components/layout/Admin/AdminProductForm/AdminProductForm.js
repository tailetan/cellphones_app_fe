import "./adminproductform.css";

import * as React from "react";

import {
  Avatar,
  Button,
  Grid,
  InputAdornment,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import {
  changePage,
  setAddNavigation,
  setCurrentSearch,
  setData,
  setFilterBrand,
  setFilterCategory,
  setFrom,
  setPerPage,
  setSearch,
  setSkeleton,
  setTo,
  setTotalPage,
} from "../../../../redux/action.js";
import {
  createProduct,
  getAllProducts,
  updateProduct,
} from "../../../../api/AdminProducts.js";

import AddRoundedIcon from "@mui/icons-material/AddRounded";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import Select from "react-select";
import Swal from "sweetalert2";
import Tiptap from "../../Tiptap/Tiptap.js";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const DiscountSwitch = styled(Switch)(({ theme }) => ({
  padding: 8,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
    "&:before": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    "&:after": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
}));

const categoryList = [
  {
    id: 1,
    value: "Điện Thoại",
    label: "Điện Thoại",
  },
  {
    id: 2,
    value: "Laptop",
    label: "Laptop",
  },
  {
    id: 3,
    value: "Tablet",
    label: "Tablet",
  },
  {
    id: 4,
    value: "Phụ kiện",
    label: "Phụ kiện",
  },
];

const brandList = [
  {
    id: 1,
    value: "Apple",
    label: "Apple",
  },
  {
    id: 2,
    value: "Samsung",
    label: "Samsung",
  },
  {
    id: 3,
    value: "Xiaomi",
    label: "Xiaomi",
  },
  {
    id: 4,
    value: "Oppo",
    label: "Oppo",
  },
  {
    id: 5,
    value: "Realme",
    label: "Realme",
  },
  {
    id: 6,
    value: "HP",
    label: "HP",
  },
  {
    id: 7,
    value: "Dell",
    label: "Dell",
  },
  {
    id: 8,
    value: "Lenovo",
    label: "Lenovo",
  },
  {
    id: 9,
    value: "Asus",
    label: "Asus",
  },
  {
    id: 10,
    value: "Acer",
    label: "Acer",
  },
];

function percentageSale() {
  let percentageSaleList = [];
  for (let i = 1; i <= 50; i++) {
    percentageSaleList.push({
      id: i + 1,
      value: i,
      label: i,
    });
  }
  return percentageSaleList;
}

const percentageSaleList = percentageSale();

const AdminProductForm = (props) => {
  const dispatch = useDispatch();

  const [product_name, setProductName] = React.useState("");
  const [product_category, setProductCategory] = React.useState("");
  const [product_brand, setProductBrand] = React.useState("");
  const [status, setStatus] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);
  const [price, setPrice] = React.useState(0);
  const [discount, setDiscount] = React.useState(false);
  const [salePrice, setSalePrice] = React.useState(0);
  const [imageArray, setImageArray] = React.useState([
    {
      value: "",
    },
  ]);
  const [skuArray, setSkuArray] = React.useState([
    {
      key: "",
      value: "",
    },
  ]);
  const [percentage_sale, setPercentageSale] = React.useState({
    id: 1,
    value: 0,
    label: 0,
  });
  const [productItemData] = React.useState(props.productItemData);
  const [content, setContent] = React.useState(null);
  const [button_title, setButtonTitle] = React.useState("Thêm sản phẩm");
  const [id, setId] = React.useState(null);

  useEffect(() => {
    if (productItemData) {
      setButtonTitle("Chỉnh sửa sản phẩm");
      setId(productItemData.id);
      setProductName(productItemData.product_name);
      const category = categoryList.find(
        (element) => element.id === productItemData.category_id
      );
      setProductCategory(category);
      const brand = brandList.find(
        (element) => element.id === productItemData.brand_id
      );
      setProductBrand(brand);
      if (productItemData.product_quantity === 0) {
        setStatus(false);
      } else {
        setStatus(true);
        setQuantity(productItemData.product_quantity);
      }
      setPrice(productItemData.product_price);
      if (productItemData.discount_id !== 0) {
        setDiscount(true);
        const percentage_sale = percentageSaleList.find(
          (element) => element.id === productItemData.discount_id
        );
        handleSalePrice(percentage_sale);
      } else {
        setDiscount(false);
      }
      if (productItemData.product_images !== null) {
        setImageArray([]);
        productItemData.product_images.forEach((item) => {
          setImageArray((prevState) => [
            ...prevState,
            {
              value: item,
            },
          ]);
        });
      }
      if (productItemData.sku !== null) {
        setSkuArray([]);
        const temp_array = [];
        const arraySku = Object.keys(productItemData.sku).map((key) => [
          key,
          productItemData.sku[key],
        ]);
        arraySku.forEach((item) => {
          temp_array.push({
            key: item[0],
            value: item[1],
          });
        });
        setSkuArray(temp_array);
      }
      if (productItemData.desc !== null) {
        const isHtml = /<\/?[a-z][\s\S]*>/i.test(productItemData.desc);
        if (!isHtml) {
          productItemData.desc = `<p>${productItemData.desc}</p>`;
        }
        setContent(productItemData.desc);
      }
    }
  }, []);

  const handleChangeProductName = (event) => {
    setProductName(event.target.value);
  };

  const handleChangeCategory = (event) => {
    setProductCategory(event);
  };

  const handleChangeBrand = (event) => {
    setProductBrand(event);
  };

  const removeImage = (idx) => {
    const temp = [...imageArray];
    temp.splice(idx, 1);
    setImageArray(temp);
  };

  const removeSku = (idx) => {
    const temp = [...skuArray];
    temp.splice(idx, 1);
    setSkuArray(temp);
  };

  const handleImageArray = (event, idx) => {
    const temp = [...imageArray];
    temp[idx].value = event.target.value;
    setImageArray(temp);
  };

  const skuChangeValue = (event, idx) => {
    const temp = [...skuArray];
    temp[idx].value = event.target.value;
    setSkuArray(temp);
  };

  const skuChangeKey = (event, idx) => {
    const temp = [...skuArray];
    temp[idx].key = event.target.value;
    setSkuArray(temp);
  };

  const addImage = () => {
    setImageArray([
      ...imageArray,
      {
        value: "",
      },
    ]);
  };

  const addSku = () => {
    setSkuArray([
      ...skuArray,
      {
        key: "",
        value: "",
      },
    ]);
  };

  const formatCurrency = (event) => {
    setPrice(event.target.value);
    const salePrice =
      event.target.value - (percentage_sale.value / 100) * event.target.value;
    const formatSalePrice = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    })
      .format(salePrice)
      .replace("₫", "")
      .trim();
    setSalePrice(formatSalePrice);
  };

  const handleSalePrice = (event) => {
    setPercentageSale(event);
    const salePrice = price - (event.value / 100) * price;
    const formatSalePrice = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    })
      .format(salePrice)
      .replace("₫", "")
      .trim();
    setSalePrice(formatSalePrice);
  };

  const current_description = useSelector(
    (state) => state.admin.current_description
  );
  const filter_category = useSelector((state) => state.admin.filter_category);
  const filter_brand = useSelector((state) => state.admin.filter_brand);
  const search_handle = useSelector((state) => state.admin.search);
  const current_page = useSelector((state) => state.admin.current_page);

  const checkField = () => {
    const booleanArray = [];

    if (
      product_name === "" ||
      product_category === "" ||
      product_brand === "" ||
      price === ""
    ) {
      booleanArray.push(false);
    } else {
      booleanArray.push(true);
    }

    if (product_name.length < 12) {
      booleanArray.push(false);
    } else {
      booleanArray.push(true);
    }

    if (status === true && quantity === "") {
      booleanArray.push(false);
    } else {
      booleanArray.push(true);
    }

    if (discount === true && percentage_sale.value === 0) {
      booleanArray.push(false);
    } else {
      booleanArray.push(true);
    }

    imageArray.forEach((image) => {
      if (image.value === "") {
        booleanArray.push(false);
      } else {
        booleanArray.push(true);
      }
    });

    skuArray.forEach((sku) => {
      if (sku.key === "" || sku.value === "") {
        booleanArray.push(false);
      } else {
        booleanArray.push(true);
      }
    });

    return booleanArray.every((element) => element === true);
  };

  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    width: "26em",
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const createCreateProduct = (e) => {
    e.preventDefault();
    const objectSku = {};
    if (skuArray.length > 0) {
      for (const index in skuArray) {
        objectSku[skuArray[index].key] = skuArray[index].value;
      }
    }

    const image = [];
    for (const i in imageArray) {
      image.push(imageArray[i].value);
    }

    const object = {
      product_name,
      product_thumbnail: image[0],
      product_images: [...image],
      status: status ? "Available" : "Not Available",
      product_quantity: quantity > 0 ? quantity : 0,
      desc: current_description,
      sku: objectSku,
      product_price: price,
      category_id: product_category.id,
      brand_id: product_brand.id,
      discount_id: percentage_sale.id,
    };

    if (button_title === "Thêm sản phẩm") {
      createProduct(object).then((result) => {
        if (result.message === "Product create successfully") {
          Toast.fire({
            icon: "success",
            title: "Thêm sản phẩm thành công!",
            background: "rgba(243, 252, 245, 1)",
            color: "#28a745",
          });
          dispatch(setAddNavigation(false));
          dispatch(setSkeleton(true));
          dispatch(setFilterBrand(""));
          dispatch(setFilterCategory(""));
          dispatch(setSearch(""));
          dispatch(setCurrentSearch(""));
          getAllProducts().then((result) => {
            const { current_page, data, from, to, last_page, per_page } =
              result;
            dispatch(changePage(current_page));
            dispatch(setFrom(from));
            dispatch(setTo(to));
            dispatch(setPerPage(per_page));
            dispatch(setTotalPage(last_page));
            dispatch(setData(data));
            dispatch(setSkeleton(false));
          });
        }
      });
    } else {
      let search;
      let category;
      let brand;

      if (search_handle !== "") {
        search = search_handle;
      }

      if (filter_category !== "") {
        category = filter_category;
      }

      if (filter_brand !== "") {
        brand = filter_brand;
      }

      updateProduct(id, object).then((result) => {
        if (result.message === "Product create successfully") {
          Toast.fire({
            icon: "success",
            title: "Chỉnh sửa sản phẩm thành công!",
            background: "rgba(243, 252, 245, 1)",
            color: "#28a745",
          });
          props.setModal();
          dispatch(setSkeleton(true));
          getAllProducts({
            page: current_page,
            search: search,
            category: category,
            brand: brand,
          }).then((result) => {
            const { current_page, data, from, to, last_page, per_page } =
              result;
            dispatch(changePage(current_page));
            dispatch(setFrom(from));
            dispatch(setTo(to));
            dispatch(setPerPage(per_page));
            dispatch(setTotalPage(last_page));
            dispatch(setData(data));
            dispatch(setSkeleton(false));
          });
        }
      });
    }
  };

  return (
    <>
      <form onSubmit={createCreateProduct}>
        <Stack
          className="admin-product-form"
          sx={{
            width: "100%",
            padding: "12px",
            margin: "0 auto",
            backgroundColor: "grey.form",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h5 className="font-weight-bold">Thông tin chung</h5>
            </Grid>
            <Grid item xs={12}>
              <p className="m-b-4 font-weight-semi">
                Tên sản phẩm
                <span className="text-red">*</span>
              </p>
              <TextField
                fullWidth
                variant="filled"
                helperText="Vui lòng nhập tên sản phẩm có độ dài ít nhất là 12"
                value={product_name}
                onChange={handleChangeProductName}
              />
            </Grid>
            <Grid item xs={12}>
              <p className="m-b-4 font-weight-semi">
                Danh mục<span className="text-red">*</span>
              </p>
              <Select
                value={product_category}
                onChange={handleChangeCategory}
                placeholder="Chọn danh mục tương ứng"
                isClearable={true}
                options={categoryList}
              />
            </Grid>
            <Grid item xs={12}>
              <p className="m-b-4 font-weight-semi">
                Thương hiệu<span className="text-red">*</span>
              </p>
              <Select
                value={product_brand}
                onChange={handleChangeBrand}
                placeholder="Chọn thương hiệu tương ứng"
                isClearable={true}
                options={brandList}
              />
            </Grid>
            <Grid item xs={12}>
              <p className="m-b-4 font-weight-semi">
                Giá<span className="text-red">*</span>
              </p>
              <NumberFormat
                value={price}
                variant="filled"
                fullWidth
                customInput={TextField}
                thousandsGroupStyle="thousand"
                thousandSeparator="."
                decimalSeparator=","
                helperText="Vui lòng nhập giá của sản phẩm"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">₫</InputAdornment>
                  ),
                }}
                onValueChange={({ value: value }) =>
                  formatCurrency({ target: { value: value } })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <p className="m-b-4 font-weight-semi">Trạng thái</p>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography>Hết hàng</Typography>
                <DiscountSwitch
                  checked={status}
                  color="red"
                  inputProps={{ "aria-label": "controlled" }}
                  onChange={() => setStatus(!status)}
                />
                <Typography>Còn hàng</Typography>
              </Stack>
            </Grid>
            {status && (
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="filled"
                  helperText="Vui lòng nhập số lượng sản phẩm"
                  value={quantity}
                  onChange={() => {
                    if (event.target.value >= 1 || event.target.value === "") {
                      setQuantity(event.target.value);
                    } else {
                      setQuantity(1);
                    }
                  }}
                />
              </Grid>
            )}
            <Grid item xs={12}>
              <p className="m-b-4 font-weight-semi">Mô tả</p>
              <div className="App">
                <Tiptap edit_product={content} />
              </div>
            </Grid>
            <Grid item xs={12}>
              <p className="m-b-4 font-weight-semi">Giảm giá</p>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography>Không giảm giá</Typography>
                <DiscountSwitch
                  checked={discount}
                  color="red"
                  inputProps={{ "aria-label": "controlled" }}
                  onChange={() => setDiscount(!discount)}
                />
                <Typography>Giảm giá</Typography>
              </Stack>
            </Grid>
            {discount && (
              <Grid item container spacing={2}>
                <Grid item xs={12}>
                  <p className="m-b-4 font-weight-bold">
                    Phần trăm giảm<span className="text-red">*</span>
                  </p>
                  <Select
                    value={percentage_sale}
                    onChange={handleSalePrice}
                    placeholder="Chọn phần trăm giảm tương ứng"
                    isClearable={true}
                    options={percentageSaleList}
                  />
                </Grid>
                <Grid item xs={12}>
                  <p className="m-b-4 font-weight-bold">Giá giảm</p>
                  <TextField
                    fullWidth
                    variant="filled"
                    disabled
                    value={salePrice}
                  />
                </Grid>
              </Grid>
            )}
            <Grid item xs={12}>
              <h5 className="font-weight-bold">Hình ảnh</h5>
            </Grid>
            {imageArray.length > 0 &&
              imageArray.map((item, idx) => (
                <Grid key={idx} item xs={12}>
                  <p className="m-b-4 font-weight-semi">
                    Hình #{idx + 1}
                    <span className="text-red">*</span>
                  </p>
                  <div className="d-flex align-center">
                    <TextField
                      fullWidth
                      value={item.value}
                      onChange={() => handleImageArray(event, idx)}
                      variant="filled"
                    />
                    {imageArray.length > 1 && (
                      <Avatar
                        onClick={() => removeImage(idx)}
                        sx={{
                          bgcolor: "red.main",
                          cursor: "pointer",
                          marginLeft: "8px",
                        }}
                        variant="rounded"
                      >
                        <RemoveRoundedIcon />
                      </Avatar>
                    )}
                  </div>
                </Grid>
              ))}
            <Grid item xs={12}>
              <Avatar
                onClick={addImage}
                sx={{ bgcolor: "red.main", cursor: "pointer" }}
                variant="rounded"
              >
                <AddRoundedIcon />
              </Avatar>
            </Grid>
            <Grid item xs={12}>
              <h5 className="font-weight-bold">Thông số kỹ thuật</h5>
            </Grid>
            {skuArray.length > 0 &&
              skuArray.map((item, idx) => (
                <Grid key={idx} item xs={12}>
                  <p className="m-b-2">
                    Thông số #{idx + 1}
                    <span className="text-red">*</span>
                  </p>
                  <TextField
                    onChange={() => skuChangeKey(event, idx)}
                    value={item.key}
                    fullWidth
                    placeholder={`Tên thông số ${idx + 1}`}
                    variant="filled"
                  />
                  <div className="d-flex align-center m-t-2">
                    <TextField
                      onChange={() => skuChangeValue(event, idx)}
                      value={item.value}
                      fullWidth
                      placeholder="Nội dung"
                      variant="filled"
                    />
                    {skuArray.length > 1 && (
                      <Avatar
                        onClick={() => removeSku(idx)}
                        sx={{
                          bgcolor: "red.main",
                          cursor: "pointer",
                          marginLeft: "8px",
                        }}
                        variant="rounded"
                      >
                        <RemoveRoundedIcon />
                      </Avatar>
                    )}
                  </div>
                </Grid>
              ))}
            <Grid item xs={12}>
              <Avatar
                onClick={addSku}
                sx={{ bgcolor: "red.main", cursor: "pointer" }}
                variant="rounded"
              >
                <AddRoundedIcon />
              </Avatar>
            </Grid>
          </Grid>
          <Grid item xs={12} className="m-t-4">
            <Button
              sx={[
                { backgroundColor: "red.main", color: "white.main" },
                {
                  "&:hover": {
                    backgroundColor: "red.main",
                    color: "white.main",
                  },
                },
              ]}
              disabled={!checkField()}
              type="submit"
            >
              {button_title}
            </Button>
          </Grid>
        </Stack>
      </form>
    </>
  );
};

AdminProductForm.propTypes = {
  productItemData: PropTypes.object,
  setModal: PropTypes.func,
};

export default AdminProductForm;
