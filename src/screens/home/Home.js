import React, { Component } from 'react';
import Header from '../../common/header/Header';
import ProfileIconBtn from '../../common/profileIconBtn';
import './Home.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';



class Home extends Component {

    constructor() {
        super();
        this.state = {
            liked: false,
        }
    }

    likesHandler = () => {
        if (this.state.liked) {
            this.setState({ liked: false });
        } else {
            this.setState({ liked: true });
        }
    }

    render() {
        const imageSrc = "https://scontent.cdninstagram.com/v/t51.2885-15/" +
        "44843566_2258719704414956_2636245074743740266_n.jpg?_nc_cat=107&_nc_sid=8ae9d6&_nc_ohc=" +
        "gr4K5b7mC6gAX9J1rsa&_nc_ht=scontent.cdninstagram.com&oh=32414f6dab91e8ada795e200eead89ba&oe=5F3D2FD6"

        const isLiked = this.state.liked;
        let likeButton;
        if (isLiked) {
            likeButton = <FavoriteIcon className="likes" onClick={this.likesHandler} />
        } else {
            likeButton = <FavoriteBorderIcon onClick={this.likesHandler}/>
        }

//      REMOVE WHEN USING A REAL API
        const insta = [
            {
               "id": "17971864432107472",
               "media_type": "CAROUSEL_ALBUM",
               "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/41975221_1930245020331477_1376127851087837738_n.jpg?_nc_cat=111&_nc_sid=8ae9d6&_nc_ohc=soUJ8Ev0NnAAX_yyNrQ&_nc_ht=scontent.cdninstagram.com&oh=b1a37e91deb56550d908c7864ac0ff98&oe=5F3FDD8F",
               "username": "satyanjalprakash",
               "timestamp": "2018-10-06T19:20:04+0000",
               "caption": "Party #finally",
               "likes": 8,
               "profile_pic": "https://scontent.cdninstagram.com/v/t51.2885-15/44843566_2258719704414956_2636245074743740266_n.jpg?_nc_cat=107&_nc_sid=8ae9d6&_nc_ohc=gr4K5b7mC6gAX9J1rsa&_nc_ht=scontent.cdninstagram.com&oh=32414f6dab91e8ada795e200eead89ba&oe=5F3D2FD6"

            },
            {
               "id": "17997132736018682",
               "media_type": "IMAGE",
               "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/44843566_2258719704414956_2636245074743740266_n.jpg?_nc_cat=107&_nc_sid=8ae9d6&_nc_ohc=DGz5W7rTPHIAX-jduLy&_nc_ht=scontent.cdninstagram.com&oh=3ddcbc774d0f7a345098ccf34c2fd5cc&oe=5F412456",
               "username": "satyanjalprakash",
               "timestamp": "2018-11-08T09:07:38+0000",
               "caption": "Ethnic Diwali.. #withfamily",
               "likes": 4,
               "profile_pic": "https://scontent.cdninstagram.com/v/t51.2885-15/44843566_2258719704414956_2636245074743740266_n.jpg?_nc_cat=107&_nc_sid=8ae9d6&_nc_ohc=gr4K5b7mC6gAX9J1rsa&_nc_ht=scontent.cdninstagram.com&oh=32414f6dab91e8ada795e200eead89ba&oe=5F3D2FD6"
            },
            {
               "id": "17954880856130250",
               "media_type": "IMAGE",
               "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/41312553_534194313686938_6917261105722864467_n.jpg?_nc_cat=103&_nc_sid=8ae9d6&_nc_ohc=-5NcaMZKm1wAX8An49t&_nc_ht=scontent.cdninstagram.com&oh=95d6e474bde0b01fb922d15cdfabc3ae&oe=5F403793",
               "username": "satyanjalprakash",
               "timestamp": "2018-09-23T15:19:16+0000",
               "caption": "With Gautam #longdrive \n#rastacafe",
               "likes": 2,
               "profile_pic": "https://scontent.cdninstagram.com/v/t51.2885-15/44843566_2258719704414956_2636245074743740266_n.jpg?_nc_cat=107&_nc_sid=8ae9d6&_nc_ohc=gr4K5b7mC6gAX9J1rsa&_nc_ht=scontent.cdninstagram.com&oh=32414f6dab91e8ada795e200eead89ba&oe=5F3D2FD6"
            },
            {
               "id": "17850152125171288",
               "media_type": "IMAGE",
               "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/16789533_597214953812848_4151504354542616576_n.jpg?_nc_cat=104&_nc_sid=8ae9d6&_nc_ohc=0kKwXCVpewQAX_vP3DI&_nc_ht=scontent.cdninstagram.com&oh=6b8a93cddb0007d823a40bb08db42ddd&oe=5F41D950",
               "username": "satyanjalprakash",
               "timestamp": "2017-02-26T14:25:17+0000",
               "caption": "Adieu  Ranchi.. #bhaikishaadi \n#friends",
               "likes": 5,
               "profile_pic": "https://scontent.cdninstagram.com/v/t51.2885-15/44843566_2258719704414956_2636245074743740266_n.jpg?_nc_cat=107&_nc_sid=8ae9d6&_nc_ohc=gr4K5b7mC6gAX9J1rsa&_nc_ht=scontent.cdninstagram.com&oh=32414f6dab91e8ada795e200eead89ba&oe=5F3D2FD6"
            }
        ]

        return (
            <div>
                <Header heading="Image Viewer"
                imageSrc={imageSrc}
                isLoggedIn="true"/>

                {insta.map((post, index)  => (
                    <span key={index}>
                        <Card className="card-test">
                            <div>
                                <button className="profile-icon"><ProfileIconBtn imageSrc={imageSrc}/></button>
                                <button className="card-header">
                                    <div className="card-header-name">{post.username}</div>
                                    <div className="card-header-date">{post.timestamp}</div>
                                </button>
                            </div>
                            <CardContent>
                                <img className="img-size" alt="" src={post.media_url}/>
                                <hr/>
                                <div>{post.caption}</div>
                                <div id={"likeBtn_"+index}>
                                    {likeButton}
                                    {isLiked ? parseInt(post.likes)+1 : parseInt(post.likes)} likes
                                </div>
                            </CardContent>


                        </Card>
                    </span>
                ))}
            </div>
        )
    }
}

export default Home;