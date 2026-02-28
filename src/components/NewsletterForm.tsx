import { useState, FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

interface NewsletterFormProps {
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
}

const NewsletterForm = ({
  className = "",
  inputClassName = "",
  buttonClassName = "",
}: NewsletterFormProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Google Sheets Web App URL
    const scriptURL = "https://script.google.com/macros/s/AKfycbzv0AJoSkq4or8vmULjaJTnnFd8DtXUlH97xEgA8WUmAviipBDpkLJhEIAzJrjuOe-V/exec";

    try {
      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      toast.success("Welcome to the Earn Dabbu squad!");
      setEmail("");
    } catch (error) {
      console.error('Error!', error);
      toast.error("Failed to join. Check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col md:flex-row md:flex-nowrap items-stretch gap-4 ${className}`}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="ENTER YOUR EMAIL"
        required
        className={`font-sans w-full md:min-w-72 min-h-full bg-transparent border-0 border-b-2 border-foreground text-foreground placeholder:text-foreground/60 uppercase focus:outline-none focus:border-foreground pb-2 text-sm tracking-wider ${inputClassName}`}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className={`btn-filled font-sans whitespace-nowrap disabled:opacity-50 flex flex-row items-center justify-center ${buttonClassName}`}
      >
        {isSubmitting ? "JOINING..." : "JOIN FREE"}
        {!isSubmitting && <ArrowRight className="w-4 h-4" />}
      </button>
    </form>
  );
};

export default NewsletterForm;
