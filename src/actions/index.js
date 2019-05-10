export const addProduct = () => {
    return{
        type: 'ADD_PRODUCT',
        payload: {
            id: 4,
            title: 'fourth product title ',
            description: 'fourth product description',
            price: 60
        }
    };
};

export const deleteProduct = (productId) => {
    return{
        type: 'DELETE_PRODUCT',
        payload: productId
    };
};

export const getCategory = () => {
    return{
        type: 'GET_CATEGORY'
    };
};

export const getProducts = (category) => {
    return{
        type: 'GET_PRODUCTS',
        payload: category
    };
};

export const addToCart = (product) => {
    return{
        type: 'ADD_TO_CART',
        payload: product
    };
};

export const updateCart = (id,unit) => {
    return{
        type: 'UPDATE_CART',
        id: id,
        unit: unit
    };
};

export const deleteCartItem = (cart) => {
    return{
        type: 'DELETE_CART_ITEM',
        payload:cart
    };
};

export const cleanCart = () => {
    return{
        type: 'CLEAN_CART'
    };
};

export const createOrder = ( order) => {
    return{
        type: 'CREATE_ORDER',
        payload: order
    };
};

export const userSignup = ( user) => {
    return (dispatch) => {
        const url = 'http://daisyarea.com/api/login.php?phone_number='+user.phone_number+'&password='+user.password; // site that doesn’t send Access-Control-*
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            fetch(proxyurl + url).then((resp) => resp.json())
                .then(function (data) {
                    console.log(data);
                    if(data.success === 1)
                    dispatch({type:'DO_LOGIN',payload: data.message})
                    else if(data.success === 0)
                    dispatch({type:'LOGIN_FAIL',payload: data.message})
                })
                .catch(function (error) {
                    console.log(error);
                });
    };
};

export const dologin = () => {
    return {
      type: 'DO_LOGIN'
    }
  };

  export const login_fail = () => {
    return {
      type: 'LOGIN_FAIL'
    }
  };


