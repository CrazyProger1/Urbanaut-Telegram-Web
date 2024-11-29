import React from "react";
import ObjectSearchBarButton from "@/components/bars/ObjectSearchBarButton";

const ObjectSearchBar = () => {
  return (
    <div className="bg-secondary rounded-2xl flex flex-row justify-around">
      <ObjectSearchBarButton active={true} text="rating" />
      <ObjectSearchBarButton active={false} text="difficulty" />
      <ObjectSearchBarButton active={false} text="nearest" />
    </div>
  );
};

export default ObjectSearchBar;
