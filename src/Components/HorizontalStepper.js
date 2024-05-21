import * as React from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import UserBasicDetails from '../Screens/Forms/BasicInfo/UserBasicDetails';
import BusinessBasicDetails from '../Screens/Forms/BusinessInfo/BusinessBasicDetails';

const steps = ['Basic Info', 'Business Info', 'Pricing'];
const totalSteps = steps.length;

function HorizontalStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(new Array(totalSteps).fill(false));

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleNext = () => {
    const newCompleted = [...completed];
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const progress = ((activeStep + 1) / totalSteps) * 100;

  return (
    <Box sx={{ width: '100%' }}>
      {activeStep !== 3 && (
        <>
          <Box sx={{ textAlign: 'center', mb: 2, display: 'flex', justifyContent: 'space-between' }}>
            {steps.map((label, index) => (
              <Button
                key={label}
                onClick={handleStep(index)}
                disabled={index > activeStep}
                sx={{ mx: 1 }}
                color={index === activeStep ? 'primary' : 'inherit'}
              >
                {label}
                {completed[index] ? <CheckCircleIcon sx={{ ml: 1, color: 'green' }} /> : <CheckCircleIcon sx={{ ml: 1, color: 'grey' }} />}
              </Button>
            ))}
          </Box>
          <MobileStepper
            variant="progress"
            steps={totalSteps * 3} 
            position="static"
            activeStep={activeStep * 3 + 1} 
            sx={{
              maxWidth: '100%',
              flexGrow: 1,
              mx: 'auto',
              '& .MuiMobileStepper-progress': {
                width: '100%',
              },
            }}
            progress={progress} 
          />

          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}: {steps[activeStep]}</Typography>
        </>
      )}
{activeStep === 0 ? <UserBasicDetails /> : activeStep === 1 ? <BusinessBasicDetails /> : activeStep === 2 ? <BusinessBasicDetails /> : activeStep === 3 ? <Typography variant="h2" sx={{textAlign: 'center'}}>Thank you for creating an account with us</Typography> : ""}

      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', pt: 2 }}>
       {activeStep !== totalSteps ?
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        :""}
        <Button onClick={handleNext} disabled={activeStep === totalSteps}>
  {activeStep === totalSteps - 1 ? 'Finish' : activeStep === totalSteps ? "" : 'Next' }
</Button>

      </Box>
    </Box>
  );
}

export default HorizontalStepper;
