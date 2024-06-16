export function GridBackground() {
  return (
    <div className="absolute -z-10 flex size-full items-center justify-center bg-white bg-grid-small-black/[0.3]">
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
    </div>
  );
}
