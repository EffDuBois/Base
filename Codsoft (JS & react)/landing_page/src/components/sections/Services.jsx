import React from "react";
import SmallCard from "../cards/small_card";

export default function Services() {
  return (
    <div className="m-20  grid grid-cols-3 gap-x-8">
      <SmallCard
        title="Creative"
        content="We provide creative services"
        img="https://static4.depositphotos.com/1005893/387/i/950/depositphotos_3873498-stock-photo-network-diagram.jpg"
      />
      <SmallCard
        title="Designing"
        content="We Design stuff for you"
        img="https://static.vecteezy.com/system/resources/previews/000/683/181/original/corporate-business-identity-template-design.jpg"
      />
      <SmallCard
        title="Build"
        content="We Build your products from scratch"
        img="https://www.designsdesk.com/wp-content/uploads/2019/03/e2aa2b6027ea355f3ef3d3eff5bba4f3.jpeg"
      />
    </div>
  );
}
