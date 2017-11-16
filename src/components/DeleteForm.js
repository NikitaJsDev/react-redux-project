import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import { entityRemove, modalRemoveToggle } from '../ac/actionCreators';

const handleSubmitForm = (payload, dispatch, props) => {
  props.modalRemoveToggle();
  props.entityRemove(payload);
};


class DeleteForm extends Component {

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
      modalRemoveToggle,
      open,
    } = this.props;

    const actions = [
      <FlatButton
        key="cancel"
        label="Cancel"
        primary
        onClick={modalRemoveToggle}
      />
    ];

    return (

      <Dialog
        title="Delete form"
        modal={false}
        actions={actions}
        open={open}
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
          />
        </form>
      </Dialog>
    );
  }
}

const mapStateToProps = state => ({
  open: state.modal.removeModalOpen,
});

const mapDispatchToProps = {
  entityRemove,
  modalRemoveToggle,
};

const form = reduxForm({
  form: 'Delete Form',
  onSubmit: handleSubmitForm,
})(DeleteForm);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(form);

