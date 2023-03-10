import styled, { css } from "styled-components";

const svg = {
  refresh:
    "M4 20.125v-2.1h2.575l-.325-.275q-1.325-1.2-1.862-2.688-.538-1.487-.538-3.012 0-2.875 1.75-5.088 1.75-2.212 4.55-2.887V6.45q-1.8.575-2.913 2.125-1.112 1.55-1.112 3.475 0 1.1.412 2.125Q6.95 15.2 7.825 16.1l.2.2V14h2.1v6.125Zm9.85-.2V17.55q1.8-.575 2.912-2.125 1.113-1.55 1.113-3.475 0-1.1-.413-2.125Q17.05 8.8 16.175 7.9l-.2-.2V10h-2.1V3.875H20v2.1h-2.575l.325.275Q19 7.5 19.575 8.962q.575 1.463.575 2.988 0 2.875-1.75 5.088-1.75 2.212-4.55 2.887Z",
  ingredients:
    "M12 21.125q-2.975 0-5.05-2.075Q4.875 16.975 4.875 14q0-2.325 1.35-4.2T9.8 7.225q-.75-.2-1.287-.725-.538-.525-.838-1.175-.625-.7-.8-1.625Q6.7 2.775 6.8 1.8q.975-.1 1.9.075.925.175 1.625.8.9.45 1.463 1.287.562.838.662 1.888.35-.775.8-1.475.45-.7 1.025-1.275.325-.3.787-.3.463 0 .788.3.3.325.3.787 0 .463-.3.763-.55.55-.962 1.2-.413.65-.613 1.4 2.175.75 3.513 2.6 1.337 1.85 1.337 4.15 0 2.975-2.075 5.05-2.075 2.075-5.05 2.075Zm0-2.275q2 0 3.425-1.425Q16.85 16 16.85 14q0-2-1.425-3.425Q14 9.15 12 9.15q-2 0-3.425 1.425Q7.15 12 7.15 14q0 2 1.425 3.425Q10 18.85 12 18.85ZM12 14Z",
  meals:
    "M6.9 22.1v-9.15q-1.3-.35-2.237-1.45-.938-1.1-.938-2.6v-7H5.9v7h1v-7h2.2v7h1v-7h2.175v7q0 1.5-.937 2.6-.938 1.1-2.238 1.45v9.15Zm10.275 0v-8h-3V7q0-2.125 1.525-3.613Q17.225 1.9 19.375 1.9v20.2Z",
  home: "M6.075 18.925H8.85V12.85h6.3v6.075h2.775v-8.9L12 5.6l-5.925 4.425ZM3.8 21.2V8.9L12 2.75l8.2 6.15v12.3h-7.25v-6.15h-1.9v6.15Zm8.2-8.95Z",
  add: "M10.85 19.15v-6h-6v-2.3h6v-6h2.3v6h6v2.3h-6v6Z",
  edit: "M5.05 19h1.3l8.575-8.575-1.3-1.3L5.05 17.7ZM19.325 9 15.05 4.75l1.225-1.225q.65-.675 1.6-.675.95 0 1.625.65l1.175 1.2q.625.6.637 1.45.013.85-.587 1.45Zm-1.45 1.45L7.25 21.1h-4.3v-4.275L13.6 6.175Zm-3.6-.675-.65-.65 1.3 1.3Z",
  delete:
    "M6.925 21.2q-.925 0-1.6-.662-.675-.663-.675-1.613V6.075H3.525V3.8H8.85V2.65h6.275V3.8h5.35v2.275H19.35v12.85q0 .95-.675 1.613-.675.662-1.6.662Zm10.15-15.125H6.925v12.85h10.15ZM8.9 17h2.125V8H8.9Zm4.075 0H15.1V8h-2.125ZM6.925 6.075v12.85Z",
  close:
    "m6.4 19.2-1.6-1.6 5.6-5.6-5.6-5.6 1.6-1.6 5.6 5.6 5.6-5.6 1.6 1.6-5.6 5.6 5.6 5.6-1.6 1.6-5.6-5.6Z",
  back: "m9.025 18.2-6.2-6.2 6.2-6.2 1.6 1.6-3.475 3.45h14.025v2.3H7.15l3.475 3.45Z",
  done: "m9.55 18.2-5.9-5.9 1.625-1.625L9.55 14.95l9.175-9.175L20.35 7.4Z",
  save: "M21.2 6.925v12q0 .95-.662 1.613-.663.662-1.613.662H5.075q-.95 0-1.612-.662-.663-.663-.663-1.613V5.075q0-.95.663-1.613.662-.662 1.612-.662h12Zm-2.275.95-2.8-2.8H5.075v13.85h13.85ZM12 17.925q1.25 0 2.125-.875T15 14.925q0-1.25-.875-2.125T12 11.925q-1.25 0-2.125.875T9 14.925q0 1.25.875 2.125t2.125.875Zm-5.925-7.85h9v-4h-9Zm-1-2.2v11.05-13.85Z",
  book: "M7 22.1q-.825 0-1.412-.587Q5 20.925 5 20.1q0-.825.588-1.412Q6.175 18.1 7 18.1t1.412.588Q9 19.275 9 20.1t-.588 1.413Q7.825 22.1 7 22.1Zm10 0q-.825 0-1.412-.587Q15 20.925 15 20.1q0-.825.588-1.412.587-.588 1.412-.588t1.413.588Q19 19.275 19 20.1t-.587 1.413q-.588.587-1.413.587ZM6.3 6.1l2.25 4.725h7L18.125 6.1ZM5.25 3.9h14.525q.675 0 1.037.612.363.613.038 1.213L17.425 11.9q-.275.525-.762.812Q16.175 13 15.6 13H8.2l-1.05 1.9H19.1v2.2H7q-1.2 0-1.8-1.038-.6-1.037-.025-2.062L6.5 11.6 2.95 4.1H.9V1.9h3.4Zm3.3 6.925h7Z",
  upload:
    "M11 18.95h2v-4.2l1.6 1.6 1.4-1.4-4-4.025-4 4.025 1.425 1.375L11 14.75ZM6.075 22.2q-.95 0-1.612-.662-.663-.663-.663-1.613V4.075q0-.95.663-1.613.662-.662 1.612-.662h8L20.2 7.925v12q0 .95-.662 1.613-.663.662-1.613.662Zm6.85-13.125v-5h-6.85v15.85h11.85V9.075Zm-6.85-5v5-5 15.85-15.85Z",
};

export default function Icons({ variant, color, children }) {
  return (
    <IconContainer color={color} variant={variant}>
      <svg width="24" height="24">
        <path fill={color} d={svg[variant]} />
      </svg>
      <p>{children}</p>
    </IconContainer>
  );
}

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 9vw;
  border-bottom: 2px solid ${({ color }) => color};
  ${({ variant }) =>
    variant === "add" &&
    css`
      border: none;
    `}
  ${({ variant }) =>
    variant === "search" &&
    css`
      border: none;
    `}
    ${({ variant }) =>
    variant === "results" &&
    css`
      border: none;
    `}
  p {
    font-size: 0.75rem;
    margin-top: 0;
    text-transform: capitalize;
    color: ${({ color }) => color};
  }
`;
