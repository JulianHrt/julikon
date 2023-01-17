import { Image } from "cloudinary-react";
import styled from "styled-components";

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
        <input
          name="name"
          id="name"
          type="text"
          defaultValue={defaultValue === undefined ? "" : defaultValue.name}
        ></input>
      </label>
      <label htmlFor="ingredients">
        Zutaten:
        <input
          name="ingredients"
          id="ingredients"
          type="text"
          defaultValue={
            defaultValue === undefined ? "" : defaultValue.ingredients
          }
        ></input>
      </label>
      <button type="submit">speichern</button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label,
  input {
    display: block;
  }
`;

const StyledImage = styled(Image)`
  width: 90%;
  height: auto;
`;
