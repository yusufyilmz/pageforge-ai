import type { IconType } from "react-icons";
import {
  HiArrowLeft,
  HiArrowUpRight,
  HiChevronDown,
  HiChevronLeft,
  HiChevronRight,
  HiChevronUp,
  HiOutlineArrowPath,
  HiOutlineCalendar,
  HiOutlineCheckBadge,
  HiOutlineCheckCircle,
  HiOutlineClipboard,
  HiOutlineComputerDesktop,
  HiOutlineDocumentDuplicate,
  HiOutlineExclamationCircle,
  HiOutlineExclamationTriangle,
  HiOutlineEye,
  HiOutlineEyeDropper,
  HiOutlineEyeSlash,
  HiOutlineInformationCircle,
  HiOutlineLink,
  HiOutlineMagnifyingGlass,
  HiOutlineMinus,
  HiOutlineMoon,
  HiOutlinePlus,
  HiOutlineQuestionMarkCircle,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineSun,
  HiOutlineUser,
  HiOutlineXMark,
} from "react-icons/hi2";

export const iconLibrary: Record<string, IconType> = {
  chevronUp: HiChevronUp,
  chevronDown: HiChevronDown,
  chevronRight: HiChevronRight,
  chevronLeft: HiChevronLeft,
  refresh: HiOutlineArrowPath,
  light: HiOutlineSun,
  dark: HiOutlineMoon,
  help: HiOutlineQuestionMarkCircle,
  info: HiOutlineInformationCircle,
  warning: HiOutlineExclamationTriangle,
  danger: HiOutlineExclamationCircle,
  checkbox: HiOutlineCheckBadge,
  check: HiOutlineCheckCircle,
  copy: HiOutlineDocumentDuplicate,
  eyeDropper: HiOutlineEyeDropper,
  clipboard: HiOutlineClipboard,
  person: HiOutlineUser,
  close: HiOutlineXMark,
  openLink: HiOutlineLink,
  arrowUpRight: HiArrowUpRight,
  arrowLeft: HiArrowLeft,
  minus: HiOutlineMinus,
  plus: HiOutlinePlus,
  calendar: HiOutlineCalendar,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  search: HiOutlineMagnifyingGlass,
  security: HiOutlineShieldCheck,
  sparkle: HiOutlineSparkles,
  computer: HiOutlineComputerDesktop,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
