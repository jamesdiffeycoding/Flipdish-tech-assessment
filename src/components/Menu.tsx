"use client";

import sampleMenu from "../sampleMenu.json";
import OrderBtn from "./OrderBtn";
import Accordian from "./Accordian";
import BtnBar from "@/components/BtnBar";
import { useState } from "react";

export default function Menus() {
  const [visibleSections, setVisibleSections] = useState([
    sampleMenu.MenuSections[0].MenuSectionId.toString(),
  ]);

  const { DisplaySectionLinks, MenuSections } = sampleMenu;

  function handleSectionClick(categoryId: string, collapseOthers: boolean) {
    if (collapseOthers) {
      setVisibleSections([categoryId]);
    } else if (visibleSections.includes(categoryId)) {
      setVisibleSections(visibleSections.filter((id) => id !== categoryId)); // hide the clicked section
    } else {
      setVisibleSections([...visibleSections, categoryId]);
    }

    const section = document.getElementById(categoryId);
    if (section?.scrollIntoView) {
      section.scrollIntoView({ behavior: "smooth" });
      window.scrollBy(0, -100);
    }
  }

  console.log(MenuSections);

  return (
    <>
      {DisplaySectionLinks && (
        <BtnBar
          handleSectionClick={handleSectionClick}
          MenuSections={MenuSections}
        />
      )}
      <section className="w-[90%]">
        <Accordian
          handleSectionClick={handleSectionClick}
          MenuSections={MenuSections}
          visibleSections={visibleSections}
        />
        <OrderBtn />
      </section>
    </>
  );
}
