import React, { Component } from 'react';
import style from './Modal.module.css';

class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.closeOnEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeOnEscape);
  }

  closeOnEscape = e => {
    const { onClose } = this.props;
    if (e.code !== 'Escape') {
      return;
    }
    onClose();
  };

  handleCloseModal = e => {
    const { onClose } = this.props;
    if (e.target !== e.currentTarget) {
      return;
    }
    onClose();
  };

  render() {
    return (
      <div className={style.Overlay} onClick={this.handelCloseModal}>
        <div className={style.Modal}>{this.props.children}</div>
      </div>
    );
  }
}

export default Modal;
