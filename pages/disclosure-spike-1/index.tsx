import {
  Disclosure, 
  DisclosureHeading, 
  DisclosureContent
} from '@twilio-paste/core/disclosure';
import { Button } from '@twilio-paste/core/button';

export default function Demo2() {
  return (
    <>
      <main>
        <div 
          style={{
            width: '50%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <p>Disclosure spike</p>
        
          <Disclosure variant="contained">
            <DisclosureHeading as="h2" variant="heading20">
              <div 
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  Disclosure Heading
                </div>
                <Button variant="secondary">
                  Duplicate
                </Button>
              </div>
            </DisclosureHeading>
            <DisclosureContent>Disclosure content</DisclosureContent>
          </Disclosure>
          </div>
      </main>
    </>
  )
}
