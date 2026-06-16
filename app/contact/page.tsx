import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact | The Garage Daventry",
  description: "Contact The Garage Daventry. Call 01327 349181 or email info@thegaragedav.com. 30 High March, Daventry, NN11 4HB.",
};

export default function ContactPage() {
  return <ContactClient />;
}
