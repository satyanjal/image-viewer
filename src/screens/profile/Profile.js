import React, { Component } from 'react';
import Header from '../../common/header/Header';
import ProfileIconBtn from '../../common/profileIconBtn';
import './Profile.css';
import Button from '@material-ui/core/Button';
import Modal from 'react-modal';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import FavoriteIcon from '@material-ui/icons/Favorite';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const TabContainer = function (props) {
    return (
        <Typography component="div" style={{ padding: 0, textAlign: 'center' }}>
            {props.children}
        </Typography>
    )
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}


class Profile extends Component {

    constructor() {
        super();
        this.state = {
            insta: [],
            username: "Satyanjal Prakash",
            modalIsOpen: false,
            imageModalIsOpen: false,
            showComments: false,
            postDetails: "",
            inputComment: "",
            imageOpenModalIndex: -1
        }
    }

    //    this.props.location.data
    componentWillMount() { //TODO - Remove HARDCODEED DATA
        console.log(this.props);
        var instaData = sessionStorage.getItem("insta-data");
        this.setState({ insta: JSON.parse(instaData) });
    }

    openModalHandler = () => {
        this.setState({
            modalIsOpen: true,
        });
    }

    closeModalHandler = () => {
        this.setState({ modalIsOpen: false });
    }

    inputUsernameChangeHandler = (e) => {
        this.setState({ username: e.target.value });
    }

    openImageModalHandler = (postDetails, index) => {
        this.setState({
            imageModalIsOpen: true,
            postDetails:postDetails,
            showComments: true,
            imageOpenModalIndex: index
        });
    }

    closeImageModalHandler = () => {
        this.setState({ imageModalIsOpen: false });
    }

    inputCommentAddHandler = (e) => {
        this.setState({ inputComment: e.target.value });
    }

    addCommentHandler = () => {
        var updatedData = this.state.insta;
        updatedData[this.state.imageOpenModalIndex].comments.push({"value": this.state.inputComment})
        this.setState({ insta: updatedData, inputComment: "" });
        sessionStorage.setItem("insta-data", JSON.stringify(updatedData));
    }

    render() {

        const imageSrc = "https://scontent.cdninstagram.com/v/t51.2885-15/" +
        "44843566_2258719704414956_2636245074743740266_n.jpg?_nc_cat=107&_nc_sid=8ae9d6&_nc_ohc=" +
        "gr4K5b7mC6gAX9J1rsa&_nc_ht=scontent.cdninstagram.com&oh=32414f6dab91e8ada795e200eead89ba&oe=5F3D2FD6"

        return (
            <div>
                <Header heading="Image Viewer"
                imageSrc={imageSrc} imageSize="7"
                isLoggedIn="true"/>

                <span className="profileHeader">
                    <ProfileIconBtn imageSrc={imageSrc} imageSize="20"/>

                    <button className="profile-header-card">
                        <span className="profileHeaderNameAlignment">
                            {this.state.insta[0].username}
                        </span>
                        <br/><br/>
                        <span className="profileHeaderDetailsAlignment">
                            Posts : {this.state.insta.length} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Follows : 500  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Followed By : 1000
                        </span>
                        <br/><br/><br/>
                        <span className="profileHeaderUserName">
                            {this.state.username} &nbsp;
                            <Fab color="secondary" aria-label="Edit" onClick={this.openModalHandler}><EditIcon/></Fab>
                        </span>
                    </button>
                </span>
                <GridList cols={3} className="grid-alignment">
                    {this.state.insta.map((post, index)  => (
                        <GridListTile key={index}>
                            <img className="all-photos-img-size" src={post.media_url} onClick={() => this.openImageModalHandler(post, index)} alt="loading" />
                        </GridListTile>
                    ))}
                </GridList>

                <Modal
                    ariaHideApp={false}
                    isOpen={this.state.imageModalIsOpen}
                    contentLabel="Photo-Details"
                    onRequestClose={this.closeImageModalHandler}
                    style={customStyles}
                >
                    <TabContainer>
                        <div className="modal-photo-img-alignment">
                            <img className="modal-photo-img-size" src={this.state.postDetails.media_url} alt="loading" />
                        </div>
                        <FormControl className="modal-tab-size">
                            <span className="profileHeaderUserName">
                                <ProfileIconBtn imageSrc={imageSrc} imageSize="7"/>
                                {this.state.postDetails.username}
                            </span>
                            <hr style={{width: 380}}/>
                            <span style={{textAlign: "left"}}>{this.state.postDetails.caption}</span>
                            <div className="modal-comments-alignment">
                                {this.state.showComments &&
                                    <div>
                                        {this.state.postDetails.comments.map((singleComment, index)  => (
                                            <div key={index}>
                                                <span style={{fontWeight: 700}}>{this.state.postDetails.username}</span> : <span>{singleComment.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                }
                            </div>
                            <span className="modal-likes-alignment">
                                <FavoriteIcon className="likes"/> {this.state.postDetails.likes} likes
                            </span>
                            <FormControl style={{width:300, marginTop: 35}}>
                                <InputLabel htmlFor="comment">Add a comment</InputLabel>
                                <Input id="comment" type="text" username={this.state.username} onChange={this.inputCommentAddHandler} />
                            </FormControl>
                            <Button className="modalUpdateBtn" variant="contained" color="primary" onClick={this.addCommentHandler}>Add</Button>


                        </FormControl>
                        <br /><br />

                    </TabContainer>
                </Modal>

                <Modal
                    ariaHideApp={false}
                    isOpen={this.state.modalIsOpen}
                    contentLabel="Login"
                    onRequestClose={this.closeModalHandler}
                    style={customStyles}
                >
                    <TabContainer>
                        <div>
                            <FormControl className="modalHeader">
                                <Typography color="textPrimary" className="modalHeaderSize">
                                    Edit
                                </Typography>
                            </FormControl>
                        </div>
                        <FormControl required>
                            <InputLabel htmlFor="username">Full Name</InputLabel>
                            <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler} />
                        </FormControl>
                        <br /><br />
                        <Button className="modalUpdateBtn" variant="contained" color="primary" onClick={this.closeModalHandler}>UPDATE</Button>
                    </TabContainer>
                </Modal>
            </div>
        )
    }
}

export default Profile;