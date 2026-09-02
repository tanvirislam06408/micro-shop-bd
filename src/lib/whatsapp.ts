import { Product } from "@/types/product";

// CENTRAL WHATSAPP CONFIGURATION
// User's official WhatsApp number for messages and support
export const WHATSAPP_NUMBER = "8801922458412";

/**
 * Generates a WhatsApp web/app link with a pre-filled product purchase message
 */
export function createWhatsAppLink(
  product: Product,
  selectedPlan?: { name: string; price: string }
): string {
  const planName = selectedPlan ? selectedPlan.name : product.duration;
  const planPrice = selectedPlan ? selectedPlan.price : product.price;

  const message = `Hello Micro-Shop BD 👋\n\nI want to purchase:\n\n📦 Product: ${product.name}\n⏳ Plan: ${planName}\n💰 Price: ${planPrice}\n\nPlease provide the activation details.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates a general WhatsApp inquiry link
 */
export function createGeneralWhatsAppLink(customMessage?: string): string {
  const defaultMessage =
    "Hello Micro-Shop BD, I have a question about your AI products and subscriptions.";
  const text = customMessage || defaultMessage;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
