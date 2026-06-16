import type { Metadata } from "next";
import MerchClient from "./MerchClient";

export const metadata: Metadata = {
  title: "Merch | The Garage Daventry",
  description: "Official The Garage Daventry merchandise. Order by phone — £19.99 inc VAT. Sizes XS–3XL.",
};

export default function MerchPage() {
  return <MerchClient />;
}
