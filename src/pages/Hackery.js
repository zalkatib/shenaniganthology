import React from "react";
import NotionPage from "../components/NotionPage";

const Hackery = () => {
  const pageId = "33718b6c06e14802bf85861220f112d1";
  return (
    <div style={{ height: "100%" }}>
      <NotionPage pageId={pageId} />
    </div>
  );
};

export default Hackery;
