import React from "react";
import styled from "styled-components";
import { cardStyles } from "./ReusableStyles";
import { GoMilestone } from "react-icons/go";
export default function Milestones() {
  const milestones = [
    {
      id: 1,
      text: "Y Combinator Startup School Certification",
    },
    {
      id: 2,
      text: "Greater than 100 followers on LinkedIn Company Page",
    },
    {
      id: 3,
      text: "Greater than 50 followers on Twitter Company Page",
    }
  ];
  return (
    <Section>
      <div className="title">
        <h2>Milestones</h2>
      </div>
      <div className="milestones">
        {milestones.map((milestone) => {
          return (
            <div className="milestone" key={milestone.id}>
              <div className="info">
                <GoMilestone/>
                <h4>{milestone.text}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
const Section = styled.section`
  ${cardStyles};
  .title {
    h2 {
      color: #0000ff;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
  }
  .milestones {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    .milestone {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .info {
        display: flex;
        gap: 1rem;
        align-items: center;
      }
      svg {
        font-size: 1.4rem;
      }
      &:nth-of-type(2) {
        border-top: 0.01rem solid #6c6e6e;
        border-bottom: 0.01rem solid #6c6e6e;
        padding: 0.8rem 0;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    svg {
      font-size: 2rem !important;
    }
  }
`;
