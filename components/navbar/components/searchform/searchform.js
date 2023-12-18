import { StyledForm, StyledInput } from "./searchform.styled";
import { StyledSearchIcon, StyledSearchButton } from "./searchform.styled";
import useSearchForm from "./useSearchForm";

function SearchForm({mobile}) {
    const {searchQuery, handleSearch} = useSearchForm();

    return (
        <StyledForm>
            <StyledInput value={searchQuery} onChange={handleSearch} />
            <StyledSearchButton justify_content="center">
                <StyledSearchIcon />
            </StyledSearchButton>
        </StyledForm>
    );
}

export default SearchForm;