import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface ContactFormProps {
  onSubmit?: (formData: FormData) => void;
  defaultLanguage?: "en" | "es";
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  language: "en" | "es";
}

const ContactForm = ({
  onSubmit,
  defaultLanguage = "en",
}: ContactFormProps) => {
  const [language, setLanguage] = useState<"en" | "es">(defaultLanguage);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    language: defaultLanguage,
  });
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );

  const translations = {
    en: {
      title: "Contact Us",
      description:
        "Fill out the form below and we will get back to you as soon as possible.",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      phonePlaceholder: "Your phone number",
      messagePlaceholder: "How can we help you?",
      submitButton: "Submit",
      languageToggle: "Español",
      nameLabel: "Name",
      emailLabel: "Email",
      phoneLabel: "Phone",
      messageLabel: "Message",
      successTitle: "Message Sent!",
      successMessage:
        "Thank you for contacting us. We will get back to you shortly.",
      errorTitle: "Error",
      errorMessage:
        "There was a problem sending your message. Please try again.",
    },
    es: {
      title: "Contáctenos",
      description:
        "Complete el formulario a continuación y nos pondremos en contacto con usted lo antes posible.",
      namePlaceholder: "Su nombre",
      emailPlaceholder: "Su correo electrónico",
      phonePlaceholder: "Su número de teléfono",
      messagePlaceholder: "¿Cómo podemos ayudarle?",
      submitButton: "Enviar",
      languageToggle: "English",
      nameLabel: "Nombre",
      emailLabel: "Correo electrónico",
      phoneLabel: "Teléfono",
      messageLabel: "Mensaje",
      successTitle: "¡Mensaje Enviado!",
      successMessage:
        "Gracias por contactarnos. Nos pondremos en contacto con usted pronto.",
      errorTitle: "Error",
      errorMessage:
        "Hubo un problema al enviar su mensaje. Por favor, inténtelo de nuevo.",
    },
  };

  const text = translations[language];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
    setFormData((prev) => ({
      ...prev,
      language: prev.language === "en" ? "es" : "en",
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    try {
      if (onSubmit) {
        onSubmit(formData);
      }
      setFormStatus("success");
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          language,
        });
        setFormStatus("idle");
      }, 3000);
    } catch (error) {
      setFormStatus("error");
      // Reset error state after a delay
      setTimeout(() => {
        setFormStatus("idle");
      }, 3000);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-background">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl font-bold text-primary">
              {text.title}
            </CardTitle>
            <div className="flex items-center space-x-2">
              <span
                className={
                  language === "en" ? "font-medium" : "text-muted-foreground"
                }
              >
                EN
              </span>
              <Switch
                checked={language === "es"}
                onCheckedChange={handleLanguageToggle}
              />
              <span
                className={
                  language === "es" ? "font-medium" : "text-muted-foreground"
                }
              >
                ES
              </span>
            </div>
          </div>
          <CardDescription>{text.description}</CardDescription>
        </CardHeader>
        <CardContent>
          {formStatus === "success" && (
            <Alert className="mb-4 bg-green-50 border-green-200">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <AlertTitle>{text.successTitle}</AlertTitle>
              <AlertDescription>{text.successMessage}</AlertDescription>
            </Alert>
          )}

          {formStatus === "error" && (
            <Alert
              className="mb-4 bg-red-50 border-red-200"
              variant="destructive"
            >
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>{text.errorTitle}</AlertTitle>
              <AlertDescription>{text.errorMessage}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">{text.nameLabel}</Label>
              <Input
                id="name"
                name="name"
                placeholder={text.namePlaceholder}
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{text.emailLabel}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={text.emailPlaceholder}
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">{text.phoneLabel}</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder={text.phonePlaceholder}
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">{text.messageLabel}</Label>
              <Textarea
                id="message"
                name="message"
                placeholder={text.messagePlaceholder}
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
            >
              {text.submitButton}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center border-t pt-4">
          <p className="text-sm text-muted-foreground">
            {language === "en"
              ? "Your information is secure and will never be shared with third parties."
              : "Su información es segura y nunca será compartida con terceros."}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ContactForm;
