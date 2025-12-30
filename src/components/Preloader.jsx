export default function Preloader({ show }) {
  if (!show) return null;
  return <div id="preloader" aria-hidden="true" />;
}
