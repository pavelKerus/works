interface Props {
  onClick: () => void;
  className: string;
}

export const ArrowPrev = (props: any) => {
  const { onClick, className } = props;
  return (
    <div className={className} onClick={onClick}>
      <svg
        width="19"
        height="12"
        viewBox="0 0 19 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.5 11L1.5 6M1.5 6L6.5 1M1.5 6H18"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};
