  import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Slider from './Slider';
import { isTemplateElement } from '@babel/types';

class App extends React.Component{
  state={
    articles:[
      {id:1, title:`article 1`, body:`this is article 1`, active:1},
      {id:2, title:`article 2`, body:`this is article 2`, active:1},
      {id:3, title:`article 3`, body:`this is article 3`, active:1},
    ],
    loading:false,
    mouseHover:false
   
  }
  mousetoggle(){
    this.setState(prevState=>{
      return {
        mouseHover:!prevState.mouseHover
      }
    })

  }

  loadMore(e){
    this.setState({loading:true})
    setTimeout(() => {
      let otherArticles=[
        {id:4, title:`article 4`, body:`this is article 4`, active:1},
        {id:5, title:`article 5`, body:`this is article 5`, active:1},
        {id:6, title:`article 6`, body:`this is article 6`, active:1}
    
        ]
        this.setState(prevState=>{
          return{
            articles:[...prevState.articles,...otherArticles],
            loading:false
          }
    
        })
      
    }, 2000)}

    deleteItem(articleId){
      this.setState(prevState=>{
       return{
        articles: prevState.articles.filter(article => article.id !== articleId)
       }
      })

    }

    render(){
     
      let articleList= this.state.articles.map((item,index)=> item.active ? <Card key={index} id={item.id} 
      deleteItem={this.deleteItem.bind(this)} title={item.title} body={item.body} /> : null);
      const btnStyle={
        backgroundColor:'#555', 
        padding:'10px 15px', 
        color:'white', 
        border:'none', 
        borderRadius:'3px '
      }
      if(this.state.mouseHover){
        btnStyle.backgroundColor='rgba(0,0,0,0.4)';
      }  
      return (
        
       <div className="app">
        
          <Slider/>
          {articleList}
          {this.state.loading 
            ? <div>loading...</div>
            : null
          }
          <button 
          onMouseEnter={this.mousetoggle.bind(this)} 
          onMouseLeave={this.mousetoggle.bind(this)}
          style={btnStyle} onClick={this.loadMore.bind(this)}> Load more</button>
       </div>

        
      );
      }
  
  }
export default App;
