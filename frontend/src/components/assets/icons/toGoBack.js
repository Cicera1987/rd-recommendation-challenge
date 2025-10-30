export default function ToGoBack({ size = 'md' }) {
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
        d="M7 12L21 12"
        stroke="#002233"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.28481 12.2034L7.73501 16.0964C8.2645 16.4746 9 16.0961 9 15.4454V8.55455C9 7.90385 8.2645 7.52535 7.73501 7.90356L2.28481 11.7966C2.14522 11.8963 2.14522 12.1037 2.28481 12.2034Z"
        fill="#002233"
      />
    </svg>
  );
}
