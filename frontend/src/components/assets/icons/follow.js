export default function Follow({ size = 'md' }) {
  const sizes = {
    xs: 16,
    md: 24,
    lg: 32,
  };
  const iconSize = typeof size === 'number' ? size : sizes[size] || sizes.md;

  return (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 12H3"
        stroke="#002233"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.7152 11.7966L16.265 7.90356C15.7355 7.52535 15 7.90385 15 8.55455V15.4454C15 16.0961 15.7355 16.4746 16.265 16.0964L21.7152 12.2034C21.8548 12.1037 21.8548 11.8963 21.7152 11.7966Z"
        fill="#002233"
      />
    </svg>
  );
}
