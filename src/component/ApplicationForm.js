import { Box, Button, Grid, Paper } from "@mui/material";
import { makeStyles } from '@mui/styles';
import React from "react";
import { AutocompleteElement, TextFieldElement, SelectElement, useForm, FormContainer } from "react-hook-form-mui";

const useStyles = makeStyles({
    gap: {
      marginTop: '24px',
      Button: {
        marginRight: '24px'
    },
    },
  });
  
const ApplicationForm = () => {
    const classes = useStyles();
    const options = [];
    const defaultValues = {}
    return (
        <Box sx={{ flexGrow: 1 }}>
            <FormContainer
                defaultValues={defaultValues}
                onSuccess={data => console.log(data)}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <SelectElement name={'applicationNo'} label={'Select'} options={options}
                            fullWidth />
                            <AutocompleteElement name={'applicationNo'}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextFieldElement name={'name'} label={'Name'} fullWidth />
                        {/* <SelectElement name={'applicationNo'} label={'Select'} options={options}
                            fullWidth /> */}
                            {/* <DateTimePickerElement
                                label="Datetime Picker"
                                name="required_picker"
                                required
                            /> */}
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextFieldElement name={'name'} label={'Name'} fullWidth />
                        {/* <SelectElement name={'applicationNo'} label={'Select'} options={options}
                            fullWidth /> */}
                            {/* <DateTimePickerElement
                                label="Datetime Picker"
                                name="required_picker"
                                required
                            /> */}
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextFieldElement name={'name'} label={'Name'} fullWidth />
                        {/* <SelectElement name={'applicationNo'} label={'Select'} options={options}
                            fullWidth /> */}
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextFieldElement name={'name'} label={'Name'} fullWidth />
                        {/* <SelectElement name={'applicationNo'} label={'Select'} options={options}
                            fullWidth /> */}
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextFieldElement name={'name'} label={'Name'} fullWidth />
                    </Grid>

                </Grid>
                <Grid container justifyContent="center">
                    <div className={classes.gap}>
                        <Button type={'submit'} variant={'contained'} color={'primary'} className={classes.btnGap}>Submit</Button>
                        <Button type={'submit'} variant={'contained'} color={'primary'}>Reset</Button>
                    </div>
                       
                </Grid>
            </FormContainer>

        </Box>
    )
}

export default ApplicationForm;