import React from "react";
import { Theme } from "@twilio-paste/core/theme";
import { Box } from "@twilio-paste/core/box";
import { Stack } from "@twilio-paste/core/stack";
import { Button } from "@twilio-paste/core/button";
import { Heading } from "@twilio-paste/core/heading";
import { CopyIcon } from "@twilio-paste/icons/esm/CopyIcon";
import { DeleteIcon } from "@twilio-paste/icons/esm/DeleteIcon";

import { SummaryDetail, Summary, Detail } from "./SummaryDetail";

export default function Demo3() {
  return (
    <Theme.Provider theme="twilio">
      <Box margin="space60">
        <Stack orientation="vertical" spacing="space70">
          <SummaryDetail>
            <Summary>
              <Box display="flex" width="100%" justifyItems="spce-between">
                <Box flexGrow={1}>
                  <Heading as="h2" variant="heading20" marginBottom="space0">
                    Variant A
                  </Heading>
                </Box>
                <Box display="flex" alignItems="center" columnGap="space30">
                  <Button variant="secondary" size="icon_small">
                    <CopyIcon decorative={false} title="Copy" />
                  </Button>
                  <Button variant="destructive_secondary" size="icon_small">
                    <DeleteIcon decorative={false} title="Copy" />
                  </Button>
                </Box>
              </Box>
            </Summary>
            <Detail>Put all you stuff in here</Detail>
          </SummaryDetail>
          <SummaryDetail>
            <Summary>
              <Box display="flex" width="100%" justifyItems="spce-between">
                <Box flexGrow={1}>
                  <Heading as="h2" variant="heading20" marginBottom="space0">
                    Variant B
                  </Heading>
                </Box>
                <Box display="flex" alignItems="center" columnGap="space30">
                  <Button variant="secondary" size="icon_small">
                    <CopyIcon decorative={false} title="Copy" />
                  </Button>
                  <Button variant="destructive_secondary" size="icon_small">
                    <DeleteIcon decorative={false} title="Copy" />
                  </Button>
                </Box>
              </Box>
            </Summary>
            <Detail>Put all you stuff in here</Detail>
          </SummaryDetail>
        </Stack>
      </Box>
    </Theme.Provider>
  );
}
