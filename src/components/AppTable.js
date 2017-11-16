import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import EditForm from './EditForm';
import DeleteForm from './DeleteForm';
import { MODAL } from '../ac/actionTypes';
import { modalEditToggle, modalRemoveToggle } from '../ac/actionCreators';


class AppTable extends Component {
  
  state = {
    selected: [1],
    user: null
  };

  isSelected = index => this.state.selected.indexOf(index) !== -1;

  handleItemEdit = user => () => {
    const { handleEdit } = this.props;
    handleEdit(user);
  }

  handleItemRemove = user => () => {
    const { handleRemove } = this.props;
    this.setState({ user }, handleRemove);
  }

  handleRowSelection = selectedRows => {
    this.setState({
      selected: selectedRows,
    });
  };

  render() {
    return (
      <div>
        <Table onRowSelection={this.handleRowSelection}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Quantity</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
              <TableHeaderColumn>Description</TableHeaderColumn>
              <TableHeaderColumn>Labels</TableHeaderColumn>
              <TableHeaderColumn>To edit</TableHeaderColumn>
              <TableHeaderColumn>To remove</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              this.props.entity.map((user, i) => (
                <TableRow key={i} selected={this.isSelected(0)}>
                  <TableRowColumn>{user.id}</TableRowColumn>
                  <TableRowColumn>{user.name}</TableRowColumn>
                  <TableRowColumn>{user.quantity}</TableRowColumn>
                  <TableRowColumn>{user.status}</TableRowColumn>
                  <TableRowColumn>{user.description}</TableRowColumn>
                  <TableRowColumn>{user.labels}</TableRowColumn>
                  <TableRowColumn>
                    <RaisedButton label="Remove" onClick={this.handleItemRemove(user)} />
                  </TableRowColumn>
                  <TableRowColumn>
                    <RaisedButton label="Edit" onClick={this.handleItemEdit(user)} />
                  </TableRowColumn>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
        <EditForm user={this.state.user} />
        <DeleteForm user={this.state.user} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  entity: state.entity,
  open: state.modal.addModalOpen,
});

const mapDispatchToProps = dispatch => ({
  handleEdit: payload => {
    dispatch({ type: MODAL.EDIT.TOGGLE, payload });
  },
  handleRemove: () => {
    dispatch({ type: MODAL.REMOVE.TOGGLE });
  },
  modalEditToggle,
  modalRemoveToggle
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppTable);


