import React from "react";
import { Button, Landing } from '../Home/style';
import { Link } from "react-router-dom";

export default function Landingpage() {
  return (
    <Landing>
      <Link to='/typing'>
        <Button>Typing Speed Game</Button>
      </Link>
    </Landing>
  );
}