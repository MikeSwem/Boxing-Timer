import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export const Centered = styled.div`
  width: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CenteredUp = styled.div`
  width: auto;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MainButton = styled.button`
  width: 100%;
  background-color: black;
  color: white;
  padding: 12px;
  border 0;
  border-radius: 12px; 
  cursor: pointer;
  :hover{
      background-color:red;
      box-shadow: 2px 2px 0px black;
  }

  margin-top:12px;
  font-weight: bold;
  font-size: 16px;
`;

export const BottomSimpleText = styled.p`
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const GiveMeCredit = () => (
  <BottomSimpleText>
    <strong>
      <FontAwesomeIcon icon={faCoffee} /> Built by{" "}
      <a
        style={{ color: "red", textDecoration: "none" }}
        href="http://awesomedonkeyking.com/"
      >
        This Guy
      </a>
    </strong>
  </BottomSimpleText>
);
