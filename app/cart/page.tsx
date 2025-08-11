import React from "react";
import FeatureHighlights from "../components/FeatureHighlights";
import CartItems from "../components/CartItems";
import PageHeader from "../components/PageHeader";

const page = () => {
  return (
    <div>
      <PageHeader title="Cart" showLogo />
      <CartItems />
      <FeatureHighlights />
    </div>
  );
};

export default page;
