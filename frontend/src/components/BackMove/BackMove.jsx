import { Button } from "@mui/material";
import React from "react";

const BackMove = () => {
  const scrollHandle = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Button
      onClick={scrollHandle}
      style={{ background: "red", color: "white" }}
    >
      ^
    </Button>
  );
};

export default BackMove;
