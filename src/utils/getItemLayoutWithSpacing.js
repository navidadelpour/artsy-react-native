export default function getItemLayoutWithSpacing(height, spacing, data, index) {
  const length = height + spacing;
  const offset = spacing + length * index;

  return {length, offset, index};
}
