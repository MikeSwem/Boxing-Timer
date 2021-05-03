import React from "react";
import styled from "styled-components";
import { CenteredUp, MainButton, GiveMeCredit } from "./Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

const Heading = styled.h1`
  text-align: center;
`;

const SubHeading = styled.p`
  text-align: center;
`;
const SettingsPage = () => (
  <>
    <CenteredUp>
      <Heading>
        Settings <FontAwesomeIcon icon={faCog} color={"red"} />
      </Heading>
      <hr />
      <SubHeading>
        <code>Rounds</code>
      </SubHeading>
      <input />
      <SubHeading>
        <code>Round Length</code>
      </SubHeading>
      <input />
      <SubHeading>
        <code>Rest Length</code>
      </SubHeading>
      <input />
      <SubHeading>
        <code>Sound</code>
      </SubHeading>
      <input />
    </CenteredUp>
    <GiveMeCredit />
  </>
);

export default SettingsPage;
