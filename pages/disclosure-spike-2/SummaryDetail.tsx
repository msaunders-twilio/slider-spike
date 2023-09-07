import * as React from "react";
import { Box } from "@twilio-paste/core/box";
import { Button } from "@twilio-paste/core/button";
import { Card } from "@twilio-paste/core/card";
import { ChevronDisclosureIcon } from "@twilio-paste/icons/esm/ChevronDisclosureIcon";
import {
  DisclosurePrimitive,
  DisclosurePrimitiveContent,
  useDisclosurePrimitiveState
} from "@twilio-paste/core/disclosure-primitive";

export const SummaryDetailContext = React.createContext({});

export const SummaryDetail = ({ children }) => {
  const summaryDetailDisclosure = useDisclosurePrimitiveState({
    visible: true
  });
  return (
    <SummaryDetailContext.Provider value={summaryDetailDisclosure}>
      <Card padding="space60">{children}</Card>
    </SummaryDetailContext.Provider>
  );
};

// eslint-disable-next-line react/display-name
export const SummaryToggleButton = React.forwardRef<HTMLButtonElement>(
  ({ children, ...props }, ref) => {
    const rotation = props["aria-expanded"] ? "90" : "0";
    return (
      <Button
        variant="reset"
        size="reset"
        width="sizeIcon40"
        height="sizeIcon40"
        borderRadius="borderRadius20"
        ref={ref}
        {...props}
      >
        <Box as="span" transform={`translateX(0) rotate(${rotation}deg)`}>
          <ChevronDisclosureIcon
            decorative={false}
            title="expand"
            size="sizeIcon40"
          />
        </Box>
      </Button>
    );
  }
);

export const Summary = ({ children }) => {
  const summaryDetailDisclosure = React.useContext(SummaryDetailContext);
  return (
    <Box display="flex" alignItems="center" columnGap="space40">
      <Box display="flex" alignItems="center">
        <DisclosurePrimitive
          as={SummaryToggleButton}
          {...summaryDetailDisclosure}
        >
          Toggle summary detail
        </DisclosurePrimitive>
      </Box>
      <Box width="100%">{children}</Box>
    </Box>
  );
};

export const Detail = ({ children }) => {
  const summaryDetailDisclosure = React.useContext(SummaryDetailContext);
  return (
    <DisclosurePrimitiveContent {...summaryDetailDisclosure}>
      <Box paddingTop="space60">{children}</Box>
    </DisclosurePrimitiveContent>
  );
};
