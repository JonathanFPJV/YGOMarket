(()=>{"use strict";const e=window.React,t=window.wc.wcBlocksRegistry,c=window.wc.wcSettings,n=window.wp.element,o=window.wp.htmlEntities,s="mercadopago_blocks_update_cart",a=({title:t,items:c,titleAlign:n="center",listMode:o="image"})=>(0,e.createElement)("checkout-benefits",{title:t,"title-align":n,items:c,"list-mode":o}),r=({text:t,src:c,alt:n})=>(0,e.createElement)("div",{className:"mp-checkout-pro-redirect"},(0,e.createElement)("checkout-redirect-v2",{text:t,src:c,alt:n})),i=({title:t,methods:c})=>(0,e.createElement)("div",{className:"mp-checkout-pro-payment-methods"},(0,e.createElement)("payment-methods-v2",{title:t,methods:c})),m=({description:t,linkText:c,linkSrc:n,checkoutClass:o="pro"})=>(0,e.createElement)("div",{className:`mp-checkout-${o}-terms-and-conditions`},(0,e.createElement)("terms-and-conditions",{description:t,"link-text":c,"link-src":n})),l=({title:t,description:c,linkText:n,linkSrc:o})=>(0,e.createElement)("div",{className:"mp-checkout-pro-test-mode"},(0,e.createElement)("test-mode",{title:t,description:c,"link-text":n,"link-src":o})),d=(e,t,c)=>{const n={name:e,message:t,target:c,plugin:{version:wc_mercadopago_custom_checkout_params.plugin_version},platform:{name:"woocommerce",uri:window.location.href,version:wc_mercadopago_custom_checkout_params.platform_version,location:`${wc_mercadopago_custom_checkout_params.location}_${wc_mercadopago_custom_checkout_params.theme}`}};navigator.sendBeacon("https://api.mercadopago.com/v1/plugins/melidata/errors",JSON.stringify(n))};var p;const _="mp_checkout_blocks",u="woo-mercado-pago-basic",k=(0,c.getSetting)("woo-mercado-pago-basic_data",{}),h=(0,o.decodeEntities)(k.title)||"Checkout Pro",E=t=>{(e=>{const{extensionCartUpdate:t}=wc.blocksCheckout,{eventRegistration:c,emitResponse:o}=e,{onPaymentSetup:a,onCheckoutSuccess:r,onCheckoutFail:i}=c;(0,n.useEffect)((()=>{((e,t)=>{e({namespace:s,data:{action:"add",gateway:t}})})(t,u);const e=a((()=>({type:o.responseTypes.SUCCESS})));return()=>(((e,t)=>{e({namespace:s,data:{action:"remove",gateway:t}})})(t,u),e())}),[a]),(0,n.useEffect)((()=>{const e=r((async e=>{const t=e.processingResponse;return d("MP_BASIC_BLOCKS_SUCCESS",t.paymentStatus,_),{type:o.responseTypes.SUCCESS}}));return()=>e()}),[r]),(0,n.useEffect)((()=>{const e=i((e=>{const t=e.processingResponse;return d("MP_BASIC_BLOCKS_ERROR",t.paymentStatus,_),{type:o.responseTypes.FAIL,messageContext:o.noticeContexts.PAYMENTS}}));return()=>e()}),[i])})(t);const{test_mode_title:c,test_mode_description:o,test_mode_link_text:p,test_mode_link_src:h,checkout_benefits_title:E,checkout_benefits_items:g,payment_methods_title:w,payment_methods_methods:S,method:y,checkout_redirect_text:v,checkout_redirect_src:C,checkout_redirect_alt:f,terms_and_conditions_description:x,terms_and_conditions_link_text:b,terms_and_conditions_link_src:N,test_mode:R,amount:P,message_error_amount:M}=k.params;return null==P?(0,e.createElement)(e.Fragment,null,(0,e.createElement)("p",{className:"alert-message"},M)):(0,e.createElement)("div",{className:"mp-checkout-container"},(0,e.createElement)("div",{className:"mp-checkout-pro-container"},(0,e.createElement)("div",{className:"mp-checkout-pro-content"},R?(0,e.createElement)(l,{title:c,description:o,"link-text":p,"link-src":h}):null,(0,e.createElement)("div",{className:"mp-checkout-pro-checkout-benefits"},(0,e.createElement)(a,{title:E,items:g})),(0,e.createElement)(i,{title:w,methods:S}),"redirect"===y?(0,e.createElement)(r,{text:v,src:C,alt:f}):null)),(0,e.createElement)(m,{description:x,linkText:b,linkSrc:N}))},g={name:u,label:(0,e.createElement)((t=>{const{PaymentMethodLabel:c}=t.components,n=(0,o.decodeEntities)(k?.params?.fee_title||""),s=`${h} ${n}`;return(0,e.createElement)(c,{text:s})}),null),content:(0,e.createElement)(E,null),edit:(0,e.createElement)(E,null),canMakePayment:()=>!0,ariaLabel:h,supports:{features:null!==(p=k?.supports)&&void 0!==p?p:[]}};(0,t.registerPaymentMethod)(g)})();