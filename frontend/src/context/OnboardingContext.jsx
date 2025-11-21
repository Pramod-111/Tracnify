import { createContext, useState } from "react";

export const OnboardingContext = createContext();

export const OnboardingProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    goal: "",
    level: "",
    equipment: "",
    days: "",
    painPoint: ""
  });

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <OnboardingContext.Provider value={{ formData, updateField }}>
      {children}
    </OnboardingContext.Provider>
  );
};