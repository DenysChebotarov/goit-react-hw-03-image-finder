import React, { Component } from 'react';
import PixabaiApi from './Api/PixabaiApi';
import  {  ToastContainer ,  toast  }  from  'react-toastify' ; 
import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    imageName: '',
    page: 1,
    hits: [],
    total: 0,
    showModal: false,
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.imageName !== this.state.imageName ||
      prevState.page !== this.state.page
    ) {
      this.fetchImageName();
    }
  }

  fetchImageName = () => {
    const { imageName, page } = this.state;
    PixabaiApi(imageName, page).then(res => {
      if (res.total === 0 && res.hits.length === 0) {
        toast(`${imageName}сорян`);
      }
      console.log(res);
      this.setState(prevState => ({
        hits: [...prevState.hits, ...res.hits], 
        total: res.total,
      }))
    });
  };

  handleFormSubmit = searchName => {
    this.setState({
      hits: [], 
      page: 1,
      imageName: searchName,
    })
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { hits, total, page, showModal } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit}  />
        {hits.length > 0 && <ImageGallery hits = {hits}/>}
        <button type="button" onClick={this.toggleModal}>
          Відкрити модалку
        </button>
        {showModal && <Modal onClose={this.toggleModal} />}
        <ToastContainer /> 
      </div>
    );
  }
}
