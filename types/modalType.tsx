import { ReactNode } from "react";

export interface modalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
}

export interface modalHeaderType {
    children?: ReactNode;
    closeButton: boolean;
    title?: string;
    toggle?: () => void;
}

export interface modalFooterType {
    children?: ReactNode;
    toggle?: () => void;
}