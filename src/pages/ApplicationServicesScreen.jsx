import React from 'react'
import ApplicationServices from '../components/ApplicationServices';
import ApplicationServicesOverview from '../components/ApplicationServicesOverview';
import ContactForm from '../components/ContactForm';




const ApplicationServicesScreen = () => {
  return (
    <>
    <ApplicationServices />
      <ApplicationServicesOverview />
      <ContactForm />
    </>
  );
};

export default ApplicationServicesScreen;
