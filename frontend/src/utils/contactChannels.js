import { SOCIAL_LINKS } from "./constants";

const WHATSAPP_PHONE = "918602425826";

/** Opens WhatsApp chat with a pre-filled message to Chetna. */
export const openWhatsApp = (message) => {
  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
};

/** Opens Gmail compose in the browser (no mailto popup). */
export const openGmailCompose = ({ subject, body, to = SOCIAL_LINKS.email }) => {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to,
    su: subject,
    body,
  });
  window.open(
    `https://mail.google.com/mail/?${params.toString()}`,
    "_blank",
    "noopener,noreferrer"
  );
};

export default { openWhatsApp, openGmailCompose };
