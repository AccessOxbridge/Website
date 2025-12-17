import {
  GraduationCap,
  User,
  BookMarked,
  Check,
  Star,
  School,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  User,
  BookMarked,
  Check,
  Star,
  School,
};

export const getIcon = (iconName: string): LucideIcon => {
  const icon = iconMap[iconName];
  if (!icon) {
    console.warn(`Icon "${iconName}" not found in icon map. Using default icon.`);
    return Check; // Default fallback icon
  }
  return icon;
};