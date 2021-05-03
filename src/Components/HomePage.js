import React from "react";
import styled from "styled-components";
import { CenteredUp, MainButton, GiveMeCredit } from "./Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFistRaised } from "@fortawesome/free-solid-svg-icons";

const Heading = styled.h1`
  text-align: center;
`;

const SubHeading = styled.p`
  text-align: center;
`;
const HomePage = () => (
  <>
    <CenteredUp>
      <Heading>
        Boxing <FontAwesomeIcon icon={faFistRaised} color={"red"} />
        &nbsp;<code>Timer</code>
      </Heading>
      <hr />
      <SubHeading>
        {" "}
        <code>You owe me a beer dawg</code>
      </SubHeading>
      <MainButton>Start</MainButton>
      <MainButton>Settings</MainButton>
    </CenteredUp>
    <GiveMeCredit />
  </>
);

export default HomePage;
