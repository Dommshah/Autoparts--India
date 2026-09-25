import { NextRequest, NextResponse } from "next/server";
import { products, formatPrice } from "@/lib/products";

const AI_RESPONSES: Record<string, string> = {
  greeting:
    "Hello! I'm AutoGuru, your AI auto parts assistant. I can help you find the right parts for your vehicle. Tell me your car model or what part you need!",
  brake:
    "Looking for brake parts? Here are our top picks:\n\n• **Ceramic Brake Pad Set** - ₹2,499 (Best Seller)\n• **Disc Rotors** - Starting ₹3,999\n\nWhich vehicle do you drive? I can check compatibility.",
  oil:
    "For engine oil, I recommend:\n\n• **Mobil Synthetic 5W-40** - ₹3,299 (Top Rated)\n• **Castrol GTX** - ₹2,199\n\nWhat's your vehicle type and last oil change date?",
  battery:
    "Here are our best batteries:\n\n• **Exide AMG 72Ah** - ₹5,499 (48-month warranty)\n• **Amaron** - ₹4,999\n\nWhat's your car model? I'll find the right fit.",
  default:
    "I can help with that! Here's what I found in our catalog:\n\n• Engine Parts - Pistons, Gaskets, Oil Filters\n• Brake System - Pads, Rotors, Fluids\n• Electrical - Batteries, Spark Plugs\n• Suspension - Shocks, Springs\n• Accessories - Seat Covers, Dash Cams\n\nWhat specific part or vehicle are you looking for?",
};

function getAIResponse(query: string): string {
  const q = query.toLowerCase();
  if (q.match(/hello|hi|hey|namaste/)) return AI_RESPONSES.greeting;
  if (q.match(/brake|pad|disc|rotor/)) return AI_RESPONSES.brake;
  if (q.match(/oil|lubricant|engine oil/)) return AI_RESPONSES.oil;
  if (q.match(/battery|batt/)) return AI_RESPONSES.battery;

  const matched = products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
  );

  if (matched.length > 0) {
    const list = matched
      .slice(0, 3)
      .map((p) => `• **${p.name}** - ${formatPrice(p.price)} (⭐ ${p.rating})`)
      .join("\n");
    return `I found ${matched.length} matching product${matched.length > 1 ? "s" : ""}:\n\n${list}\n\nWould you like details on any of these?`;
  }

  return AI_RESPONSES.default;
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const response = getAIResponse(message);

    return NextResponse.json({ response });
  } catch {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}