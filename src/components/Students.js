import React from "react";
import styled from "styled-components";
import RobNielsen from "../assets/robnielsen.png";
import RashmiTirke from "../assets/rashmitirke.png";
import DavidRaum from "../assets/davidraum.png";
import { cardStyles } from "./ReusableStyles";

export default function Students() {
  const students = [
    {
      id: 1,
      image: RobNielsen,
      name: "Rob Nielsen",
      designation: "Sophomore year student at MIT",
    },
    {
      id: 2,
      image: RashmiTirke,
      name: "Rashmi Tirke",
      designation: "Final year student at IIT Madras",
    },
    {
      id: 3,
      image: DavidRaum,
      name: "David Raum",
      designation: "First year student at Cambridge",
    },
  ];
  return (
    <Section>
      <div className="title">
        <h2>STUDENTS</h2>
      </div>
      <div className="students">
        {students.map((student) => {
          return (
            <div className="student" key={student.id}>
              <div className="student__title">
                <div className="student__title__image">
                  <img src={student.image} alt="" />
                </div>
                <div className="student__title__details">
                  <h3>{student.name}</h3>
                  <h5>{student.designation}</h5>
                </div>
              </div>
              <div className="student__amount">
                <span>{student.amount}</span>
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
  .students {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    .student {
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
    .students {
      .student {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
    }
  }
`;
