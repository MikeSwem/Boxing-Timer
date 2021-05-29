import React from "react";
import styled from "styled-components";
import { MainButton } from "./Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import RadioButtonsGroup from "../Components/Inputs/RadioGroup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import {
  getEndOfRoundCount,
  getRestLength,
  getRoundLength,
  getRounds,
  getStartCountDown,
} from "../Selectors";
import history from "../History";

const Heading = styled.h1`
  text-align: center;
`;

const SubHeading = styled.p`
  text-align: center;
`;

const SexierInput = styled.input`
  border-radius: 12px;
  padding: 8px;
  width: 120px;
  font-size: 21px;
  :focus {
    outline: none;
  }
  text-align: center;
  font-weight: bold;
  display: block;
  margin-right: auto;
  margin-left: auto;

  }

  -moz-appearance: textfield;
`;

const success = () =>
  toast.error("Updated Yo!!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

const SettingsPage = () => {
  const endOfRoundCount = useSelector(getEndOfRoundCount);
  const restLength = useSelector(getRestLength);
  const roundLength = useSelector(getRoundLength);
  const rounds = useSelector(getRounds);
  const startCountDown = useSelector(getStartCountDown);

  return (
    <>
      <div style={{ margin: "auto", marginTop: "3em", maxWidth: "580px" }}>
        <ToastContainer />
        <Heading>
          Settings <FontAwesomeIcon icon={faCog} color={"red"} />
        </Heading>
        {/* <hr />s */}
        <SubHeading>
          <code>Rounds</code>
        </SubHeading>
        <SexierInput type="tel" value={rounds} />
        <SubHeading>
          <code>Round Length</code>
        </SubHeading>
        <SexierInput type="tel" value={roundLength} />
        <SubHeading>
          <code>Rest Length</code>
        </SubHeading>
        <SexierInput type="tel" value={restLength} />
        <SubHeading>
          <code>Start Timer Length</code>
        </SubHeading>
        <SexierInput type="tel" value={startCountDown} />
        <SubHeading>
          <code>End Of Round Length</code>
        </SubHeading>
        <SexierInput type="tel" value={endOfRoundCount} />
        <SubHeading>
          <code>Sound </code>
        </SubHeading>

        <SubHeading>
          <RadioButtonsGroup />
        </SubHeading>
        <div style={{ margin: "28px" }}>
          <MainButton
            onClick={() => {
              success();
            }}
          >
            Submit
          </MainButton>
          <MainButton onClick={() => history.push("/")}>Back</MainButton>
        </div>
      </div>
      {/* <GiveMeCredit /> */}
    </>
  );
};

export default SettingsPage;
