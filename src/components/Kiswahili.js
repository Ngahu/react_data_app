import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SingleChapter from './SingleChapter';


class Kiswahili extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props.kiswahilichapters)
        this.state = {
            chosenChapterTitle:'',
            chosenChapterId:'',
            chosenChapterDescription:'',
            topics:''
        }
        console.log(this.state)

    }
    

    // a function that captures when a user clicks on a certain topic
    getSelectedChapter(e){
        // get the id of the clicked chapter which will be the title of the chapter 
        
        const selected_chapter = e.target.id
        console.log("You have selected chapter " +selected_chapter)
        // alert("You have selected chapter " +selected_chapter)

        // create an empty array to store the details of the clicked chapter
        let  theChapterChosen = []
        let choosen = []
       


        // create a loop and check if the selected id matches any chapter in the json 
        for(let i=0;i<this.props.kiswahilichapters.length;i++){
            // console.log(this.props.kiswahilichapters[i].title)

            // do a check to see if selected_chapter exists
            if(this.props.kiswahilichapters[i].title === selected_chapter){
                // theChapterChosen.push(this.props.kiswahilichapters[i])
                theChapterChosen=this.props.kiswahilichapters[i]
                // console.log(theChapterChosen)
                choosen.push(<SingleChapter title={this.props.kiswahilichapters[i].title}/>)
                this.setState({
                    chosenChapterTitle:theChapterChosen.title,
                    chosenChapterId:theChapterChosen.id,
                    chosenChapterDescription:theChapterChosen.description,
                    topics:theChapterChosen.topics
                })

                
            }
        }
    }

    render() {

        console.log(this.state)


        let allKiswahiliChapters = this.props.kiswahilichapters.map(singlechapter => 
            <li key={singlechapter.id}>
            <a href="#" id={singlechapter.title} onClick={this.getSelectedChapter.bind(this)}>
            {singlechapter.title}
            </a>
            </li>
            )
        
        return (
            <div>
                <h4>the kiswahili component</h4>
                {allKiswahiliChapters}

                <h1>{this.state.chosenChapterTitle} </h1>
                <h1>{this.state.chosenChapterId} </h1>
                <h1>{this.state.chosenChapterDescription} </h1>
                

                {/* <SingleChapter token={this.theChapterChosen}/>  */}
                {/* <SingleChapter {...this.state}/> */}

                <SingleChapter selected={this.theChapterChosen}/>

            </div>
        );
    }
}

Kiswahili.propTypes = {

};

export default Kiswahili;