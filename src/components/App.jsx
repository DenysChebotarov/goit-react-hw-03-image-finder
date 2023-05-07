import React, { Component } from 'react';
import Modal from './Modal/Modal';
import SearchBar from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    name : '',
    showModal : false,
      }
      componentDidUpdate(prevProps, prevState){
          fetch(`https://pixabay.com/api/?q=cat&page=1&key=34776751-542703831e8d0e3da0fedf62a&image_type=photo&orientation=horizontal&per_page=12`)
          .then(res => res.json())
          .then(console.log);
        
      }
  handleFormSubmit = name => {
    this.setState({name});
  }
  

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal : !showModal,
    }));
  };

 render() {
  const {showModal} = this.state;
  return (
    
    <div>
      <SearchBar onSubmit={this.handleFormSubmit}/>
      <button type="button" onClick={this.toggleModal}>Відкрити модалку</button>
       {showModal && 
       <Modal onClose = {this.toggleModal}/>}
    </div>
  );
 }
};
