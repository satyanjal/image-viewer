import React, { Component } from 'react';
import Header from '../../common/header/Header';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Header heading="Image Viewer"
                imageSrc="https://scontent.cdninstagram.com/v/t51.2885-15/44843566_2258719704414956_2636245074743740266_n.jpg?_nc_cat=107&_nc_sid=8ae9d6&_nc_ohc=gr4K5b7mC6gAX9J1rsa&_nc_ht=scontent.cdninstagram.com&oh=32414f6dab91e8ada795e200eead89ba&oe=5F3D2FD6"
                />
            </div>
        )
    }
}

export default Home;