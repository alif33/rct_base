import React, {Component} from 'react'

export default class App extends Component{
  state = {
    email : "",
    country: "",
    password: ""
  }
  handleChange = event => {
    console.log(this.state)
    this.setState({
      [event.target.name] : event.target.value
    })
  }
    render(){
        return(
      <div className="container">
        <h2 className="text-center">Our Forms</h2>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input 
              type="email" 
              className="form-control" 
              id="exampleInputEmail1" 
              name="email" 
              value={this.state.email}
              onChange={this.handleChange} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Example select</label>
            <select 
              class="form-control" 
              id="exampleFormControlSelect1" 
              name="country"
              onChange={this.handleChange}
            >
              <option value="bangladesh">Bangladesh</option>
              <option value="india">India</option>
              <option value="pakistan">Pakistan</option>
              <option value="skilanka">Srilanka</option>
              <option value="england">England</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="exampleInputPassword1" 
              name="password" 
              value={this.state.password}
              onChange={this.handleChange} 
            />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
        ) 
    }
}