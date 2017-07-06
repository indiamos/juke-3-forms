import React, {Component} from 'react';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      isDirty: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    if(event.target.value.length === 0 && this.state.inputValue.length > 0) {
      this.setState({ isDirty: true });
    }
    this.setState({ inputValue: event.target.value });
  }

  handleSubmit (event) {
    console.log(this.state.inputValue);
    this.setState({ inputValue: "" })
    event.preventDefault();
  }

  render() {
    return (
      <div className="well">
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>New Playlist</legend>
            <div className="form-group">
              <label className="col-xs-2 control-label">Name</label>
              <div className="col-xs-10">
                <input
                  className="form-control"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.inputValue}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button
                  type="submit"
                  className="btn btn-success"
                  disabled={!this.state.inputValue.length || this.state.inputValue.length > 16}
                >Create Playlist</button>
              </div>
                {!this.state.inputValue.length && this.state.isDirty ? <div className="form-group"><div className="col-xs-10 col-xs-offset-2"><div className="alert alert-warning">Please enter a name</div></div></div> : ""}
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

