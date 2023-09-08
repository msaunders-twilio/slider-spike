import React from "react";
import {
  ProgressSteps,
  ProgressStepIncomplete,
  ProgressStepComplete,
  ProgressStepCurrent,
  ProgressStepError,
  ProgressStepSeparator,
} from '@twilio-paste/core/progress-steps';
import {Paragraph} from '@twilio-paste/core/paragraph';
import {Heading} from '@twilio-paste/core/heading';

export default function Home() {
  return (
    <div style={{margin: '20px 50px'}}>
      <p>Progress Steps Spike</p>

      <ProgressSteps>
        <ProgressStepComplete as="button" onClick={() => {}}>
          <Heading 
            as="h4" 
            variant="heading40"
            marginBottom="space0"
          >
            Start test
          </Heading>
          <Paragraph marginBottom="space0">
            Sept 5, 2023 2:45 pm
          </Paragraph>
        </ProgressStepComplete>
        <ProgressStepSeparator />
        <ProgressStepCurrent as="button" onClick={() => {}}>
          <Heading 
            as="h4" 
            variant="heading40"
            marginBottom="space0"
          >
            Run test
          </Heading>
          <Paragraph marginBottom="space0">
            Sept 5, 2023 2:45 pm - Sept 5, 2023 8:45 pm
          </Paragraph>
          <Paragraph marginBottom="space0">
            20% (46,984 recipients)
          </Paragraph>
        </ProgressStepCurrent>
        <ProgressStepSeparator />
        <ProgressStepIncomplete as="button" onClick={() => {}}>
          <Heading 
            as="h4" 
            variant="heading40"
            marginBottom="space0"
          >
            Send winner to rest of recipients
          </Heading>
          <Paragraph marginBottom="space0">
            Sept 5, 2023 8:45 pm
          </Paragraph>
          <Paragraph marginBottom="space0">
            80% (187,936 recipients)
          </Paragraph>
        </ProgressStepIncomplete>
      </ProgressSteps>

    </div>
  );
}
