import React from 'react';

export default function CheckoutSteps(props) {
  return (
    <div className="row checkout-steps">
      <div className={props.step1 ? 'active' : ''}>Sản phẩm</div>
      <div className={props.step2 ? 'active' : ''}>Thông tin</div>
      <div className={props.step3 ? 'active' : ''}>Hình thức thanh toán</div>
      <div className={props.step4 ? 'active' : ''}>Mua ngay</div>
    </div>
  );
}
