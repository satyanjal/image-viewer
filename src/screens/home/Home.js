import React, { Component } from 'react';
import Header from '../../common/header/Header';
import ProfileIconBtn from '../../common/profileIconBtn';
import './Home.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


class Home extends Component {

    render() {
        const { classes } = this.props;
        const imageSrc = "https://scontent.cdninstagram.com/v/t51.2885-15/44843566_2258719704414956_2636245074743740266_n.jpg?_nc_cat=107&_nc_sid=8ae9d6&_nc_ohc=gr4K5b7mC6gAX9J1rsa&_nc_ht=scontent.cdninstagram.com&oh=32414f6dab91e8ada795e200eead89ba&oe=5F3D2FD6"
        return (
            <div>
                <Header heading="Image Viewer"
                imageSrc={imageSrc}
                isLoggedIn="true"/>
                <span>
                    <Card className="card-test">
                        <div>
                            <ProfileIconBtn imageSrc={imageSrc}/>
                            <span>
                                satyanjalprakash
                                2018-10-06T19:20:04+0000
                            </span>
                        </div>
                        <CardContent>
                            <img className="img-size"
                            src="https://scontent.cdninstagram.com/v/t51.2885-15/41975221_1930245020331477_1376127851087837738_n.jpg?_nc_cat=111&_nc_sid=8ae9d6&_nc_ohc=soUJ8Ev0NnAAX_yyNrQ&_nc_ht=scontent.cdninstagram.com&oh=b1a37e91deb56550d908c7864ac0ff98&oe=5F3FDD8F"
                            alt="{movie.title}" />
                        </CardContent>
                    </Card>
                </span>

                <span>
                    <Card className="card-test">
                        <div>
                            <ProfileIconBtn imageSrc={imageSrc}/>
                            <span>
                                satyanjalprakash
                                2018-10-06T19:20:04+0000
                            </span>
                        </div>
                        <CardContent>
                            <img className="img-size"
                            src="https://scontent.cdninstagram.com/v/t51.2885-15/41975221_1930245020331477_1376127851087837738_n.jpg?_nc_cat=111&_nc_sid=8ae9d6&_nc_ohc=soUJ8Ev0NnAAX_yyNrQ&_nc_ht=scontent.cdninstagram.com&oh=b1a37e91deb56550d908c7864ac0ff98&oe=5F3FDD8F"
                            alt="{movie.title}" />
                        </CardContent>
                    </Card>
                </span>
            </div>
        )
    }
}

export default Home;