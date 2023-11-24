import Layout from '~/layouts/PageLayout.astro';
import WidgetWrapper from '~/components/ui/WidgetWrapper.astro';
import EmailHero from '~/components/react/Tailwind/Hero';
import ContactUs from '~/components/widgets/Contact.astro';
import Checklist from '~/components/react/Checklist/Checklist';
import SimpleCalendly from '~/components/widgets/SimpleCalendly.astro';
import GridTestimonials from '~/components/react/Tailwind/Testimonials';
import { metadata } from './email-marketing-checklist.astro';

<Fragment>
  <script type="module">
    {() => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const hashVal = this.getAttribute('href');
          const targetAnchor = document.querySelectorAll(hashVal)[0];
          const contactPos = window.pageYOffset + targetAnchor.getBoundingClientRect().top;
          window.scrollTo({ top: contactPos, behavior: 'smooth' });
        });
      });
    }}
  </script>
  <div class="bg-white">
    <Layout class="bg-page-white" metadata={metadata}>
      <Fragment slot="header">
        {/** <Header class="bg-white" \\{...headerData\\} showToggleTheme /> */}
        <EmailHero client:only="react" />

        <ContactUs
          id="checklist"
          inputs={[
            {
              type: 'text',
              name: 'name',
              label: 'Name',
            },
            {
              type: 'email',
              name: 'email',
              label: 'Your work email address',
            },
            {
              type: 'text',
              name: 'domain',
              label: 'Enter the domain or subdomain',
            },
          ]}
          button="Check My Domain"
        />
        <WidgetWrapper>
          <Checklist client:load />
        </WidgetWrapper>
        <SimpleCalendly
          calendlyUrl="https://calendly.com/eugene-venger/30min-1"
          title="Don't want to do it all by yourself?"
          subtitle="        We're here to ramp up your deliverability and iron out all kinks."
          buttonText=" Book Free Consultation"
          id="simple-calendly"
          {...{ '.': true }}
        />
        <GridTestimonials />
      </Fragment>
    </Layout>
  </div>
</Fragment>;
