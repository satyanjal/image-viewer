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
            insta: []
        }
    }

    componentDidMount() {
        var instaData = []
        var accessToken = sessionStorage.getItem("access-token");
        fetch("https://graph.instagram.com/me/media?fields=id,caption&access_token="+ accessToken)
        .then(res => res.json())
        .then((result) => {
            result.data.forEach(record => {
                fetch("https://graph.instagram.com/"+ record.id +"?fields=id,media_type,media_url,username,caption,timestamp&access_token=" + accessToken)
                .then(res => res.json())
                .then((recordResult) => {
                    recordResult.likes = Math.floor(Math.random() * 10);
                    instaData.push(recordResult)
                    this.setState({ insta: instaData });
                })
            })
        },
        (error) => {
            this.setState({ error });
        })
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



        return (
            <div>
                <Header heading="Image Viewer"
                imageSrc={imageSrc} imageSize="7"
                isLoggedIn="true"/>

                {this.state.insta.map((post, index)  => (
                    <span key={index}>
                        <Card className="post-card-test">
                            <div>
                                <button className="profile-icon"><ProfileIconBtn imageSrc={imageSrc} imageSize="7"/></button>
                                <button className="card-header">
                                    <div className="card-header-name">{post.username}</div>
                                    <div className="card-header-date">{post.timestamp}</div>
                                </button>
                            </div>
                            <CardContent>
                                <img className="post-card-img-size" alt="" src={post.media_url}/>
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