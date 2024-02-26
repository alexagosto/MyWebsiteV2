import './index.scss'
import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import paintingsData from '../../data/paintings.json'



const PaintingPortfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ cover: '', title: '', description: '' });

  const handleViewButtonClick = (portfolio) => {
    setIsModalOpen(true);
    setModalContent(portfolio);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const paintingArray=['M', 'y', ' ', 'P', 'a','i', 'n', 't', 'i', 'n', 'g', 's']
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);
    return () => clearTimeout(timer);
  }, [])

  const renderPortfolio = (portfolio) => {
    return(
      <div className={'image-container'}> {
        portfolio.map((port, idx) => {
        return (
          <div className={'image-box'} key={idx}>
            <img src={port.cover} alt={'paintings'} className={'portfolio-image'}/>
            <div className={'content'}>
              <p className={'title'}>{port.title}</p>
              <h4 className={'description'}>{port.description}</h4>
              <button className={'btn'} onClick={() => handleViewButtonClick(port)}>
                View
              </button>
            </div>
          </div>
        )
      })
      }
      </div>
    );
  }

  const handleModalClick = (e) => {
    // If the clicked element is not the image, close the modal
    if (e.target.classList.contains('modal')) {
      closeModal();
    }
  };

  return(
    <>
    <div className={'container paintings-page'}>
      <h1 className={'page-title'}>
        <AnimatedLetters strArray={paintingArray} letterClass={letterClass} idx={15} />
      </h1>
      <div>{renderPortfolio(paintingsData.paintings)}</div>

      {isModalOpen && (
        <div className="modal" onClick={handleModalClick}>
          <img src={modalContent.cover} alt={modalContent.title} style={{ maxWidth: '80%', maxHeight: '80%' }} />
        </div>
      )}

    </div>
    <Loader type={'ball-scale-ripple-multiple'} />
  </>
  )
}

export default PaintingPortfolio
