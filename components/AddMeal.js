import { Image } from "cloudinary-react";
import styled from "styled-components";
import Icons from "./SVG";

export default function AddMeal({ defaultValue, onSubmit }) {
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    if (data.image.name === "") {
      onSubmit(data);
    } else {
      const response = await fetch("/api/image/upload", {
        method: "POST",
        body: formData,
      });
      const image = await response.json();
      const publicId = image.publicId;

      onSubmit(data, publicId);
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledImage
        publicId={defaultValue === undefined ? "" : defaultValue.image}
      ></StyledImage>
      <label htmlFor="image">
        Bildupload
        <input name="image" id="image" type="file" role="upload"></input>
      </label>
      <label htmlFor="name">
        Name des Gerichts:
        <StyledNameInput
          name="name"
          id="name"
          type="text"
          required
          defaultValue={defaultValue === undefined ? "" : defaultValue.name}
        ></StyledNameInput>
      </label>
      <label htmlFor="ingredients">
        Zutaten:
        <StyledIngredientsInput
          name="ingredients"
          id="ingredients"
          type="text"
          required
          defaultValue={
            defaultValue === undefined ? "" : defaultValue.ingredients
          }
        ></StyledIngredientsInput>
      </label>
      <button type="submit">
        <Icons variant="save">speichern</Icons>
      </button>
    </StyledForm>
  );
}

const StyledNameInput = styled.input`
  height: 10vw;
`;

const StyledIngredientsInput = styled.input`
  height: 20vw;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label,
  input {
    display: block;
    width: 100%;
  }

  button {
    background-color: transparent;
    border: none;
  }
`;

const StyledImage = styled(Image)`
  width: 90%;
  height: auto;
`;
