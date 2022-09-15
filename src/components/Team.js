import React from "react";
import styled from "styled-components";
import BaileeCooper from "../assets/baileecooper.svg";
import JasonMiller from "../assets/jasonmiller.svg";
import RaginiMalhotra from "../assets/raginimalhotra.svg";
import { cardStyles } from "./ReusableStyles";

export default function Team() {
  const team = [
    {
      id: 1,
      image: BaileeCooper,
      name: "Bailee Cooper",
      designation: "Technophile. Left Brain. Space Nerd. UC Berkeley Alum.",
    },
    {
      id: 2,
      image: JasonMiller,
      name: "Jason Miller",
      designation: "Futurist. Entrepreneur. Hardcore Nerd. Stanford Alum.",
    },
    {
      id: 3,
      image: RaginiMalhotra,
      name: "Ragini Malhotra",
      designation: "AI Researcher. Right Brain. Loves Dogs. MIT Alum.",
    },
  ];
  return (
    <Section>
      <div className="title">
        <h2>TEAM MEMBERS</h2>
      </div>
      <div className="team">
        {team.map((member) => {
          return (
            <div className="member" key={member.id}>
              <div className="member__title">
                <div className="member__title__image">
                  <img src={member.image} alt="" />
                </div>
                <div className="member__title__details">
                  <h3>{member.name}</h3>
                  <h5>{member.designation}</h5>
                </div>
              </div>
              <div className="member__amount">
                <span>{member.amount}</span>
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
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .title {
    h2 {
      color: #0000ff;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
  }
  .team {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    .member {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      &__title {
        display: flex;
        gap: 1rem;
        &__image {
          img {
            height: 2.5rem;
            border-radius: 3rem;
          }
        }
        &__details {
        }
      }
      &__amount {
        background-color: #d7e41e1d;
        padding: 0.2rem 0.5rem;
        width: 4rem;
        border-radius: 1rem;
        text-align: center;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #0000ff;
          span {
            color: black;
          }
        }
        span {
          color: #0000ff;
        }
      }
    }
  }
  .view {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color: #0000ff;
    font-weight: bold;
    margin-top: 1rem;
    gap: 0.5rem;
    svg {
      transition: 0.3s ease-in-out;
      font-size: 1.4rem;
    }
    &:hover {
      svg {
        transform: translateX(0.5rem);
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 375px) {
    .team {
      .member {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
    }
  }
`;
