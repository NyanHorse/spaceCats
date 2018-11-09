import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
  root: {
    display: 'in block',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class TestView extends React.Component {
  constructor(props) {
    super(props); 
    //this states will be stored in the users table
    this.state = {
      independent: null,
      active: null,
      friendly: null,
      loving: null,
      age: null
    }
  }; 

  handleChange1 (event) {
    this.setState({ independence: event.target.value });
  };


  render() {
    const { classes } = this.props;

    return (
      <div>
      <h1>Test</h1>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl} id="question-one">
          <FormLabel component="legend">Independence</FormLabel>
          <RadioGroup aria-label="Gender" name="gender1" className={classes.group} value={this.state.independence} onChange={this.handleChange1}>
            <FormControlLabel value="true" control={<Radio />} label="Answer 1" />
            <FormControlLabel value="false" control={<Radio />} label="Answer 2" />
          </RadioGroup>
        </FormControl>  
               
      </div>
      </div>
    );
  }
}

TestView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TestView);
