import { FormContainer, InputField, SubmitButton } from './SearchBar.styled';

function SearchBar({ onSubmit }) {
  return (
    <FormContainer onSubmit={onSubmit}>
      <InputField
        type="text"
        name="query"
        autoFocus="on"
        autoComplete="on"
        placeholder="Search..."
      />
      <SubmitButton type="submit">Search</SubmitButton>
    </FormContainer>
  );
}
export { SearchBar };
