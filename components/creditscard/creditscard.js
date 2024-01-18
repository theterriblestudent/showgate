import { FaPlusCircle, FaInfoCircle } from "react-icons/fa";
import {StyledCreditsCard, Department} from "./creditscard.styled"

function CreditsCard({credit_title, department, role, index, episode}) {
    return (
        <StyledCreditsCard index={index}>
            <h2>{credit_title}</h2>
            {episode && <FaPlusCircle className="icon" />}
            {!episode && <FaInfoCircle className="icon" />}
            <Department>
                <p>{department}</p>
                <div className="separator"/>
                {!episode && <p>{role}</p>}
                {episode && role}
            </Department>
        </StyledCreditsCard>
    );
}

export default CreditsCard;