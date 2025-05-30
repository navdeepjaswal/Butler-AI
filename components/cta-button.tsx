import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CTAButtonProps {
  text: string;
  href: string;
  className?: string;
}

export default function CTAButton({
  text,
  href,
  className = "",
}: CTAButtonProps) {
  return (
    <Button
      asChild
      size="lg"
      className={`bg-purple-600 px-8 py-4 text-xl text-white hover:bg-purple-700 ${className}`}
    >
      <Link href={href}>{text}</Link>
    </Button>
  );
}
