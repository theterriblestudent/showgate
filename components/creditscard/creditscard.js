import {StyledCreditsCard, Department} from "./creditscard.styled"

function CreditsCard({credit_title, department, role, index}) {
    return (
        <StyledCreditsCard index={index}>
            <h2>{credit_title}</h2>
            <Department>
                <p>{department}</p>
                <div />
                <p>{role}</p>
            </Department>
        </StyledCreditsCard>
    );
}

export default CreditsCard;