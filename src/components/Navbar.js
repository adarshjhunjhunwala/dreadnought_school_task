import React from "react";
import styled from "styled-components";
export default function Navbar() {
  return (
    <Nav>
      <div className="title">
        <h4>Hi John Doe,</h4>
        <h1>
          Welcome to<span>DREADNOUGHT SCHOOL DASHBOARD</span>
        </h1>
      </div>
    </Nav>
  );
}
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  .title {
    h1 {
      span {
        margin-left: 0.5rem;
        color: #0000ff;
        font-family: "Permanent Marker", cursive;
        letter-spacing: 0.2rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    .title {
      h1 {
        span {
          display: block;
          margin: 1rem 0;
          /* letter-spacing: 0; */
        }
      }
    }
  }
`;
