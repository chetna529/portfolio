/**
 * Simple conditional class merger.
 */
export const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

/**
 * Limit string character count.
 */
export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + "...";
};
