import axios from "axios";

/**
 * Envoi SMS via l’API Orange
 */
export const sendSMSOrange = async (numero, message) => {
  try {
    await axios.post(
      "https://api.orange.com/smsmessaging/v1/outbound/tel%3A%2B237000000000/requests",
      {
        outboundSMSMessageRequest: {
          address: `tel:+237${numero}`,
          senderAddress: "tel:+237000000000",
          outboundSMSTextMessage: { message }
        }
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.ORANGE_SMS_API_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );
    console.log("✅ SMS Orange envoyé à", numero);
    return true;
  } catch (err) {
    console.error("❌ Erreur SMS Orange:", err.response?.data || err.message);
    return false;
  }
};

/**
 * Envoi SMS via l’API MTN
 */
export const sendSMSMTN = async (numero, message) => {
  try {
    await axios.post(
      "https://api.mtn.com/v1/sms/outbound",
      {
        to: [`+237${numero}`],
        from: process.env.MTN_SENDER_ID,
        text: message
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.MTN_SMS_API_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );
    console.log("✅ SMS MTN envoyé à", numero);
    return true;
  } catch (err) {
    console.error("❌ Erreur SMS MTN:", err.response?.data || err.message);
    return false;
  }
};
