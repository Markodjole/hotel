import React, {Component} from 'react';
import * as fetch from '../../store/actions/fetch'; 
import {connect} from 'react-redux';
import './Home.css';
import Loader from 'react-loader-spinner';
import HOC from '../hoc/routeProtect';
import Navbar from '../UI/Navbar/Navbar';


class Home extends Component {

    componentDidMount(){
        if(!this.props.user){
            this.props.history.push('/')
        }
       if(!this.props.stories.length){
           this.props.onFetchStories()
        };
    }

    render(){

        
        return ( 
        <div >
            <Navbar />

            <div className="allStories">
                <div className='loader'>
                    {this.props.loading && <Loader
                    type="Oval"
                    color="#00BFFF"
                    height="100"	
                    width="100" />}
                </div> 
            
            
                {this.props.stories.map(story => {
                  return  <div key={story.id}>
                      <div key={story.id}>
                            <div><a href={story.url}>{story.title}</a></div>
                            <span>{story.score} points by {story.by}</span> | <span onClick={()=>this.props.onCommentsClick(story.kids)} className="comments">{story.descendants} {story.descendants == 1 ? 'comment' : 'comments'}</span>
                            <hr/>
                          </div>
                          
                          <div>
                                        {this.props.comments && this.props.comments.map(comment => {
                            return (
                                <div>
                                {story.id == comment.parent ? <div key={comment.id}>
                            <span>{comment.by} </span> <span className="comments" onclick={()=>this.props.onCommentsClick(comment.kids)}>[+]</span>
                            <div>{comment.text}</div>
                            <hr/>
                        </div> 
                        : null} 
                        </div>
                            )
                            
                                    
                            } )}
                          </div>
                          </div>
                } )}
                </div>
            </div>
        );
    }
    
}

const mapStateToProps = state => {
    return {
        stories: state.stories,
        comments: state.comments,
        loading: state.loading,
        user: state.userLoggedIn
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onFetchStories: () => dispatch( fetch.fetchStories() ),
        onCommentsClick: (commentsIds) => dispatch( fetch.fetchComments(commentsIds) )
    };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Home);