import React from 'react'
import '../app.css'

//кнопка Наверх )
class GoUpButton extends React.Component{
        constructor(){
            super()
            this.state={show:false}
        }
        onScroll(){
            this.setState({show:window.scrollY>0})
        }
        onClick(){
            window.scrollTo({
                top:0,
                behavior: "smooth"
            });
        }
        componentDidMount(){
            window.addEventListener('scroll',this.onScroll.bind(this))
        }
        render(){
            const vis=this.state.show?"visible":"hidden"
            return (
                <button className="go-up-button btn btn-primary"
                        style={{visibility:vis}}
                        onClick={this.onClick}>
                        Наверх
                </button>
            );
        }
}


export default GoUpButton
