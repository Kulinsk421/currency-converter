export default function u(value: number) {
  const cols = 16;
  return `calc((100vw - 60px) / ${cols} * ${value})`;
}
