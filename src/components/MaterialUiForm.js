import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import { modalAddToggle, entityAdd } from '../ac/actionCreators';
//import asyncValidate from './asyncValidate';


const handleSubmitForm = (data, dispatch, props) => {

  props.onToggle();

  props.entityAdd(data);

  props.reset();
};


const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  }
  /*
    if (!values.quantity) {
      errors.quantity = 'Required';
    }
  
    if (!values.status) {
      errors.status = 'Required';
    }
  */
  return errors;
};

const style = {
  margin: 30
};



class MaterialUiForm extends Component {


  render() {

    const {
      handleSubmit,
      pristine,
      submitting,
      reset,
      invalid,
      onToggle,
      open
    } = this.props;

    const actions = [
      <FlatButton
        key="cancel"
        label="Cancel"
        onClick={onToggle}
        primary
      />,
    ];


    return (
      <div>
        <RaisedButton
          label="Add new"
          primary
          onClick={onToggle}
          style={style}
        />

        <Dialog
          title="Form"
          modal={false}
          actions={actions}
          open={open}
          onRequestClose={this.onToggle}
        >
          <form onSubmit={handleSubmit}>
            <Field
              name="id"
              component={TextField}
              type="text"
              placeholder="ID"
            />
            <br />
            <Field
              name="name"
              component={TextField}
              type="text"
              placeholder="Name"
            />
            <br />
            <Field
              name="quantity"
              component={TextField}
              type="number"
              placeholder="Quantity"
            />
            <br />
            <Field
              name="status"
              component={TextField}
              type="number"
              placeholder="Status"
            />
            <br />
            <Field
              name="description"
              component={TextField}
              type="string"
              placeholder="Description"
            />
            <br />
            <Field
              name="labels"
              component={TextField}
              label="Labels"
              multiLine
              rows={1}
            />
            <br />
            <FlatButton
              label="Reset"
              type="reset"
              onClick={reset}
              disabled={pristine || submitting}
            />
            <RaisedButton
              type="submit"
              label="Submit"
              primary
              onClick={handleSubmit}
              disabled={pristine || submitting || invalid}
            />
          </form>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  open: state.modal.addModalOpen,
});

const mapDispatchToProps = {
  onToggle: modalAddToggle,
  entityAdd
};


const form = reduxForm({
  form: 'MaterialUiForm',
  validate,
 // asyncValidate,
  onSubmit: handleSubmitForm,
})(MaterialUiForm);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(form);

