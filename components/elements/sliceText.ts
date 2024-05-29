export const splitText = (text: string, wordLimit = 45) => {
  const words = text.split(" ");

  if (words.length <= wordLimit) {
    return text;
  }

  return words.slice(0, wordLimit).join(" ") + "...";
};
