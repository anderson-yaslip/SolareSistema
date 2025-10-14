import Link from "next/link";
import styles from "./PrimaryButton.module.scss";

interface primaryButtonProps {
  link: string;
  content: string;
  variant: "primary" | "secondary";
}

export default function PrimaryButton({ link, content, variant }: primaryButtonProps) {
  return (
    <Link href={link} className={variant === "primary" ? styles.primaryButton : styles.secondaryButton}>
      {content}
    </Link>
  );
}
