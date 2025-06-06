"use client";

import classNames from "classnames";
import type React from "react";
import { forwardRef, useEffect, useState } from "react";

import type { IconName } from "../icons";

import styles from "./Toast.module.scss";

import { Flex, Icon, IconButton, Row } from ".";

interface ToastProps {
  className?: string;
  variant: "success" | "danger";
  icon?: boolean;
  onClose?: () => void;
  action?: React.ReactNode;
  children: React.ReactNode;
}

const iconMap: { [key in ToastProps["variant"]]: IconName } = {
  success: "check",
  danger: "danger",
};

const Toast = forwardRef<HTMLDivElement, ToastProps>(
  ({ variant, className, icon = true, onClose, action, children }, ref) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setVisible(false), 6000);
      return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
      if (!visible && onClose) {
        onClose();
      }
    }, [visible, onClose]);

    return (
      <Flex
        ref={ref}
        fillWidth
        background="surface"
        radius="l"
        paddingY="12"
        paddingX="20"
        border="neutral-medium"
        role="alert"
        aria-live="assertive"
        className={classNames(className, styles.toast, styles[variant], {
          [styles.visible]: visible,
          [styles.hidden]: !visible,
        })}
      >
        <Flex fillWidth vertical="center" gap="8">
          {icon && <Icon size="s" onBackground={`${variant}-medium`} name={iconMap[variant]} />}
          <Row fillWidth textVariant="body-default-s">
            {children}
          </Row>
          {action && action}
          {onClose && (
            <IconButton
              variant="ghost"
              icon="close"
              size="m"
              tooltip="Hide"
              tooltipPosition="top"
              onClick={() => setVisible(false)}
            />
          )}
        </Flex>
      </Flex>
    );
  },
);

Toast.displayName = "Toast";

export { Toast };
