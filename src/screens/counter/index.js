import React, {Component} from 'react'
import { connect } from 'react-redux'
import {View , TouchableOpacity , Text} from 'react-native'
import {incrementCount, decrementCount} from "../../shared/store/action"

class CounterComponent extends Component{

handleBtnActionIncrement = () => {
  this.props.onIncrementClick(this.props.count)
}

handleBtnActionDecrement = () => {
  this.props.onDecrementClick(this.props.count)
}


render() {
  const {count}=this.props
  return(
      <View style={{flex:1 , backgroundColor:'pink' , justifyContent:'center' , alignItems:'center'}}>
          <TouchableOpacity onPress={this.handleBtnActionIncrement}>
              <Text>Increment</Text>
          </TouchableOpacity>  
          <Text>{count}</Text>
          <TouchableOpacity onPress={this.handleBtnActionDecrement}>
              <Text>Decrement</Text>
          </TouchableOpacity>
     </View>
  )
}
}


const mapStateToProps = (state) => {
  return {
    count: state.counter.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementClick: (count) => {  
      dispatch(incrementCount(count))
    },
    onDecrementClick: (count) => {
      if(count !== 0) 
      dispatch(decrementCount(count))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent)