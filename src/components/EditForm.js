import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import { entityEdit, modalEditToggle } from '../ac/actionCreators';


const handleSubmitForm = (payload, dispatch, props) => {
  props.entityEdit(payload);
  props.modalEditToggle(null);
};

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.quantity) {
    errors.quantity = 'Required';
  }

  if (!values.status) {
    errors.status = 'Required';
  }

  return errors;
};

class EditForm extends Component {

  componentWillReceiveProps(nextProps) {
    const { initialize, user } = this.props;
    if (nextProps.user &&
      nextProps.user.id &&
      (!user || user.id !== nextProps.user.id)) {
      initialize(nextProps.user);
    };
  }

  render() {
    const {
      handleSubmit,
      pristine,
      submitting,
      reset,
      modalEditToggle,
      open,
      data
    } = this.props;

    const actions = [
      <FlatButton
        key="cancel"
        label="Cancel"
        primary
        onClick={modalEditToggle}
      />,
    ];

    return (
      <Dialog
        title="Edit form"
        modal={false}
        actions={actions}
        open={open}
        data={data}
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
            disabled={pristine || submitting}
          />
        </form>
      </Dialog>
    );
  }
}

const mapStateToProps = state => ({
  open: state.modal.editModalOpen.open,
  user: state.modal.editModalOpen.user
});

const mapDispatchToProps = {
  entityEdit,
  modalEditToggle
};

const form = reduxForm({
  form: 'Edit Form',
  validate,
  onSubmit: handleSubmitForm,
})(EditForm);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(form);

