import { RESUME_FILENAME } from "./constants";

export const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "/resume.pdf";
  link.download = RESUME_FILENAME;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
export default downloadResume;
