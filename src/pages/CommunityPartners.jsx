import React from "react";
import DayCare from "../sections/CommunityPartners/DayCare";
import PublicSchool from "../sections/CommunityPartners/PublicSchool";
import Prospective from "../sections/CommunityPartners/Prospective";
import CommunityHero from "../sections/CommunityPartners/CommunityHero";

function CommunityPartners() {
  return (
    <div className="mt-[102px] md:mt-[128px]">
      <CommunityHero />
      <DayCare />
      <PublicSchool />
      <Prospective />
    </div>
  );
}

export default CommunityPartners;
